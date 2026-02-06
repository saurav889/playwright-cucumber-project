const reporter = require('cucumber-html-reporter');

reporter.generate({
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber-report.json', // path to the JSON report
  output: 'cucumber-report.html',
  reportSuiteAsScenarios: true,
  launchReport: true
});

console.log('Cucumber HTML report generated successfully!');
