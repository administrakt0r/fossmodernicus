# Changelog

## 1.0.5

- Fixed fatal HTTP 404 (`Page /support not found`) on support ticket submissions: added missing `{% block js %}{% endblock %}` in `html/layout_default.html.twig` and `html/layout_public.html.twig`, restoring script execution for child templates (`mod_support_tickets`, `mod_support_ticket`, `mod_order_manage`, `mod_invoice_invoice`).
- Resolved form action fallback in `html/mod_support_tickets.html.twig`: set explicit `action="{{ 'support/ticket_create'|api_url }}"` preventing native browser submissions from defaulting to `POST /support`.
- Added missing `flashMessage` implementation in `assets/js/theme.js` compatible with FOSSBilling reload/redirect notifications.
- Fixed guest vs client ticket handling in `html/mod_support_ticket.html.twig`: set explicit form action `action="{{ (is_guest_ticket ? 'guest/support/ticket_reply' : 'support/ticket_reply')|api_url }}"` and passed proper hash parameters for guest ticket closures (`support/ticket_close`).
- Set explicit API form action on service management ticket inquiries (`html/mod_order_manage.html.twig`).

## 1.0.4

- Fixed fatal Twig `RuntimeError` during domain checkout under Twig strict mode (`Key "description" does not exist in partials/order_checkout.html.twig at line 48`).
- Added full domain cart item representation in checkout and cart views: cleanly displays registered/transferred domain names (`example.com`), action type (`Registration` / `Transfer`), and duration badge (`1 Year`, `2 Years`).
- Systematic strict-mode hardening across all theme templates (`strict_variables => true`): guarded cart items, billing cycle lookups, promotional discounts, tax calculations, payment gateway configurations, theme settings, profile fields, support ticket fields, and invoice line items.
- Fixed fatal Twig `RuntimeError` on `/order?product=1` and domain products (`Key "stock_control" does not exist in partials/order_configure.html.twig`).
- Added strict-variable guards across `order_configure.html.twig`, `order_catalog.html.twig`, and `mod_index_dashboard.html.twig` for `stock_control|default(false)`, `quantity_in_stock|default(0)`, `pricing.type|default('')`, `price_starting_from|default(0)`, `allow_quantity_select|default(false)`, and `form_id|default(null)`.
- Fixed domain product ordering support: domain registration/transfer lookup and TLD selection form (`mod_servicedomain_order_form.html.twig`) now renders cleanly without recurrent cycle traps.
- Fixed fatal `RuntimeError: Variable "dashboard" does not exist` on client dashboard (`html/mod_index_dashboard.html.twig`) by properly initialising `client.index_get_dashboard` and querying recent invoices via `client.invoice_get_list`.
- Eliminated all unguarded `?? default_currency` lookups across 12 template files, replacing them with reliable `|default(default_currency|default('USD'))` fallbacks.
- Verified 28 end-to-end guest and client user routes and ordering workflows under strict mode locally with 100% pass rate.

## 1.0.3

- Implemented global `FOSSBilling.message` and `FOSSBilling.ui.notify` toast notification bridge in `assets/js/theme.js` with floating alert toasts, automatic dismissals, and persistent toast containers in `layout_default.html.twig` and `layout_public.html.twig`, restoring visual feedback for all API forms (profile update, password changes) and session flash messages.
- Added visual button loading states (`Saving...`, `Placing Order...`, `Updating...`) with spinners during asynchronous form submissions and automatic error recovery.
- Fixed order checkout flow in `html/partials/order_checkout.html.twig`: resolved missing confirmation and hanging redirect modal by displaying an immediate success notification and seamlessly redirecting to the invoice (`/invoice/:hash`) or activated service (`/order/service/manage/:id`).
- Fixed default billing cycle selection in `html/partials/order_configure.html.twig` so the first available recurrent period is pre-selected by default, preventing `Period parameter not passed` errors when ordering.
- Fixed fatal Twig syntax error in theme settings (`config/settings.html.twig`) by replacing range syntax with list literals to comply with FOSSBilling's sandbox policy.
- Added missing shopping cart template (`html/mod_cart_index.html.twig`), resolving HTTP 404 when navigating directly to `/cart`.
- Fixed profile and security actions in `html/mod_client_profile.html.twig`: corrected API routing to `profile/update`, `profile/change_password`, and `profile/api_key_reset`; fixed password confirmation field naming; exposed active API key using `client.profile_api_key_get`; replaced unsupported currency change form with informational currency status card.
- Added dedicated printable invoice template (`html/mod_invoice_print.html.twig`) with print-optimized styles, resolving HTTP 404 errors caused by core fallback references to missing Huraga stylesheets.

## 1.0.2

- Fixed client pages failing when the sidebar's active menu context was not provided.
- Made shared alerts and footer settings safe when optional FOSSBilling values are absent.
- Updated dashboard and order catalog rendering to match product data exposed by FOSSBilling 0.8.8, including domain pricing.
- Added the active menu state to the dashboard and profile pages and made the password reset setting optional.
