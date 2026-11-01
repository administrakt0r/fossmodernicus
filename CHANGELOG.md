# Changelog

## 1.0.3

- **FOSSBilling 0.8.9 Support**: Verified compatibility with 0.8.9, including session-bound guest CSRF tokens and API error responses.
- **Fixed Dashboard 404 Links**: Corrected Twig operator precedence on invoice, service, and ticket URLs on the client dashboard.
- **Form Submissions & Feedback**: Added missing layout script blocks and explicit API endpoints on ticket forms to prevent 404 errors on submit. Added toast notifications and button loading spinners.
- **Checkout & Domain Orders**: Fixed Twig strict-mode errors during domain checkout, pre-selected the first active billing cycle, and added the missing `/cart` page template.
- **Theme Polish**: Added dark mode logo support (`logo-dark.svg`), refreshed the Knowledge Base hub, fixed mobile viewport overflow, and corrected frontpage pricing card lookups.
- **Performance & Asset Size**: Compressed `screenshot.jpg` to 26 KB, removed redundant `screenshot.png`, and added `.gitattributes` `export-ignore` to keep GitHub release zips under 250 KB.
- **Branding & Credits**: Updated author attribution and footer links to `administraktor.com`.

## 1.0.2

- Fixed missing sidebar active menu context on client pages.
- Added fallbacks for optional company settings in footer and alert banners.
- Updated product and domain pricing display for FOSSBilling 0.8.8.
