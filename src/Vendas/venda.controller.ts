import { Request, Response } from "express";
import { VendaService } from "./venda.service";
import { Venda } from "./venda.entity";

export class VendaController {
    private vendaService: VendaService

    constructor(vendaService: VendaService){
        this.vendaService = vendaService
    }
    async createVenda (req: Request, res: Response) {
        try {
            const data = new Date()

            const venda = new Venda()
            venda.data_vendas = data
            venda.total = 0.0
            const newVenda = await this.vendaService.createVenda(venda)

            res.status(200).json({message: 'venda realizada com sucesso', newVenda})
        } catch (error) {
            console.error("error na camada de controller")
            res.status(500).json({error: 'não foi possivel criar nova venda'})
        }
    }
    async getVendas (req: Request, res: Response) {
        try {
            const listaVendas = await this.vendaService.getVendas()
            res.status(200).json({message: 'produtos listados com sucesso', listaVendas})
        } catch (error) {
            console.error("error na camada de controller")
            res.status(500).json({error: 'não foi possivel listar vendas'})
        }
    }
}