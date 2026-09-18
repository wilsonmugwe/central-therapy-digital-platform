# Central Therapy Digital Platform — Current-State Audit

**Project:** Central Therapy Digital Platform  
**Phase:** Phase 1 — Discovery & Current-State Audit  
**Document Status:** In Progress  
**Owner:** Technical Lead  
**Client:** Central Therapy  

---

## 1. Purpose

This audit documents the current digital and technical environment operated by
Central Therapy before implementation of the replacement digital platform.

The purpose is to establish evidence about the existing environment rather than
rely on assumptions made during project initiation.

Findings from this audit will inform:

- business requirements;
- functional requirements;
- non-functional requirements;
- UX design;
- SEO strategy;
- architecture;
- migration planning;
- Microsoft 365 integration;
- security requirements;
- marketing strategy;
- implementation priorities.

---

## 2. Discovery Principles

The discovery process follows the following principles:

1. Observe before redesigning.
2. Separate confirmed facts from assumptions.
3. Preserve useful existing assets and search equity.
4. Identify business workflows before designing technical integrations.
5. Identify sensitive-data flows before implementing forms or storage.
6. Record evidence supporting important technical decisions.
7. Do not select technology solely because it was proposed during Phase 0.

---

## 3. Current Systems Inventory

| System | Purpose | Provider | Access | Status |
|---|---|---|---|---|
| Public Website | Public digital presence | TBD | Public | Under Review |
| Domain Registrar | Domain ownership | TBD | Required | Unknown |
| DNS | Domain configuration | TBD | Required | Unknown |
| Website Hosting | Existing website hosting | TBD | Required | Unknown |
| CMS | Website content management | TBD | Required | Unknown |
| Booking System | Appointment booking | TBD | Required | Unknown |
| Google Workspace | Existing business productivity/email | Google | Required | Migration planned |
| Microsoft 365 | Target productivity environment | Microsoft | Required | To Confirm |
| Google Analytics | Website analytics | TBD | Required | Unknown |
| Search Console | Organic search monitoring | Google | Required | Unknown |
| Google Business Profile | Local search presence | Google | Required | Unknown |
| Advertising | Paid acquisition | TBD | Required if applicable | Unknown |
| Social Media | Social presence/marketing | TBD | Required if applicable | Unknown |

---

## 4. Access Register

| Access | Required | Received | Notes |
|---|---|---|---|
| Website administrator | Yes | No | |
| Hosting account | Yes | No | |
| Domain registrar | Yes | No | |
| DNS management | Yes | No | |
| Google Workspace admin | Yes | No | Required for migration |
| Microsoft 365 admin | Yes | No | Confirm whether tenant exists |
| Google Analytics | Yes, if configured | No | |
| Search Console | Yes, if configured | No | |
| Google Business Profile | Yes | No | |
| Booking platform | Yes | No | |
| Advertising accounts | If applicable | No | |
| Social accounts | If applicable | No | |

---

## 5. Discovery Status Definitions

### Confirmed

Supported by direct evidence such as system access, configuration, source data
or client confirmation.

### Observed

Visible from the public environment but not yet confirmed through internal
access.

### Assumed

Currently believed to be true but not verified.

### Unknown

Insufficient information currently exists.

### Not Applicable

The capability or system does not apply to the project.

---

## 6. Discovery Areas

The current-state investigation covers:

### Website

- technology;
- hosting;
- CMS;
- structure;
- navigation;
- forms;
- booking;
- responsive behaviour;
- accessibility;
- performance;
- security.

### SEO

- indexation;
- URLs;
- metadata;
- technical SEO;
- search performance;
- backlinks where available;
- local SEO;
- redirects;
- structured data.

### Content

- service pages;
- funding information;
- practitioner information;
- calls to action;
- FAQs;
- resources;
- content quality;
- content gaps.

### Analytics

- analytics platform;
- tag management;
- events;
- conversions;
- historical data;
- attribution.

### Marketing

- organic acquisition;
- paid acquisition;
- social channels;
- landing pages;
- campaign tracking;
- local search;
- referral acquisition.

### Microsoft 365 / Google Workspace

- existing Google Workspace configuration;
- Microsoft 365 tenant;
- users;
- mailboxes;
- domains;
- aliases;
- calendars;
- contacts;
- Drive data;
- OneDrive/SharePoint;
- Teams;
- migration requirements;
- website integration opportunities.

### Business Workflows

- appointment booking;
- customer enquiries;
- referrals;
- email handling;
- lead handling;
- content management;
- marketing;
- reporting.

---

## 7. Evidence Register

Evidence gathered during discovery should be recorded using the following
format:

| ID | Area | Evidence | Source | Status |
|---|---|---|---|---|
| E-001 | Website | Existing public website available | Public Website | Observed |
| E-002 | Domain | Domain currently resolves | Public DNS | Observed |
| E-003 | Microsoft 365 | Tenant status | Client/Admin Access | Pending |
| E-004 | Analytics | Analytics configuration | Account/Website | Pending |
| E-005 | SEO | Search Console performance | Search Console | Pending |

---

## 8. Open Discovery Questions

### Business

- What are Central Therapy's highest-priority services?
- Which services generate the most enquiries?
- What constitutes a qualified lead?
- What are the main customer acquisition channels?
- What are the major customer pain points?
- Who handles incoming website enquiries?
- Who handles referrals?
- Who manages website content?

### Website

- Who currently hosts the website?
- What CMS is currently used?
- Who controls the domain?
- Who controls DNS?
- How are forms currently processed?
- What booking system is currently used?
- Are there existing integrations?

### SEO

- Is Search Console configured?
- What organic traffic does the website currently receive?
- Which pages currently generate organic traffic?
- Which search queries generate visibility?
- Are there existing backlinks that must be protected?

### Analytics

- Is Google Analytics configured?
- Is GA4 being used?
- Is Google Tag Manager configured?
- Are conversions currently tracked?
- How much historical analytics data exists?

### Microsoft 365

- Does Central Therapy already have a Microsoft 365 tenant?
- Which Microsoft 365 licence is being used?
- How many users require migration?
- Which mailboxes exist?
- Which aliases exist?
- How much Google Drive data exists?
- Are shared drives used?
- Are shared calendars used?
- Are contacts required?
- What retention requirements exist?

### Marketing

- Is Google Ads currently used?
- Is Meta advertising currently used?
- What social platforms are actively maintained?
- Is Google Business Profile configured?
- What marketing budget is currently allocated?
- How are marketing leads currently measured?

---

## 9. Initial Findings

No final findings should be recorded until sufficient evidence has been
collected.

Discovery findings will be consolidated in:

`docs/01-discovery/discovery-findings.md`

---

## 10. Current Status

**Phase:** Discovery  
**Status:** In Progress

The next activity is collection and validation of current-state evidence.