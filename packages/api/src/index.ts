import { Hono } from "hono";
import { cors } from "hono/cors";
import authRouter from "./modules/authentication/auth.router";

const app = new Hono().basePath("/api");
app.use("*", cors());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/auth", authRouter);

export default app;
