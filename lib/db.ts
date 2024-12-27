import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

async function testDelete() {
  // 사용자 삭제
  const deletedUser = await db.user.delete({
    where: {
      id: 2,
    },
    include: {
      SMSToken: true,
    },
  });

  console.log("삭제된 사용자:", deletedUser);

  // 삭제 확인
  const checkUser = await db.user.findUnique({
    where: {
      id: 2,
    },
  });

  console.log("삭제 확인:", checkUser); // null이어야 함

  // SMSToken 삭제 확인
  const checkTokens = await db.sMSToken.findMany({
    where: {
      userId: 2,
    },
  });

  console.log("연관된 토큰 확인:", checkTokens); // 빈 배열이어야 함
}

testDelete();
