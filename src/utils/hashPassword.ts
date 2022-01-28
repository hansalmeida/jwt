import { hash } from "bcryptjs"

export const hashPassword = async (password: string) => {
  const hashString = await hash(password, 10)
  return hashString
}
