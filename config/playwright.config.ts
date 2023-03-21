import test, {PlaywrightTestConfig} from '@playwright/test'

const config: PlaywrightTestConfig = {
    globalTimeout : 60000,
    timeout: 20000,
    retries : 0,
    testDir: '../tests/e2e',
    use : {
        baseURL: "http://zero.webappsecurity.com",
        headless : true,
        viewport : { width: 1980, height: 1080 },
        actionTimeout: 15000,
        ignoreHTTPSErrors: true,
        video: "on",
        screenshot: "on",
        trace: "on"
    },
    reporter: [
        ['html'],
        //['allure-playwright'] // you use "experimental-allure-playwright" package
    ],
    projects: [
        {
            name: "Chromium",
            use: {
                //browserName: "chromium"
                channel: "chrome"
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