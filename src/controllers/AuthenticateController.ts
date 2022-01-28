import { Request, Response } from "express"
import { AuthenticateService } from "../services/AuthenticateService"

export class AuthenticateController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body

    const service = new AuthenticateService()

    try {
      const { user, token } = await service.execute({ email, password })

      return response.status(200).json({
        id: user.id,
        email: user.email,
        name: user.name,
        token,
      })
    } catch (error) {
      if (error instanceof Error) {
        return response.status(401).json({ message: error.message })
      }
    }

    return response.json(request.body)
  }
}
