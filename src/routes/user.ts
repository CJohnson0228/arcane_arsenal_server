import express from 'express'
import {
  loginUser,
  signupUser,
  updateUser,
} from '../controllers/userController'

const router = express.Router()

router.post('/login', loginUser)

router.post('/register', signupUser)

router.post('/update', updateUser)

export default router
