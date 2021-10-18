module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "react-native/react-native": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "react",
    "react-native"
  ],
  settings: {
    'react-native/style-sheet-object-names': ['EStyleSheet', 'OtherStyleSheet', 'PStyleSheet']
  },
  "rules": {
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react-native/no-raw-text": 2,
    "react-native/no-single-element-style-arrays": 2,
    "react-native/sort-styles": [
      "error",
      "asc", {
        "ignoreClassNames": false,
        "ignoreStyleProperties": false
      }]
  }
};
