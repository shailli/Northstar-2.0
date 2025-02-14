module.exports = {
    parser: 'babel-eslint',
    extends: ['prettier'],
    plugins: ['react', 'flowtype', 'jsx-a11y', 'import'],
    rules: {
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.js', '.jsx']
            }
        ],
        'react/prefer-stateless-function': [
            2,
            {
                ignorePureComponents: true
            }
        ],
        'react/forbid-prop-types': [
            0,
            {
                forbid: []
            }
        ],
        'import/extensions': [
            1,
            'never',
            {
                svg: 'always'
            }
        ],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true,
                optionalDependencies: false,
                peerDependencies: false
            }
        ],
        'no-else-return': 'error',
        'no-multi-spaces': 'error',
        'no-whitespace-before-property': 'error',
        camelcase: 'error',
        'new-cap': 'error',
        'no-console': 'warn',
        'comma-dangle': ['error', 'never'],
        'no-var': 'error',
        'object-curly-newline': [
            'error',
            {
                multiline: true,
                minProperties: 8
            }
        ],
        indent: [
            'error',
            4,
            {
                SwitchCase: 1
            }
        ],
        quotes: ['error', 'single']
    },
    env: {
        jest: true
    }
};
