import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./User/user.entity"
import { ClientTable1710717866220 } from "./migrations/1710717866220-ClientTable"
import { VendasTables1710722768646 } from "./migrations/1710722768646-VendasTables"
import { VendasProdutosTable1710749006215 } from "./migrations/1710749006215-Vendas_ProdutosTable"
import { ProdutosTable1710749699804 } from "./migrations/1710749699804-ProdutosTable"
import { Produto } from "./Produto/produto.entity"
import { VendaProduto } from "./Venda_Produto/venda_produto.entity"
import { Venda } from "./Vendas/venda.entity"
import { AddCollumCategoria1711761030591 } from "./migrations/1711761030591-AddCollumSubCategoria"
import { AddCollumnSubcategory1712057954103 } from "./migrations/1712057954103-AddCollumnSubcategory"
import { AddCollumnsImagem1718083071723 } from "./migrations/1718083071723-AddCollumnsImagem"
export const AppDataSource = new DataSource({
    type: "postgres",
    url: 'postgres://brunadev:YA4J0fGJUjETJjae0bCb0dzlzwooS5VD@dpg-cpk2u6ed3nmc73fnq1e0-a.oregon-postgres.render.com/moonkey',
    synchronize: true,
    logging: false,
    entities: [User, Produto, VendaProduto, Venda],
    migrations: [ClientTable1710717866220, VendasTables1710722768646, ProdutosTable1710749699804, VendasProdutosTable1710749006215, AddCollumCategoria1711761030591, AddCollumnSubcategory1712057954103, AddCollumnsImagem1718083071723],
    subscribers: [],
    ssl: {
        rejectUnauthorized: false
    }
})
AppDataSource.initialize()
.then(() => {
    console.log("Data Source has been initialized!")
})                                          
.catch((err) => {
    console.error("Error during Data Source initialization", err)
})