import { Router } from 'express'

import * as userController from '../controllers/userController.js'
import registerRequest from '../middlewares/registerRequest.js'
import errorHandler from '../middlewares/errorHandler.js'

const usersRouter = new Router()

usersRouter.route('/')
  .post(registerRequest, userController.postUser)

usersRouter.route('/:name')
  .get(userController.getUser)
  .patch(userController.patchUser)
  .delete(userController.deleteUser)

usersRouter.use(errorHandler)

export default usersRouter
