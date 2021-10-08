import { Filme } from "./filme.js";

export class FilmeFavorito{
    private listaFavoritos : Filme [] = [];

    adiciona(filme: Filme){
        this.listaFavoritos.push(filme);
    }

    listar() : readonly Filme[]{
        return this.listaFavoritos;
    }
}