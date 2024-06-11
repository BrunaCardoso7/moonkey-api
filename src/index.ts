import { VendaProduto } from './Venda_Produto/venda_produto.entity';
import { AppDataSource } from "./data-source"
import { Produto } from "./Produto/produto.entity"
import { User } from "./User/user.entity"
import { Venda } from './Vendas/venda.entity';

AppDataSource.initialize().then(async () => {

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    const produtos = await AppDataSource.manager.find(Produto)
    const produtosvenda = await AppDataSource.manager.find(VendaProduto)
    const vendas = await AppDataSource.manager.find(Venda)

    console.log("Loaded users: ", users)
    console.log("Loaded produtos: ", produtos)
    console.log("Loaded produtos vendas: ", produtosvenda)
    console.log("Loaded vendas: ", vendas)
    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
