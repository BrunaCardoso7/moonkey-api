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
exports.AddCollumnsImagem1718083071723 = void 0;
const typeorm_1 = require("typeorm");
class AddCollumnsImagem1718083071723 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            queryRunner.addColumn('produtos', new typeorm_1.TableColumn({
                name: 'imagem',
                type: 'varchar',
                isNullable: true,
                default: 'none'
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            queryRunner.dropColumn('produtos', 'imagem');
        });
    }
}
exports.AddCollumnsImagem1718083071723 = AddCollumnsImagem1718083071723;
