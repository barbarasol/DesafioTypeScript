"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perfil = void 0;
var filmesfavoritos_1 = require("./filmesfavoritos");
var Perfil = /** @class */ (function () {
    function Perfil(nome, email, idade, usuario, senha) {
        this.lista = new filmesfavoritos_1.FilmeFavorito();
        this._nome = nome;
        this._email = email;
        this._idade = idade;
        this._usuario = usuario;
        this._senha = senha;
        this._logado = false;
    }
    Object.defineProperty(Perfil.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perfil.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perfil.prototype, "idade", {
        get: function () {
            return this._idade;
        },
        enumerable: false,
        configurable: true
    });
    Perfil.prototype.adicionaFilme = function (filme) {
        this.lista.adiciona(filme);
    };
    Perfil.prototype.listarFilmes = function () {
        return this.lista.listar();
    };
    Perfil.prototype.logarUsuario = function (user, senha) {
        if (this._usuario === user && this._senha === senha) {
            this._logado = true;
            console.log('Perfil logado.');
        }
        else {
            console.log('Usuário ou senha inválidos');
        }
    };
    return Perfil;
}());
exports.Perfil = Perfil;
