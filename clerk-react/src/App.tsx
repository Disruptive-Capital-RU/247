import { useUser, useClerk } from "@clerk/clerk-react";
import { Auth } from "./components/Auth";
import { SimpleAuth } from "./components/SimpleAuth";
import { useState } from "react";

function App() {
  const { isSignedIn, isLoaded } = useUser();
  const { signOut } = useClerk();
  const [useSimpleAuth, setUseSimpleAuth] = useState(false);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!isSignedIn) {
    // Toggle between Clerk Auth and Simple Auth for testing
    return (
      <div>
        <button
          onClick={() => setUseSimpleAuth(!useSimpleAuth)}
          style={{
            position: "fixed",
            top: "10px",
            right: "10px",
            background: "#4b5563",
            color: "white",
            border: "none",
            borderRadius: "4px",
            padding: "8px 12px",
            fontSize: "14px",
            cursor: "pointer",
            zIndex: 100,
          }}
        >
          Switch to {useSimpleAuth ? "Clerk Auth" : "Simple Auth"}
        </button>

        {useSimpleAuth ? <SimpleAuth /> : <Auth />}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">
              247 Concierge Services
            </h1>
            <button
              onClick={() => signOut()}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
            <p className="text-xl text-gray-500">Welcome to your dashboard!</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
