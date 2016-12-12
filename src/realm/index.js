const Realm = require('realm');

let realm = new Realm({
    schema: [{ name: '', properties: { name: 'string' } }]
});

realm.write(() => {
    realm.create('', { name: '' });
});


