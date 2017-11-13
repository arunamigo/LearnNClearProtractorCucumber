
exports.config = {
  directConnect: true,
  getPageTimeout: 60000,
  allScriptsTimeout: 500000,
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    'browserName': 'chrome'
  },

  // Spec patterns are relative to this directory.
  specs: [
    'features/*.feature'
  ],

  //baseURL: 'http://localhost:8080/',

  cucumberOpts: {
    require: ['stepdefinition/*.js'],
	strict: true,
	 tags: false,
    profile: false,
    'no-source': true,
	format: ['json:reports/results.json']
	  }
};
