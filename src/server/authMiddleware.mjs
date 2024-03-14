import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import config from "../../config.js";


const prisma = new PrismaClient();
const SECRET_KEY = config.SECRET_KEY;

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, SECRET_KEY);
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });

    if (!user || user.role !== "ADMIN") {
      throw new Error();
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: "Authentication failed" });
  }
};

export default authMiddleware;