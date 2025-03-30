import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ConvexClient } from "convex/browser";
import { ServiceList } from "./components/ServiceList";
import { Auth } from "./components/Auth";
import { UserProfile } from "./components/UserProfile";
import { useUser, useClerk } from "@clerk/clerk-react";
import { useMemo, useState } from "react";

function App() {
  const { isSignedIn, isLoaded } = useUser();
  const { signOut } = useClerk();
  const [showProfile, setShowProfile] = useState(false);
  const convex = useMemo(
    () => new ConvexClient(import.meta.env.VITE_CONVEX_URL),
    []
  );

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <Auth />;
  }

  return (
    <ConvexProvider client={convex}>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-gray-900">
                247 Concierge Services
              </h1>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowProfile(!showProfile)}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Profile
                </button>
                <button
                  onClick={() => signOut()}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </header>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {showProfile ? <UserProfile /> : <ServiceList />}
        </main>
        <footer className="bg-white border-t mt-8">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500">
              © 2024 247 Concierge Services. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </ConvexProvider>
  );
}

export default App;
