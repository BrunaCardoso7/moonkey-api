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
exports.ProdutoService = void 0;
const data_source_1 = require("../data-source");
const produto_entity_1 = require("./produto.entity");
class ProdutoService {
    constructor() {
        this.produtoRepository = data_source_1.AppDataSource.getRepository(produto_entity_1.Produto);
    }
    createProduto(newProduto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const produto = this.produtoRepository.create(newProduto);
                yield this.produtoRepository.save(produto);
                return produto;
            }
            catch (error) {
                console.error({ message: 'falha na camada de service', error });
            }
        });
    }
    getProdutos() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const produtos = yield this.produtoRepository.find();
                return produtos;
            }
            catch (error) {
                console.error('falha na camada de service', error.message);
            }
        });
    }
    deleteProdutos(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const produto = yield this.produtoRepository.findOne({ where: { id } });
                console.log(produto);
                const deleted = yield this.produtoRepository.delete(produto);
                return deleted;
            }
            catch (error) {
                console.error('falha na camada de service', error.message);
            }
        });
    }
}
exports.ProdutoService = ProdutoService;
