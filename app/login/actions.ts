"use server";

export async function handleForm(prevState: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    errors: ["Wrong password", "Password is too short"],
  };
}
