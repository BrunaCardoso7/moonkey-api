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
exports.VendaProdutoService = void 0;
const venda_produto_entity_1 = require("./venda_produto.entity");
const data_source_1 = require("../data-source");
class VendaProdutoService {
    constructor() {
        this.vendaProdutoRepository = data_source_1.AppDataSource.getRepository(venda_produto_entity_1.VendaProduto);
    }
    createVendaProduto(vendaProduto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(vendaProduto);
                const newProdutoVenda = this.vendaProdutoRepository.create(vendaProduto);
                yield this.vendaProdutoRepository.save(newProdutoVenda);
                return newProdutoVenda;
            }
            catch (error) {
                console.log(vendaProduto);
                console.error("error na camada de serviço: ", error);
            }
        });
    }
}
exports.VendaProdutoService = VendaProdutoService;
