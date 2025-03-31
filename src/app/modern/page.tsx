"use client";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

export default function ModernLandingPage() {
  const { isSignedIn } = useAuth();

  return (
    <div className="bg-white p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Modern UI Demo</h1>
      <p className="text-lg text-gray-600 mb-8">This is a demonstration of modern UI elements for your 247 Concierge app.</p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link href="/" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
