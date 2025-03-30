import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    role: v.string(),
    createdAt: v.number(),
  }).index("by_email", ["email"]),

  services: defineTable({
    name: v.string(),
    description: v.string(),
    category: v.string(),
    price: v.number(),
    duration: v.string(),
    imageUrl: v.string(),
    isAvailable: v.boolean(),
    createdAt: v.number(),
    createdBy: v.id("users"),
    updatedAt: v.optional(v.number()),
    updatedBy: v.optional(v.id("users")),
  })
    .index("by_category", ["category"])
    .index("by_creator", ["createdBy"]),
});
