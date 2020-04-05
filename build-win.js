const builder = require('electron-builder');

builder.build({
    config: {
        'appId': 'local.test.app1',
        'win':{
            'target': {
                'target': 'zip',
                'arch': [
                    'x64'
                ]
            }
        }
    }
});
