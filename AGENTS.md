# Repository guidance for coding agents

Inspect applicable instructions, relevant templates and callers, the manifest, and Git status before editing. Preserve existing user changes. Make the smallest complete fix, keep public and persisted behavior compatible, and follow this theme's Twig and asset conventions. Protect user data and secrets. Do not weaken checks to obtain a pass.

## Bug reproduction and verification

- For a reported bug, first reproduce it on the unmodified theme in a local FOSSBilling instance matching the reporter's version. Record the route, relevant setup, and exact visible error or behavior. If the report lacks details needed to reproduce it, request those details instead of guessing.
- After changing the theme, repeat the same scenario locally. Confirm the error is gone and the intended behavior works. For user-visible changes, inspect the affected page in a browser at the relevant desktop or mobile sizes and keep concrete visual evidence for review.
- Static checks, source inspection, and upstream examples are useful supporting evidence; they do not count as reproducing the bug or confirming the fix in the application. The repository validator is `python3 AGENTARDS/scripts/validate_theme.py` and is structural validation only.
- If the matching local application, needed data, or visual verification is unavailable, report the limitation accurately and stop before claiming the bug is confirmed fixed or preparing a publication. Hand the user the candidate and the specific verification gap.

## Mandatory user review before GitHub writes

Complete implementation and local verification first. Then give the user the exact diff or commit, reproduction and after-fix evidence, check results, and release artifact for review. Stop and wait. Do not push, create or move tags, create or edit releases, upload release assets, publish packages, or post/close GitHub issues until the user has reviewed that handoff and explicitly authorizes the GitHub action. An earlier request to publish does not waive this review gate. Draft issue replies locally for the user unless they separately authorize posting.

## Project checks

- Run `python3 AGENTARDS/scripts/validate_theme.py` for the repository's available static checks.
- Do not describe that validator as a Twig runtime or FOSSBilling integration test. Report runtime and visual checks separately, including when they could not be run.

## FOSSBilling Theme & Template Standards

- **Base Layout Block Contract**: Base layouts (`layout_default.html.twig`, `layout_public.html.twig`, etc.) MUST always declare standard extension blocks, specifically `{% block head %}{% endblock %}` in `<head>` and `{% block js %}{% endblock %}` before `</body>`. Never omit `block js`; child templates place form scripts and modal logic in `block js`, and omitting it silently drops script execution without a compile-time error.
- **Form Action & Method Fallbacks**: Every `<form>` MUST declare an explicit API action (e.g. `action="{{ 'endpoint'|api_url }}"` or `action="{{ 'endpoint'|api_url(role: 'guest') }}"`) and `method="post"`. Never omit the `action` attribute; doing so causes the browser to issue native `POST` requests to the current page URL (e.g., `POST /support`), which triggers fatal 404s in FOSSBilling because controllers only register `GET` web routes.
- **Flash Message & Toast Bridge**: Theme JavaScript (`assets/js/theme.js`) must provide `globalThis.flashMessage({ message, reload, type })` and execute `flashMessage({})` on DOM load. Any action triggering a reload or redirect with feedback must persist via `sessionStorage` and trigger visual toast/banner feedback via `FOSSBilling.message`.
- **Twig Strict Variables Guardrails**: Never assume associative keys exist on cart items, product objects, or request parameters. Always guard optional and product-specific keys using the Twig `|default` filter (e.g., `item.description|default('')`, `product.stock_control|default(false)`, `request.param|default('')`). Never use unshielded null coalescing (`??`) in Twig templates where strict variable checking is enforced.

## Verification Requirements

- **Interactive End-to-End Verification**: Verifying a page with HTTP GET or static compilation does NOT prove a feature works. Agents must test the complete interactive lifecycle: submitting the form (both via JavaScript API and checking fallback action), confirming redirect to created entities (e.g. created ticket, invoice, or profile state), and verifying flash message display.
