const Sentry = require("@sentry/node");

Sentry.init({
  dsn: "https://24a7e8a3fe4242278a8e8ba2e8480236@o447951.ingest.us.sentry.io/4505527418552320",
  tracesSampleRate: 1.0,
  debug: true,
});
