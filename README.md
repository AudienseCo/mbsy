mbsy
====

Leightweight Node.js wrapper for the [Ambassador](https://getambassador.com) API.

### Usage

    var msby = require('./').createClient(<Company_Username>, <API_Key>);

    msby.Ambassador.get(
        {
            email: 'ambassador@example.com',
            auto_create: 1,
        },
        function(err, data) {
            console.log(err, data);
        }
    );