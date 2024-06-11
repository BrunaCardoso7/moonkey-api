import { Request, Response } from 'express';
import { ProdutoProps, ProdutoService } from './produto.service';
import { Produto } from './produto.entity';

export class ProdutoController {
    private produtoService: ProdutoService;

    constructor(produtoService: ProdutoService) {
        this.produtoService = produtoService;
    }

    async createProduto(req: Request, res: Response) {
        try {
            const produtodata: ProdutoProps = req.body;
            const imagem = req.file ? req.file.path : undefined;
            
            const { nome, quantidade, preco, categoria, subcategoria } = produtodata;

            if (!nome || !quantidade || !preco) {
                return res.status(400).json({ message: 'Todos os dados são obrigatórios' });
            }

            const produto = new Produto();
            produto.imagem = imagem || 'undefined';
            produto.nome = nome;
            produto.preco = preco;
            produto.categoria = categoria;
            produto.subcategoria = subcategoria;
            produto.quantidade = quantidade;

            const newProd = await this.produtoService.createProduto(produto);

            return res.status(200).json({ message: 'Produto criado', newProd });
        } catch (error) {
            console.error({ message: 'Falha na camada de controller', error });
            return res.status(500).json({ error: 'Falha na postagem do produto' });
        }
    }

    async getProduto(req: Request, res: Response) {
        try {
            const produtosApi = await this.produtoService.getProdutos();
            return res.status(200).json({ message: 'Dados buscados com sucesso', produtosApi });
        } catch (error) {
            console.error({ message: 'Falha na camada de controller', error });
            return res.status(500).json({ error: 'Falha na listagem de produtos' });
        }
    }

    async deleteProduto(req: Request, res: Response) {
        try {
            const produto_Id = req.query.id as string;

            const produtoDeleted = await this.produtoService.deleteProdutos(produto_Id);

            res.status(200).json({ message: 'Produto deletado com sucesso', produtoDeleted });
        } catch (error) {
            console.error({ message: 'Falha na camada de controller', error });
            return res.status(500).json({ error: 'Não foi possível deletar produto' });
        }
    }
}
