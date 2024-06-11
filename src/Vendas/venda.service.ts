import { Repository } from "typeorm"
import { Venda } from "./venda.entity"
import { AppDataSource } from "../data-source"

export class VendaService {
    private vendaRepository: Repository<Venda>
    constructor(){
        this.vendaRepository = AppDataSource.getRepository(Venda)
    }
    async createVenda (venda: Venda) {
        try {
            const vendasLista =  this.vendaRepository.create(venda)
            await this.vendaRepository.save(vendasLista)
            return vendasLista
        } catch (error) {
            console.error("error na camada de service: ", error)
        }
    }
    async getVendas () {
        try {
            const busca  = await this.vendaRepository.find()
            return busca
        } catch (error) {
            console.error("error na camada de service: ", error)
        }
    }
}