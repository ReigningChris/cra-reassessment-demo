// Local config — gitignored; copy from config.example.js
window.CRA_DEMO_CONFIG = {
  // Copy `environment` from Admin → Messenger Deployments → MR - CSM Customer Service → Embed snippet.
  // If chat fails to load, set environment to the exact value shown there (often "prod" or "use1").
  environment: "prod",
  debug: true,
  deploymentId: "47edd54d-c58d-46de-a7c3-f53fcc402753",
  avaDemoVersion: "11.0",
  startContext: {
    citizen_name: "Kirk",
    contact_email: "kirk.lazarus@boxeo.com",
    issue_category: "Reassessment/refund",
    form_submission_id: "CRA-2024-001",
  },
};
