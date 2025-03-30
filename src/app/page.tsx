"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  const { isSignedIn } = useAuth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          {isSignedIn ? (
            <span>Welcome to your premium concierge service</span>
          ) : (
            <span>
              <Link
                href="/sign-in"
                className="text-blue-500 hover:text-blue-700"
              >
                Sign in
              </Link>
              {" or "}
              <Link
                href="/sign-up"
                className="text-blue-500 hover:text-blue-700"
              >
                Sign up
              </Link>
              {" to access premium services"}
            </span>
          )}
        </p>
      </div>

      <div className="relative flex place-items-center">
        <h1 className="text-4xl font-bold">247 Concierge Service</h1>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link
          href="/services"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">Services</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore our premium concierge services.
          </p>
        </Link>

        <Link
          href="/events"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">Events</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Check out upcoming exclusive events.
          </p>
        </Link>

        <Link
          href="/medical"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">Medical</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Access premium medical services.
          </p>
        </Link>

        <Link
          href="/wellness"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">Wellness</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Discover our wellness offerings.
          </p>
        </Link>
      </div>
    </main>
  );
}
