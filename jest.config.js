module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['**/src/resolvers/**/*.js'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  testMatch: [
    '**/__tests__/**/*.test.js'
  ]
}
