# Portfolio Website (Draft)

This folder contains a static portfolio website draft for the **Professional English** subject.

## How to customize

- Update your name/role in `index.html`.
- Replace placeholder contact details (email/LinkedIn).
- In `#projects`, keep only projects you can back up with evidence (PDFs, screenshots, write-ups).
- Add new coursework artifacts over the year (Professional Challenges, daily tasks, presentations).
- Blog posts live in `blog/` (simple HTML pages). You can edit them or replace them with improved versions later.

## Add new English tasks (deliverables)

The "Deliverables" section on the homepage is meant for your English teacher to download/view your submissions.

Workflow:
1) Drop the PDF into `assets/pdfs/english/` (use short names like `2026-02-email-complaint.pdf`)
2) Add an entry in `js/content.js` with `title`, `type`, `date`, and `href`

Example entry:
```js
{
  id: "pe-email-complaint",
  date: "2026-02",
  type: "Daily task (Writing)",
  title: "Complaint email to a supplier",
  summary: "Formal email: issue description, evidence, and proposed solution.",
  tags: ["Writing", "Email"],
  href: "assets/pdfs/english/2026-02-email-complaint.pdf",
}
```

## Contact form note

This is a static site (no backend). The contact form opens a pre-filled email draft via `mailto:`.
If you need a real form later, embed a Google Form or use a static form provider.

## GitHub Pages (simple deployment)

GitHub Pages can only publish from the repository root or `/docs` (unless you use Actions).
When you are ready to publish:

Option A (simplest):
1) Copy this folder contents into a `/docs` folder at the repo root
2) GitHub repo settings -> Pages -> Deploy from branch -> `/docs`

Option B (keep any folder, more advanced):
- Use a GitHub Action to deploy this folder to a `gh-pages` branch.
