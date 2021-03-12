require('gtag.ts');

// In your JavaScript code
import 'autotrack';


try {
  window.ga = window.ga;
} catch (e) {
  
}
// In your JavaScript code
// import 'autotrack/lib/plugins/event-tracker';
// import 'autotrack/lib/plugins/outbound-link-tracker';
// import 'autotrack/lib/plugins/url-change-tracker';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-000000-01');
ReactGA.pageview(window.location.pathname + window.location.search);

// import { getCLS, getFID, getLCP } from 'web-vitals';// react-ga
import { getLCP, getFID, getCLS } from 'web-vitals/base';//webdev samples

let id = window.dataLayer.getFID || [] || "process.env.GA_MEASUREMENT_ID";
let name = window.dataLayer.getLCP || [] || "process.env.CLIENT_ID";
let DELTA = window.dataLayer.getCLS || [] || 'process.env.CLIENT_SECRET';

//Typescript 7031

getCLS(console.log);
getFID(console.log);
getLCP(console.log);

function sendToGoogleAnalytics({name, delta, id}) {
  // Assumes the global `ga()` function exists, see:
  // https://developers.google.com/analytics/devguides/collection/analyticsjs
  ga('send', 'event', {
    eventCategory: 'Web Vitals',
    eventAction: name,
    // The `id` value will be unique to the current page load. When sending
    // multiple values from the same page (e.g. for CLS), Google Analytics can
    // compute a total by grouping on this ID (note: requires `eventLabel` to
    // be a dimension in your report).
    eventLabel: id,
    // Google Analytics metrics must be integers, so the value is rounded.
    // For CLS the value is first multiplied by 1000 for greater precision
    // (note: increase the multiplier for greater precision if needed).
    eventValue: Math.round(name === 'CLS' ? delta * 1000 : delta),
    // Use a non-interaction event to avoid affecting bounce rate.
    nonInteraction: true,
    // Use `sendBeacon()` if the browser supports it.
    transport: 'beacon',
  });
}

getCLS(sendToGoogleAnalytics);
getFID(sendToGoogleAnalytics);
getLCP(sendToGoogleAnalytics);
