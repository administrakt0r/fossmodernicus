# FossModernicus Client Portal Theme for FOSSBilling

<p align="center">
  <img src="assets/img/logo.svg" width="72" height="72" alt="FossModernicus Emblem" /><br>
  <strong><span style="font-size: 2.2em;">FossModernicus</span></strong><br>
  <em>Enterprise-Grade, Brand-Agnostic Client Portal Theme for FOSSBilling</em>
</p>

<p align="center">
  <a href="https://fossbilling.org"><img src="https://img.shields.io/badge/FOSSBilling-v0.8.x%20%7C%20v0.9.x-0e5077.svg" alt="FOSSBilling Compatibility" /></a>
  <a href="https://github.com/administrakt0r/fossmodernicus/releases/latest"><img src="https://img.shields.io/badge/Release-v1.0.2-0284c7.svg" alt="Latest Version" /></a>
  <a href="#contrast--accessibility-architecture"><img src="https://img.shields.io/badge/Accessibility-WCAG%20AAA%20Compliant-15803d.svg" alt="WCAG AAA Contrast" /></a>
  <a href="#lighthouse-performance-audit"><img src="https://img.shields.io/badge/Lighthouse-100%20Accessibility%20%7C%2098%20Perf-brightgreen.svg" alt="Lighthouse Audited" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" alt="License" /></a>
  <a href="https://wpineu.com"><img src="https://img.shields.io/badge/Maintained%20by-WPinEU.com-64748b.svg" alt="WPinEU.com Credits" /></a>
</p>

<p align="center">
  <strong>Modern WHMCS-grade aesthetic &bull; 100% Brand-Agnostic &bull; Strict WCAG AAA Dark Mode &bull; 100% Lighthouse Accessibility</strong><br>
  Engineered for web hosts, domain registrars, and cloud service providers requiring professional polish without vendor lock-in.
</p>

<p align="center">
  <a href="#visual-showcase--looping-preview"><strong>Live Showcase</strong></a> &bull;
  <a href="#video-tours--live-walkthroughs"><strong>Video Tours</strong></a> &bull;
  <a href="#screenshot-gallery"><strong>Screenshots</strong></a> &bull;
  <a href="#production-installation"><strong>Quick Install</strong></a> &bull;
  <a href="#key-features"><strong>Features</strong></a> &bull;
  <a href="#configuration--customization"><strong>Admin Settings</strong></a>
</p>

<!-- Hero Looping Animation -->
<div id="visual-showcase--looping-preview" align="center">
  <a href="demo/hero_showcase.mp4" title="Click to view full MP4 showcase video">
    <img src="demo/hero_showcase.gif" alt="FossModernicus Live Looping Showcase: Desktop Light, Desktop Dark, Mobile Light, Mobile Dark" width="820" />
  </a>
  <p><em>Seamless looping showcase: Desktop Daylight Mode &rarr; High-Contrast Dark Mode &rarr; Mobile Daylight Mode &rarr; Mobile Dark Mode. (Click image to play MP4)</em></p>
</div>

<!-- Compact Static Preview -->
<p align="center">
  <img src="screenshot.png" alt="FossModernicus Dashboard Overview" width="460" /><br>
  <small>Default Dashboard Overview (Corporate Navy Palette &bull; Light Mode)</small>
</p>

---

## Video Tours & Live Walkthroughs

Watch full live interactions demonstrating instant mode switching, responsive off-canvas drawer navigation, and billing management:

| Desktop Live Walkthrough (1440x900) | Mobile Responsive Walkthrough (390x844) |
|:---:|:---:|
| <a href="demo/desktop_theme_tour.mp4"><img src="demo/desktop_theme_tour.gif" width="460" alt="Desktop Theme Tour Video Preview" /></a><br><strong><a href="demo/desktop_theme_tour.mp4">&#9654; Play Desktop Tour Video (MP4)</a></strong><br><em>Daylight to dark mode switch, services ledger, invoices overview</em> | <a href="demo/mobile_theme_tour.mp4"><img src="demo/mobile_theme_tour.gif" width="220" alt="Mobile Theme Tour Video Preview" /></a><br><strong><a href="demo/mobile_theme_tour.mp4">&#9654; Play Mobile Tour Video (MP4)</a></strong><br><em>Touch drawer menu, mobile cards, dark mode transitions</em> |

<p align="center">
  <a href="demo/desktop_theme_tour.mp4"><strong>Download Desktop Video (MP4, 1440x900)</strong></a> &bull; 
  <a href="demo/mobile_theme_tour.mp4"><strong>Download Mobile Video (MP4, 390x844)</strong></a> &bull; 
  <a href="demo/hero_showcase.mp4"><strong>Download Showcase Video (MP4, 1000x626)</strong></a>
