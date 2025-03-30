import { defineAuth } from "convex/server";
import { v } from "convex/values";
import { ConvexError } from "convex/values";

export default defineAuth({
  providers: [
    {
      domain: "https://clerk.com",
      applicationID: "convex",
      applicationSecret: process.env.CLERK_SECRET_KEY,
    },
  ],
  getUserIdentity: async (ctx, token) => {
    if (!token) {
      throw new ConvexError("Unauthenticated");
    }
    return {
      tokenIdentifier: token.sub,
      email: token.email,
      name: token.name,
    };
  },
});
