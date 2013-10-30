
var assert = require('assert');
var express = require('express');
var redirect = require('..');
var request = require('supertest');

describe('redirect', function (done) {
  it('should redirect the request', function (done) {
    var app = express();
    app.get('/signin', redirect('/login'));
    request(app)
      .get('/signin')
      .expect(301)
      .end(function (err, res) {
        assert(!err);
        assert(res.headers.location === '/login');
        done();
      });
  });
});