const request = require('supertest')
const expect = require('chai').expect
const app = require('../index')
var assert = require('assert')

describe('GET /', function () {
  describe('/', function () {
    it('should response 200', function (done) {
      request(app)
    .get('/')
    .expect(200, done)
    })
  })

  describe('/about', function () {
    it('should response 404', function (done) {
      request(app)
    .get('/about')
    .expect(404, done)
    })
  })
})

describe('CRUD taco test', function () {
  describe('GET/tacos', function () {
    it('should return all tacos', function (done) {
      request(app)
      .get('/tacos')
      .end(function (err, response) {
        // console.log(response.status)
        expect(response.status).to.equal(200)
        // assert.strictEqual(200, response.status) same as above
        expect(response.body).to.be.an('array')
        // console.log(response.body[0])
        if (response.body.length) {
          expect(response.body[0]).to.have.property('amount')
        }
        done()
      })
    })
  })

  describe('POST/tacos', function () {
    it('should create new taco', function (done) {
      request(app)
      .post('/tacos')
      .send({
        name: 'apa ini',
        amount: 1000
      })
      .end(function (err, response) {
        done()
      })
    })
  })
})
