const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const sinon = require('sinon');
const User = require('../models/user');
const Paymenthistory = require('../models/paymenthistory');
const jwt = require('jsonwebtoken');


// describe('customerController', () => {

// describe('customer_get', () => {
//     it('should render the customer/index view with a customer object when a valid username is provided', async () => {
//         // Make a GET request to the customer_get route with the specified username
//         const res = await chai.request(host)
//             .get('/customer/user1')
//             .send();

//         // Make assertions about the response
//         res.should.have.status(200);
//         // res.should.be.html;
//     });

//     it('should return a 500 status if an invalid username is provided', async () => {
//         // Make a GET request to the customer_get route with an invalid username
//         const res = await chai.request(host)
//             .get('/customer/nonexistentuser')
//             .send();

//         // Make assertions about the response
//         res.should.have.status(500);
//         res.text.should.contain('/login');
//         res.should.be.html;
//     });
// });

//     describe('customer_view_get', () => {
//         it('should render the customer/view view with a customer object when a valid username is provided', async () => {
//             // Make a GET request to the customer_view_get route with the specified username
//             const res = await chai.request(host)
//                 .get('/customer/user1/view')
//                 .send();
//             res.text.should.contain('/login');


//             // Make assertions about the response
//             res.should.have.status(200);
//             res.should.be.html;
//         });
//     });
// });


//     describe('customer_view_get', () => {
//         it('should render the customer/view view with a customer object when a valid username is provided', async () => {
//             // Make a GET request to the customer_view_get route with the specified username
//             const res = await chai.request(host)
//                 .get('/customer/view/johndoe')
//                 .send();

//             // Make assertions about the response
//             res.should.have.status(200);
//             res.should.be.html;
//             res.text.should.contain('Customer Details');
//             res.text.should.contain('Username: johndoe');
//         });

//         it('should return a 500 status if the specified username does not belong to a customer', async () => {
//             // Make a GET request to the customer_view_get route with a username that does not belong to a customer
//             const res = await chai.request(host)
//                 .get('/customer/view/adminuser')
//                 .send();

//             // Make assertions about the response
//             res.should.have.status(500);
//             res.should.be.json;
//             res.body.should.deep.equal({ error: 'User is not a customer' });
//         });

//         it('should return a 404 status if an invalid username is provided', async () => {
//             // Make a GET request to the customer_view_get route with an invalid username
//             const res = await chai.request(host)
//                 .get('/customer/view/nonexistentuser')
//                 .send();

//             // Make assertions about the response
//             res.should.have.status(404);
//             res.should.be.html;
//             res.text.should.contain('Not Found');
//         });
//     });
// });

// describe('customer_get', () => {
//     it('should render customer/index with customer data when a valid username is provided and user is authenticated', async () => {
//         const req = { params: { username: 'user1' }, cookies: { jwt: 'valid_token' } };
//         const res = { render: sinon.spy(), locals: { user: { username: 'user1' } }, status: sinon.spy() };
//         const mockCustomer = { _id: '123', username: 'user1', name: 'John Doe' };
//         sinon.stub(User, 'findOne').resolves(mockCustomer);
//         sinon.stub(jwt, 'verify').callsArgWith(2, null, { username: 'user1' });

//         await requireAuth(req, res, async () => {
//             await customer_get(req, res);
//         });

//         expect(User.findOne.calledOnceWith({ username: 'user1' })).to.be.true;
//         expect(jwt.verify.calledOnceWith('valid_token', 'secret_key')).to.be.true;
//         expect(res.render.calledOnceWith('customer/index', { customer: mockCustomer, err: undefined })).to.be.true;
//         expect(res.status.notCalled).to.be.true;
//         User.findOne.restore();
//         jwt.verify.restore();
//     });

//     it('should render 500 status with an error message when user is not authenticated', async () => {
//         const req = { params: { username: 'user1' }, cookies: { jwt: 'invalid_token' } };
//         const res = { render: sinon.spy(), status: sinon.spy() };
//         sinon.stub(jwt, 'verify').callsArgWith(2, { message: 'invalid_token' }, null);

//         await requireAuth(req, res, async () => {
//             await customer_get(req, res);
//         });

//         expect(User.findOne.notCalled).to.be.true;
//         expect(jwt.verify.calledOnceWith('invalid_token', 'secret_key')).to.be.true;
//         expect(res.render.calledOnceWith('login', { err: 'Authentication Error' })).to.be.true;
//         expect(res.status.calledOnceWith(500)).to.be.true;
//         jwt.verify.restore();
//     });

