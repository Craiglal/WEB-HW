function toArray(num){
    let arr = []
    for(let i = 0; num != 0; i++){
        arr[i] = num % 10;
        num = parseInt(num / 10);
    }
    return arr.reverse();
}

function checkNum(arr){
    let sum = 0;
    arr = arr.reverse();
    for(let i = 1, t = 0; i < arr.length; i += 2){
        t = arr[i] * 2;
        if (t > 9)
            t = t % 10 + parseInt(t / 10);
        arr[i] = t;
    }

    for(let i = 0; i < arr.length; i++)
        sum += arr[i];

    if(sum % 10 == 0)
        return true;
    else
        return false;
}

function checkCard(num){
    let arr = toArray(num);
    if (arr.length == 15 && arr[0] == 3 && (arr[1] == 4 || arr[1] == 7)){
        if(checkNum(arr))
            return "AMEX";
        else
            return "INVALID";
    }
    else if (arr.length == 16 && arr[0] == 5 && (arr[1] >= 1 || arr[1] <= 5)){
        if(checkNum(arr))
            return "MASTERCARD";
        else
            return "INVALID";
    }
    else if ((arr.length == 13 || arr.length == 16) && arr[0]==4 ){
        if(checkNum(arr))
            return "VISA";
        else
            return "INVALID";
    }
    else
        return "INVALID";
}

console.log(checkCard(378282246310005));
console.log(checkCard(371449635398431));
console.log(checkCard(5555555555554444));
console.log(checkCard(5105105105105100));
console.log(checkCard(4012888888881881));
console.log(checkCard(4012888888881880));
console.log(checkCard(1234567890));