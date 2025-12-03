// app/middleware.ts
import auth from "next-auth"; // default import
import { authConfig } from "../auth.config"; // adjust relative path

export default auth(authConfig);

export const config = {
  matcher: ["/dashboard/:path*"], // protect dashboard routes
};
