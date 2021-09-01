module.exports = {
    title: 'VVR TECH DOC',
    description: 'Get everything related to VANVRAPP here.',
    base: "/vanvrapp-techDoc/",
    themeConfig: {
        sidebar: {
            '/': getMainSidebar(),
        }
    }
}

function getMainSidebar() {
    return [
        {
            text: 'Vanvrapp Webgl',
            children: [
                { text: 'Data', link: '/vanvr-webgl/Data' },
                { text: 'UI and Control', link: '/vanvr-webgl/UiAndControl' },
                { text: 'Camera', link: '/vanvr-webgl/Camera' },
                { text: 'Setting', link: '/vanvr-webgl/Setting' },
                { text: 'View', link: '/vanvr-webgl/View' },

            ]
        },
        {
            text: 'Vanvrapp Facilitator',
            children: [
                { text: 'Components', link: '/vanvr-facilitator/Components' },
                { text: 'Apis', link: '/vanvr-facilitator/Apis' },
                { text: 'Next Step', link: '/vanvr-facilitator/NextStep' },

            ]
        },
        {
            text: 'Vanvrapp Gyro',
            children: [{
                text: 'Network', link: '/vanvr-gyro/Network',

            }, {
                text: 'Control', link: '/vanvr-gyro/Control',

            }, {
                text: 'Next Step', link: '/vanvr-gyro/NextStep',

            }]
        },
        {
            text: 'Vanvrapp Deployment',
            children: [{ text: 'Vanvr', link: '/vanvr-deployment/vanvr' },
            { text: 'Facilitator', link: '/vanvr-deployment/facilitator' },
            { text: 'Gyro-Mobile', link: '/vanvr-deployment/gyro-mobile' },


            ]
        }
    ]
}