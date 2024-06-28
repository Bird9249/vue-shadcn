import { vValidator } from "@hono/valibot-validator";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { sign } from "hono/jwt";
import { LoginDto } from "./dtos/login.dto";
import { echoMiddleware } from "./middlewares/auth.middleware";
import { loginService } from "./services/login.service";

const authRouter = new Hono();

authRouter
  .post("/", vValidator("json", LoginDto), async ({ json, req }) => {
    const body = req.valid("json");

    const result = loginService(body);

    if (!result)
      throw new HTTPException(400, { message: "Invalid credential data!" });

    return json(
      {
        user: result,
        token: await sign({ ...result }, "mySecretKey"),
        message: "Login successfully",
      },
      200
    );
  })
  .get("/", echoMiddleware, async ({ json, get }) => {
    return json(get("jwtPayload"), 200);
  });

export default authRouter;
