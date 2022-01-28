import { prismaClient } from "../../prisma"
import { hashPassword } from "../utils/hashPassword"

type IData = {
  name: string
  email: string
  password: string
}
export class CreateUserService {
  async execute({ email, name, password }: IData) {
    const userExists = await prismaClient.user.findFirst({ where: { email } })
    if (userExists) throw new Error("User already exists")

    const passwordHash = await hashPassword(password)

    const user = await prismaClient.user.create({
      data: { name, email, password: passwordHash },
    })

    return user
  }
}
