import { Router } from "express";
import { VendaProdutoController } from "./venda_produto.controller";

export class VendaProdutoRouter {
    private router: Router
    private vendaProdutoController: VendaProdutoController
    constructor(vendaProdutoController: VendaProdutoController){
        this.router = Router()
        this.vendaProdutoController = vendaProdutoController
        this.initializeRouter()
    }

    async initializeRouter () {
        try {
            this.router.post('/:id_vend/:id_prod', this.vendaProdutoController.createVendaProduto.bind(this.vendaProdutoController))
        } catch (error) {
            console.error("erro na camada router: ", error)
        }
    }
    getRouter () {
        return this.router
    }
}