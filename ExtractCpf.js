/* 
Extrai o cpf em meio de qualquer frase típica, podendo conter os tokens:
Espaço; hífen; ponto
Preenche com zeros à esquerda
*/
function run(cpf){
    var regex = new RegExp('\\b(\\d{1,3}[\\.|\\s|\\-]*\\d{3}[\\.|\\s|\\-]*\\d{3}[\\.|\\s|\\-]*\\d{2})\\b');
    var matches = cpf.match(regex);
    extracted = matches[0].replace(/\./g, "").replace(/\-/g, "").replace(/\s/g, "");
    extracted = extracted.padStart(11, '0');
    return extracted;        
}