import { VendaController } from './venda.controller';
import { Router } from "express";

export class VendaRouter {
    private router: Router
    private vendaController: VendaController
    constructor (vendacontroller:VendaController) {
        this.router = Router()
        this.vendaController = vendacontroller
        this.initializeRoute()
    }
    async initializeRoute () {
        this.router.post('/', this.vendaController.createVenda.bind(this.vendaController))
        this.router.get('/', this.vendaController.getVendas.bind(this.vendaController))
    }
    getRouter () {
        return this.router
    }
}