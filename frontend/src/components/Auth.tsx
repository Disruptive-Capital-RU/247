import { SignIn, SignUp, useUser } from "@clerk/clerk-react";
import { useState, useEffect } from "react";

export function Auth() {
  const { isSignedIn } = useUser();
  const [isSignUp, setIsSignUp] = useState(false);
  const [isRedirected, setIsRedirected] = useState(false);

  useEffect(() => {
    // Check if user was redirected from the main website
    const referrer = document.referrer;
    if (referrer && !referrer.includes("localhost:3000")) {
      setIsRedirected(true);
    }

    // Check URL parameters for action
    const urlParams = new URLSearchParams(window.location.search);
    const action = urlParams.get("action");
    if (action === "signup") {
      setIsSignUp(true);
    } else if (action === "signin") {
      setIsSignUp(false);
    }
  }, []);

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
          {isRedirected && (
            <p className="mt-2 text-center text-sm text-gray-600">
              Welcome from Moscow Elite Concierge! Please sign in or create an
              account to access exclusive services.
            </p>
          )}
        </div>
        <div className="mt-8 space-y-6">
          {isSignUp ? (
            <SignUp routing="path" path="/sign-up" />
          ) : (
            <SignIn routing="path" path="/sign-in" />
          )}
          <div className="text-center">
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
