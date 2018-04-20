/* 
Deve receber o cpf extraído (e padLeft-ed com 0's até ter 11 caracteres) e sem tokens (espaço, -, ., etc)
*/

function run(extracted){
    var cpfTokens = extracted.split('').map(Number);
    var distinct = false;
    for(i=0; i<cpfTokens.length-1; i++)
        if(cpfTokens[i] != cpfTokens[i+1]){
            distinct = true;
            break;
        }
        
    if(!distinct) return false.toString();
    var digits = cpfTokens.slice(0,9); //9 digits
    var verifier = cpfTokens.slice(9,11); //verifier 2 digits
    var firstSum = 0;
    var secondSum = 0;

    for(i=10, j=0; i>1; i--, j++){
        firstSum += digits[j]*i;
        secondSum += digits[j]*(i+1);
    }
    secondSum += verifier[0]*2;
    var first = firstSum*10%11;
    var second = secondSum*10%11;
    if(first == 10 || first == 11) first = 0;
    if(second == 10 || second == 11) second = 0;
    if(first != verifier[0] || second != verifier[1]) return false.toString();
    return true.toString();               
}