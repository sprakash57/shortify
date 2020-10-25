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

describe('delete endpoint', () => {
  beforeAll(async () => {
      await request(server).delete('/api/deleteAll').send();
      await request(server).post('/api/create').send({ inputUrl: 'first.url' });
      await request(server).post('/api/create').send({ inputUrl: 'second.url' });
  });

  it('should contain 2 shorties', async () => {
      const res = await request(server).get('/api/')
      expect(res.body.length).toEqual(2);
  })

  it('should delete all shorties', async () => {
      const res = await request(server).delete('/api/deleteAll').send();
      expect(res.body.deletedCount).toEqual(2);
  })

  it('should be empty', async () => {
      const res = await request(server).get('/api/')
      expect(res.body.length).toEqual(0);
  })
})