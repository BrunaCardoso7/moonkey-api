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
exports.VendaProdutoController = void 0;
const venda_produto_entity_1 = require("./venda_produto.entity");
class VendaProdutoController {
    constructor(vendaProdutoService) {
        this.vendaProdutoService = vendaProdutoService;
    }
    createVendaProduto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { produto_id, vendas_id, quatidade } = req.body;
                const vendaProduto = new venda_produto_entity_1.VendaProduto();
                vendaProduto.produto_id = produto_id;
                vendaProduto.vendas_id = vendas_id;
                vendaProduto.quantidade = quatidade;
                const newProdutoVenda = yield this.vendaProdutoService.createVendaProduto(vendaProduto);
                return res.status(200).json({ message: 'venda realizada com sucesso', newProdutoVenda });
            }
            catch (error) {
                console.error("error na camada de controller" + error);
                return res.status(500).json({ message: 'falha ao relizar a venda' });
            }
        });
    }
}
exports.VendaProdutoController = VendaProdutoController;
