const { expect } = require('chai');
const api = require('../src/apis/api');
const logger = require('../src/logger-factory')(__filename);

describe('Test suite 1', async () => {
    it('Test 1.1', async () => {
        const res = await api.getUser(2);
        logger.info('res : %o', res);
        expect(true).to.equal(true);
    });

    it('Test 2.1', async () => {
        expect(true).to.equal(true);
    });
});
