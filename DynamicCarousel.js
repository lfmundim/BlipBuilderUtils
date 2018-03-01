/* 
O Extras deve ter o seguinte formato:
{ 
        "bands":[
            "Whatever|Hora1|Palco1|PicUrl", 
            "test|Hora2|Palco2|PicUrl"
        ]
};

Passar para o JS o contact.extras e usar a function acima
*/
function run(){
    // var teste = {
    //     "bands":[
    //         "Whatever|Hora1|PalcoA|https://avatars2.githubusercontent.com/u/4944728?s=400&v=4", 
    //         "test|Hora2|PalcoB|https://avatars2.githubusercontent.com/u/15164001?s=460&v=4"
    //     ]
    // };
    // var extrasStr = JSON.stringify(teste);
    var extrasStr = JSON.stringify(contact.extras);
    var extrasObj = JSON.parse(extrasStr);
    var bands = extrasObj.bands;
    
    var carousel = { 
            itemType:"application/vnd.lime.document-select+json",
            items:[{}]
    }
    var itemCounter = 0;
    for(band in bands){
        var tokens = bands[band].split("|");
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
    // document.write(JSON.stringify(carousel));
    return JSON.stringify(carousel);
}