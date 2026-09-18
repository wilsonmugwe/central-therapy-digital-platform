# Central Therapy Digital Platform — Project Charter

**Project:** Central Therapy Digital Platform  
**Phase:** Phase 0 — Engagement & Project Foundation  
**Document Status:** Draft  
**Owner:** Technical Lead  
**Client:** Central Therapy  

---

## 1. Purpose

The Central Therapy Digital Platform project will modernise Central Therapy's
digital presence and establish a scalable, secure and maintainable foundation
for future digital growth.

The project includes the replacement of the existing public website with a
modern responsive website designed to provide a high-quality experience across
mobile phones, tablets, laptops and desktop devices.

The project will also establish the foundations required for search engine
optimisation, digital marketing, analytics, conversion measurement,
Microsoft 365 integration and ongoing website operations.

---

## 2. Background

Central Therapy currently operates an existing public website that provides
information about its physiotherapy services, funding pathways, practitioner
information and methods for customers to make contact or book services.

The organisation intends to modernise its digital presence and improve the
website's ability to:

- communicate Central Therapy's services clearly;
- provide a modern and professional user experience;
- support users across mobile and desktop devices;
- generate qualified enquiries and bookings;
- improve organic search visibility;
- support digital marketing campaigns;
- measure user behaviour and conversions;
- integrate appropriately with Microsoft 365;
- support future business growth.

The existing website, content, SEO position, analytics, integrations and
technical environment will be assessed during the discovery phase before
migration decisions are finalised.

---

## 3. Project Objectives

### OBJ-001 — Modernise the Website

Design and implement a modern public website that reflects Central Therapy's
brand, services and professional positioning.

### OBJ-002 — Deliver Responsive User Experience

Provide a mobile-first responsive experience that works effectively across
smartphones, tablets, laptops and desktop displays.

### OBJ-003 — Improve Customer Conversion

Create clear user journeys that encourage appropriate actions including:

- booking an appointment;
- making an enquiry;
- calling Central Therapy;
- exploring relevant services;
- accessing funding information;
- submitting or initiating referrals where applicable.

### OBJ-004 — Establish SEO Foundations

Implement a technically sound SEO foundation and content architecture that
supports Central Therapy's organic search strategy.

### OBJ-005 — Support Digital Marketing

Provide landing pages, measurement infrastructure and conversion tracking
required to support future organic and paid marketing campaigns.

### OBJ-006 — Implement Analytics and Measurement

Establish appropriate analytics and conversion measurement so website and
marketing performance can be evaluated using measurable data.

### OBJ-007 — Integrate Microsoft 365

Integrate appropriate website workflows with Central Therapy's Microsoft 365
environment where justified by business requirements.

### OBJ-008 — Improve Maintainability

Establish documented development, deployment, security and operational
practices that allow the platform to be maintained and extended safely.

### OBJ-009 — Support Growth

Design the platform so that increasing website traffic, content, services and
future digital requirements can be accommodated without requiring another
immediate ground-up rebuild.

---

## 4. High-Level Scope

The project is expected to include the following workstreams:

1. Project foundation and governance
2. Current-state discovery and audit
3. Business and technical requirements
4. User experience and responsive design
5. Information architecture
6. Website development
7. Content management
8. Search engine optimisation
9. Microsoft 365 integration
10. Analytics and conversion tracking
11. Marketing infrastructure
12. Testing and quality assurance
13. Existing website migration
14. Production deployment
15. Post-launch monitoring
16. Ongoing optimisation and maintenance planning

Detailed scope boundaries will be maintained in `scope.md`.

---

## 5. Initial Technology Direction

The following technologies are currently being considered:

- Next.js;
- TypeScript;
- Tailwind CSS;
- component-based UI architecture;
- headless content management;
- Microsoft 365;
- Microsoft Graph;
- managed cloud hosting;
- CDN and web security services;
- analytics and monitoring platforms.

These technologies represent an initial direction only.

Final technology decisions will be made following requirements analysis and
documented through Architecture Decision Records where appropriate.

---

## 6. Project Principles

The project will follow the following principles.

### Mobile First

