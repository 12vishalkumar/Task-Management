//***************************** Importing required libararies *************************
import chai from 'chai';
const expect = chai.expect;
import request from 'supertest';
import app from '../index.js';


describe('POST /tasks', () => {
    it('should create a new task', async () => {
        const res = await request(app)
            .post('/api/tasks')
            .send({
                title: 'Test Task',
                description: 'Test Description'
            });
        expect(res.status).to.equal(201);
        expect(res.body.title).to.equal('Test Task');
    });
});

// Add more tests for other endpoints if you want