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
exports.ProdutoController = void 0;
const produto_entity_1 = require("./produto.entity");
class ProdutoController {
    constructor(produtoService) {
        this.produtoService = produtoService;
    }
    createProduto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const produtodata = req.body;
                const imagem = req.file ? req.file.path : undefined;
                const { nome, quantidade, preco, categoria, subcategoria } = produtodata;
                if (!nome || !quantidade || !preco) {
                    return res.status(400).json({ message: 'Todos os dados são obrigatórios' });
                }
                const produto = new produto_entity_1.Produto();
                produto.imagem = imagem || 'undefined';
                produto.nome = nome;
                produto.preco = preco;
                produto.categoria = categoria;
                produto.subcategoria = subcategoria;
                produto.quantidade = quantidade;
                const newProd = yield this.produtoService.createProduto(produto);
                return res.status(200).json({ message: 'Produto criado', newProd });
            }
            catch (error) {
                console.error({ message: 'Falha na camada de controller', error });
                return res.status(500).json({ error: 'Falha na postagem do produto' });
            }
        });
    }
    getProduto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const produtosApi = yield this.produtoService.getProdutos();
                return res.status(200).json({ message: 'Dados buscados com sucesso', produtosApi });
            }
            catch (error) {
                console.error({ message: 'Falha na camada de controller', error });
                return res.status(500).json({ error: 'Falha na listagem de produtos' });
            }
        });
    }
    deleteProduto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const produto_Id = req.query.id;
                const produtoDeleted = yield this.produtoService.deleteProdutos(produto_Id);
                res.status(200).json({ message: 'Produto deletado com sucesso', produtoDeleted });
            }
            catch (error) {
                console.error({ message: 'Falha na camada de controller', error });
                return res.status(500).json({ error: 'Não foi possível deletar produto' });
            }
        });
    }
}
exports.ProdutoController = ProdutoController;
