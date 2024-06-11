import { Request, Response } from 'express';
import { ProdutoProps, ProdutoService } from './produto.service';
import { Produto } from './produto.entity';
import { json } from 'body-parser';

export class ProdutoController {
    private produtoService: ProdutoService
    constructor(produtoService: ProdutoService){
        this.produtoService = produtoService
    }
    async createProduto (req: Request, res: Response) { 
        try {
            const produtodata: ProdutoProps = req.body
            const imagem = req.file ? req.file.path : undefined
            
            const {nome, quantidade, preco, categoria, subcategoria} = produtodata

            console.log(imagem)

            if(!nome || !quantidade || !preco) {
                res.status(400).json({message: 'todos os dados são obrigatórios'})
            }

            const produto = new Produto()
            produto.imagem = imagem
            produto.nome = nome
            produto.preco = preco
            produto.categoria = categoria
            produto.subcategoria = subcategoria
            produto.quantidade = quantidade

            const newProd = await this.produtoService.createProduto(produto)

            return res.status(200).json({mesage: 'produto criado', newProd})
        } catch (error) {
            console.error({message: 'falha na camada de controller', error})
            res.status(500).json({'error: ': 'falha na postagem do produto'})
        }
    }
    async getProduto (req: Request, res: Response) {
        try {
            const produtosApi = await this.produtoService.getProdutos()
            return res.status(200).json({message: 'dados buscados com sucesso', produtosApi})
        } catch (error) {
            console.error({message: 'falha na camada de controller', error})
            return res.status(500).json({'error: ': 'falha na listagem de produtos'})
        }
    }
    async deleteProduto (req: Request, res: Response) {
        try {
            const produto_Id = req.query.id as string

            const produtoDeleted = await this.produtoService.deleteProdutos(produto_Id)

            res.status(200).json({message: "produto deletado com sucesso", produtoDeleted})
        } catch (error) {
            console.error({message: 'falha na camada de controller', error})
            return res.status(500).json({'error: ': 'não foi possível deletar produto'})
        }
    }
}