const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner({
  serverUrl : 'http://localhost:9000',
  options : {
    'sonar.login':'980b305e384f9cd1dcca940042d10b4ed7479322',
    'sonar.sources': '.nyc_output/js/src',
    'sonar.tests': 'spec',
    'sonar.scm.disabled':'true',
    'sonar.exclusions':'**/spec/**, src/**/*.scss, src/**/*.stories.js',
    'sonar.javascript.lcov.itReportPath': '**/coverage/lcov.info',
    'sonar.javascript.lcov.reportPath': 'coverage/lcov.info',
    'sonar.language':'js',
    'sonar.verbose':'true'
  }
}, ()=>{
  console.log('DONE?');
});