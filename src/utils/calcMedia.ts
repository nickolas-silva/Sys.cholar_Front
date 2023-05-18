import { NotaItem } from "../types";

function toMedia(nota:number):number{
    return parseFloat(nota.toFixed(1));
}

function calcMedia({ nota01, nota02, nota03 ,nota04}:NotaItem<number>):string{
    if(!(nota01 && nota02 && nota03)){
        return '--';
    }
    let media: number = (nota01 + nota02 + nota03) / 3;
    media = toMedia(media);

    if(media < 7 && nota04 !== null){
        media = (media + nota04)/2;
        media = toMedia(media);
    }
    return media.toString();
}

export default calcMedia;