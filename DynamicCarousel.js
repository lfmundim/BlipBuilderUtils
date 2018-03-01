function run(){
    var teste = {
        "bands":[
            "Whatever|Hora1|PalcoA|https://avatars2.githubusercontent.com/u/4944728?s=400&v=4", 
            "test|Hora2|PalcoB|https://avatars2.githubusercontent.com/u/15164001?s=460&v=4"
        ]
    };
    // var extrasStr = JSON.stringify(contact.extras);
    var extrasStr = JSON.stringify(teste);
    var extrasObj = JSON.parse(extrasStr);
    var bands = extrasObj.bands;
    var first = true;
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


// var bandsJson = { 
//     "bands":["Whatever"],
//     "times":{"test":2,"Whatever":"13:40"}
// };
// var contactStr = JSON.stringify(bandsJson);
// var contactObj = JSON.parse(contactStr);
// var bands = contactObj.bands;
//   var times = contactObj.time;
// for(band in bands){
// document.write("<br>"+bands[band]+times[bands[band]]);
// };

/* 
O Extras deve ter o seguinte formato:
{ 
    "extras":{
        "bands":[
            "Whatever|Hora1", 
            "test|Hora2"
        ]
    }
};

Passar para o JS o contact.extras e usar a function acima
*/