"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_entity_1 = require("./user.entity");
const data_source_1 = require("../data-source");
class UserService {
    constructor() {
        this.userRepository = data_source_1.AppDataSource.getRepository(user_entity_1.User);
    }
    createUser(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = this.userRepository.create(userData);
                yield this.userRepository.save(newUser);
                return newUser;
            }
            catch (error) {
                console.error("camada service:  ", error.message);
            }
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userRepository.findOne({ where: { email } });
                return user;
            }
            catch (error) {
                console.error("camada service:  ", error.message);
            }
        });
    }
}
exports.UserService = UserService;
