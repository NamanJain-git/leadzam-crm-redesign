
// import { useState } from "react";
// import "./index.css";

// type TabName = "Activity" | "Calls" | "Workflow" | "Tasks" | "Revenue";

// const tabs: TabName[] = [
//   "Activity",
//   "Calls",
//   "Workflow",
//   "Tasks",
//   "Revenue",
// ];


// const activities = [
//   {
//     icon: "☎",
//     title: "Outgoing call",
//     description:
//       "Discussed requirements and confirmed interest in a product walkthrough.",
//     time: "Today · 10:30 AM",
//     color: "blue",
//   },
//   {
//     icon: "▣",
//     title: "WhatsApp message sent",
//     description:
//       "Shared product details and the requested pricing information.",
//     time: "Yesterday · 4:15 PM",
//     color: "green",
//   },
//   {
//     icon: "◷",
//     title: "Follow-up scheduled",
//     description:
//       "Review the proposal and answer any remaining questions.",
//     time: "Oct 25 · 11:00 AM",
//     color: "purple",
//   },
//   {
//     icon: "▤",
//     title: "Note added",
//     description:
//       "Lead prefers a call in the late morning. Interested in the standard plan.",
//     time: "Oct 20 · 2:20 PM",
//     color: "blue",
//   },
//   {
//     icon: "✓",
//     title: "Lead created",
//     description: "Lead was added from a website enquiry form.",
//     time: "Oct 18 · 9:12 AM",
//     color: "green",
//   },
// ];


// function App() {
//   const [activeTab, setActiveTab] = useState<TabName>("Activity");
//   const [showMore, setShowMore] = useState(false);
//   const [notice, setNotice] = useState("");

//   function handleAction(action: string) {
//     setNotice(`${action} selected`);
//   }

//   return (
//     <main className="app-shell">
//       <header className="topbar">
//         <div className="brand">
//           <span className="brand-mark">L</span>
//           <span>LeadZam</span>
//           <span className="brand-label">CRM</span>
//         </div>

//         <div className="topbar-right">
//           <span className="workspace-label">Sales workspace</span>
//           <div className="avatar">NJ</div>
//         </div>
//       </header>

//       <section className="page-content">
//         <div className="page-heading">
//           <div>
//             <p className="eyebrow">SALES / LEADS</p>
//             <h1>Lead management</h1>
//             <p className="page-subtitle">
//               View lead information and manage customer interactions.
//             </p>
//           </div>
//           <button
//             className="secondary-button"
//             onClick={() => handleAction("Add lead")}
//           >
//             + Add lead
//           </button>
//         </div>

//         <div className="background-table">
//           <div className="table-heading">
//             <h2>All leads</h2>
//             <span className="muted">Showing 128 leads</span>
//           </div>
//           <div className="table-row table-header">
//             <span>Name</span>
//             <span>Company</span>
//             <span>Status</span>
//           </div>
//           <div className="table-row">
//             <span>Priya Sharma</span>
//             <span>Acme Solutions</span>
//             <span><span className="status-pill">Qualified</span></span>
//           </div>
//           <div className="table-row">
//             <span>Rahul Mehta</span>
//             <span>Bright Technologies</span>
//             <span><span className="status-pill neutral">Contacted</span></span>
//           </div>
//           <div className="table-row">
//             <span>Ananya Gupta</span>
//             <span>Northstar Digital</span>
//             <span><span className="status-pill">Qualified</span></span>
//           </div>
//         </div>
//       </section>

//       <div className="modal-overlay">
//         <section
//           className="lead-modal"
//           role="dialog"
//           aria-modal="true"
//           aria-labelledby="lead-name"
//         >
//           <header className="modal-header">
//             <div className="modal-title">
//               <div className="breadcrumb">All leads <span>/</span> Lead details</div>
//               <h2>Lead details</h2>
//             </div>
//             <button
//               className="close-button"
//               aria-label="Close lead details"
//               onClick={() => handleAction("Close")}
//             >
//               ×
//             </button>
//           </header>

//           <div className="modal-body">

//             <aside className="lead-sidebar">
//               <div className="lead-profile">
//                 <div className="lead-avatar">AS</div>

