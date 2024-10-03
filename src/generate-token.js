const jwt = require("jsonwebtoken");
const payload = { userId: "12345", name: "John Doe" };
const secret = String(process.env.JWT_SECRET || "redittasksecret");
const token = jwt.sign(payload, secret, { expiresIn: "30d" });

console.log("Token: ", token);
