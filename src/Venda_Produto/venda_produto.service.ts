import { Repository } from "typeorm"
import { VendaProduto } from "./venda_produto.entity"
import { AppDataSource } from "../data-source"


export type VendaProdutoProps = {
    prod_id: string
    vend_id: string
}

export class VendaProdutoService {
    private vendaProdutoRepository: Repository<VendaProduto>
    constructor() {
        this.vendaProdutoRepository = AppDataSource.getRepository(VendaProduto)
    }
    async createVendaProduto (vendaProduto: VendaProduto) {
        try {
            console.log(vendaProduto)
            const newProdutoVenda =  this.vendaProdutoRepository.create(vendaProduto)
            await this.vendaProdutoRepository.save(newProdutoVenda)
            return newProdutoVenda
        } catch (error) {
            console.log(vendaProduto)
            console.error("error na camada de serviço: ", error)
        }
    }
}