import test, {PlaywrightTestConfig} from '@playwright/test'

const config: PlaywrightTestConfig = {
    workers : 1,
    fullyParallel: false,
    globalTimeout : 20000,
    maxFailures : 10,
    timeout: 20000,
    retries : 0,
    testDir: '../tests/param',
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
                channel: "chrome",
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