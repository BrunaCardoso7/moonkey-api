"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = __importDefault(require("express"));
class UserRouter {
    constructor(userController) {
        this.router = express_1.default.Router();
        this.userController = userController;
        this.initializeRoute();
    }
    initializeRoute() {
        this.router.post('/signup', this.userController.createUser.bind(this.userController));
        this.router.post('/signin', this.userController.authUser.bind(this.userController));
    }
    getRouter() {
        return this.router;
    }
}
exports.UserRouter = UserRouter;
