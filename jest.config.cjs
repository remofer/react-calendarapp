module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    transformIgnorePatterns: [],

    
    
    moduleNameMapper: {
        '\\.(css|less)$': '<rootDir>/tests/mocks/styleMock.js',
    },
}