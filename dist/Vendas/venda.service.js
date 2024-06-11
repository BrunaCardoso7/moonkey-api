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
exports.VendaService = void 0;
const venda_entity_1 = require("./venda.entity");
const data_source_1 = require("../data-source");
class VendaService {
    constructor() {
        this.vendaRepository = data_source_1.AppDataSource.getRepository(venda_entity_1.Venda);
    }
    createVenda(venda) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const vendasLista = this.vendaRepository.create(venda);
                yield this.vendaRepository.save(vendasLista);
                return vendasLista;
            }
            catch (error) {
                console.error("error na camada de service: ", error);
            }
        });
    }
    getVendas() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const busca = yield this.vendaRepository.find();
                return busca;
            }
            catch (error) {
                console.error("error na camada de service: ", error);
            }
        });
    }
}
exports.VendaService = VendaService;
