"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoRoute = void 0;
const express_1 = require("express");
const upload_middleware_1 = __importDefault(require("../middleware/upload.middleware"));
class ProdutoRoute {
    constructor(produtoController) {
        this.produtoRouter = (0, express_1.Router)();
        this.produtoController = produtoController;
        this.initializeRouter();
    }
    initializeRouter() {
        this.produtoRouter.post('/', upload_middleware_1.default.single('file'), this.produtoController.createProduto.bind(this.produtoController));
        this.produtoRouter.get('/', this.produtoController.getProduto.bind(this.produtoController));
        this.produtoRouter.delete('/:id', this.produtoController.deleteProduto.bind(this.produtoController));
    }
    getRouter() {
        return this.produtoRouter;
    }
}
exports.ProdutoRoute = ProdutoRoute;
