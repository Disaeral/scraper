module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:i18next/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "i18next"
    ],
    "rules": {
        "react/jsx-indent": [2, 4, {indentLogicalExpressions: true}],
        "react/react-in-jsx-scope": 0,
        "@typescript-eslint/no-unused-vars": 'warn',
        "@typescript-eslint/indent": [2,4],
    },
    globals : {
        _IS_DEV_: true
    }
}
