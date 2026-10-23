# LeadZam CRM — Lead Workspace Redesign

A UI/UX redesign and frontend prototype created as part of the **UI/UX & Frontend Intern assessment at Team Variance**.

## Overview

This project explores improvements to the LeadZam CRM lead-management experience. It includes a redesigned lead-details workspace that brings contact information, interaction history, calls, workflow progress, tasks, and revenue insights into one interface.

The redesign focuses on making lead information easier to review and helping users understand the next steps in their follow-up workflow.

## Objectives

- Review the existing LeadZam interface and identify potential usability improvements.
- Document observations and recommendations in a UX audit.
- Create a redesigned interface in Figma.
- Implement the design as a responsive React and TypeScript prototype.
- Demonstrate key interactions using mock data.

## Key Features

- **Lead details:** Contact information, lead source, assignment, location, and lead status.
- **Activity timeline:** A chronological view of interactions and updates.
- **Call history:** Call status, duration, and interaction summaries.
- **Workflow tracking:** Progress indicators and upcoming steps.
- **Task management:** View tasks and toggle their completion status.
- **Revenue overview:** Potential deal value, win probability, weighted value, and estimated close date.
- **Quick actions:** Call, WhatsApp, Note, To-Do, and Schedule Follow-up controls.
- **Responsive layout:** Adaptations for desktop and smaller screens.

> Note: This is a frontend demonstration using sample data. Quick-action controls display demonstration feedback and are not connected to real calling, WhatsApp, or scheduling services.

## UX Audit

The UX audit documents observations from exploring the existing LeadZam interface, potential usability concerns, recommendations, and areas requiring further validation.

The audit focuses on lead management and follow-up workflows. Follow-up scheduling is identified as a redesign opportunity because custom date and time selection may require additional effort for some users. This is a hypothesis that requires usability testing, not a confirmed usability failure.

See the `audit/` directory for the detailed audit document.

## Design and Screenshots

The project includes:

- **Original interface screenshots:** `old-lead-detail-screenshots/`
- **Redesigned interface screenshots:** `redesigned-lead-detail-screenshots/`
- **UX audit:** `audit/UI-UX-Audit.md/`

The screenshots document the existing interface and provide visual context for the redesign.

## Figma Link

(https://www.figma.com/design/dUgFcKPsw0ukFGpo89rssv/LeadZam-%E2%80%94-Lead-Details-Redesign?node-id=0-1&t=iDWbKaBpBP5TnGAT-1)

## Technology Stack

- React
- TypeScript
- Vite
- HTML
- CSS

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) and npm.

### Installation

Clone the repository:

```bash
git clone https://github.com/NamanJain-git/leadzam-crm-redesign
```

Navigate to the project directory:

```bash
cd <LeadZam-UX-Assessment>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal.

### Production Build

Run the following command to check and build the project:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Scope and Limitations

This prototype uses mock lead data and focuses on the lead-details workspace. It does not include a backend, authentication, persistent data storage, or integrations with calling and messaging services.

The prototype demonstrates interface interactions rather than a production-ready CRM workflow. Further usability testing would be needed to validate the proposed improvements.

## Future Improvements

- Implement a complete follow-up scheduling form with quick options, custom date/time selection, optional notes, validation, and confirmation.
- Add tooltips and accessibility improvements where needed.
- Connect the interface to backend APIs and persistent data storage.
- Conduct usability testing and refine the design based on user feedback.

## Author

**Naman Jain**

Created as part of the UI/UX & Frontend Intern assessment for Team Variance.
