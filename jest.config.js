// jest.config.js
// Sync object
const jest = module.exports = {
    verbose: true,
    preset: '@shelf/jest-mongodb',
    testEnvironment: 'node',
};

// Or async function
jest = module.exports = async () => {
    return {
        verbose: true,
        preset: '@shelf/jest-mongodb',
        testEnvironment: 'node',
    };
};