//                 <div className="lead-name-block">
//                   <h3 id="lead-name">Aarav Sharma</h3>
//                   <p>Lead ID: LD-1042</p>
//                   <span className="followup-status">
//                     <span>●</span> Follow-up pending
//                   </span>
//                 </div>
//               </div>

//               <div className="info-section">
//                 <p className="section-label">CONTACT INFORMATION</p>

//                 <InfoRow
//                   label="Phone number"
//                   value="+91 98765 43210"
//                 />

//                 <InfoRow
//                   label="Email address"
//                   value="aarav.sharma@example.com"
//                 />
//               </div>

//               <div className="info-section lead-information">
//                 <p className="section-label">LEAD INFORMATION</p>

//                 <InfoRow
//                   label="Location"
//                   value="Noida, Uttar Pradesh"
//                 />

//                 <InfoRow
//                   label="Lead source"
//                   value="Website enquiry"
//                 />

//                 <InfoRow
//                   label="Assigned to"
//                   value="You"
//                 />

//                 <InfoRow
//                   label="Created on"
//                   value="18 October 2026"
//                 />
//               </div>

//               <div className="quick-actions">
//                 <p className="section-label">QUICK ACTIONS</p>

//                 <div className="action-grid">
//                   <button onClick={() => handleAction("Call")}>
//                     <span>☎</span> Call
//                   </button>

//                   <button onClick={() => handleAction("WhatsApp")}>
//                     <span>◉</span> WhatsApp
//                   </button>

//                   <button onClick={() => handleAction("Add note")}>
//                     <span>▤</span> Note
//                   </button>

//                   <button onClick={() => handleAction("Create to-do")}>
//                     <span>☑</span> To-Do
//                   </button>

//                   <button
//                     className="followup-action primary"
//                     onClick={() => handleAction("Schedule follow-up")}
//                   >
//                     <span>＋</span> Schedule Follow-up
//                   </button>
//                 </div>
//               </div>
//             </aside>


//             <section className="workspace">
//               <div className="workspace-header">
//                 <div>
//                   <h3>Lead Workspace</h3>
//                   <p className="workspace-subtitle">
//                     Review interactions, track progress and manage next steps.
//                   </p>
//                 </div>
//                 <button
//                   className="icon-button"
//                   aria-label="More options"
//                   onClick={() => handleAction("More options")}
//                 >
//                   ···
//                 </button>
//               </div>

//               <div className="tabs" role="tablist" aria-label="Lead workspace">
//                 {tabs.map((tab) => (
//                   <button
//                     key={tab}
//                     type="button"
//                     role="tab"
//                     aria-selected={activeTab === tab}
//                     className={`tab ${activeTab === tab ? "active" : ""}`}
//                     onClick={() => {
//                       setActiveTab(tab);
//                       setNotice("");
//                     }}
//                   >
//                     {tab}
//                   </button>
//                 ))}
//               </div>

//               <div className="workspace-content" role="tabpanel">
//                 {activeTab === "Activity" && (
//                   <>
//                     <div className="content-heading">
//                       <div>
//                         <h4>Recent activity</h4>
//                         <p>Keep track of every interaction with this lead.</p>
//                       </div>
//                       <button
//                         className="secondary-button small"
//                         onClick={() => handleAction("Activity filter")}
//                       >
//                         Filter
//                       </button>
//                     </div>

//                     <div className="activity-list">
//                       {activities.map((activity) => (
//                         <article className="activity-item" key={activity.title}>
//                           <div className={`activity-icon ${activity.color}`}>
//                             {activity.icon}
//                           </div>
//                           <div className="activity-details">
//                             <div className="activity-title-row">
//                               <h4>{activity.title}</h4>
//                               <span>{activity.time}</span>
//                             </div>
//                             <p>{activity.description}</p>
//                           </div>
//                         </article>
//                       ))}
//                     </div>

//                     <button
//                       className="load-more"
//                       onClick={() => handleAction("Load more activity")}
//                     >
//                       View all activity →
//                     </button>
//                   </>
//                 )}

