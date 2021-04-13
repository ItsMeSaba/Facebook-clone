const functions = require('firebase-functions');
const algoliaSearch = require('algoliasearch');

const APP_ID = functions.config().algolia.app; 
const ADMIN_ID = functions.config().algolia.admin; 

const clients = algoliaSearch(APP_ID, ADMIN_ID);
const fbUser = clients.initIndex('fbCloneUsers');


module.exports.addUsers = functions.firestore.document('users/{userID}')
    .onCreate(snapshot => {
        const data = snapshot.data();
        const objectID  = snapshot.id;

        return fbUser.saveObject({ ...data, objectID });
    })

module.exports.updateUsers = functions.firestore.document('users/{userID}')
    .onUpdate(snapshot => {
        const data = snapshot.after.data();
        const objectID = snapshot.after.id;

        return fbUser.saveObject({ ...data, objectID });
    })

module.exports.daleteUsers = functions.firestore.document('users/{userID}')
    .onDelete(snapshot => fbUser.deleteObject(snapshot.id));