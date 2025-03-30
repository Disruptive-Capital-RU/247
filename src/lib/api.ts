// API Utilities for 247 Concierge
type ApiResponse<T> = {
  data?: T;
  error?: string;
};

// Base API URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

/**
 * Generic fetch wrapper with error handling
 */
export async function fetchApi<T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    console.error("API request failed:", error);
    return {
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}

// Get all users
async function getUsers() {
  try {
    const response = await fetch(`${API_BASE_URL}/users`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

// Create new user
async function createUser(userData) {
  try {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    return await response.json();
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}
