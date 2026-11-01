# Changelog

## 1.0.3

- Verified full compatibility with newly released FOSSBilling 0.8.9: tested guest authentication with pre-login CSRF tokens, cart mutations, API error handling, and checkout/invoice lifecycles.
- Fixed fatal HTTP 404 errors on client dashboard links: corrected Twig operator precedence for invoices (`('invoice/' ~ invoice.hash)|url`), active services (`('order/service/manage/' ~ order.id)|url`), and support tickets (`('support/ticket/' ~ ticket.id)|url`).
- Added dark mode logo support (`assets/img/logo-dark.svg`) with automatic switching between light and dark themes.
- Polished and hardened the Knowledge Base hub (`html/mod_support_kb_index.html.twig`) with standardized category and article routing.
- Fixed frontpage pricing resolution to select active cycle plans instead of naive `loop.first`.
- Constrained mobile viewports to prevent horizontal overflow and streamlined multi-step order checkout on compact screens.
- Enhanced frontend performance: scoped CSS transitions to composite/paint properties, enabled `content-visibility: auto`, applied `fetchpriority="high"` to hero assets, and added zero-FOIT theme bootstrapper.
- Fixed fatal HTTP 404 (`Page /support not found`) on support ticket submissions: added missing `{% block js %}{% endblock %}` in base layouts, restoring script execution for child templates (`mod_support_tickets`, `mod_support_ticket`, `mod_order_manage`, `mod_invoice_invoice`).
- Resolved form action fallback in `html/mod_support_tickets.html.twig`: set explicit `action="{{ 'support/ticket_create'|api_url }}"` preventing native browser submissions from defaulting to `POST /support`.
- Added missing `flashMessage` implementation in `assets/js/theme.js` compatible with FOSSBilling reload/redirect notifications.
- Fixed guest vs client ticket handling in `html/mod_support_ticket.html.twig`: set explicit form action `action="{{ (is_guest_ticket ? 'guest/support/ticket_reply' : 'support/ticket_reply')|api_url }}"` and passed proper hash parameters for guest ticket closures (`support/ticket_close`).
- Set explicit API form action on service management ticket inquiries (`html/mod_order_manage.html.twig`).
- Fixed fatal Twig `RuntimeError` during domain checkout under Twig strict mode (`Key "description" does not exist in partials/order_checkout.html.twig`).
- Added full domain cart item representation in checkout and cart views: cleanly displays registered/transferred domain names, action type, and duration badge.
- Systematic strict-mode hardening across all theme templates (`strict_variables => true`): guarded cart items, billing cycle lookups, promotional discounts, tax calculations, payment gateway configurations, theme settings, profile fields, support ticket fields, and invoice line items.
- Fixed domain product ordering support: domain registration/transfer lookup and TLD selection form (`mod_servicedomain_order_form.html.twig`) now renders cleanly without recurrent cycle traps.
- Fixed fatal `RuntimeError: Variable "dashboard" does not exist` on client dashboard (`html/mod_index_dashboard.html.twig`) by properly initialising `client.index_get_dashboard` and querying recent invoices via `client.invoice_get_list`.
- Eliminated all unguarded `?? default_currency` lookups across 12 template files, replacing them with reliable `|default(default_currency|default('USD'))` fallbacks.
- Implemented global `FOSSBilling.message` and `FOSSBilling.ui.notify` toast notification bridge in `assets/js/theme.js` with floating alert toasts, automatic dismissals, and persistent toast containers in `layout_default.html.twig` and `layout_public.html.twig`.
- Added visual button loading states (`Saving...`, `Placing Order...`, `Updating...`) with spinners during asynchronous form submissions and automatic error recovery.
- Fixed order checkout flow in `html/partials/order_checkout.html.twig`: resolved missing confirmation and hanging redirect modal by displaying an immediate success notification and seamlessly redirecting to the invoice or activated service.
- Fixed default billing cycle selection in `html/partials/order_configure.html.twig` so the first available recurrent period is pre-selected by default, preventing `Period parameter not passed` errors when ordering.
- Fixed fatal Twig syntax error in theme settings (`config/settings.html.twig`) by replacing range syntax with list literals to comply with FOSSBilling's sandbox policy.
- Added missing shopping cart template (`html/mod_cart_index.html.twig`), resolving HTTP 404 when navigating directly to `/cart`.
- Fixed profile and security actions in `html/mod_client_profile.html.twig`: corrected API routing to `profile/update`, `profile/change_password`, and `profile/api_key_reset`; fixed password confirmation field naming; exposed active API key using `client.profile_api_key_get`.
- Added dedicated printable invoice template (`html/mod_invoice_print.html.twig`) with print-optimized styles.
- Streamlined repository footprint and distribution archives: optimized `screenshot.jpg` (87% reduction to ~40KB), removed redundant `screenshot.png`, and added `.gitattributes` `export-ignore` to strip heavy demo media from release packages.
- Updated theme credits, URLs, and manifest attribution across the theme to `administraktor.com`.

## 1.0.2

- Fixed client pages failing when the sidebar's active menu context was not provided.
- Made shared alerts and footer settings safe when optional FOSSBilling values are absent.
- Updated dashboard and order catalog rendering to match product data exposed by FOSSBilling 0.8.8, including domain pricing.
- Added the active menu state to the dashboard and profile pages and made the password reset setting optional.
