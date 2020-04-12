const app = require("../index")
const supertest = require("supertest")
const request = supertest(app)

describe('Basic Test', () => {
    it('gets the index endpoint', async done => {
    const response = await request.get('/')

    expect(response.status).toBe(200)
    done()
    })
})