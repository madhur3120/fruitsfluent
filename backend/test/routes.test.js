process.env.NODE_ENV = 'test';

const assert = require('assert');
const request = require('supertest');
const app = require('../app');
const product = require('../models/productmodel')
const user = require("../models/usermodel");


///////////
// const app = require("./app");
const connectdatabase = require("../config/db");

// Connecting to database
connectdatabase();
///////////


let chai = require('chai');
let chaiHttp = require('chai-http');
let server = app;
let should = chai.should();
chai.use(chaiHttp);



describe('products', () => {
    let productId;

    before(function () {
        const test_product = {
            name: 'Test product',
            price: 10,
            description: 'Test description',
        };
        const newProduct = new product(test_product)
        newProduct
            .save()
            .then(() => {
                assert(!newProduct.isNew);
                productId = newProduct._id
                console.log(productId)
            })
            .catch((err) => {
                console.log("error: ", err);
            });
    });

    after(function () {
        // async delete_test_product() {
        //   await product.deleteOne({ _id: productId });
        // }
        // delete_test_product();

        product.deleteOne({ _id: productId })
            .then(() => {
            })
    })


    describe('/GET /products/all', () => {
        it('it should return array of products', (done) => {
            chai.request(server)
                .get('/products/all')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('data');
                    res.body.data.should.be.a('array');
                    done();
                });
        });
    });
    // Test GET /products/all/:id
    describe('GET /products/all/:id', () => {
        it('should return a product by ID', (done) => {
            chai.request(server)
                .get('/products/all/' + productId)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('data');
                    res.body.data.should.have.property('_id');
                    // console.log(res.body.data);
                    done();
                })
        });

        // it('should return 404 for non-existent product', (done) => {
        //     request(app)
        //         .get('/products/all/nonexistent-id')
        //         .expect(404, done);
        // });
    });

    describe('POST /register', () => {
        const newUser = {
            "name": "niki",
            "email": "kuber@gmail.com",
            "address": "shree",
            "password": "srri231",
            "totalorders": 0
        }
        it('register new user, must return msg 0', (done) => {
            chai.request(server)
                .post('/user/register')
                .send(newUser)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.be.a('object');
                    res.body.should.have.property('msg', '0');
                    done();
                })
        })
    })

    describe("users test", () => {
        let user_email;
        let user_password;

        before(function () {
            const test_login = {
                name: 'vamshi',
                email: 'nithin@gmail.com',
                address: 'sri city',
                password: 'pass123',
                totalorder: 0
            };
            const newuser = new user(test_login)
            newuser
                .save()
                .then(() => {
                    console.log(" user created .... !!")
                    user_email = newuser.email
                    user_password = newuser.password
                    console.log(user_email)
                })
                .catch((err) => {
                    console.log("error: ", err);
                    done();
                });
        });
        after(function () {
            user.deleteOne({ email: user_email })
                .then(() => {
                })
        })
        describe('post /login', () => {
            it('login new user must return msg 1', (done) => {
                chai.request(server)
                    .post('/user/login')
                    .send({ email: user_email, password: user_password })
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.have.be.a('object');
                        // res.body.should.have.property('data');
                        res.body.should.have.property('msg', '0');
                        done();
                    })
            })
        })

    });
});
