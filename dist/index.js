"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const venda_produto_entity_1 = require("./Venda_Produto/venda_produto.entity");
const data_source_1 = require("./data-source");
const produto_entity_1 = require("./Produto/produto.entity");
const user_entity_1 = require("./User/user.entity");
const venda_entity_1 = require("./Vendas/venda.entity");
data_source_1.AppDataSource.initialize().then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Loading users from the database...");
    const users = yield data_source_1.AppDataSource.manager.find(user_entity_1.User);
    const produtos = yield data_source_1.AppDataSource.manager.find(produto_entity_1.Produto);
    const produtosvenda = yield data_source_1.AppDataSource.manager.find(venda_produto_entity_1.VendaProduto);
    const vendas = yield data_source_1.AppDataSource.manager.find(venda_entity_1.Venda);
    console.log("Loaded users: ", users);
    console.log("Loaded produtos: ", produtos);
    console.log("Loaded produtos vendas: ", produtosvenda);
    console.log("Loaded vendas: ", vendas);
    console.log("Here you can setup and run express / fastify / any other framework.");
})).catch(error => console.log(error));
