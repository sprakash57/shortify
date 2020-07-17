import server from '../server';
import request from 'supertest';

describe('Get endpoint', () => {
    it('should fetch all the urls', async () => {
        const res = await request(server).get('/api/')
        expect(res.status).toEqual(200);
    })
    it('should post input url', async () => {
        const res = await request(server).post('/api/create').send({ inputUrl: 'some url' });
        expect(res.body.inputUrl).toEqual('some url');
    })
})