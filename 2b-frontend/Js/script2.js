let matriz = [];

let linhas = 4;
let colunas = 5;

for(i = 0; i < linhas; i++){
    matriz[i] = [];
    for(j = 0; j < colunas; j++){
        switch(i){
            case 0:
                matriz[i][j] = (j + 1)  * 2;
                break;
            case 1:
                matriz[i][j] = (j + 1) * 3;
                break;
            case 2:
                matriz[i][j] = (j + 1) * 4;
                break;
            case 3:
                matriz[i][j] = (j + 1) * 5;
                break;
            default:
                console.log("Out of range");
        }
    }
}
console.log(matriz);