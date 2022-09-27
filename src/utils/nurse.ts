export function oneOf(value:string, valList:string[]) {
    for(let i=0;i<valList.length;i++) {
        if (value === valList[i]) {
            return true;
        }
    }
    return false;
}