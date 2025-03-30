import { SignIn, SignOutButton, useUser } from "@clerk/clerk-react";
import "./App.css";

function App() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        {isSignedIn ? (
          <>
            <h1>Welcome, {user.firstName}!</h1>
            <SignOutButton />
          </>
        ) : (
          <SignIn />
        )}
      </header>
    </div>
  );
}

export default App;
