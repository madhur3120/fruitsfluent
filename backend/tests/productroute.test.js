const assert = require('assert');
const request = require('supertest');
const app = require('../app');

describe('Product API tests', () => {
    let productId;

    // Test GET /products/all
    describe('GET /products/all', () => {
        it('should return an array of products', (done) => {
            request(app)
                .get('/products/all')
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    assert(Array.isArray(res.body.data), 'Response should be an array');
                    done();
                });
        });
    });

    // Test GET /products/all/:id
    describe('GET /products/all/:id', () => {
        it('should return a product by ID', (done) => {
            request(app)
                .get('/products/all/' + productId)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    assert(res.body.data, 'Response should not be empty');
                    assert.strictEqual(res.body.data._id, productId, 'Response should match ID');
                    done();
                });
        });

        it('should return 404 for non-existent product', (done) => {
            request(app)
                .get('/products/all/nonexistent-id')
                .expect(404, done);
        });
    });

    before((done) => {
        // Create a test product before running tests
        const product = {
            name: 'Test product',
            price: 10,
            description: 'Test description',
        };
        request(app)
            .post('/products')
            .send(product)
            .end((err, res) => {
                if (err) return done(err);
                productId = res.body.data._id;
                done();
            });
    });

    after((done) => {
        // Remove the test product after running tests
        request(app)
            .delete('/products/' + productId)
            .end(done);
    });
});
