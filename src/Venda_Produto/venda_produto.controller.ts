import { Request, Response } from "express";
import { VendaProdutoService } from "./venda_produto.service";
import { VendaProduto } from "./venda_produto.entity";

export class VendaProdutoController {
    private vendaProdutoService: VendaProdutoService
    constructor(vendaProdutoService: VendaProdutoService) {
        this.vendaProdutoService = vendaProdutoService
    }
    async createVendaProduto (req: Request, res: Response) {
        try {
            const {produto_id, vendas_id, quatidade} = req.body

            const vendaProduto = new VendaProduto()
            vendaProduto.produto_id = produto_id
            vendaProduto.vendas_id = vendas_id
            vendaProduto.quantidade = quatidade

            const newProdutoVenda = await this.vendaProdutoService.createVendaProduto(vendaProduto)
            return res.status(200).json({message: 'venda realizada com sucesso', newProdutoVenda})
        } catch (error) {
            console.error("error na camada de controller" + error)
            return res.status(500).json({message: 'falha ao relizar a venda'})
        }
    }
}