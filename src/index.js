'use strict';

var pkg = require('../package.json');

module.exports = {
    command: 'install [plugins...]',
    description: pkg.description,
    options: [
        [ '-r, --registry <registry>', 'change npm registry', 'https://registry.npm.taobao.org' ]
    ],    
    action: function(plugins, options) {
        // console.log('deploying', plugins, options);
    }
}