//                 {activeTab === "Calls" && (
//                   <>
//                     <div className="content-heading">
//                       <div>
//                         <h4>Call history</h4>
//                         <p>Review previous calls and their outcomes.</p>
//                       </div>
//                       <button
//                         className="primary-button small"
//                         onClick={() => handleAction("Log a call")}
//                       >
//                         + Log call
//                       </button>
//                     </div>
//                     <div className="call-summary">
//                       <div><span>Total calls</span><strong>08</strong></div>
//                       <div><span>Connected</span><strong>06</strong></div>
//                       <div><span>Last call</span><strong>Yesterday</strong></div>
//                     </div>
//                     {activities.slice(1, 2).map((activity) => (
//                       <article className="activity-item" key={activity.title}>
//                         <div className="activity-icon green">☎</div>
//                         <div className="activity-details">
//                           <div className="activity-title-row">
//                             <h4>{activity.title}</h4>
//                             <span>{activity.time}</span>
//                           </div>
//                           <p>{activity.description}</p>
//                           <span className="call-tag">Connected · 4 min</span>
//                         </div>
//                       </article>
//                     ))}
//                     <div className="empty-hint">
//                       <span className="empty-icon">☎</span>
//                       <p>Call records shown here are sample data.</p>
//                     </div>
//                   </>
//                 )}

//                 {activeTab === "Workflow" && (
//                   <Placeholder
//                     icon="↗"
//                     title="Lead workflow"
//                     description="Track this lead as it moves through your sales process."
//                     action="View workflow"
//                     onAction={handleAction}
//                   />
//                 )}

//                 {activeTab === "Tasks" && (
//                   <Placeholder
//                     icon="☑"
//                     title="Tasks & to-dos"
//                     description="Keep next steps organized so no follow-up is missed."
//                     action="Create task"
//                     onAction={handleAction}
//                   />
//                 )}

//                 {activeTab === "Revenue" && (
//                   <Placeholder
//                     icon="₹"
//                     title="Revenue overview"
//                     description="Review the potential revenue associated with this lead."
//                     action="Add opportunity"
//                     onAction={handleAction}
//                   />
//                 )}
//               </div>

//               {notice && (
//                 <div className="notice" role="status">
//                   <span>{notice}</span>
//                   <button
//                     aria-label="Dismiss notification"
//                     onClick={() => setNotice("")}
//                   >
//                     ×
//                   </button>
//                 </div>
//               )}
//             </section>
//           </div>
//         </section>
//       </div >
//     </main >
//   );
// }

// function InfoRow({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="info-row">
//       <span>{label}</span>
//       <strong>{value}</strong>
//     </div>
//   );
// }

// function Placeholder({
//   icon,
//   title,
//   description,
//   action,
//   onAction,
// }: {
//   icon: string;
//   title: string;
//   description: string;
//   action: string;
//   onAction: (value: string) => void;
// }) {
//   return (
//     <div className="placeholder">
//       <div className="placeholder-icon">{icon}</div>
//       <h4>{title}</h4>
//       <p>{description}</p>
//       <button className="primary-button" onClick={() => onAction(action)}>
//         + {action}
//       </button>
//       <p className="placeholder-note">
//         This section uses sample UI for the assessment prototype.
//       </p>
//     </div>
//   );
// }

// export default App;




import { useState } from "react";
import "./index.css";

type Tab = "Activity" | "Calls" | "Workflow" | "Tasks" | "Revenue";

const tabs: Tab[] = ["Activity", "Calls", "Workflow", "Tasks", "Revenue"];

const activities = [
  {
    icon: "↗",
    color: "",
    title: "Outgoing call",
    description:
      "Discussed requirements and confirmed interest in a product walkthrough.",
    time: "Today · 10:30 AM",
  },
  {
    icon: "◉",
    color: "green",
    title: "WhatsApp message sent",
    description:
      "Shared product details and the requested pricing information.",
    time: "Yesterday · 4:15 PM",
  },
  {
    icon: "◷",
    color: "purple",
    title: "Follow-up scheduled",
    description:
      "Review the proposal and answer any remaining questions.",
    time: "Oct 25 · 11:00 AM",
  },
  {
    icon: "✎",
    color: "",
    title: "Note added",
    description:
      "Lead prefers a call in the late morning. Interested in the standard plan.",
    time: "Oct 20 · 2:20 PM",
  },
  {
    icon: "＋",
    color: "green",
    title: "Lead created",
    description: "Lead was added from a website enquiry form.",
    time: "Oct 18 · 9:12 AM",
  },
];

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="field">
      <div className="label">{label}</div>
      <div className="value">{value}</div>
    </div>
  );
}

