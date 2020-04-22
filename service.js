const requestPromise = require('request-promise-native')

const baseUrlClients = 'https://hwa-spring.herokuapp.com/clients';

class Service {

    listerClients() {
        // Envoi de la requête http GET /clients?start=0&size=10
        return requestPromise(`${baseUrlClients}?start=0&size=10`, { json: true });
    }

    ajouterClient(saisieNom, saisiePrenom) {
        // Envoi de la requête http POST /clients
        return requestPromise(baseUrlClients, {
            json: true,
            method: 'POST',
            body: {
                nom: saisieNom,
                prenoms: saisiePrenom
            }
        });
    }

}

exports.Service = Service