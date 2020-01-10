
const server = require("../api/server.js");
const db = require("../data/dbConfig.js");
const request = require("supertest");

describe("product-router.js", () => {
  
    beforeEach(async () => {
    await db("products").del();
  });
  
  describe('GET /api/products', () => {
    it('should return an array with a 200 http status code', () => {
      return request(server)
        .post('/api/register')
        .send({ username: "Milan", password: "I am a fashion icon." })
        .then(r=>{
        //   console.log("R", r)
          return request(server)
          .post('/api/login')
          .send({ username: "Milan", password: "I am a fashion icon." })
          .then(re=>{
            // console.log("RE", re)
            return request(server)
            .get('/api/products')
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

  describe('POST /api/:id/products', () => {
    it('should return an object with correct data with a 201 http status code', () => {
      return request(server)
        .post('/api/register')
        .send({ username: "Florence", password: "I am a fashion icon." })
        .then(r=>{
        //   console.log("R", r)
          return request(server)
          .post('/api/login')
          .send({ username: "Florence", password: "I am a fashion icon." })
          .then(re=>{
            // console.log("RE", re)
            return request(server)
            .post(`/api/${r.body.id}/products`)
            .send({	category: "Other",
            market_area: "Ethiopia",
            name: "Groundnuts",
            description: "12 pounds",
            price: "500.00 ED",
            image_url: "https://imgur.com/KQPxtCM"})
            .set('Authorization', re.body.token)
            .then(res=>{
              console.log('RESPONSE1', res)
              expect(res.status).toEqual(201);
              expect(res.body.id);
              expect(res.body.market_area).toBe('Ethiopia')
            })
          })
        })
    });
  });

//   describe('DELETE /api/products/:id', () => {
//     it('should return an object with correct data with a 201 http status code', () => {
//       return request(server)
//         .post('/api/register')
//         .send({ username: "Athens", password: "I am a fashion icon." })
//         .then(r=>{
//         //   console.log("R", r)
//           return request(server)
//           .post('/api/login')
//           .send({ username: "Athens", password: "I am a fashion icon." })
//           .then(re=>{
//             // console.log("RE", re)
//             return request(server)
//             .post(`/api/${r.body.id}/products`)
//             .send({	category: "Fruit",
//             market_area: "Ethiopia",
//             name: "Groundnuts",
//             description: "12 pounds",
//             price: "500.00 ED",
//             image_url: "https://imgur.com/KQPxtCM"})
//             .set('Authorization', re.body.token)
//             .then(res=>{
//               console.log('RESPONSE2', res)
//               return request(server)
//               .del(`/api/products/${res.body.id}`)
//               .then(resp=>{
//             //   console.log('RESP', resp)
//               expect(resp.status).toEqual(200);
//               })
//             })
//           })
//         })
//     });
//   });

});