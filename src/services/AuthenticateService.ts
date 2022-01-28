import { prismaClient } from "../../prisma"
import { validatePassword } from "../utils/validatePassword"
import jwt from "jsonwebtoken"

type IData = {
  email: string
  password: string
}
export class AuthenticateService {
  async execute({ email, password }: IData) {
    const user = await prismaClient.user.findFirst({ where: { email } })

    if (!user) throw new Error("User does not exist")

    const isPasswordMatching = await validatePassword(user.password, password)
    if (!isPasswordMatching) throw new Error("Either the E-Mail or the Password is incorrect")

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
      expiresIn: "1d",
    })

    return { user, token }
  }
}
