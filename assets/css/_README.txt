In May 2026, I built the page for the piano concerto and made some small tweaks to the CSS, but browsers have gotten aggressive about caching stylesheets, so I duplicated the stylesheet and renamed it "styles.v2.css."

This is a hack. Every page on my site links to "styles.css" except for ryancarter.org/pianoconcerto, which links to "styles.v2.css."

The next time I make any CSS changes, I need to decide whether to increment the version number (and update the link in the HTMl for /pianoconcerto) or come up with another way for cache busting.