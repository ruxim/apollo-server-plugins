module.exports = {
	'env': {
		'es2021': true,
		'node': true
	},
	'extends': [
		'google'
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 12,
		'sourceType': 'module'
	},
	'plugins': [
		'@typescript-eslint'
	],
	'rules': {
		'require-jsdoc': 'off',
		'no-tabs': 'off',
		'indent': ['error', 'tab'],
		'newline-per-chained-call': ['error', {
			'ignoreChainWithDepth': 2
		}],
		'comma-dangle': ['error', 'never'],
		'quotes': ['error', 'single'],
		'object-curly-newline': ['error', {
			'ObjectExpression': {
				'minProperties': 1
			},
			'ObjectPattern': 'never',
			'ImportDeclaration': 'never',
			'ExportDeclaration': 'never'
		}],
		'object-property-newline': ['error'],
		'arrow-body-style': ['error', 'always'],
		'@typescript-eslint/type-annotation-spacing': ['error'],
		'space-infix-ops': ['error'],
		'max-len': ['error', {
			'code': 120
		}],
		'@typescript-eslint/member-delimiter-style': ['error']
	}
};
