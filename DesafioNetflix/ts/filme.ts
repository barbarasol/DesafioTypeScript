export class Filme{
    private _nome: string;
    private _diretor: string;
    private _ano: number;
    private _categoria: string;
    private _classificacao: string;

    constructor(nome: string, diretor: string, ano: number, categoria: string, classificacao: string){
        this._nome = nome;
        this._diretor = diretor;
        this._ano = ano;
        this._categoria = categoria;
        this._classificacao = classificacao;
    }
    get nome() : string{
        return this._nome;
    }
    get diretor() : string{
        return this._diretor;
    }
    get ano() : number{
        return this._ano;
    }
    get categoria() : string{
        return this._categoria;
    }
    get classificacao() : string{
        return this._classificacao;
    }
}