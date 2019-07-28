module.exports = {
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/$1",
		"^~/(.*)$": "<rootDir>/$1",
		"^vue$": "vue/dist/vue.common.js"
	},
	moduleFileExtensions: ["js", "ts", "vue", "json"],
	transform: {
		"^.+\\.js$": "babel-jest",
		"^.+\\.ts$": "babel-jest",
		".*\\.(vue)$": "vue-jest"
	},
	collectCoverage: true,
	collectCoverageFrom: [
		"<rootDir>/components/**/*.vue",
		"<rootDir>/pages/**/*.vue"
	],
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.ts$",
	snapshotSerializers: ["jest-serializer-vue"]
};
