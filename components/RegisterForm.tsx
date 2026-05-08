"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const inputClassName =
  "w-full rounded-lg border border-zinc-300 bg-background px-3 py-2 text-sm text-zinc-950 outline-none ring-zinc-950/10 transition-[box-shadow,border-color] placeholder:text-zinc-400 focus:border-zinc-500 focus:ring-2 dark:border-zinc-700 dark:text-zinc-50 dark:ring-zinc-50/10 dark:focus:border-zinc-500";

export function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [consent, setConsent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      consent,
    });
  }

  return (
    <div className="mx-auto w-full max-w-md rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/40">
      <h1 className="text-center text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
        Create an account
      </h1>
      <p className="mt-2 text-center text-sm text-zinc-600 dark:text-zinc-400">
        Sign up to continue
      </p>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2 sm:col-span-1">
            <label
              htmlFor="register-first-name"
              className="block text-sm font-medium text-zinc-800 dark:text-zinc-200"
            >
              First name
            </label>
            <input
              id="register-first-name"
              name="firstName"
              type="text"
              autoComplete="given-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={inputClassName}
            />
          </div>
          <div className="space-y-2 sm:col-span-1">
            <label
              htmlFor="register-last-name"
              className="block text-sm font-medium text-zinc-800 dark:text-zinc-200"
            >
              Last name
            </label>
            <input
              id="register-last-name"
              name="lastName"
              type="text"
              autoComplete="family-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={inputClassName}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="register-email"
            className="block text-sm font-medium text-zinc-800 dark:text-zinc-200"
          >
            Email
          </label>
          <input
            id="register-email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClassName}
            placeholder="you@example.com"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="register-password"
            className="block text-sm font-medium text-zinc-800 dark:text-zinc-200"
          >
            Password
          </label>
          <input
            id="register-password"
            name="password"
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={inputClassName}
            placeholder="••••••••"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="register-confirm-password"
            className="block text-sm font-medium text-zinc-800 dark:text-zinc-200"
          >
            Confirm password
          </label>
          <input
            id="register-confirm-password"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={inputClassName}
            placeholder="••••••••"
          />
        </div>

        <div className="flex items-start gap-3">
          <input
            id="register-consent"
            name="consent"
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-zinc-300 text-zinc-950 focus:ring-zinc-500 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-50"
          />
          <label
            htmlFor="register-consent"
            className="text-sm leading-snug text-zinc-700 dark:text-zinc-300"
          >
            I consent to the processing of my personal data and accept the terms
            of service and privacy policy.
          </label>
        </div>

        <button
          type="submit"
          className="flex h-11 w-full items-center justify-center rounded-full bg-zinc-950 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
        >
          Create account
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-zinc-600 dark:text-zinc-400">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-zinc-950 underline-offset-4 hover:underline dark:text-zinc-50"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}
