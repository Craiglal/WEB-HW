let m = Number(prompt('Enter m: '));


for(let i = 1; i <= m; i++){
    for(let j = 1; j <= m * 2 + 2; j++){
        if((j - (m + 2) == i) && (j > m + 2))
            document.write('#');
        else if(j == m - i + 1)
            document.write('#');
        else if((j - m - 2 < i) && (j > m + 2))
            document.write('#');
        else if((j + i > m + 1) && (j <= m))
            document.write('#');
        else if(j == m)
            document.write('*');
        else
            document.write('*');
    }
    document.write("<br>");
}