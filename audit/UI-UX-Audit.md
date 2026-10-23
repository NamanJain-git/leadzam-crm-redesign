# LeadZam — UI/UX Product Audit

**Assessment:** UI/UX & Frontend Intern — Team Variance  
**Product:** LeadZam CRM  
**Audit type:** Product UX audit and improvement proposal  
**Status:** Audit completed; selected redesign scope defined

---

## 1. Overview

LeadZam is a CRM designed to help sales and telecalling teams manage leads, schedule follow-ups, track calls, handle WhatsApp conversations, and monitor performance.

The purpose of this audit is to examine selected areas of the existing product, identify potential usability issues, prioritize improvement opportunities, and propose a focused redesign supported by a working frontend prototype.

This audit focuses primarily on the Lead Details experience, where users review contact information, address details, additional fields, and activity history.

The objective is to improve information organization and navigation without redesigning the entire CRM.

## 2. Scope of Exploration

The following areas were explored using a personal test workspace and dummy lead data:

- **Admin Dashboard:** Workspace setup checklist and reports area.
- **All Leads:** Lead table, lead information, assignment, and available actions.
- **Lead Details:** Contact information, location, additional fields, action bar, and activity history.
- **Follow-ups:** Follow-up list, scheduling options, and available actions.

### Exploration approach

The product was explored through normal navigation and interaction with the available interface. Screenshots were captured to document the observed layouts and workflows.

The findings below distinguish direct observations from potential usability concerns. The impact of these concerns has not been formally measured through user testing or product analytics.

---

## 3. UX Audit Findings

### Finding 1 — Difficult Navigation Across Lead Details and Activity

**Area:** All Leads → Lead Details panel

**Priority:** Medium — provisional

**User goal:** Review a lead's contact information, address, additional fields, and activity history, and edit the record when necessary.

**Current experience:**

Clicking a lead's name opens a details panel on the right side of the All Leads page. The panel contains multiple sections, including Lead Details, Location, additional lead information, and Activity.

Contact information appears near the top of the panel, while address fields and other information are positioned farther down. Users must scroll within the panel to access these sections. Some additional information is available through a "Show more" control.

The Activity section contains tabs, filters, and a chronological list of events, requiring further navigation within the panel.

**Observed usability concern:**

Lead information and activity history are distributed across vertically stacked sections within a constrained panel. Users cannot see all relevant information at once and must navigate through the panel to locate particular fields or understand the lead's history.

This may make it harder to scan the record, especially when users need to review contact details alongside address information or recent activities.

**Potential impact:**

Sales representatives who frequently review or update lead records may spend additional time locating information. The constrained layout may also make record review less convenient on smaller screens.

The actual impact on task completion time and error rates has not been measured.

**Recommended direction:**

Improve the information hierarchy and navigation within the Lead Details experience by:

- Grouping related fields into clearly labelled sections.
- Making important contact information easy to scan.
- Providing clearer navigation between lead information and activity history.
- Reviewing the placement and behavior of expandable sections.
- Keeping common actions easy to access.
- Reducing unnecessary navigation while preserving access to the complete record.
- Ensuring the experience remains usable on smaller screens.

The goal is not to eliminate all scrolling, but to help users find and understand relevant information with less unnecessary navigation.

**Evidence:**

- Screenshot 1: Initial Lead Details view, showing contact information and the beginning of the Location section.
- Screenshot 2: Scrolled view, showing the Location section and "Show more" control.
- Screenshot 3: Expanded additional information, showing the acquisition-data section.
- Screenshot 4: Activity history, showing follow-up events and other lead activities.

**Validation needed:**

Evaluate how easily users can locate a specific field, review recent activity, and edit lead information. Test the layout at desktop and smaller viewport sizes before concluding that the proposed changes improve usability.

---

### Finding 2 — Discoverability of Actions in Lead Details

**Area:** All Leads → Lead Details panel

**Priority:** Medium — provisional

**User goal:** Identify and perform the appropriate action after reviewing a lead's information.

**Current experience:**

The Lead Details panel provides actions such as Call, WhatsApp, Note, To-Do, and Follow-up. Additional controls, including Refresh, Smart Form, Merge, and Delete, appear in the upper portion of the panel.

**Observation:**

Several actions with different purposes are available within the same interface. Frequently used sales activities appear alongside record-management controls.

**Potential usability concern:**

New users may need to learn where particular actions are located or distinguish between primary sales activities and secondary record-management actions.

The screenshot alone does not establish that users struggle to identify these controls.

**Potential impact:**

If important actions are difficult to discover, users may take longer to complete routine tasks or overlook useful functionality.

**Recommended direction:**

Review the action hierarchy and grouping. Give commonly used sales activities clear visual prominence while keeping secondary actions accessible. Ensure destructive actions such as Delete are distinguishable from routine actions.

**Evidence:** Screenshot of the Lead Details panel showing the upper controls and the Call, WhatsApp, Note, To-Do, and Follow-up action bar.

**Validation needed:** Test whether users can locate common actions without assistance and confirm whether existing tooltips or other guidance already address potential confusion.

---

### Finding 3 — Discoverability of Follow-up List Actions

**Area:** Follow-ups

**Priority:** Low to Medium — provisional

