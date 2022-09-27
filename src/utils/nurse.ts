export function oneOf(value:any, valList:any[]) {
    for(let i=0;i<valList.length;i++) {
        if (value === valList[i]) {
            return true;
        }
    }
    return false;
}