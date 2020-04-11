const app = require("../index");
const supertest = require("supertest");
const request = supertest(app);
const endpoint = "/"


// test currently not working
it ( "gets the index route", async done => {
    const res = await request.get (endpoint)

    expect (res.status).toBe (200)
}); 