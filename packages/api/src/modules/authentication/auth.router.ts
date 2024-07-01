import { vValidator } from "@hono/valibot-validator";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { sign } from "hono/jwt";
import { LoginDto } from "./dtos/login.dto";
import { authMiddleware } from "./middlewares/auth.middleware";
import { loginService } from "./services/login.service";

const authRouter = new Hono();

authRouter
  .post("/", vValidator("json", LoginDto), async ({ json, req }) => {
    const body = req.valid("json");

    const result = loginService(body);

    if (!result)
      throw new HTTPException(400, { message: "Invalid credential data!" });

    const permissions = new Set<string>();

    result.roles.forEach((val) => {
      val.permissions?.forEach((per) => {
        permissions.add(per.name);
      });
    });

    const payload = {
      id: result.id,
      username: result.username,
      roles: result.roles.map((role) => ({
        name: role.name,
        isDefault: role.isDefault,
      })),
      permissions: Array.from(permissions, (value) => value.toString()),
    };

    return json(
      {
        user: payload,
        token: await sign(payload, "mySecretKey"),
        message: "Login successfully",
      },
      200
    );
  })
  .get("/", authMiddleware, async ({ json, get }) => {
    return json(get("jwtPayload"), 200);
  });

export default authRouter;
