module.exports = {
    preset: "jest-expo",
    collectCoverage: true,
    collectCoverageFrom: [
        "**/*.{js,jsx}",
        "!**/coverage/**",
        "!**/node_modules/**",
        "!**/babel.config.js",
        "!**/jest.config.js"
    ],
    coverageThreshold: {
        global: { branches: 80, functions: 80, lines: 80, statements: 80 }
    },
    notify: true
};
