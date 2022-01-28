import { Router } from "express"
import { AuthenticateController } from "./controllers/AuthenticateController"
import { CreateUserController } from "./controllers/CreateUserController"
import { GetUserController } from "./controllers/GetUserController"
import { ensureAuthentication } from "./middleware/ensureAuthentication"

export const routes = Router()

routes.get("/", (request, response) => response.json({ message: "Hello World" }))

routes.post("/authenticate", new AuthenticateController().handle)

routes.get("/users/:id", ensureAuthentication, new GetUserController().handle)
routes.post("/users", new CreateUserController().handle)
