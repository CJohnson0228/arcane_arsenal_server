import { Request, Response } from 'express'
import User from '../models/userModel'
import { createSecretToken } from '../util/SecretToken'

// login User
const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body
  User.login(email, password)
    .then((user) => {
      const token = createSecretToken(user._id.toString())
      res.status(200).json({ email, token })
    })
    .catch((error) => res.status(400).json({ error: error.message }))
}

// register User
const signupUser = async (req: Request, res: Response) => {
  const {
    displayName,
    firstName,
    lastName,
    initials,
    photoUrl,
    email,
    password,
  } = req.body
  User.signup(
    displayName,
    firstName,
    lastName,
    initials,
    photoUrl,
    email,
    password
  )
    .then((user) => {
      const token = createSecretToken(user._id.toString())
      res.status(200).json({ email, token })
    })
    .catch((error) => res.status(400).json({ error: error.message }))
}

// update User
const updateUser = async (req: Request, res: Response) => {}

export { loginUser, signupUser, updateUser }
