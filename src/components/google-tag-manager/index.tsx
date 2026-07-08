// Inline-injected Google Tag Manager.
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
})(window,document,'script','dataLayer','${GTM_ID}');
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
