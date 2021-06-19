module.exports = {
    roots: ['<rootDir>'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
    testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
    transform: {
      '^.+\\.(ts|tsx)$': 'babel-jest',
    },
    watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
      '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
      "^ui/(.*)$": "<rootDir>/src/ui/$1",
      "^helpers/(.*)$": "<rootDir>/src/helpers/$1",
      "^components/(.*)$": "<rootDir>/src/components/$1",
      "^hooks/(.*)$": "<rootDir>/src/hooks/$1",
      "^data/(.*)$": "<rootDir>/src/data/$1",
    },
    moduleDirectories: [
      'node_modules',
      'src/utils',
      __dirname,
    ],
    testEnvironment: "jsdom"
}