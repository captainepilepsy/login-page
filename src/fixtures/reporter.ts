import type { FullConfig, FullResult, Reporter, Suite, TestCase, TestResult } from '@playwright/test/reporter'

class CustomReporter implements Reporter {
  onBegin(config: FullConfig, suite: Suite) {
    console.log(`Starting the run with ${suite.allTests().length} tests`);
  }

  onTestEnd(test: TestCase, result: TestResult) {
    console.log(`Finished ${test.title} with ${result.status}`);
  }
  
  onEnd(result: FullResult) {
    console.log(`Finished the run: ${result.status}`)
  }
}

export default CustomReporter