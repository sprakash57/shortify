import server from '../server';
import request from 'supertest';
import Weburl from '../model/Weburl';
import uniqueUrl from '../libs/urlGenerator';

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

describe('Delete endpoint', () => {
    it('should delete a post input url', async () => {
        const url = new Weburl({ inputUrl: 'some url', shortUrl: uniqueUrl() });
        const response = await request(server).delete('/api/delete/' + url.id);
        expect(response.body.message).toEqual('Url deleted');
    })
})

describe('DeleteAll endpoint', () => {
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