import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 8),
    isAdmin: true,
  },
  {
    name: "Jonh Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 8),
    isAdmin: true,
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    password: bcrypt.hashSync("123456", 8),
    isAdmin: true,
  },
];

export default users;
