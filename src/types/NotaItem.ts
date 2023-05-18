
interface NotaItem<T>{
    id?:number,
    nome:string,
    nota01:T,
    nota02:T,
    nota03:T,
    nota04:T
}

export default NotaItem;