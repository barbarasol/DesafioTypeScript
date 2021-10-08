import { Filme } from "./filme.js";
import { FilmeFavorito } from "./filmesfavoritos";

export class Perfil{
    private _nome: string;
    private _email: string;
    private _idade: number;
    public lista = new FilmeFavorito();
    private _usuario: string;
    private _senha: string;
    private _logado: boolean;

    constructor(nome: string, email: string, idade: number, usuario: string, senha: string){
        this._nome = nome;
        this._email = email;
        this._idade = idade;
        this._usuario = usuario;
        this._senha = senha;
        this._logado = false;
    }
    
    get nome() : string{
        return this._nome;
    }
    get email() : string{
        return this._email;
    }
    get idade() : number{
        return this._idade;
    }

    adicionaFilme(filme: Filme){
        this.lista.adiciona(filme);
    }

    listarFilmes(): readonly Filme[]{
        return this.lista.listar();
    }

    logarUsuario(user: string, senha: string){
        if(this._usuario === user && this._senha === senha){
            this._logado = true;
            console.log('Perfil logado.');
        }else{
            console.log('Usuário ou senha inválidos');
        }
    }
    
}