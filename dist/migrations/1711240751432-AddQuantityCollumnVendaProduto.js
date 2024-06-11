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
exports.AddQuantityCollumnVendaProduto1711240751432 = void 0;
const typeorm_1 = require("typeorm");
class AddQuantityCollumnVendaProduto1711240751432 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.addColumn('vendas_produto', new typeorm_1.TableColumn({
                name: 'quantidade',
                type: 'int',
                isNullable: true,
                default: 1,
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropColumn('vendas_produto', 'quantidade');
        });
    }
}
exports.AddQuantityCollumnVendaProduto1711240751432 = AddQuantityCollumnVendaProduto1711240751432;
