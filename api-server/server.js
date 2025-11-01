// api-server/server.js
import jsonServer from "json-server";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(jsonServer.bodyParser);
server.use(middlewares);

server.get("/", (req, res) => {
  res.json({ message: "✅ JSON Server running on Render!" });
});

server.use("/api", router);

// Local + Render compatible
const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
  console.log(`JSON Server running on port ${PORT}`);
});
