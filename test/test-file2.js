const { expect } = require('chai');
const api = require('../src/apis/api');
const logger = require('../src/logger-factory')(__filename);

describe('Test suite 2', async () => {
    it('Test 1.2', async () => {
        const res = await api.getUser(2);
        logger.info('res : %o', res);
        expect(true).to.equal(true);
    });

    it('Test 2.2', async () => {
        expect(true).to.equal(true);
    });
});