function Section({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`section ${className}`}>
      <div className="section-title">{title}</div>
      {children}
    </section>
  );
}

function ActivityTab() {
  return (
    <>
      <div className="content-head">
        <h3>Recent activity</h3>
        <span className="muted">5 updates</span>
      </div>

      <div className="timeline">
        {activities.map((activity) => (
          <div className="event" key={activity.title}>
            <div className={`event-icon ${activity.color}`}>
              {activity.icon}
            </div>
            <div>
              <div className="event-title">{activity.title}</div>
              <div className="event-desc">{activity.description}</div>
            </div>
            <div className="event-time">{activity.time}</div>
          </div>
        ))}
      </div>
    </>
  );
}

function CallsTab() {
  return (
    <>
      <div className="content-head">
        <h3>Call history</h3>
        <span className="tag">4 calls</span>
      </div>

      <div className="statrow">
        <div className="stat">
          <b>4</b>
          <span>Total calls</span>
        </div>
        <div className="stat">
          <b>3</b>
          <span>Connected</span>
        </div>
        <div className="stat">
          <b>12m</b>
          <span>Total duration</span>
        </div>
      </div>

      <div className="card">
        <h4>↗ Outgoing · Connected</h4>
        <div className="muted">Today, 10:30 AM · Duration 04:32</div>
        <p>
          Discussed requirements and product walkthrough.
        </p>
      </div>

      <div className="card">
        <h4>↗ Outgoing · No answer</h4>
        <div className="muted">Oct 21, 2:10 PM · Duration 00:18</div>
        <p>
          No answer. Try again during the preferred time.
        </p>
      </div>

      <div className="card">
        <h4>↙ Incoming · Connected</h4>
        <div className="muted">Oct 20, 11:45 AM · Duration 05:16</div>
        <p>
          Asked about pricing and implementation timeline.
        </p>
      </div>
    </>
  );
}

function ProgressCard({
  title,
  progress,
  completed,
}: {
  title: string;
  progress: number;
  completed: string;
}) {
  return (
    <div className="card">
      <div className="content-head">
        <h3>{title}</h3>
        <span className="tag">{progress}%</span>
      </div>

      <div
        style={{
          height: 7,
          background: "#e2e8f0",
          borderRadius: 10,
          overflow: "hidden",
          marginBottom: 9,
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            background: "#2563eb",
            borderRadius: 10,
          }}
        />
      </div>

      <p>{completed}</p>
    </div>
  );
}

function WorkflowTab() {
  return (
    <>
      <div className="content-head">
        <h3>Lead workflow</h3>
        <span className="tag">In progress</span>
      </div>

      <ProgressCard
        title="Lead qualification"
        progress={75}
        completed="3 of 4 steps completed"
      />

      <ProgressCard
        title="Proposal and follow-up"
        progress={35}
        completed="1 of 3 steps completed"
      />

      <div className="card">
        <h4>Next step</h4>
        <p>
          Follow up on proposal
          <br />
          Oct 25 at 11:00 AM
        </p>
      </div>
    </>
  );
}

