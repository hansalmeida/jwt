import { compare } from "bcryptjs"

export const validatePassword = async (password: string, hash: string) => {
  console.log(hash, password)
  const isValid = await compare(hash, password)

  return isValid
}
