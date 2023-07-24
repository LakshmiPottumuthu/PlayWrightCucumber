const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results",
  reportPath: "./",
  reportName:"Playwright Automation report",
  displayDuration:false,
  metadata: {
    browser: {
      name: "chrome",
      version: "114",
    },
    device: "Local test machine",
    platform: {
      name: "ubuntu",
      version: "16.04",
    },
  },
  customData: {
    title: "Test info",
    data: [
      { label: "Project", value: "Resume Library" },
      { label: "Cycle", value: "Regression" },
    ],
  },
});