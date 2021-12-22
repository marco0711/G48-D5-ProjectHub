var test =require('tape');
var request = require ('supertape');
var app = require('../api');

var data='[{"NomeProgetto":"Progetto-A", "Descrizione":"bla bla bla bla","CompetenzeRichieste" : "Comp.1,Comp.3"},{"NomeProgetto":"Progetto-B", "Descrizione":"bla bla bla bla","Competenze Richieste" : "Comp.2,Comp.4"},{"NomeProgetto":"Progetto-C", "Descrizione":"bla bla bla bla","Competenze Richieste" : "Comp.1,Comp.2"},{"NomeProgetto":"Progetto-D", "Descrizione":"bla bla bla bla","CompetenzeRichieste" : "Comp.4,Comp.5"},{"NomeProgetto":"Progetto-E", "Descrizione":"bla bla bla bla","CompetenzeRichieste" : "Comp.7,Comp.2"},{"NomeProgetto":"Progetto-F", "Descrizione":"bla bla bla bla","CompetenzeRichieste" : "Comp.2,Comp.1"}]';
data= JSON.parse(data);

test ('Progetto returned Correttamente', function(t) {
    request(app)
    .get(data)
    .except('Content-Type', /json/)
    .except(200)
    .end(function (err,res){
        var expectedProject =data;
        t.error(err,'No errori');
        t.same(res.body, expectedProject, 'Project as excepted' );
        t.end();
    });
});