**User goal:** Review pending follow-ups and quickly perform the appropriate action for each lead.

**Current experience:**

The Follow-ups page displays lead names, due times, stages, last-contacted information, assignees, and action controls. Some actions are represented by icons.

**Observation:**

The list presents useful information in a compact table, but some action controls rely on icons rather than visible text labels.

**Potential usability concern:**

If an icon's meaning is not immediately recognizable, users may need to hover over it, experiment with it, or rely on prior experience to understand its function.

**Potential impact:**

Unclear action controls could slow down routine follow-up management and create uncertainty for new users.

**Recommended direction:**

Evaluate whether the icon-only controls have clear tooltips, accessible names, and recognizable visual meanings. Consider adding labels where they improve clarity without unnecessarily cluttering the interface.

**Evidence:** Screenshot of the existing Follow-ups list.

**Validation needed:** Confirm the meaning and discoverability of each icon and check whether tooltips or other guidance are already provided.

---

## 4. Prioritization

The findings are provisional because their impact has not been validated through formal usability testing.

| Finding | Potential impact | Confidence | Next step |
|---|---|---|---|
| Navigation across Lead Details and Activity | Could affect routine record review and editing | Medium | Investigate information hierarchy and navigation |
| Discoverability of lead actions | Could affect common sales tasks | Low to medium | Test action discoverability |
| Discoverability of follow-up actions | Could affect routine follow-up management | Low to medium | Inspect tooltips and test comprehension |

### Selected problem: Lead Details information hierarchy and navigation

The Lead Details experience is selected for deeper improvement because the screenshots show multiple vertically stacked information sections, a separate activity area, expandable additional fields, and a constrained panel with its own scrolling behavior.

This provides a concrete opportunity to explore how information can be organized and accessed more efficiently.

The redesign will focus on making lead information easier to scan and improving navigation between the Details and Activity experiences. It will preserve access to existing information and core actions rather than attempting to recreate the entire CRM.

The choice is based on the visible interface and the importance of the workflow. Further testing would be needed to establish the extent of user friction.

---

## 5. Proposed Redesign Scope

The redesign will focus on the Lead Details panel.

### Design objectives

1. **Clear information hierarchy:** Organize contact details, location, and additional fields into understandable sections.
2. **Improved navigation:** Make it easier to move between lead information and activity history.
3. **Accessible actions:** Keep common sales activities easy to find.
4. **Reduced unnecessary navigation:** Help users locate important information without excessive scrolling.
5. **Responsive behavior:** Ensure the panel remains usable on smaller screens.
6. **Meaningful interaction states:** Demonstrate an appropriate interaction, such as editing a field, expanding a section, or switching between Details and Activity.

### Figma deliverables

The Figma design will include:

- The main redesigned Lead Details state.
- At least one primary interaction.
- One relevant edge state, such as validation, success, or an expanded section.
- A smaller-screen layout consideration.

### Frontend implementation

The selected design will be implemented as a working React and TypeScript prototype using mock lead data.

The prototype will demonstrate the redesigned information hierarchy, navigation, and selected interactions without requiring access to LeadZam's production codebase or backend.

The implementation will include responsive styling, accessible controls, and understandable component structure.

---

## 6. What Will Not Be Redesigned

To keep the scope focused and achievable within the assessment deadline, the following areas will remain outside the redesign:

- The entire LeadZam dashboard.
- The complete All Leads table and lead-management system.
- The follow-up scheduling workflow.
- Calls, WhatsApp, reporting, and automation workflows.
- Authentication and backend integrations.
- Unrelated visual styling changes across the product.

The focus is the Lead Details experience and the organization and navigation of information within it.

---

## 7. Limitations and Further Validation

This audit is based on limited exploration of a personal test workspace, dummy data, and visible interface behavior. It does not include formal usability testing, production analytics, or interviews with actual LeadZam users.

Before shipping the redesign, I would validate:

- How quickly users can locate specific lead fields.
- Whether users can move between details and activity without losing context.
- Whether users can identify and complete common actions without assistance.
- Whether the proposed information hierarchy reduces unnecessary navigation.
- Whether the layout remains usable at smaller viewport sizes.
- Whether the redesign improves task completion time and reduces errors.

The final design should be refined using observed user behavior rather than visual preference alone.

---

## 8. Supporting Evidence

Screenshots captured during the audit:

1. Admin Dashboard and workspace setup checklist.
2. All Leads table.
3. Lead Details panel in its initial state.
4. Lead Details panel scrolled to the Location section.
5. Expanded additional lead information.
6. Activity history showing follow-up events and other activities.
7. Follow-up scheduling interface.
8. Follow-ups list.

The screenshots should be included in the final audit document with concise captions identifying the relevant interface and observation.

---

## 9. Conclusion

This audit identified potential opportunities to improve information organization, action discoverability, and navigation within LeadZam.

The Lead Details panel has been selected for a focused redesign because it presents contact information, location details, additional fields, actions, and activity history within a vertically constrained interface.

The proposed improvement will focus on making this information easier to scan and navigate while preserving the existing product's core functionality.

The final outcome will be a focused Figma redesign and working React and TypeScript prototype, supported by a documented audit and a clear explanation of design decisions, trade-offs, and limitations.
