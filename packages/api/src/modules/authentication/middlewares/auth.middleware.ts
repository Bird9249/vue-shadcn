import { createMiddleware } from "hono/factory";
import { HTTPException } from "hono/http-exception";
import { verify } from "hono/jwt";

export const echoMiddleware = createMiddleware(async ({ req, set }, next) => {
  const authorization = req.header("Authorization");

  if (!authorization)
    throw new HTTPException(401, { message: "No Authorization" });

  const token = authorization.split(" ")[1];

  if (!token || token === "null")
    throw new HTTPException(401, { message: "No Authorization" });

  const decodedPayload = await verify(token, "mySecretKey");

  set("jwtPayload", decodedPayload);

  await next();
});
