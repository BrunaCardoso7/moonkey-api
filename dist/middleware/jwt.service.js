"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class JwtService {
    static generateToken(payload) {
        return jsonwebtoken_1.default.sign(payload, this.secrekey, { expiresIn: '10h' });
    }
    static verifyToken(token) {
        return jsonwebtoken_1.default.verify(token, this.secrekey);
    }
}
exports.JwtService = JwtService;
JwtService.secrekey = "m0o^/k3Y|)ev";
