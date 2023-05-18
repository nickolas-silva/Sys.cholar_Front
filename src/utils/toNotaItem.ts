import { NotaItem } from "../types";


function toValidString(num:number):string{
    return num ? num.toString() : '';
}


function toValidNumber(str:string):number{
    return str==='' ? null : parseFloat(str);
}

export function toNotaItemString({id,nome,nota01,nota02,nota03,nota04}:NotaItem<number>):NotaItem<string>{
    return {
        id:id,
        nome:nome,
        nota01:toValidString(nota01),
        nota02:toValidString(nota02),
        nota03:toValidString(nota03),
        nota04:toValidString(nota04)
    } 
}


export function toNotaItemNumber({id,nome,nota01,nota02,nota03,nota04}:NotaItem<string>):NotaItem<number>{
    return {
        id:id,
        nome:nome,
        nota01:toValidNumber(nota01),
        nota02:toValidNumber(nota02),
        nota03:toValidNumber(nota03),
        nota04:toValidNumber(nota04)
    } 
}
