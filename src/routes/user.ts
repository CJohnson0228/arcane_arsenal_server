import express from 'express'
import {
  getUser,
  loginUser,
  signupUser,
  updateUser,
} from '../controllers/userController'

const router = express.Router()

router.get('/:id', getUser)

router.post('/login', loginUser)

router.post('/register', signupUser)

router.post('/update', updateUser)

export default router
