require("./instrument");

const { getCurrentScope, startNewTrace, startSpan } = require("@sentry/node");

const sleep = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

startNewTrace(async () => {
  const propagationContext = getCurrentScope().getPropagationContext();
  console.log("Starting new trace", propagationContext.traceId);

  startSpan({ name: "Child of new trace" }, async () => {
    await sleep(100);
  });
});
