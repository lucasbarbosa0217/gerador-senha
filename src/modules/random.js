function random(min, max){
    return Math.floor(Math.random() * (max - min +1) -min)
}

export function randomString(){
    const charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return charList[random(0, charList.length -1)];
}

export function randomSpecial(){
    const charList =`!@#$%_&*(){}^:?;><.,-+.=`
    return charList[random(0, charList.length -1)];
}

export function randomNumber(){
    return String(random(0, 9))
}

export function randomLowerCaseString(){
    
    return randomString().toLocaleLowerCase();
}