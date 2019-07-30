module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: "@typescript-eslint/parser",
		project: "./tsconfig.json"
	},
	extends: [
		"plugin:@typescript-eslint/recommended",
		"@nuxtjs",
		"plugin:nuxt/recommended",
		"plugin:prettier/recommended",
		"prettier",
		"prettier/@typescript-eslint",
		"prettier/vue"
	],
	plugins: ["prettier", "@typescript-eslint"],
	// add your custom rules here
	rules: {
		"prettier/prettier": ["error"]
	}
};
