import { NextResponse } from "next/server";
import { User } from "@/types";

// Mock database for users
const users: User[] = [
  {
    id: "user1",
    name: "John Smith",
    email: "john@example.com",
    phone: "+1234567890",
    role: "user",
    createdAt: "2023-01-15T10:00:00Z",
  },
  {
    id: "user2",
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "+1987654321",
    role: "user",
    createdAt: "2023-02-20T14:30:00Z",
  },
  {
    id: "admin1",
    name: "Admin User",
    email: "admin@247concierge.com",
    role: "admin",
    createdAt: "2022-12-01T09:00:00Z",
  },
];

export async function GET(request: Request) {
  // In a real app, you would check for authentication and authorization

  // Get query parameters
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("id");
  const email = searchParams.get("email");

  if (userId) {
    const user = users.find((u) => u.id === userId);

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  }

  if (email) {
    const user = users.find((u) => u.email === email);

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  }

  // In a real app, you would check for admin permissions before returning all users
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  try {
    const body: Omit<User, "id" | "createdAt"> = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.role) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingUser = users.find((u) => u.email === body.email);

    if (existingUser) {
      return NextResponse.json(
        { error: "Email already in use" },
        { status: 409 }
      );
    }

    // Create new user
    const newUser: User = {
      id: `user${users.length + 1}`,
      createdAt: new Date().toISOString(),
      ...body,
    };

    // In a real app, you would save to a database here

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