The website will be designed for mobile users first and progressively enhanced
for larger displays.

### Performance

Performance will be treated as a functional quality requirement rather than a
post-development optimisation exercise.

### Accessibility

Accessibility will be considered throughout design, development and testing.

### Security and Privacy by Design

Security and privacy requirements will be considered throughout the project,
particularly where forms, referrals, integrations or personal information are
involved.

### SEO by Design

Search engine optimisation requirements will influence information
architecture, content structure, development and migration decisions from the
beginning of the project.

### Measurement by Design

Important user interactions and conversion paths will be measurable where
appropriate.

### Maintainability

The platform will favour understandable, documented and maintainable
architecture over unnecessary technical complexity.

### Evidence-Based Decisions

Major design, technical, SEO and marketing decisions should be supported by
requirements, research, analytics or documented assumptions where practical.

---

## 7. Key Deliverables

Expected high-level deliverables include:

- project documentation;
- current-state assessment;
- requirements specification;
- sitemap and information architecture;
- responsive UX/UI design;
- production website;
- content management capability;
- SEO implementation;
- analytics and conversion measurement;
- Microsoft 365 integrations where required;
- marketing-ready landing page capability;
- testing evidence;
- migration and redirect plan;
- deployment documentation;
- operational and maintenance documentation.

Detailed deliverables will be maintained in `deliverables.md`.

---

## 8. Constraints

Initial known constraints include:

- the existing Central Therapy domain must be preserved;
- existing SEO value should be protected during migration;
- disruption to the existing website should be minimised;
- the website must support mobile and desktop users;
- client content and approvals may affect delivery timelines;
- third-party systems may impose integration limitations;
- privacy and security requirements may restrict how personal or health-related
  information can be collected, processed or stored.

Additional constraints will be identified during discovery.

---

## 9. Assumptions

Initial assumptions include:

- appropriate access to the existing website will be provided;
- domain and DNS access will be available when required;
- relevant analytics and search accounts will be made available where they
  already exist;
- Microsoft 365 administrative access or appropriate delegated access will be
  available for approved integration work;
- the client will provide or approve branding, imagery and business content;
- existing booking and referral processes can be assessed during discovery;
- the existing website will remain operational during development.

Assumptions will be formally tracked in `assumptions.md`.

---

## 10. Success

The project will not define success solely as the successful deployment of a
new website.

Success will ultimately be evaluated through measures such as:

- website availability and reliability;
- mobile and desktop usability;
- website performance;
- search visibility;
- organic traffic;
- qualified enquiries;
- appointment booking interactions;
- referral interactions where applicable;
- conversion rates;
- marketing campaign performance;
- maintainability and operational stability.

Baseline values and specific targets will be established once sufficient
current-state data has been collected.

---

## 11. Project Governance

Major scope, architectural, security and production decisions will be
documented.

Material changes to agreed project scope should be recorded through the project
change process.

Architecture decisions with long-term technical consequences should be recorded
using Architecture Decision Records.

Production changes should be version controlled and tested before deployment.

---

## 12. Project Phases

The project will follow the lifecycle:

**Phase 0** — Engagement & Project Foundation  
**Phase 1** — Discovery & Current-State Audit  
**Phase 2** — Requirements & Problem Definition  
**Phase 3** — UX, SEO & Solution Design  
**Phase 4** — Architecture & Technical Design  
**Phase 5** — Implementation  
**Phase 6** — Testing & Quality Assurance  
**Phase 7** — Migration & Launch  
**Phase 8** — Marketing & Growth  
**Phase 9** — Operations & Optimisation  

Progression between major phases should occur once required outputs from the
preceding phase have been reviewed and significant unresolved issues have been
identified.

---

## 13. Current Status

**Current Phase:** Phase 0 — Engagement & Project Foundation

**Next Activities:**

1. Define project scope.
2. Identify stakeholders.
3. Document assumptions and dependencies.
4. Define initial success metrics.
5. Define project deliverables.
6. Establish initial risk register.
7. Establish project roadmap.
8. Review Phase 0 documentation.
9. Begin Phase 1 discovery.