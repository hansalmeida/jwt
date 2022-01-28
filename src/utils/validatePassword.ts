import { compare } from "bcryptjs"

export const validatePassword = async (password: string, hash: string) => {
  const isValid = await compare(hash, password)

  return isValid
}
