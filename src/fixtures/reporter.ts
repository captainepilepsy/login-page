import type { FullConfig, FullResult, Reporter, Suite, TestCase, TestResult } from '@playwright/test/reporter';

class CustomReporter implements Reporter {
  passedTests = 0;
  failedTests = 0;

  onBegin(config: FullConfig, suite: Suite) {
    console.log(`Starting the run with ${suite.allTests().length} tests`);
  }

  onTestEnd(test: TestCase, result: TestResult) {
    console.log(`Finished test ${test.title}: ${result.status}`);

    // Update counters based on test result
    if (result.status === 'passed') {
      this.passedTests++;
    } else if (result.status === 'failed') {
      this.failedTests++;
    }
  }

  onEnd(result: FullResult) {
    console.log(`Finished the run: ${result.status}`);
    console.log(`${this.passedTests} tests passed, ${this.failedTests} tests failed`);
  }
}

export default CustomReporter;
