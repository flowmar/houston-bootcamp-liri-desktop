const electron = require('electron');

const {
    app,
    Menu
} = electron;

module.exports = mainWindow => {
    const name = app.getName();

    const template = [{
            label: 'Liri',
            // submenu: [{
            // label: '',
            // accelerator: 'Shift+CmdOrCtrl+E',
            // click: menuItem => {
            // enabledCycleEffect(menuItem.menu.items);
            // mainWindow.webContents.send('effect-cycle');
            // }
            // },
            // {
            // label: 'Vanilla',
            // type: 'radio',
            // click: _ => mainWindow.webContents.send('effect-choose')
            // },
            // {
            // label: 'Ascii',
            // type: 'radio',
            // click: _ => mainWindow.webContents.send('effect-choose', 'ascii')
            // },
            // {
            // label: 'Daltonize',
            // type: 'radio',
            // click: _ => mainWindow.webContents.send('effect-choose', 'daltonize')
            // },
            // {
            // label: 'Hex',
            // type: 'radio',
            // click: _ => mainWindow.webContents.send('effect-choose', 'hex')
            // }
            // ]
        }
        // {
        //     label: '',
        //     submenu: [{
        //         // label: 'Photos Directory',
        //         // click: _ => images.openDir(images.getPicturesDir(app))
        //     }]
        // }
    ]

    if (process.platform === 'darwin') {

        const name = app.getName();

        template.unshift({
            label: name,
            submenu: [{
                    label: 'About ' + name,
                    role: 'about'
                },
                {
                    type: 'separator',
                },
                {
                    label: 'Hide ' + name,
                    accelerator: 'Command+H',
                    role: 'hide'
                },
                {
                    label: 'Hide Others',
                    accelerator: 'Command+Shift+H',
                    role: 'hideothers'
                },
                {
                    label: 'Show all',
                    role: 'unhide'
                },
                {
                    type: 'separator'
                },
                {
                    label: 'Quit',
                    accelerator: 'Command+Q',
                    click: _ => {
                        app.quit();
                    }
                }
            ]
        })
    }

    return template;
}