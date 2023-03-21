import {PlaywrightTestConfig} from '@playwright/test'

const config: PlaywrightTestConfig = {
    globalTimeout : 60000,
    retries : 0,
    testDir: 'tests/api',
    use : {
        //baseURL: "http://zero.webappsecurity.com",
        headless : true,
        /*viewport : { width: 1980, height: 1080 },
        actionTimeout: 20000,
        ignoreHTTPSErrors: true,
        video: "off",
        screenshot: "off",
        trace: "off"*/
    },
    reporter: [
        ['html'],
        //['allure-playwright'] // you use "experimental-allure-playwright" package
    ],
    projects: [
        {
            name: "Chromium",
            use: {
                browserName: "chromium",
            }
        },
        {
            name: "Firefox",
            use: {
                browserName: "firefox"
            }
        },
        {
            name: "Webkit",
            use:{
                browserName: "webkit"
            }
        }
    ]
}

export default config