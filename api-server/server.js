// api-server/server.js
import jsonServer from "json-server";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));
server.use(jsonServer.bodyParser);
server.use(middlewares);

server.get("/", (req, res) => {
  res.json({ message: " JSON Server is running successfully on Vercel!" });
});

server.use("/api", router);

export default server;
