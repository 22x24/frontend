export default {
    testEnvironment: 'jest-environment-jsdom',  // Ensure jsdom is used as the environment
    transform: {
      '^.+\\.jsx?$': 'babel-jest',  // Transform JavaScript and JSX using babel-jest
    },
    moduleFileExtensions: ['js', 'jsx'],
    setupFilesAfterEnv: ['@testing-library/jest-dom'],  // Just use @testing-library/jest-dom
  };
  