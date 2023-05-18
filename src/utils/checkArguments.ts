
function checkId(path:string,id:number):string{
    const arg:string = id ? `/${id}` : '';
    return `${path}${arg}`
}

export default checkId;