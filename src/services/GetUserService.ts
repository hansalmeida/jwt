import { prismaClient } from "../../prisma"

type IData = {
  id: string
}
export class GetUserService {
  async execute({ id }: IData) {
    const user = await prismaClient.user.findFirst({ where: { id } })

    if (!user) throw new Error("User does not exist")

    return {
      id: user.id,
      email: user.email,
      name: user.name,
    }
  }
}
