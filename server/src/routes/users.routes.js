import {Router} from 'express'
import {getUsers,createUser,getUser, updateUser} from '../controllers/users.controller'

const router = Router()

router.get('/users',getUsers)
router.post('/users',createUser)
router.put('/users/:usuario',updateUser)
router.get('/users/:usuario',getUser)

export default router