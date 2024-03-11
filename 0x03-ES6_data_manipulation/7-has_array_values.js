export default function hasValuesFromArray(newSet, array){
    for (const x of array){
        if (!newSet.has(x)){
            return false;
        };
    }
    return true;
}