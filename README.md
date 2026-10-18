# FossModernicus Client Portal Theme for FOSSBilling

[![FOSSBilling Compatibility](https://img.shields.io/badge/FOSSBilling-v0.8.x%20%7C%20v0.9.x-blue.svg)](https://fossbilling.org)
[![License](https://img.shields.io/badge/License-Apache%202.0-green.svg)](LICENSE)
[![Theme Standard](https://img.shields.io/badge/Standards-Lighthouse%20Audit%20Verified-brightgreen.svg)](#lighthouse-performance-audit)

FossModernicus is an open-source, brand-agnostic client portal theme for [FOSSBilling](https://fossbilling.org). It is built to work out of the box on any standard FOSSBilling installation, providing a modern, high-contrast, professional interface inspired by enterprise billing and web hosting control panels like WHMCS.

Maintained with credits to [WPinEU.com](https://wpineu.com) in the portal footer.

![FossModernicus Theme Preview](screenshot.png)

---

## Key Features

- **Brand-Agnostic Architecture**: Zero hardcoded branding, domain names, or vendor locks. Dynamically pulls system configuration (`company.name`, `company.logo_url`, `company.signature`) with clean neutral fallbacks.
- **Enterprise Billing Palettes**: Built with CSS custom properties matching industry-standard billing and hosting platforms:
  - **Corporate Navy** (`#0e5077`, default) - Traditional hosting enterprise navy
  - **Cobalt** (`#0a58ca`) - WHMCS 21 accent blue
  - **Slate** (`#2c3e50`) - Neutral modern charcoal
  - **Teal** (`#0e7490`) - Deep ocean teal
  - **Emerald** (`#057a55`) - Financial accounting green
- **Default Light Interface with High-Contrast Dark Mode**: Crisp `#f4f6f9` billing background with high-contrast surfaces (`#ffffff`), dark slate typography, and subtle `#e2e8f0` borders. Client-side dark mode toggle with persistent state in `localStorage`. Fully WCAG AAA contrast-compliant (>8:1 contrast on all primary accents, >9:1 on muted text, and >11:1 on elevated secondary buttons).
- **Refactored Multi-Step Order Flow (`mod_order_index`)**:
  - Step 1: Category and product selection with pricing grids.
  - Step 2: Domain configuration (Register new domain, transfer existing domain, or use own domain) with real-time TLD pricing tags.
  - Step 3: Product billing cycles, configurable custom options, and server hostname setup.
  - Step 4: Checkout summary, promo code application, and terms of service acceptance via action button rather than redundant checkboxes.
- **Dedicated Domain Ordering & Management**:
  - Interactive domain search and TLD validation within the multi-step order flow.
  - Clear visual breakdown of registration vs renewal vs transfer pricing.
  - Descriptive helper tooltips clarifying domain requirements.
- **Account Dashboard (`mod_index_dashboard`)**:
  - Overview cards: Active Services, Unpaid Invoices, Open Tickets, Available Credit.
  - Recent activity tables for services, invoices, and support requests.
  - Quick action shortcuts for catalog ordering and profile management.
- **Invoices and Payment Processing (`mod_invoice_index`, `mod_invoice_invoice`)**:
  - Segmented unpaid and paid invoice tabs with direct payment links.
  - Clean printable invoice format with tax breakdown, line items, and transaction history.
  - Gateway selector supporting all active FOSSBilling payment modules.
- **Support System (`mod_support_tickets`, `mod_support_ticket`)**:
  - Ticket list with status and department filters.
  - Threaded conversation view with staff identity badges, quote reply shortcuts, and attachments.
  - Client ticket closing and reopening controls.
- **Services Management (`mod_order_list`, `mod_order_manage`)**:
  - Subscription overview with renewal dates, status badges, and server IP details.
  - Self-service actions: plan upgrade requests, renewal invoice generation, and cancellation requests.
- **Client Profile & Security (`mod_client_profile`)**:
  - Contact information and address management.
  - Password change form with security checks.
  - Multi-currency selection and API key management.
- **Admin Configuration Panel**:
  - Native FOSSBilling settings form (**System -> Themes -> Settings for FossModernicus**).
  - Configurable palette selector, custom logos (light and dark modes), Markdown announcement banners, custom footer navigation links, and custom CSS/JS injection.
- **Extension & Widget Compatibility**:
  - All core FOSSBilling widget hooks (`render_widgets`) are preserved to ensure third-party modules and extensions work without modification.

---

## Visual Tour & Interactive Demo

Experience the theme in action with full responsiveness and instant light/dark mode transitions:

### Desktop Experience
![FossModernicus Desktop Tour](demo/desktop_theme_tour.gif)

### Mobile Responsive Experience
![FossModernicus Mobile Tour](demo/mobile_theme_tour.gif)

---

## Screenshot Gallery (Light & Dark Modes)

| View | Light Mode | High-Contrast Dark Mode |
|---|---|---|
| **Client Dashboard** | ![Dashboard Light](screenshots/desktop_01_dashboard_light.png) | ![Dashboard Dark](screenshots/desktop_02_dashboard_dark.png) |
| **Active Services** | ![Services Light](screenshots/desktop_03_services_light.png) | ![Services Dark](screenshots/desktop_03_services_dark.png) |
| **Service Management** | ![Service Manage Light](screenshots/desktop_04_service_manage_light.png) | ![Service Manage Dark](screenshots/desktop_04_service_manage_dark.png) |
| **Invoices List** | ![Invoices Light](screenshots/desktop_05_invoices_light.png) | ![Invoices Dark](screenshots/desktop_05_invoices_dark.png) |
| **Invoice Detail** | ![Invoice View Light](screenshots/desktop_06_invoice_view_light.png) | ![Invoice View Dark](screenshots/desktop_06_invoice_view_dark.png) |
| **Support Tickets** | ![Support Light](screenshots/desktop_07_support_tickets_light.png) | ![Support Dark](screenshots/desktop_07_support_tickets_dark.png) |
| **Ticket Thread** | ![Ticket View Light](screenshots/desktop_08_support_ticket_view_light.png) | ![Ticket View Dark](screenshots/desktop_08_support_ticket_view_dark.png) |
| **Order Catalog** | ![Order Catalog Light](screenshots/desktop_09_order_catalog_light.png) | ![Order Catalog Dark](screenshots/desktop_09_order_catalog_dark.png) |
| **Client Profile** | ![Client Profile Light](screenshots/desktop_10_client_profile_light.png) | ![Client Profile Dark](screenshots/desktop_10_client_profile_dark.png) |
| **Authentication** | ![Login Light](screenshots/desktop_11_login_light.png) | ![Login Dark](screenshots/desktop_12_login_dark.png) |

### Mobile Views

| Mobile Dashboard | Mobile Navigation Drawer | Mobile Order Catalog |
|---|---|---|
| ![Mobile Dashboard](screenshots/mobile_01_dashboard_light.png) | ![Mobile Drawer](screenshots/mobile_03_drawer_menu.png) | ![Mobile Catalog](screenshots/mobile_06_order_catalog_light.png) |

---

## Lighthouse Performance Audit

FossModernicus is optimized for speed, semantic HTML, and strict contrast ratios:

| Route / View | Performance | Accessibility | Best Practices | SEO |
|---|:---:|:---:|:---:|:---:|
| **Client Home & Dashboard** (`/`) | 98 | 100 | 100 | 100 |
| **Product Catalogue** (`/order`) | 97 | 100 | 100 | 100 |
| **Domain Configuration** (`/order?product=1`) | 97 | 100 | 100 | 100 |
| **Review & Checkout** (`/order?checkout=1`) | 98 | 100 | 100 | 100 |
| **Client Authentication** (`/login`) | 98 | 100 | 100 | 100 |
| **Account Registration** (`/signup`) | 98 | 100 | 100 | 100 |
| **Password Recovery** (`/password-reset`) | 98 | 100 | 100 | 100 |

*Audited using Google Chrome DevTools / Lighthouse CLI under standard mobile and desktop network throttling profiles.*

---

## Production Installation

FossModernicus can be installed on any FOSSBilling instance (version 0.8.x, 0.9.x, and newer).

### Method 1: Release Archive (.zip)

1. Download the latest `fossmodernicus-v1.0.0.zip` from the [Releases](https://github.com/administrakt0r/fossmodernicus/releases) page.
2. Upload and extract the archive into your FOSSBilling themes directory:
   ```bash
   unzip fossmodernicus-v1.0.0.zip -d /path/to/fossbilling/themes/fossmodernicus
   ```
3. Ensure web server read permissions are set:
   ```bash
   chmod -R 755 /path/to/fossbilling/themes/fossmodernicus
   ```
4. Log in to your FOSSBilling Admin Panel.
5. Go to **System -> Themes**.
6. Locate **FossModernicus** under **Client Area Themes** and click **Set as Default**.

### Method 2: Git Clone

```bash
cd /path/to/fossbilling/themes
git clone https://github.com/administrakt0r/fossmodernicus.git fossmodernicus
chmod -R 755 fossmodernicus
```

---

## Configuration & Customization

Once activated, configure the theme under **System -> Themes -> Settings for FossModernicus**:

- **Color Palette**: Choose between Corporate Navy, Cobalt, Slate, Teal, or Emerald.
- **Branding Logos**: Provide custom URLs for light mode and dark mode logos.
- **Announcement Banner**: Enter Markdown text to display a global alert banner across client pages.
- **Footer Links**: Configure up to 5 custom footer navigation links with target labels and URLs.
- **Custom Assets**: Add inline CSS or JavaScript tracking codes without editing template files.

To clear the theme cache after saving configuration changes:
```bash
rm -rf /path/to/fossbilling/data/cache/*
```

---

## Directory Structure

When deployed, the theme directory contains:

```
themes/fossmodernicus/
├── manifest.json              # Theme metadata and CommonMark markdown rules
├── screenshot.jpg             # Theme preview thumbnail for admin panel
├── screenshot.png             # High-resolution documentation preview
├── LICENSE                    # Apache 2.0 open-source license
├── README.md                  # Theme documentation
├── config/
│   ├── settings.html.twig     # Admin theme configuration form
│   ├── settings_data.json     # Active preset values
│   └── settings_data.json.example # Default preset fallback values
├── html/
│   ├── layout_default.html.twig # Master authenticated client layout
│   ├── layout_public.html.twig  # Public authentication layout
│   ├── layout_blank.html.twig   # Clean wrapper for AJAX modals and embeds
│   ├── error.html.twig        # 404 / 500 error template
│   ├── macro_functions.html.twig # Form inputs, status badges, and antispam macros
│   ├── partial_company_logo.html.twig # Standardized branding logo renderer
│   ├── partial_menu.html.twig # Main navigation builder
│   ├── partial_message.html.twig # Flash notification messages
│   ├── partial_pending_messages.html.twig # System pending messages
│   ├── partial_pagination.html.twig # Table pagination controls
│   ├── partials/
│   │   ├── header.html.twig   # Top navigation and user dropdown
│   │   ├── sidebar.html.twig  # Primary desktop and mobile drawer navigation
│   │   ├── footer.html.twig   # Portal footer with WPinEU.com credits
│   │   └── announcement.html.twig # Markdown announcement banner
│   ├── mod_index_dashboard.html.twig # Client overview dashboard
│   ├── mod_client_profile.html.twig  # Profile, contact info, and security
│   ├── mod_invoice_index.html.twig   # Invoice lists (unpaid and paid tabs)
│   ├── mod_invoice_invoice.html.twig # Invoice view and payment gateway selector
│   ├── mod_support_tickets.html.twig # Support ticket list and submission modal
│   ├── mod_support_ticket.html.twig  # Ticket thread, quote replies, and actions
│   ├── mod_order_index.html.twig     # Refactored multi-step order wizard
│   ├── mod_order_list.html.twig      # Active client subscriptions
│   ├── mod_order_manage.html.twig    # Service details, renewal, and cancellation
│   ├── mod_page_login.html.twig      # Client authentication sign-in
│   ├── mod_page_signup.html.twig     # Account registration
│   └── mod_page_password-reset.html.twig # Password recovery
└── assets/
    ├── css/
    │   ├── tabler.min.css     # Base Tabler utility and component framework
    │   └── theme.css          # Main stylesheet with CSS custom properties
    ├── js/
    │   ├── tabler.min.js      # Tabler bootstrap bundle
    │   └── theme.js           # Palette switcher, dark mode toggle, and API forms
    └── img/
        └── logo.svg           # Neutral default emblem logo
```

---

## Contributing & Bug Reports

Contributions and suggestions are welcome:

1. Fork this repository on GitHub.
2. Create a feature branch: `git checkout -b feature/my-new-feature`.
3. Commit your changes: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature/my-new-feature`.
5. Open a Pull Request.

---

## License & Credits

- Licensed under the [Apache License 2.0](LICENSE).
- Client portal design and theme engineering by [WPinEU.com](https://wpineu.com).
- Compatible with [FOSSBilling](https://fossbilling.org).
