import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: [
    "/",
    "/services",
    "/wellness",
    "/medical",
    "/events",
    "/api/services(.*)",
  ],
});

export const config = {
  // Matcher for routes that should use the middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
