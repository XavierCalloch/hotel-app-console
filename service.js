var request = require('request');
var baseUrlClients = 'http://localhost:8080/clients';

function listerClients(callbackSuccess, callbackErr) {
    // Envoi de la requête http GET /clients?start=0&size=10
    request(baseUrlClients + '?start=0&size=10', { json: true }, function (err, res, body) {
        if (err) {
            callbackErr(err)
        } else {
            callbackSuccess(body)
        }
    });
}

exports.listerClients = listerClients;

function ajouterClient(saisieNom, saisiePrenom, callbackSuccess, callbackErr) {
    // Envoi de la requête http POST /clients
    request(baseUrlClients, {
        json: true,
        method: 'POST',
        body: {
            nom: saisieNom,
            prenoms: saisiePrenom
        }
    }, function (err, res, body) {
        if (err) {
            callbackErr(err)
        } else {
            callbackSuccess(body)
        }
    });
}

exports.ajouterClient = ajouterClient;