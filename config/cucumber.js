module.exports = {
    default: {
        tags: process.env.npm_config_TAGS || "",
        formatOptions: {
            snippetInterface: "async-await"
        },
        paths: [
            "src/test/featureFiles/web/Candidate"
        ],
        publishQuiet: true,
        dryRun: false,
        require: [
            "src/test/stepDefinitions/Web/*.ts",
            "src/hooks/hooks.ts"
        ],
        requireModule: [
            "ts-node/register"
        ],
        format: [
            "progress-bar",
            "html:test-results/cucumber-report.html",
            "json:test-results/cucumber-report.json",
            "rerun:@FailedTestCases.txt"
        ],
        parallel: 5,
        retry : 1
    }
    //,
    // rerun: {
    //     formatOptions: {
    //         snippetInterface: "async-await"
    //     },
    //     publishQuiet: true,
    //     dryRun: false,
    //     require: [
    //         "src/test/steps/*.ts",
    //         "src/hooks/hooks.ts"
    //     ],
    //     requireModule: [
    //         "ts-node/register"
    //     ],
    //     format: [
    //         "progress-bar",
    //         "html:test-results/cucumber-report.html",
    //         "json:test-results/cucumber-report.json",
    //         "rerun:@FailedTestCases.txt"
    //     ],
    //     parallel: 5
    // }
}