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
        global: { branches: 90, functions: 90, lines: 90, statements: 90 }
    },
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "react-native.config.js",
        "colors.js"
    ],
    notify: true
};
