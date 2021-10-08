"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filme = void 0;
var Filme = /** @class */ (function () {
    function Filme(nome, diretor, ano, categoria, classificacao) {
        this._nome = nome;
        this._diretor = diretor;
        this._ano = ano;
        this._categoria = categoria;
        this._classificacao = classificacao;
    }
    Object.defineProperty(Filme.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Filme.prototype, "diretor", {
        get: function () {
            return this._diretor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Filme.prototype, "ano", {
        get: function () {
            return this._ano;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Filme.prototype, "categoria", {
        get: function () {
            return this._categoria;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Filme.prototype, "classificacao", {
        get: function () {
            return this._classificacao;
        },
        enumerable: false,
        configurable: true
    });
    return Filme;
}());
exports.Filme = Filme;
