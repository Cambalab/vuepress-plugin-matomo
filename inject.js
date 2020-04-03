/* global TRACKER_URL, SITE_ID */

export default ({ router }) => {
  if (process.env.NODE_ENV === 'production' &&
      SITE_ID && TRACKER_URL &&
      typeof window !== 'undefined') {

    var _paq = window._paq || [];
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    (function() {
      var u="//${String(TRACKER_URL)}/";
      _paq.push(['setTrackerUrl', u+'matomo.php']);
      _paq.push(['setSiteId', String(SITE_ID)]);
      var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
      g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
    })();

  }
}

