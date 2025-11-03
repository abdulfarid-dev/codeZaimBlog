import express from 'express'
import { register} from '../controllers/authentication/userRegister.js'
import {logIn} from '../controllers/authentication/userLogin.js'
import { createPost,allpost } from '../controllers/postController.js';


// const router =router.express() i go mistake 
const router = express.Router();
router.post('/register',register)
router.post('/LogIn',logIn)


router.post('/createPost', createPost)

router.get('/allpost', allpost)
export default router