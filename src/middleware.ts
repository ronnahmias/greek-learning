export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/lessons/:path*",
    "/dashboard",
    "/lauder-lessons/:path*",
    "/api/:path*",
  ],
};
