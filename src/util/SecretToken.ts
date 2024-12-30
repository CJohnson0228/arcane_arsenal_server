import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()

export const createSecretToken = (_id: String) => {
  if (!process.env.TOKEN_KEY) {
    return console.log('TOKEN_KEY not defined in environment variables')
  }
  return jwt.sign({ _id }, process.env.TOKEN_KEY, {
    expiresIn: '24h',
  })
}
