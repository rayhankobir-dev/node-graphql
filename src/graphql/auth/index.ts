import JWT from "jsonwebtoken";

export const authenticate = (req: any) => {
  const token = req.headers.authorization || "";
  if (!token) throw new Error("Authorization token is required");

  try {
    const user = JWT.verify(token.replace("Bearer ", ""), "redittasksecret");
    return user;
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
};
