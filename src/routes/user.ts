import express from 'express'
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from '../controllers/userController'

const router = express.Router()

// edit these for creating and login users
router.get('/:id', getUser)

router.post('/', createUser)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

export default router
