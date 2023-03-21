import {APIResponse, expect, test} from '@playwright/test'
import exp from 'constants'

test.describe.parallel("Api testing", () => {
    const baseUri = 'https://reqres.in/api'
    test('Simple API test - Assert response status', async ( {request} ) => {
        const response = await request.get(`${baseUri}/users/2`)
        expect(response.status()).toBe(200)

        const responseBody = JSON.parse(await response.text())
        console.log(responseBody)

        expect(responseBody.data.id)
    })

    test('Simple API test - Assert invalid response status', async ( {request} ) => {
        const response = await request.get(`${baseUri}/users/202`)
        expect(response.status()).toBe(404)
    })

    test('Assert response body', async ( {request} ) => {
        const response = await request.get(`${baseUri}/users/2`)
        expect(response.status()).toBe(200)

        const responseBody = JSON.parse(await response.text())
        console.log(responseBody)

        expect(responseBody.data.id).toBe(2)
        //email: 'janet.weaver@reqres.in'
        expect(responseBody.data.email).toBe('janet.weaver@reqres.in')
    })

    test('Post request - create user', async ( {request} ) => {
        const response = await request.post(`${baseUri}/users`, {
            data:{
                id: '1000'
            }
        })
        expect(response.status()).toBe(201)

        const responseBody = JSON.parse(await response.text())
        console.log(responseBody)

        expect(responseBody.id).toBe("1000")
        expect(responseBody.createdAt).toBeTruthy()
    })

    test('Put request - update user', async ( {request} ) => {
        const response = await request.put(`${baseUri}/users/2`, {
            data:{
                name: 'morpheus',
                job: 'zion resident'
            }
        })
        expect(response.status()).toBe(200)

        const responseBody = JSON.parse(await response.text())
        console.log(responseBody)

        expect(responseBody.name).toBe("morpheus")
        expect(responseBody.job).toBe('zion resident')
    })

    test('Delete request - deleteuser user', async ( {request} ) => {
        const response = await request.delete(`${baseUri}/users/2`)
        expect(response.status()).toBe(204)
    })
} )