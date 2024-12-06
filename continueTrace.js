require("./instrument");

const { continueTrace, startSpan } = require("@sentry/node");

const sleep = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

continueTrace(
  {
    // change to traceId logged in startTrace.js
    sentryTrace: "c431d009fb694211b82ad0c062c419a6-9f2fe8b7315c7caa-1",
    baggage: undefined,
  },
  async () => {
    startSpan({ name: "Child of continued" }, async () => {
      await sleep(100);
    });
  }
);
