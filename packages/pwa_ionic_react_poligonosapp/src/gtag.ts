import { getCLS, getFID, getLCP } from 'web-vitals';

function _gtag(event: string, name: any, param3: { non_interaction: boolean; event_label: any; event_category: string; value: number }) {

    console.log('_gtag global');

    return;
};

let _dataLayer;

function sendToGoogleAnalytics({ name, delta, id }) {
    // Assumes the global `_gtag()` function exists, see:
    // https://developers.google.com/analytics/devguides/collection/gtagjs
    _gtag('event', name, {
        event_category: 'Web Vitals',
        // Google Analytics metrics must be integers, so the value is rounded.
        // For CLS the value is first multiplied by 1000 for greater precision
        // (note: increase the multiplier for greater precision if needed).
        value: Math.round(name === 'CLS' ? delta * 1000 : delta),
        // The `id` value will be unique to the current page load. When sending
        // multiple values from the same page (e.g. for CLS), Google Analytics can
        // compute a total by grouping on this ID (note: requires `eventLabel` to
        // be a dimension in your report).
        event_label: id,
        // Use a non-interaction event to avoid affecting bounce rate.
        non_interaction: true,
    })
};

getCLS(sendToGoogleAnalytics);
getFID(sendToGoogleAnalytics);
getLCP(sendToGoogleAnalytics);

function sendToGTM({ name, delta, id }) {
    // Assumes the global `_dataLayer` array exists, see:
    // https://developers.google.com/tag-manager/devguide
    _dataLayer.push({
        event: 'web-vitals',
        event_category: 'Web Vitals',
        event_action: name,
        // Google Analytics metrics must be integers, so the value is rounded.
        // For CLS the value is first multiplied by 1000 for greater precision
        // (note: increase the multiplier for greater precision if needed).
        event_value: Math.round(name === 'CLS' ? delta * 1000 : delta),
        // The `id` value will be unique to the current page load. When sending
        // multiple values from the same page (e.g. for CLS), Google Analytics can
        // compute a total by grouping on this ID (note: requires `eventLabel` to
        // be a dimension in your report).
        event_label: id,
    })
};

getCLS(sendToGTM);
getFID(sendToGTM);
getLCP(sendToGTM);
