

export function capitalize(str) {
    if (!str) return '';    
    return str.charAt(0).toUpperCase() + str.slice(1);
    
}
 
export function reverse(str) {
    if (!str) return '';
    return str.split("").reverse().join("");
}

export function contains(str, substr) {
    if (!str || !substr) return false;
    return str.includes(substr);
}


export default{capitalize, reverse, contains};