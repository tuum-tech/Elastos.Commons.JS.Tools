import type { InitialOptionsTsJest } from 'ts-jest/dist/types'
import { defaults as tsjPreset } from 'ts-jest/presets'

const config: InitialOptionsTsJest = {
  rootDir: "./tests/src",
  preset: 'ts-jest',
  transform: {
    ...tsjPreset.transform,
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  reporters: [
    "default",
    [
      "jest-html-reporter", {
        pageTitle: "Commons JS Tools test report",
        includeFailureMsg: true,
        includeSuiteFailure: true
      }
    ]
  ],
  testEnvironment: "node",
  testRunner: "jest-circus/runner",
  globals: {
    "ts-jest": {
      "tsconfig": "./tsconfig.json"
    }
  },
  testTimeout: 6000000
}
export default config