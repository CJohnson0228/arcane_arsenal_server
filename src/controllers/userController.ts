import { Request, Response } from 'express'
import mongoose from 'mongoose'
import User from '../models/userModel'
import { createSecretToken } from '../util/SecretToken'

// login User
const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body
  User.login(email, password)
    .then((user) => {
      const token = createSecretToken(user._id.toString())
      res.status(200).json({
        displayName: user.displayName,
        firstName: user.firstName,
        lastName: user.lastName,
        initials: user.initials,
        email,
        token,
        uid: user._id,
        photoURL: user.photoUrl,
      })
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
      res.status(200).json({
        displayName: user.displayName,
        firstName: user.firstName,
        lastName: user.lastName,
        initials: user.initials,
        email,
        token,
        uid: user._id,
        photoURL: user.photoUrl,
      })
    })
    .catch((error) => res.status(400).json({ error: error.message }))
}

// update User
const updateUser = async (req: Request, res: Response) => {}

// update User
const getUser = async (req: Request, res: Response) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    console.log('invalid id')
    res.status(404).json({ error: 'invalid ID' })
    return
  }
  console.log(id)
  User.findById(id)
    .then((user) => {
      if (user === null) {
        console.log('no such user')
        res.status(404).json({ error: 'No such user exists' })
      } else {
        res.status(200).json(user)
      }
    })
    .catch((error) => {
      res.status(404).json(error.message)
    })
}

export { getUser, loginUser, signupUser, updateUser }
