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

// ✅ Root route
server.get("/", (req, res) => {
  res.json({ message: "✅ JSON Server running on Render!" });
});

// ✅ Explicit health check for /api/
server.get("/api", (req, res) => {
  res.json({ message: "✅ JSON API root is live!" });
});

// ✅ Mount main API router
server.use("/api", router);

// ✅ Use environment or default Render port
const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
  console.log(`✅ JSON Server running on port ${PORT}`);
});
