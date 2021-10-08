"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var perfil_js_1 = require("./perfil.js");
var filme_js_1 = require("./filme.js");
var prompt_sync_1 = __importDefault(require("prompt-sync"));
var perfil1 = new perfil_js_1.Perfil('barbara', 'barbarasol@gmail.com', 19, 'babi', 'amofilmes');
var perfil2 = new perfil_js_1.Perfil('brenda', 'brendasol@gmail.com', 23, 'belore', 'netflix');
var perfil3 = new perfil_js_1.Perfil('mariana', 'marianaisabel@gmail.com', 20, 'mari', 'amogreys');
var filme1 = new filme_js_1.Filme('Amanhecer - Crepúsculo', 'Bil Condon', 2011, 'filmes teen', '14');
var filme2 = new filme_js_1.Filme('Sombra Lunar', 'Jim Micle', 2019, 'Ficção científica', '16');
var filme3 = new filme_js_1.Filme('Justica em familia', 'Brian Mendoza', 2021, 'acao', '16');
var filme4 = new filme_js_1.Filme('Oxigenio', 'Alexandre Aja', 2021, 'Ficção científica', '14');
var filme5 = new filme_js_1.Filme('Circulo de Fogo', 'Guilhermo del Toro', 2013, 'Ficção científica', '12');
var filme6 = new filme_js_1.Filme('Zona de combate', 'Mikael Hafstrom', 2021, 'Ficção científica', '16');
perfil1.adicionaFilme(filme1);
perfil1.adicionaFilme(filme2);
perfil1.adicionaFilme(filme5);
perfil2.adicionaFilme(filme4);
perfil2.adicionaFilme(filme1);
perfil3.adicionaFilme(filme6);
perfil3.adicionaFilme(filme5);
perfil3.adicionaFilme(filme3);
console.log('Tentativa de login:');
console.log('Perfil 1:');
perfil1.logarUsuario('bab', 'amofilmes');
console.log("---------------");
console.log('Perfil 2;');
perfil2.logarUsuario('belore', 'netflix');
console.log('---------------');
var teclado = (0, prompt_sync_1.default)();
var option2 = 0;
console.log("Acessar dados do perfil:");
console.log("1 - Perfil 1");
console.log("2 - Perfil 2");
console.log("3 - Perfil 3");
option2 = +teclado('Escolha uma opção: ');
console.log("===========================");
switch (option2) {
    case 1:
        console.log("Nome: " + perfil1.nome);
        console.log("Email: " + perfil1.email);
        console.log("Idade: " + perfil1.idade);
        break;
    case 2:
        console.log("Nome: " + perfil2.nome);
        console.log("Email: " + perfil2.email);
        console.log("Idade: " + perfil2.idade);
        break;
    case 3:
        console.log("Nome: " + perfil3.nome);
        console.log("Email: " + perfil3.email);
        console.log("Idade: " + perfil3.idade);
        break;
    default:
        console.log("Opção inválida");
        break;
}
var option = 0;
console.log("===========================");
console.log("Acessar lista de filmes favoritos:");
console.log("1 - Perfil 1");
console.log("2 - Perfil 2");
console.log("3 - Perfil 3");
option = +teclado('Escolha uma opção: ');
console.log("===========================");
switch (option) {
    case 1:
        console.log(perfil1.listarFilmes());
        break;
    case 2:
        console.log(perfil2.listarFilmes());
        break;
    case 3:
        console.log(perfil3.listarFilmes());
        break;
    default:
        console.log("Opção inválida");
        break;
}
