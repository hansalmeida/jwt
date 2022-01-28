import { Router } from "express"
import { CreateUserController } from "./controllers/CreateUserController"

export const routes = Router()

routes.get("/", (request, response) => response.json({ message: "Hello World" }))

routes.post("/users", new CreateUserController().handle)
