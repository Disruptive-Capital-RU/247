import { SignIn, SignUp, useUser } from "@clerk/clerk-react";
import { useState } from "react";

export function Auth() {
  const { isSignedIn } = useUser();
  const [isSignUp, setIsSignUp] = useState(false);

  if (isSignedIn) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {isSignUp ? "Create your account" : "Sign in to your account"}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {isSignUp
              ? "Sign up to access exclusive concierge services"
              : "Sign in to your account to continue"}
          </p>
        </div>

        <div className="mt-8">
          {isSignUp ? <SignUp /> : <SignIn />}

          <div className="mt-4 text-center">
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              {isSignUp
                ? "Already have an account? Sign in"
                : "Don't have an account? Sign up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
