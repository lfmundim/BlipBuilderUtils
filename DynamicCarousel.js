/* 
O extras.bands deve ter o seguinte formato: Banda|Horario|Palco|Imagem, Banda|Horario|Palco|Imagem etc

Passar para o JS o contact.extras.bands e usar a function abaixo
*/
function run(bands){
    // var teste = 'Red Hot Chili Peppers|21h10|Budweiser, Spoon|16h20|Budweiser|http://cdn.shopify.com/s/files/1/2597/4406/t/3/assets/logo-image-file.png?9234837408454138220,';
    var bandTokens = bands.split(",");    
    var carousel = { 
            itemType:"application/vnd.lime.document-select+json",
            items:[{}]
    }
    var itemCounter = 0;
    for(band in bandTokens){
        if(tokens.length < 3) break;
        var tokens = bandTokens[band].split("|");
        var newItem = {
            "header":
            {
                "type":"application/vnd.lime.media-link+json",
                "value":{
                    "title":tokens[0],
                    "text":tokens[1] + " no palco " + tokens[2],
                    "type":"image/jpeg",
                    "uri":tokens[3]
                }
            },
            "options":[
                {
                    "label":{
                        "type":"text/plain",
                        "value":"Remover"
                    }
                }
            ]
        };  
        carousel.items.push(newItem); 
    };
    //  document.write(JSON.stringify(carousel));
  return JSON.stringify(carousel);        
}