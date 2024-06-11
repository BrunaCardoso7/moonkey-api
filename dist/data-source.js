"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./User/user.entity");
const _1710717866220_ClientTable_1 = require("./migrations/1710717866220-ClientTable");
const _1710722768646_VendasTables_1 = require("./migrations/1710722768646-VendasTables");
const _1710749006215_Vendas_ProdutosTable_1 = require("./migrations/1710749006215-Vendas_ProdutosTable");
const _1710749699804_ProdutosTable_1 = require("./migrations/1710749699804-ProdutosTable");
const produto_entity_1 = require("./Produto/produto.entity");
const venda_produto_entity_1 = require("./Venda_Produto/venda_produto.entity");
const venda_entity_1 = require("./Vendas/venda.entity");
const _1711761030591_AddCollumSubCategoria_1 = require("./migrations/1711761030591-AddCollumSubCategoria");
const _1712057954103_AddCollumnSubcategory_1 = require("./migrations/1712057954103-AddCollumnSubcategory");
const _1718083071723_AddCollumnsImagem_1 = require("./migrations/1718083071723-AddCollumnsImagem");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: 'postgres://brunadev:YA4J0fGJUjETJjae0bCb0dzlzwooS5VD@dpg-cpk2u6ed3nmc73fnq1e0-a.oregon-postgres.render.com/moonkey',
    synchronize: true,
    logging: false,
    entities: [user_entity_1.User, produto_entity_1.Produto, venda_produto_entity_1.VendaProduto, venda_entity_1.Venda],
    migrations: [_1710717866220_ClientTable_1.ClientTable1710717866220, _1710722768646_VendasTables_1.VendasTables1710722768646, _1710749699804_ProdutosTable_1.ProdutosTable1710749699804, _1710749006215_Vendas_ProdutosTable_1.VendasProdutosTable1710749006215, _1711761030591_AddCollumSubCategoria_1.AddCollumCategoria1711761030591, _1712057954103_AddCollumnSubcategory_1.AddCollumnSubcategory1712057954103, _1718083071723_AddCollumnsImagem_1.AddCollumnsImagem1718083071723],
    subscribers: [],
    ssl: {
        rejectUnauthorized: false
    }
});
exports.AppDataSource.initialize()
    .then(() => {
    console.log("Data Source has been initialized!");
})
    .catch((err) => {
    console.error("Error during Data Source initialization", err);
});
