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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_service_1 = require("../middleware/jwt.service");
const user_entity_1 = require("./user.entity");
class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userdata = req.body;
                const { email, nome, password, telefone } = userdata;
                const hash = bcrypt_1.default.hashSync(password, 10);
                const user = new user_entity_1.User();
                user.nome = nome;
                user.email = email;
                user.telefone = telefone;
                user.password = hash;
                const token = jwt_service_1.JwtService.generateToken({ email: user.email });
                yield this.userService.createUser(user);
                return res.status(200).json({ message: 'Registro de usuário feito com sucesso', token });
            }
            catch (error) {
                console.error('Camada controller error: ', error.message);
                return res.status(500).json({ error: 'Erro ao criar usuário' });
            }
        });
    }
    authUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userData = req.body;
                const { email, password } = userData;
                const user = yield this.userService.getUserByEmail(email);
                if (!user) {
                    console.log('usuario não encontrado');
                    return res.status(401).json({ error: 'Usuário não encontrado' });
                }
                const passwordCompare = bcrypt_1.default.compareSync(password, user.password);
                if (!passwordCompare) {
                    return res.status(401).json({ error: 'Credenciais inválidas' });
                }
                const token = jwt_service_1.JwtService.generateToken({ email: user.email });
                console.log("user retorno", user);
                return res.status(200).json({ message: 'usuário logado com sucesso', user, token });
            }
            catch (error) {
                const { email, password } = req.body;
                console.log(email, password);
                console.error('Camada controller error: ', error.message);
                return res.status(500).json({ error: 'Erro ao logar usuário' });
            }
        });
    }
    logoutUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.clearCookie('token');
            }
            catch (error) {
                console.error('Camada controller error: ', error.message);
                return res.status(500).json({ error: 'Erro ao criar usuário' });
            }
        });
    }
}
exports.UserController = UserController;
