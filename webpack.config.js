/**
 * Created by faris on 10/19/2016.
 */
(function(){
    var env = "dev";
    switch(env){
        case 'prod':
            module.exports = require('./config/webpack.prod.js');
            break;
        case 'test':
            module.exports = require('./config/webpack.test.js');
            break;
        case 'dev':
            module.exports = require('./config/webpack.dev.js');
    }
})();
