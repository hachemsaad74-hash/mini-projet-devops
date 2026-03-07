const request = require('supertest');
const server = require('../app');

describe('GET /', () => {
    let testServer;

    beforeAll((done) => {
        testServer = server.listen(0, done); // 0 means random port
    });

    afterAll((done) => {
        testServer.close(done);
    });

    it('should return 200 and correct message', async () => {
        const response = await request(testServer)
            .get('/')
            .expect(200)
            .expect('Content-Type', /json/);

        expect(response.body).toEqual({
            message: "Application DevOps opérationnelle"
        });
    });
});
