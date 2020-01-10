
const server = require("../api/server.js");
const db = require("../data/dbConfig.js");
const request = require("supertest");

describe("users-router.js", () => {
  
    beforeEach(async () => {
    await db("users").del();
  });
  
  describe('GET /api/users', () => {
    it('should return an array with a 200 http status code', () => {
      return request(server)
        .post('/api/register')
        .send({ username: "Rome", password: "I am a fashion icon." })
        .then(r=>{
        //   console.log("R", r)
          return request(server)
          .post('/api/login')
          .send({ username: "Rome", password: "I am a fashion icon." })
          .then(re=>{
            // console.log("RE", re)
            return request(server)
            .get('/api/users')
            .set('Authorization', re.body.token)
            .then(res=>{
            //   console.log('Response', res)
              expect(res.type).toMatch(/json/i);
              expect(res.status).toEqual(200);
              expect(Array.isArray(res.body)).toBe(true)
            })
          })
        })
    });
  });

  describe('GET /api/users/current', () => {
    it('should return json with a 200 http status code and current username', () => {
      return request(server)
        .post('/api/register')
        .send({ username: "Rome", password: "I am a fashion icon." })
        .then(r=>{
        //   console.log("R", r)
          return request(server)
          .post('/api/login')
          .send({ username: "Rome", password: "I am a fashion icon." })
          .then(re=>{
            // console.log("RE", re)
            return request(server)
            .get('/api/users/current')
            .set('Authorization', re.body.token)
            .then(res=>{
            //   console.log('Response', res)
              expect(res.type).toMatch(/json/i);
              expect(res.status).toEqual(200);
              expect(res.body.currentUsername).toMatch('Rome');
            })
          })
        })
    });
  });

});