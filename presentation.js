var readline = require('readline');
var service = require('./service.js');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function start() {
    console.log("1. Lister les clients \n2. Ajouter un client\n99. Sortir");

    rl.question('Veuillez choisir une option dans le menu : ', function (saisie) {
        if (saisie === '1') {
            console.log(`Vous avez saisi : ${saisie}`);
            console.log(">> Liste des clients");
            service.listerClients(
                function (listeClient) {
                    listeClient.forEach(el => console.log(el.nom + ' ' + el.prenoms));
                    start();
                }, function (err) {
                    console.log('oops', err);
                    start();
                })
        }
        else if (saisie === '2') {
            console.log(`Vous avez saisi : ${saisie}`);
            rl.question('Entrez le nom du client : ', function (saisieNom) {

                rl.question('Entrez le prénom du client : ', function (saisiePrenom) {

                    service.ajouterClient(saisieNom, saisiePrenom, function (clientAjoute) {
                        console.log('Client créé uuid =', clientAjoute.uuid);
                        start();
                    }, function (err) {
                        console.log('oops', err);
                        start();
                    })

                })
            })
        }
        else if (saisie === '99') {
            console.log(`Vous avez saisi : ${saisie}`);
            console.log("Aurevoir");
            rl.close();
        }
    });
}
start();

exports.fonctionStart = start;