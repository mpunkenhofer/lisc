module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: "module",
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
    },
    plugins: [
        '@typescript-eslint',
        'react-hooks',
        'react'
    ],
    extends: [
        'eslint:recommended',
        //"prettier/@typescript-eslint",
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
    ],
    "rules": {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
};