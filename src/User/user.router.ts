import { UserController } from './user.controller';
import express,  { Router } from 'express';

export class UserRouter {
    private router: Router
    private userController: UserController

    constructor (userController: UserController) {
        this.router = express.Router()
        this.userController = userController
        this.initializeRoute()
    }
    
     initializeRoute () {
        this.router.post('/signup', this.userController.createUser.bind(this.userController))
        this.router.post('/signin', this.userController.authUser.bind(this.userController))
    }

    getRouter(): Router {
        return this.router
    }
}