//     it('should render 500 status with an error message when an invalid username is provided', async () => {
//         const req = { params: { username: 'invalid_username' }, cookies: { jwt: 'valid_token' } };
//         const res = { status: sinon.stub().returns({ render: sinon.spy() }) };
//         sinon.stub(User, 'findOne').resolves(null);
//         sinon.stub(jwt, 'verify').callsArgWith(2, null, { username: 'user1' });

//         await requireAuth(req, res, async () => {
//             await customer_get(req, res);
//         });

//         expect(User.findOne.calledOnceWith({ username: 'invalid_username' })).to.be.true;
//         expect(jwt.verify.calledOnceWith('valid_token', 'secret_key')).to.be.true;
//         expect(res.status.calledOnceWith(500)).to.be.true;
//         expect(res.render.calledOnceWith('login', { err: 'Login Required' })).to.be.true;
//         User.findOne.restore();
//         jwt.verify.restore();
//     });
// });

describe('Customer Routes', () => {
    const host = 'https://localhost:3000';
  
                            "username": '"user1"',
                            "password": 'testpassword',
                            "fullname": 'Test Customer',
                            "email": 'user1@example.com',
                            "phone": '1234567890',
                            "gender": 'Male',
                            "date": '1990-01-01',
                            "role": 'customer'
    //     });
    //     await customer.save();
    // });

    // after(async () => {
    //     // delete the test user
    //     await User.deleteOne({ username: 'user1' });
    // });

    describe('GET /customer/:username', () => {
        // it('should return the customer page', (done) => {
        //     const username = 'user1';
        //     const password = 'Us12@3';
        //     chai.request(host)
        //         .get('/customer/user1')
        //         .query({ username: username, password: password })
        //         .end((req, res) => {
        //             expect(res).to.have.status(200);

        //             // res.should.be.html;
        //             done();
        //         });
        // });
        it('should return the customer page', (done) => {
            chai.request(host)
                .get('/customer/user1')
                .end((err, res) => {
                    if (err) {
                        done(err);
                    } else {
                        expect(res).to.have.status(200);
                        // add more assertions here if needed
                        done();
                    }
                });
            });
            it('should return a 404 error for non-existent customer', (done) => {
                chai.request(host)
                    .get('/customer/nonexistentcustomer')
                    .end((err, res) => {
                        // res.should.have.status(500);
                        // res.should.be.html;
                        expect(res).to.have.status(500);
                        done();
                    });
            });
        });

        //     describe('GET /customer/:username/view', () => {
        //         it('should return the customer view page', (done) => {
        //             chai.request(host)
        //                 .get('/customer/user1/view')
        //                 .end((err, res) => {
        //                     res.should.have.status(200);
        //                     res.should.be.html;
        //                     done();
        //                 });
        //         });

        //         it('should return a 404 error for non-existent customer', (done) => {
        //             chai.request(host)
        //                 .get('/customer/nonexistentcustomer/view')
        //                 .end((err, res) => {
        //                     res.should.have.status(500);
        //                     res.should.be.html;
        //                     done();
        //                 });
        //         });
        //     });

        //     describe('GET /customer/:username/edit', () => {
        //         it('should return the customer edit page', (done) => {
        //             chai.request(host)
        //                 .get('/customer/user1/edit')
        //                 .end((err, res) => {
        //                     res.should.have.status(200);
        //                     res.should.be.html;
        //                     done();
        //                 });
        //         });

        //         it('should return a 500 error for non-existent customer', (done) => {
        //             chai.request(host)
        //                 .get('/customer/nonexistentcustomer/edit')
        //                 .end((err, res) => {
        //                     res.should.have.status(500);
        //                     res.should.be.html;
        //                     done();
        //                 });
        //         });
        //     });

        //     describe('PATCH /customer/:username', () => {
        //         it('should update customer profile and return customer page', (done) => {
        //             chai.request(host)
        //                 .patch('/customer/user1')
        //                 .send({
        //                     fullname: 'Updated Customer',
        //                     email: 'updatedcustomer@example.com',
        //                     phone: '0987654321',
        //                     gender: 'Female',
        //                     date: '2000-01-01'
        //                 })
        //                 .end((err, res) => {
        //                     res.should.have.status(200);
        //                     res.should.be.html;
        //                     expect(res.text).to.include('Profile has been updated successfully.');
        //                     done();
        //                 });
        //         });

        //         it('should return a 404 error for non-existent customer', (done) => {
        //             chai.request(host)
        //                 .get('/customer/unknown')
        //                 .end((err, res) => {
        //                     res.should.have.status(500);
        //                     res.should.be.html;
        //                     res.text.should.include("Customer doesn't exist.");
        //                     done();
        //                 });
        //         });

        //         it('should render customer edit page for existing customer', (done) => {
        //             const agent = chai.request.agent(host);
        //             agent
        //                 .post('/auth/login')
        //                 .type('form')
        //                 .send({ username: 'user1', password: 'password' })
        //                 .end((err, res) => {
        //                     agent.should.have.cookie('jwt');
        //                     agent.should.have.cookie('jwt', /^.....$/);
        //                     agent.should.have.cookie('jwt', /^.....$/, {
        //                         httpOnly: true,
        //                         secure: true,
        //                         sameSite: 'strict',
        //                     });
        //                     agent
        //                         .get('/customer/user1/edit')
        //                         .end((err, res) => {
        //                             res.should.have.status(200);
        //                             res.should.be.html;
        //                             res.text.should.include('<h1>Edit Your Profile</h1>');
        //                             done();
        //                         });
        //                 });
        //         });

        //         it('should update customer profile for existing customer', (done) => {
        //             const agent = chai.request.agent(host);
        //             agent
        //                 .post('/auth/login')
        //                 .type('form')
        //                 .send({ username: 'user1', password: 'password' })
        //                 .end((err, res) => {
        //                     agent.should.have.cookie('jwt');
        //                     agent.should.have.cookie('jwt', /^.....$/);
        //                     agent.should.have.cookie('jwt', /^.....$/, {
        //                         httpOnly: true,
        //                         secure: true,
        //                         sameSite: 'strict',
        //                     });
        //                     agent
        //                         .patch('/customer/user1/edit')
        //                         .type('form')
        //                         .send({
        //                             fullname: 'Test Customer Updated',
        //                             date: '2000-01-01',
        //                             email: 'user1.updated@example.com',
        //                             phone: '1234567890',
        //                             gender: 'Female',
        //                         })
        //                         .end((err, res) => {
        //                             res.should.have.status(200);
        //                             res.should.be.html;
        //                             res.text.should.include('Profile has been updated successfully.');
        //                             done();
        //                         });
        //                 });
        //         });
        //     });
        // });

        // describe('Customer Payment History', () => {
        //     beforeEach(async () => {
        //         // Clear the database before each test
        //         await Paymenthistory.deleteMany({});
        //         await User.deleteMany({});
        //     });

        //     describe('GET /customer/:username/paymenthistory', () => {
        //         it('should render the paymenthistory page with payment history of the customer', async () => {
        //             // Create a customer and payment history in the database
        //             const customer = new User({
        //                 username: 'johndoe',
        //                 password: 'password',
        //                 role: 'customer',
        //                 fullname: 'John Doe',
        //                 email: 'johndoe@example.com',
        //                 phone: '1234567890',
        //                 gender: 'male',
        //                 date: '1990-01-01'
        //             });
        //             await customer.save();

        //             const paymenthistory = new Paymenthistory({
        //                 username: 'johndoe',
        //                 paymentId: '1234567890',
        //                 amount: 100,
        //                 date: new Date()
        //             });
        //             await paymenthistory.save();

        //             chai.request(host)
        //                 .get('/customer/johndoe/paymenthistory')
        //                 .end((err, res) => {
        //                     res.should.have.status(200);
        //                     res.should.be.html;
        //                     res.text.should.contain('Payment History');
        //                     res.text.should.contain('1234567890');
        //                     res.text.should.contain('$100');
        //                     res.text.should.contain('1990-01-01');
        //                     done();
        //                 });
        //         });

        //         it('should render the signup page with an error message if the customer does not exist', (done) => {
        //             chai.request(host)
        //                 .get('/customer/nonexistentusername/paymenthistory')
        //                 .end((err, res) => {
        //                     res.should.have.status(200);
        //                     res.should.be.html;
        //                     res.text.should.contain('Signup');
        //                     res.text.should.contain("Customer doesn't exist.");
        //                     done();
        //                 });
        //         });
        //     });
    });

