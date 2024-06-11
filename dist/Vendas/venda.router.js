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
exports.VendaRouter = void 0;
const express_1 = require("express");
class VendaRouter {
    constructor(vendacontroller) {
        this.router = (0, express_1.Router)();
        this.vendaController = vendacontroller;
        this.initializeRoute();
    }
    initializeRoute() {
        return __awaiter(this, void 0, void 0, function* () {
            this.router.post('/', this.vendaController.createVenda.bind(this.vendaController));
            this.router.get('/', this.vendaController.getVendas.bind(this.vendaController));
        });
    }
    getRouter() {
        return this.router;
    }
}
exports.VendaRouter = VendaRouter;
