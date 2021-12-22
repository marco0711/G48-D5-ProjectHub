var Express =require("express");
var bodyParser = require("body-parser");
const { request, response } = require("express");
var app = Express();
app.use(bodyParser.json());
app.unsubscribe(bodyParser.urlencoded({extended: true}));
app.listen(49146,()=> {});
var data='[{"NomeProgetto":"Progetto-A", "Descrizione":"bla bla bla bla","CompetenzeRichieste" : "Comp.1,Comp.3"},{"NomeProgetto":"Progetto-B", "Descrizione":"bla bla bla bla","Competenze Richieste" : "Comp.2,Comp.4"},{"NomeProgetto":"Progetto-C", "Descrizione":"bla bla bla bla","Competenze Richieste" : "Comp.1,Comp.2"},{"NomeProgetto":"Progetto-D", "Descrizione":"bla bla bla bla","CompetenzeRichieste" : "Comp.4,Comp.5"},{"NomeProgetto":"Progetto-E", "Descrizione":"bla bla bla bla","CompetenzeRichieste" : "Comp.7,Comp.2"},{"NomeProgetto":"Progetto-F", "Descrizione":"bla bla bla bla","CompetenzeRichieste" : "Comp.2,Comp.1"}]';

app.get(data,(request,response) =>{

    var obj=JSON.parse(data);

    response.send(obj);
})

app.post(data,(request,response) =>{

    var obj=JSON.parse(data);

    let newPoject={ 
        "NomeProgetto": request.body['NomeProgetto'],
        "Descrizione": request.body['Descrizione'],
        "CompetenzeRichieste": request.body['CompetenzeRichieste']
};

obj.data.push(newPoject);

})