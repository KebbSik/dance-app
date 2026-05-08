import type { Metadata } from "next";
import { LoginForm } from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Logowanie",
  description: "Zaloguj się do konta",
};

export default function LoginPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-16">
      <LoginForm />
    </div>
  );
}
