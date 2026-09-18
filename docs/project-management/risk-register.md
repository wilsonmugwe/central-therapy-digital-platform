# Central Therapy Digital Platform — Risk Register

**Project:** Central Therapy Digital Platform  
**Status:** Active  
**Owner:** Technical Lead

---

## Risk Scale

### Likelihood

- Low
- Medium
- High

### Impact

- Low
- Medium
- High
- Critical

---

## Risk Register

| ID | Risk | Likelihood | Impact | Response |
|---|---|---:|---:|---|
| R-001 | Existing SEO performance declines during migration | Medium | High | Audit URLs, rankings and indexation; create redirect plan; validate after launch |
| R-002 | Required system/account access is unavailable or delayed | Medium | High | Create access inventory early in discovery |
| R-003 | Client content or approvals delay delivery | Medium | Medium | Establish approval responsibilities and review checkpoints |
| R-004 | Existing booking system has integration limitations | Medium | Medium | Assess booking platform before architecture decisions |
| R-005 | DNS changes interrupt website availability | Low | High | Document DNS, reduce TTL where appropriate and prepare rollback |
| R-006 | DNS/email changes interrupt Microsoft 365 email | Low | Critical | Coordinate website and M365 DNS changes and verify records before cutover |
| R-007 | Microsoft 365 integration is more complex than expected | Medium | Medium | Audit tenant and workflows before implementation |
| R-008 | Sensitive personal or health information is collected insecurely | Low | Critical | Apply privacy/security by design and minimise collection |
| R-009 | Project scope expands significantly during development | High | High | Maintain scope baseline and formal change control |
| R-010 | Website performs poorly on mobile devices | Low | High | Mobile-first design, performance budgets and device testing |
| R-011 | New website introduces accessibility barriers | Medium | High | Include accessibility in design, development and QA |
| R-012 | Analytics implementation produces inaccurate data | Medium | Medium | Define measurement plan and validate tracking |
| R-013 | Existing analytics data is insufficient for baseline comparison | Medium | Medium | Record limitations and establish new baseline after implementation |
| R-014 | Existing content contains inaccurate or outdated information | Medium | High | Conduct content audit and require client approval |
| R-015 | Existing backlinks point to removed URLs | Medium | High | Preserve URLs where appropriate and implement redirects |
| R-016 | Third-party services introduce outages or limitations | Medium | Medium | Document dependencies and design graceful failure where practical |
| R-017 | Credentials or secrets are accidentally committed | Low | Critical | Gitignore, secret management, repository scanning and review |
| R-018 | Production deployment introduces defects | Medium | High | Staging, UAT, deployment checklist and rollback plan |
| R-019 | Marketing campaigns generate traffic without qualified conversions | Medium | Medium | Track qualified outcomes and optimise campaigns using conversion data |
| R-020 | Project becomes unnecessarily complex technically | Medium | Medium | Prefer maintainable architecture and justify major technology decisions |

---

## Risk Management Process

Each material risk should have:

- unique identifier;
- description;
- likelihood;
- impact;
- mitigation or response;
- owner;
- status.

Risks should be reviewed:

- during phase transitions;
- before production launch;
- following major scope changes;
- following significant incidents;
- when new dependencies are introduced.

---

## Current Risk Status

This register represents initial Phase 0 risks.

Likelihood and impact ratings will be reviewed using evidence collected during
Phase 1.