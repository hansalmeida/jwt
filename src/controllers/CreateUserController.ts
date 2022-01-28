import { Request, Response } from "express"
import { CreateUserService } from "../services/CreateUserService"

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { email, name, password } = request.body

    const service = new CreateUserService()

    try {
      const result = await service.execute({ email, name, password })

      return response.status(201).json(result)
    } catch (error) {
      if (error instanceof Error) {
        return response.status(409).json({ message: error.message })
      }
    }
  }
}
