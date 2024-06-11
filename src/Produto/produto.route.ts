import { Router } from "express"
import { ProdutoController } from "./produto.controller"
import upload from "../middleware/upload.middleware";

export class ProdutoRoute {
    private produtoRouter: Router
    private produtoController: ProdutoController

    constructor(produtoController: ProdutoController) {
        this.produtoRouter = Router();
        this.produtoController = produtoController
        this.initializeRouter()
    }

    initializeRouter() {
        this.produtoRouter.post('/', upload.single('file'), this.produtoController.createProduto.bind(this.produtoController))
        this.produtoRouter.get('/', this.produtoController.getProduto.bind(this.produtoController))
        this.produtoRouter.delete('/:id', this.produtoController.deleteProduto.bind(this.produtoController))
    }

    getRouter() {
        return this.produtoRouter
    }
}
