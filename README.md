# CRA Reassessment Demo Page (GitHub Pages)

Static demo page for the Genesys Unified Experience CRA presentation.

**Live URL (after deploy):** `https://<your-github-username>.github.io/cra-reassessment-demo/`

## Deploy to GitHub Pages (one-time)

1. Create a **new public** repo on GitHub named **`cra-reassessment-demo`** (empty — no README).
2. Upload **all files in this folder** to the repo root (`index.html` must be at root).
3. Repo **Settings → Pages** → Source: **Deploy from branch** → Branch: **main** → Folder: **/ (root)** → Save.
4. Wait 1–2 minutes, then open the live URL above.

## Local preview

```powershell
cd publish/cra-reassessment-demo
python -m http.server 3000
```

Open http://localhost:3000

## Demo chat auth (collected in Messenger)

| Field | Value |
|-------|-------|
| Taxpayer identifier | CRA-KIRK-001 |
| Postal code | K1A 0B1 |
