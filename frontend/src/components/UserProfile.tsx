import { useUser } from "@clerk/clerk-react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from "react";

export function UserProfile() {
  const { user } = useUser();
  const currentUser = useQuery(api.users.getCurrentUser);
  const updateRole = useMutation(api.users.updateUserRole);
  const [isEditing, setIsEditing] = useState(false);
  const [newRole, setNewRole] = useState(currentUser?.role || "");

  if (!user || !currentUser) {
    return null;
  }

  const handleRoleUpdate = async () => {
    if (currentUser._id && newRole !== currentUser.role) {
      await updateRole({ userId: currentUser._id, role: newRole });
      setIsEditing(false);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={user.imageUrl}
          alt={user.fullName || ""}
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h2 className="text-xl font-semibold">{user.fullName}</h2>
          <p className="text-gray-600">
            {user.primaryEmailAddress?.emailAddress}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-medium mb-2">Role Information</h3>
        {isEditing ? (
          <div className="space-y-2">
            <select
              value={newRole}
              onChange={(e) => setNewRole(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            <div className="flex space-x-2">
              <button
                onClick={handleRoleUpdate}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Save
              </button>
              <button
                onClick={() => {
                  setIsEditing(false);
                  setNewRole(currentUser.role);
                }}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <span className="text-gray-700">
              Current Role: {currentUser.role}
            </span>
            {currentUser.role === "admin" && (
              <button
                onClick={() => setIsEditing(true)}
                className="text-blue-500 hover:text-blue-600"
              >
                Edit Role
              </button>
            )}
          </div>
        )}
      </div>

      <div className="mt-4 pt-4 border-t">
        <h3 className="text-lg font-medium mb-2">Account Details</h3>
        <div className="space-y-2">
          <p className="text-gray-600">
            Member since: {new Date(currentUser.createdAt).toLocaleDateString()}
          </p>
          <p className="text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
