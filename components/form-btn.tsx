"use client";
import React from "react";
import { useFormStatus } from "react-dom";

interface FormButtonProps {
  loading: boolean;
  text: string;
}

const FormButton = ({ loading, text }: FormButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="primary-btn h-10 disabled:bg-neutral-400  disabled:text-neutral-300 disabled:cursor-not-allowed"
    >
      {pending ? "로딩 중" : text}
    </button>
  );
};

export default FormButton;
