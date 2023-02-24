const concurrently = require('concurrently');
const upath = require('upath');

const browserSyncPath = upath.resolve(upath.dirname(__filename), '../node_modules/.bin/browser-sync');

const { result } = concurrently([
    { command: 'node --inspect scripts/watch.js', name: 'WATCH', prefixColor: 'bgBlue.bold' },
    { 
        command: `${browserSyncPath} dist -w --no-online`,
        name: 'SYNC', 
        prefixColor: 'bgBlue.bold',
    }
], {
    prefix: 'name',
    killOthers: ['failure', 'success'],
});

result.then(success, failure);

function success() {
    console.log('Success');    
}

function failure() {
    console.log('Failure');
}