function TasksTab() {
  const [completedTasks, setCompletedTasks] = useState<string[]>([
    "Send product details",
  ]);

  const tasks = [
    { title: "Follow up on proposal", due: "Due Oct 25" },
    { title: "Prepare product walkthrough", due: "Due Oct 26" },
    { title: "Send product details", due: "Completed Oct 21" },
  ];

  const toggleTask = (title: string) => {
    setCompletedTasks((current) =>
      current.includes(title)
        ? current.filter((task) => task !== title)
        : [...current, title],
    );
  };

  return (
    <>
      <div className="content-head">
        <h3>Tasks and reminders</h3>
        <span className="tag">
          {tasks.length - completedTasks.length} open
        </span>
      </div>

      {tasks.map((task) => {
        const completed = completedTasks.includes(task.title);

        return (
          <div className="card task-card" key={task.title}>
            <label
              style={{
                display: "flex",
                gap: 10,
                alignItems: "flex-start",
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                checked={completed}
                onChange={() => toggleTask(task.title)}
                style={{ marginTop: 3 }}
              />
              <span style={{ flex: 1 }}>
                <strong
                  style={{
                    textDecoration: completed ? "line-through" : "none",
                    color: completed ? "#94a3b8" : "#0f172a",
                  }}
                >
                  {task.title}
                </strong>
                <span
                  className="muted"
                  style={{ display: "block", marginTop: 6 }}
                >
                  {completed && task.title !== "Send product details"
                    ? "Completed"
                    : task.due}
                </span>
              </span>
            </label>
          </div>
        );
      })}
    </>
  );
}

function RevenueTab() {
  return (
    <>
      <div className="content-head">
        <h3>Revenue overview</h3>
        <span className="tag">Forecast</span>
      </div>

      <div className="statrow">
        <div className="stat">
          <b>₹75k</b>
          <span>Potential value</span>
        </div>
        <div className="stat">
          <b>60%</b>
          <span>Win probability</span>
        </div>
        <div className="stat">
          <b>₹45k</b>
          <span>Weighted value</span>
        </div>
      </div>

      <div className="card">
        <h4>Potential deal</h4>
        <Field label="Plan" value="Standard plan" />
        <Field label="Estimated close" value="November 2026" />
        <Field label="Stage" value="Proposal" />
      </div>

      <div className="card">
        <h4>Closed revenue</h4>
        <p>No closed revenue yet.</p>
      </div>
    </>
  );
}

function TabContent({ activeTab }: { activeTab: Tab }) {
  switch (activeTab) {
    case "Activity":
      return <ActivityTab />;
    case "Calls":
      return <CallsTab />;
    case "Workflow":
      return <WorkflowTab />;
    case "Tasks":
      return <TasksTab />;
    case "Revenue":
      return <RevenueTab />;
    default:
      return <ActivityTab />;
  }
}

function LeadDetailsModal({
  onClose,
}: {
  onClose: () => void;
}) {
  const [activeTab, setActiveTab] = useState<Tab>("Activity");
  const [notice, setNotice] = useState("");

  const handleAction = (action: string) => {
    setNotice(`${action} selected`);
    window.setTimeout(() => setNotice(""), 2500);
  };

  return (
    <div className="overlay">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-modal-title"
      >
        <div className="modal-head">
          <div>
            <h2 id="lead-modal-title">Lead Details</h2>
            <span className="muted">All Leads</span>
          </div>
          <button
            className="close"
            type="button"
            onClick={onClose}
            aria-label="Close lead details"
          >
            ×
          </button>
        </div>

        <div className="columns">
          <aside className="left">
            <div className="profile">
              <div className="avatar big">AS</div>
              <div>
                <div className="name">Aarav Sharma</div>
                <div className="id">Lead ID: LD-1042</div>
              </div>
            </div>

            <div className="status">● Follow-up pending</div>

            <Section title="Contact information" className="fields">
              <Field label="Phone number" value="+91 98765 43210" />
              <Field
                label="Email address"
                value="aarav.sharma@example.com"
              />
            </Section>

            <Section title="Lead information" className="fields">
              <Field label="Location" value="Noida, Uttar Pradesh" />
              <Field label="Lead source" value="Website enquiry" />
              <Field label="Assigned to" value="You" />
              <Field label="Created on" value="18 October 2026" />
            </Section>

            <Section title="Quick actions">
              <div className="actions">
                <button
                  className="action"
                  onClick={() => handleAction("Call")}
                  type="button"
                >
                  <span className="ico">☎</span> Call
                </button>
                <button
                  className="action"
                  onClick={() => handleAction("WhatsApp")}
                  type="button"
                >
                  <span className="ico">◉</span> WhatsApp
                </button>
                <button
                  className="action"
                  onClick={() => handleAction("Note")}
                  type="button"
                >
                  <span className="ico">✎</span> Note
                </button>
                <button
                  className="action"
                  onClick={() => handleAction("To-Do")}
                  type="button"
                >
                  <span className="ico">✓</span> To-Do
                </button>
                <button
                  className="action follow"
                  onClick={() => handleAction("Schedule follow-up")}
                  type="button"
                >
                  <span className="ico">◷</span> Schedule Follow-up
                </button>
              </div>
              {notice && (
                <p
                  role="status"
                  style={{ color: "#2563eb", fontSize: 12, marginTop: 10 }}
                >
                  {notice}
                </p>
              )}
            </Section>
          </aside>

          <main className="right">
            <div className="workspace-title">Lead Workspace</div>
            <div className="workspace-sub">
              Review interactions, track progress and manage next steps.
            </div>

            <div className="tabs" role="tablist" aria-label="Lead workspace">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab}
                  className={`tab ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="tabcontent" role="tabpanel">
              <TabContent activeTab={activeTab} />
            </div>
          </main>
        </div>

        <div className="footer">
          <span>Lead workspace concept · UI/UX redesign</span>
          <span>Sample data · Desktop + responsive concept</span>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [showLead, setShowLead] = useState(true);

  return (
    <div className="app">
      <header className="topbar">
        <div className="logo">LeadZam</div>
        <div className="search">⌕ &nbsp; Search leads, contacts...</div>
        <div className="user">Help &nbsp;&nbsp; ◉ &nbsp; Admin</div>
      </header>

      <div className="shell">
        <aside className="sidebar">
          <div className="nav">▦ &nbsp; Dashboard</div>
          <div className="nav active">♧ &nbsp; All Leads</div>
          <div className="nav">◷ &nbsp; Follow-ups</div>
          <div className="nav">✓ &nbsp; Tasks</div>
          <div className="nav">▤ &nbsp; Reports</div>
          <div className="nav">⚙ &nbsp; Settings</div>
        </aside>

        <main className="main">
          <div className="crumb">CRM / Leads / All Leads</div>
          <div className="heading">All Leads</div>
          <div className="sub">
            Manage your leads and keep every conversation moving.
          </div>

          <div className="toolbar">
            <button className="btn" type="button">
              ☷ Filters
            </button>
            <button
              className="btn primary"
              type="button"
              onClick={() => setShowLead(true)}
            >
              ＋ Add Lead
            </button>
          </div>

          <div className="table">
            <div className="thead">
              <div>Lead</div>
              <div>Contact</div>
              <div>Source</div>
              <div>Status</div>
              <div>Owner</div>
            </div>

            <div
              className="tr"
              onClick={() => setShowLead(true)}
              style={{ cursor: "pointer" }}
            >
              <div className="person">
                <div className="avatar">AS</div>
                <div>
                  <b>Aarav Sharma</b>
                  <div className="small">LD-1042</div>
                </div>
              </div>
              <div>aarav@example.com</div>
              <div>Website</div>
              <div>
                <span className="pill">Follow-up pending</span>
              </div>
              <div>You</div>
            </div>

            <div className="tr">
              <div className="person">
                <div className="avatar">PK</div>
                <div>
                  <b>Priya Kapoor</b>
                  <div className="small">LD-1041</div>
                </div>
              </div>
              <div>priya@example.com</div>
              <div>Referral</div>
              <div>
                <span className="pill">New lead</span>
              </div>
              <div>Admin</div>
            </div>

            <div className="tr">
              <div className="person">
                <div className="avatar">RV</div>
                <div>
                  <b>Rahul Verma</b>
                  <div className="small">LD-1040</div>
                </div>
              </div>
              <div>rahul@example.com</div>
              <div>Campaign</div>
              <div>
                <span className="pill">Contacted</span>
              </div>
              <div>Admin</div>
            </div>
          </div>
        </main>
      </div>

      {showLead && (
        <LeadDetailsModal onClose={() => setShowLead(false)} />
      )}
    </div>
  );
}

export default App;
