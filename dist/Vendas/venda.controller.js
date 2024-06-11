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
exports.VendaController = void 0;
const venda_entity_1 = require("./venda.entity");
class VendaController {
    constructor(vendaService) {
        this.vendaService = vendaService;
    }
    createVenda(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = new Date();
                const venda = new venda_entity_1.Venda();
                venda.data_vendas = data;
                venda.total = 0.0;
                const newVenda = yield this.vendaService.createVenda(venda);
                res.status(200).json({ message: 'venda realizada com sucesso', newVenda });
            }
            catch (error) {
                console.error("error na camada de controller");
                res.status(500).json({ error: 'não foi possivel criar nova venda' });
            }
        });
    }
    getVendas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listaVendas = yield this.vendaService.getVendas();
                res.status(200).json({ message: 'produtos listados com sucesso', listaVendas });
            }
            catch (error) {
                console.error("error na camada de controller");
                res.status(500).json({ error: 'não foi possivel listar vendas' });
            }
        });
    }
}
exports.VendaController = VendaController;
