"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmeFavorito = void 0;
var FilmeFavorito = /** @class */ (function () {
    function FilmeFavorito() {
        this.listaFavoritos = [];
    }
    FilmeFavorito.prototype.adiciona = function (filme) {
        this.listaFavoritos.push(filme);
    };
    FilmeFavorito.prototype.listar = function () {
        return this.listaFavoritos;
    };
    return FilmeFavorito;
}());
exports.FilmeFavorito = FilmeFavorito;
