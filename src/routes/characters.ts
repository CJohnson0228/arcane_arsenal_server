import express from 'express'
import {
  createCharacter,
  deleteCharacter,
  getAllUserCharacters,
  getCharacter,
  updateCharacter,
} from '../controllers/charactersController'

const router = express.Router()

router.get('/myCharacters/:id', getAllUserCharacters)

router.get('/:id', getCharacter)

router.post('/', createCharacter)

router.delete('/:id', deleteCharacter)

router.patch('/:id', updateCharacter)

export default router
