const readline = require('readline');
const { Service } = require('./service')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const service = new Service()

class Presentation {

    start() {
        console.log('1. Lister les clients \n2. Ajouter un client\n99. Sortir');
    
        rl.question('Veuillez choisir une option dans le menu : ', saisie => {
    
            if (saisie === '1') {
                console.log(`Vous avez saisi : ${saisie}`);
                console.log('>> Liste des clients');
                service.listerClients()
                    .then(listeClient => {
                        listeClient.forEach(el => console.log(`${el.nom} ${el.prenoms}`));
                        start();
                    })
                    .catch(err => {
                        console.log('oops', err);
                        start();
                    })
            }
            else if (saisie === '2') {
                console.log(`Vous avez saisi : ${saisie}`);
                rl.question('Entrez le nom du client : ', saisieNom => {
    
                    rl.question('Entrez le prénom du client : ', saisiePrenom => {
    
                        service.ajouterClient(saisieNom, saisiePrenom)
                            .then(clientAjoute => {
                                console.log('Client créé uuid =', clientAjoute.uuid);
                                start();
                            })
                            .catch(err => {
                                console.log('oops', err);
                                start();
                            })
                    })
                })
            }
            else if (saisie === '99') {
                console.log(`Vous avez saisi : ${saisie}`);
                console.log('Aurevoir');
                rl.close();
            }
        });
    }
}

exports.Presentation = Presentation

const presentation = new Presentation()
presentation.start();