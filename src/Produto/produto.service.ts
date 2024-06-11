import { AppDataSource } from "../data-source";
import { Produto } from "./produto.entity";
import { Repository } from "typeorm";

export type ProdutoProps = {
    nome: string
    preco: number
    quantidade: number
    categoria: string
    subcategoria: string
}


export class ProdutoService {
    private produtoRepository: Repository<Produto>

    constructor(){
        this.produtoRepository = AppDataSource.getRepository(Produto)
    }
    async createProduto (newProduto: ProdutoProps) {
        try {
            const produto = this.produtoRepository.create(newProduto)
            await this.produtoRepository.save(produto)
            return produto
        } catch (error) {
            console.error({message: 'falha na camada de service', error})
        }
    }
    async getProdutos () {
        try {
            const produtos = await this.produtoRepository.find()
            return produtos
        } catch (error) {
            console.error('falha na camada de service', error.message)
        }
    }
    async deleteProdutos (id: string) {
        try {
            const produto = await this.produtoRepository.findOne({where: {id}})
            console.log(produto)

            const deleted = await this.produtoRepository.delete(produto)
            
            return deleted
        } catch (error) {
            console.error('falha na camada de service', error.message)
        }
    }
}