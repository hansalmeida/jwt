import { Request, Response } from "express"
import { GetUserService } from "../services/GetUserService"

export class GetUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params

    const service = new GetUserService()

    try {
      const user = await service.execute({ id })
      return response.status(200).json(user)
    } catch (error) {
      if (error instanceof Error) return response.status(400).json({ error })
    }
  }
}
