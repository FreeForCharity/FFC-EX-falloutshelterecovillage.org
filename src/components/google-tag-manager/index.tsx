// Inline-injected Google Tag Manager.

/**
 * Serialises the container id for embedding in the inline script body.
 *
 * `JSON.stringify` supplies the quotes and escapes quotes and newlines, but
 * NOT `<` — a value containing `</script>` would close the element early and
 * let the rest parse as markup. U+2028/U+2029 are escaped too: legal in JSON,
 * illegal in a JS string literal before ES2019.
 *
 * Defence in depth, not a live hole: the id is a build-time constant set by a
 * maintainer, never by a visitor. It matters because `isConfigured()` only
 * rejects placeholders — nothing validates the SHAPE of what lands here.
 *
 * Deliberately local rather than imported from the cookie-consent component,
 * which exports the same helper: that module is `'use client'`, so importing
 * from it makes this a client-boundary call and breaks the build wherever
 * this component renders on the server.
 */
function scriptString(value: string): string {
  return JSON.stringify(value)
    .replace(/</g, '\\u003c')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}
//
// We render the GTM bootstrap script inline (not via next/script) so that
// the script is present in the statically exported HTML at parse time.
// This makes the GTM integration testable from Playwright without relying on
// Next.js client-runtime injection order, and ensures `window.dataLayer`
// and the script tag are available as soon as the page parses.

const GTM_ID = 'GTM-5B5Q6FPD'

const gtmInlineScript = `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer',${scriptString(GTM_ID)});
`

export default function GoogleTagManager() {
  return (
    <script
      id="gtm-script"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: gtmInlineScript }}
    />
  )
}

// Export a component for the noscript iframe that goes in the body
export function GoogleTagManagerNoScript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
        title="Google Tag Manager"
      />
    </noscript>
  )
}
