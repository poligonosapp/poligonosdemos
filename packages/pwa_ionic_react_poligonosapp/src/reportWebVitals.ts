 import {getCLS, getFID, getLCP} from 'web-vitals';
// import { getLCP, getFID, getCLS } from 'web-vitals/base'

export default function sendToAnalytics(metric: any) {
    const body = JSON.stringify(metric)
    // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
    ;(navigator.sendBeacon && navigator.sendBeacon('/analytics', body)) ||
        fetch('/analytics', { body, method: 'POST', keepalive: true })
}

getCLS(sendToAnalytics)
getFID(sendToAnalytics)
getLCP(sendToAnalytics)

// export default {};
