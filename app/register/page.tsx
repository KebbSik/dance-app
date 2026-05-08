import type { Metadata } from "next";
import { RegisterForm } from "@/components/RegisterForm";

export const metadata: Metadata = {
  title: "Sign up",
  description: "Create an account",
};

export default function RegisterPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-16">
      <RegisterForm />
    </div>
  );
}