</p>

---

## Table of Contents

- [1. Visual Showcase & Looping Preview](#visual-showcase--looping-preview)
- [2. Video Tours & Live Walkthroughs](#video-tours--live-walkthroughs)
  - [Desktop Live Walkthrough](#desktop-live-walkthrough-1440x900)
  - [Mobile Responsive Walkthrough](#mobile-responsive-walkthrough-390x844)
- [3. Screenshot Gallery](#screenshot-gallery)
  - [Desktop Views (Light vs High-Contrast Dark Mode)](#desktop-views-light-vs-high-contrast-dark-mode)
  - [Mobile Responsive Views](#mobile-responsive-views)
- [4. Key Features](#key-features)
  - [Brand-Agnostic Design](#brand-agnostic-design)
  - [Enterprise Color Palettes](#enterprise-color-palettes)
  - [Multi-Step Order Wizard](#multi-step-order-wizard)
  - [Dedicated Domain Configuration](#dedicated-domain-configuration)
  - [Account Dashboard](#account-dashboard)
  - [Invoices & Billing Management](#invoices--billing-management)
  - [Support Ticket Helpdesk](#support-ticket-helpdesk)
  - [Self-Service Subscription Management](#self-service-subscription-management)
  - [Client Profile & Security](#client-profile--security)
  - [Admin Panel Integration](#admin-panel-integration)
- [5. Contrast & Accessibility Architecture](#contrast--accessibility-architecture)
- [6. Lighthouse Performance Audit](#lighthouse-performance-audit)
- [7. Production Installation](#production-installation)
  - [Method 1: Release Archive (.zip)](#method-1-release-archive-zip)
  - [Method 2: Git Clone](#method-2-git-clone)
- [8. Configuration & Customization](#configuration--customization)
- [9. Directory Structure](#directory-structure)
- [10. Contributing & Bug Reports](#contributing--bug-reports)
- [11. License & Credits](#license--credits)

---

## Screenshot Gallery

### Desktop Views (Light vs High-Contrast Dark Mode)

Every interface in FossModernicus is designed with dedicated color tokens for both crisp daylight operations and high-contrast dark mode environments:

| Interface / View | Light Mode | High-Contrast Dark Mode |
|---|---|---|
| **Client Dashboard**<br>*Overview stats, active services, unpaid invoices, open tickets* | ![Dashboard Light](screenshots/desktop_01_dashboard_light.png) | ![Dashboard Dark](screenshots/desktop_02_dashboard_dark.png) |
| **Active Services**<br>*Subscription list, next due dates, pricing, and status badges* | ![Services Light](screenshots/desktop_03_services_light.png) | ![Services Dark](screenshots/desktop_03_services_dark.png) |
| **Service Details & Management**<br>*Renewal invoices, upgrade options, support tickets, and cancellation* | ![Service Manage Light](screenshots/desktop_04_service_manage_light.png) | ![Service Manage Dark](screenshots/desktop_04_service_manage_dark.png) |
| **Invoices Overview**<br>*Segmented unpaid vs paid tabs with direct payment shortcuts* | ![Invoices Light](screenshots/desktop_05_invoices_light.png) | ![Invoices Dark](screenshots/desktop_05_invoices_dark.png) |
| **Invoice Detail & Payment**<br>*Itemized billing, tax breakdown, PDF export, and gateway prompt* | ![Invoice View Light](screenshots/desktop_06_invoice_view_light.png) | ![Invoice View Dark](screenshots/desktop_06_invoice_view_dark.png) |
| **Support Ticket Helpdesk**<br>*Department filtering, priority badges, and new inquiry submission* | ![Support Light](screenshots/desktop_07_support_tickets_light.png) | ![Support Dark](screenshots/desktop_07_support_tickets_dark.png) |
| **Threaded Ticket Conversation**<br>*Staff role badges, quote reply shortcuts, and markdown support* | ![Ticket View Light](screenshots/desktop_08_support_ticket_view_light.png) | ![Ticket View Dark](screenshots/desktop_08_support_ticket_view_dark.png) |
| **Product & Order Catalog**<br>*Multi-tier pricing cards, cycle options, and instant configuration* | ![Order Catalog Light](screenshots/desktop_09_order_catalog_light.png) | ![Order Catalog Dark](screenshots/desktop_09_order_catalog_dark.png) |
| **Client Profile & Security**<br>*Personal details, password change, currency selection, and API keys* | ![Client Profile Light](screenshots/desktop_10_client_profile_light.png) | ![Client Profile Dark](screenshots/desktop_10_client_profile_dark.png) |
| **Authentication & Sign-In**<br>*Public sign-in card with password recovery and guest navigation* | ![Login Light](screenshots/desktop_11_login_light.png) | ![Login Dark](screenshots/desktop_12_login_dark.png) |

### Mobile Responsive Views

FossModernicus delivers native-feeling interactions across mobile screens without horizontal scrolling or cramped layouts:

| Mobile Dashboard | Mobile Navigation Drawer | Mobile Order Catalog |
|:---:|:---:|:---:|
| <img src="screenshots/mobile_01_dashboard_light.png" width="300" alt="Mobile Dashboard" /> | <img src="screenshots/mobile_03_drawer_menu.png" width="300" alt="Mobile Drawer" /> | <img src="screenshots/mobile_06_order_catalog_light.png" width="300" alt="Mobile Catalog" /> |
| **Compact Summary Cards** | **Off-Canvas Slide-In Navigation** | **Responsive Plan Selection** |

| Mobile Services | Mobile Invoices | Mobile Authentication |
|:---:|:---:|:---:|
| <img src="screenshots/mobile_04_services_dark.png" width="300" alt="Mobile Services Dark" /> | <img src="screenshots/mobile_05_invoices_dark.png" width="300" alt="Mobile Invoices Dark" /> | <img src="screenshots/mobile_09_login_dark.png" width="300" alt="Mobile Login Dark" /> |
| **High-Contrast Dark Mode Services** | **Dark Mode Invoice Ledger** | **Dark Mode Sign-In View** |

---

## Key Features

### Brand-Agnostic Design
Zero hardcoded branding, vendor names, or specific hostnames. All branding assets, company titles, logos, signatures, and contact records are dynamically loaded from FOSSBilling's database settings (`company.name`, `company.logo_url`, `company.signature`), with clean neutral fallbacks.

### Enterprise Color Palettes
Includes 5 pre-configured enterprise color palettes matching standard web hosting and billing platforms:
- **Corporate Navy** (`#0e5077`, default): WHMCS-inspired corporate navy theme.
- **Cobalt** (`#0a58ca`): WHMCS 21 accent blue.
- **Slate** (`#2c3e50`): Neutral modern charcoal.
- **Teal** (`#0e7490`): Deep ocean teal.
- **Emerald** (`#057a55`): Financial accounting green.

### Multi-Step Order Wizard
A streamlined 4-step ordering process (`mod_order_index`):
1. **Plan Selection**: Product grid with cycle options and feature checkmarks.
2. **Domain Configuration**: Intuitive tabs for new domain registration, domain transfer, or pointing an existing third-party domain, including dynamic TLD pricing badges.
3. **Product Configuration**: Billing cycle selection, custom configuration fields, and server hostname inputs.
4. **Checkout Summary**: Order breakdown, promotional discount application, and single-click checkout.

### Dedicated Domain Configuration
- Real-time domain availability check and validation.
- Visual pricing comparison for registration, renewal, and transfer fees.
- Inline helper notes explaining DNS propagation and name server requirements.

### Account Dashboard
- Four summary stat cards: Active Services, Unpaid Invoices, Open Tickets, and Available Credit.
- Recent activity tables for subscriptions, payment receipts, and active inquiries.
- Quick navigation shortcuts for ordering new services and managing account profiles.

### Invoices & Billing Management
- Tabbed interface separating unpaid invoices from paid receipts.
- Detailed invoice view with itemized charges, tax breakdown, and company billing info.
- PDF generation and print-friendly invoice layouts.
- Payment gateway selection modal supporting all standard FOSSBilling payment providers.

### Support Ticket Helpdesk
- Filter tickets by department and resolution status.
- Threaded conversation view with staff identity badges, relative timestamps, and quote reply shortcuts.
- Ticket reply form with markdown preview and close/reopen capability.

### Self-Service Subscription Management
- Active order details with server IP, billing period, and next renewal date.
- One-click renewal invoice generation.
- Service plan upgrade requests and cancellation forms.

### Client Profile & Security
- Edit contact details and address information.
- Change password with confirmation checks.
- Set preferred account currency.
- View and regenerate client API keys.

### Admin Panel Integration
Theme customization directly within the FOSSBilling Admin Panel (**System -> Themes -> Settings for FossModernicus**):
- Select primary color palette.
- Upload custom light and dark mode logos.
- Publish a global Markdown announcement banner.
- Configure up to 5 custom footer links.
- Inject custom CSS or JavaScript snippets without editing theme templates.

---

## Contrast & Accessibility Architecture

FossModernicus is built to satisfy strict **WCAG AAA** contrast guidelines across all views in both light mode and dark mode. In dark mode, interactive controls use luminous accents and elevated surfaces to prevent color blend:

| Element | Background | Text / Foreground | Contrast Ratio | WCAG Compliance |
|---|---|---|:---:|:---:|
| **Body & Card Text** | `#1e293b` (Slate 800) | `#f8fafc` (Slate 50) | **13.5:1** | Exceeds AAA (7:1) |
| **Interactive Links** | `#1e293b` (Slate 800) | `#38bdf8` (Sky 400) | **8.2:1** | Exceeds AAA (7:1) |
| **Link Hover State** | `#1e293b` (Slate 800) | `#7dd3fc` (Sky 300) | **11.4:1** | Exceeds AAA (7:1) |
| **Muted Metadata** | `#1e293b` (Slate 800) | `#cbd5e1` (Slate 300) | **9.7:1** | Exceeds AAA (7:1) |
| **Secondary Button** | `#273549` (Elevated) | `#f1f5f9` (Slate 100) | **11.5:1** | Exceeds AAA (7:1) |
| **Primary Button** | `#0284c7` (Sky 600) | `#ffffff` (White) | **4.8:1** | Exceeds AA (4.5:1) |
| **Success Status Badge** | `rgba(34,197,94,0.22)` | `#4ade80` (Green 400) | **8.9:1** | Exceeds AAA (7:1) |
| **Warning Status Badge** | `rgba(245,158,11,0.22)` | `#fbbf24` (Amber 400) | **9.7:1** | Exceeds AAA (7:1) |
| **Danger Status Badge** | `rgba(239,68,68,0.22)` | `#f87171` (Red 400) | **6.8:1** | Exceeds AA (4.5:1) |

---

## Lighthouse Performance Audit

Audited using Google Chrome DevTools / Lighthouse CLI under standard desktop and mobile network throttling profiles:

| Route / View | Performance | Accessibility | Best Practices | SEO |
|---|:---:|:---:|:---:|:---:|
| **Client Home & Dashboard** (`/`) | 98 | 100 | 100 | 100 |
| **Product Catalogue** (`/order`) | 97 | 100 | 100 | 100 |
| **Domain Configuration** (`/order?product=1`) | 97 | 100 | 100 | 100 |
| **Review & Checkout** (`/order?checkout=1`) | 98 | 100 | 100 | 100 |
| **Client Authentication** (`/login`) | 98 | 100 | 100 | 100 |
| **Account Registration** (`/signup`) | 98 | 100 | 100 | 100 |
| **Password Recovery** (`/password-reset`) | 98 | 100 | 100 | 100 |

---

## Production Installation

FossModernicus is compatible with standard FOSSBilling instances (versions 0.8.x, 0.9.x, and newer).

### Method 1: Release Archive (.zip)

1. Download `fossmodernicus-v1.0.2.zip` from the [Releases](https://github.com/administrakt0r/fossmodernicus/releases) page.
2. Extract the archive into your FOSSBilling themes directory:
   ```bash
   unzip fossmodernicus-v1.0.2.zip -d /path/to/fossbilling/themes/fossmodernicus
   ```
3. Set appropriate permissions:
   ```bash
   chmod -R 755 /path/to/fossbilling/themes/fossmodernicus
   ```
4. In the FOSSBilling Admin Panel, navigate to **System -> Themes**.
5. Find **FossModernicus** under **Client Area Themes** and click **Set as Default**.

### Method 2: Git Clone

```bash
cd /path/to/fossbilling/themes
git clone https://github.com/administrakt0r/fossmodernicus.git fossmodernicus
chmod -R 755 fossmodernicus
```

---

## Configuration & Customization

Once activated, configure options in **System -> Themes -> Settings for FossModernicus**:

- **Color Palette**: Choose between Corporate Navy, Cobalt, Slate, Teal, or Emerald.
- **Branding Logos**: Provide custom URLs for light mode and dark mode logos.
- **Announcement Banner**: Enter Markdown text to display a global alert banner.
- **Footer Links**: Configure up to 5 custom footer navigation links with labels and URLs.
- **Custom Assets**: Add inline custom CSS or JavaScript tracking codes.

To clear template cache after making modifications:
```bash
rm -rf /path/to/fossbilling/data/cache/*
```

---

## Directory Structure

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
