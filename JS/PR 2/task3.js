let i = 0;
let change;
change = Number(prompt(change));
document.write(change + "<br>")
while(change > 0){
    if(change >= 25){
        i++;
        change = change - 25;
    }
    else if(change >= 10){
        i++;
        change = change - 10;
    }
    else if(change >= 5){
        i++;
        change = change - 5;
    }
    else if(change >= 1){
        i++;
        change = change - 1;
    }
}
document.write(i + "<br>")