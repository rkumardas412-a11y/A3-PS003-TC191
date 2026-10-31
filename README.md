<<<<<<< HEAD
# FED-TRAFFIC

**Federated Traffic-Flow Prediction with Communication-Cost Evaluation** — a dark, responsive research showcase and client-side experiment dashboard built with Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion, Recharts, Chart.js and Lucide.

The dashboard content is aligned to AIORI-3 problem statement **PS-003 (Smart Cities)**. It covers 3–5 simulated clients, FedAvg, centralized and federated baselines, IID / non-IID partitions, chronological splits, MAE / RMSE, convergence, communication bytes per round and three random seeds.

> **Important:** `public/data/results.json` ships with synthetic, illustrative values so the UI works immediately. They are explicitly marked as demo data. Do not cite them as experimental results. Replace them with actual outputs from your simulator before a report, presentation or submission.

## Quick start

Requirements: Node.js 18.17+ (Node 20 LTS recommended) and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production static export:

```bash
npm run typecheck
npm run build
```

Next.js writes the static site to `out/` because `output: 'export'` is enabled. Deploy the `out/` directory to Vercel or another static host. For Vercel, import the repository and use the default Next.js build command; the static export is produced during the build.

## Replace the demonstration data

All charts and the playground read from **`public/data/results.json`**. No API or backend is used. Keep the schema stable and replace the values with your Python experiment export.

Top-level shape:

```json
{
  "meta": {
    "demo": false,
    "description": "Measured experiment results",
    "clients": 5,
    "rounds": 100,
    "seeds": [17, 42, 2025],
    "generated_at": "2026-10-30"
  },
  "seeds": [17, 42, 2025],
  "iid": { "mae": [0, 0, 0], "rmse": [0, 0, 0], "rounds": [] },
  "non_iid": { "mae": [0, 0, 0], "rmse": [0, 0, 0], "rounds": [] },
  "centralized": { "mae": [0, 0, 0], "rmse": [0, 0, 0], "rounds": [] },
  "comm_bytes_per_round": [],
  "per_client": {},
  "forecast_samples": {},
  "experimental_setup": {
    "learning_rate": 0.001,
    "batch_size": 32,
    "local_epochs": 2,
    "rounds": 100,
    "model": "Your model name",
    "split": "Chronological split details"
  }
}
```

### Field details

- `meta.demo`: set to `false` only after replacing all synthetic values with measured outputs. The dashboard's warning copy is currently intentionally conservative and should also be reviewed before publication.
- `seeds`: the three run identifiers used in the experiment.
- `iid.mae`, `iid.rmse`: one value per seed. `non_iid` and `centralized` use the same shape. The UI computes mean and population standard deviation from these arrays.
- `*.rounds`: array of `{ "round": 1, "centralized": 0, "iid": 0, "non_iid": 0 }` convergence points. Provide one point per communication round.
- `comm_bytes_per_round`: numeric payload bytes sent for each round. Define whether the count includes both upload and broadcast, metadata, retries and protocol overhead; use one consistent accounting policy.
- `per_client`: object keyed by client name, each with `skew` and `rounds: [{ "round": 1, "value": 0 }]`.
- `forecast_samples`: object keyed by intersection. Each value contains aligned `timestamps`, `actual`, `iid` and `non_iid` arrays. All arrays must have equal lengths.
- `experimental_setup`: parameters displayed in the methodology table.

### Python export example

```python
import json
from pathlib import Path

results = {
    "meta": {"demo": False, "description": "Measured runs", "clients": 5,
             "rounds": 100, "seeds": [17, 42, 2025], "generated_at": "2026-10-30"},
    # Populate every required key using your experiment outputs.
}
Path("public/data/results.json").write_text(json.dumps(results, indent=2))
```

Use the exact keys and nested shapes shown in the shipped `public/data/results.json` as your full reference. Validate JSON before building (`python -m json.tool public/data/results.json > /dev/null`).

## Project structure

```text
app/
  layout.tsx          SEO metadata, font setup and root layout
  page.tsx            Dashboard entry point
  globals.css         Dark theme, grid and responsive styling
  loading.tsx         Loading skeleton
  error.tsx           Client error boundary
components/
  dashboard.tsx       Navigation, hero, architecture, charts, playground, methodology
lib/
  data.ts             Typed JSON import and metric helpers
  types.ts            Results schema types
public/
  data/results.json   Replaceable experiment payload
  og-image.svg        Social preview graphic
```

## Before submitting / publishing

1. Replace synthetic values with actual outputs from all three seeds.
2. Confirm the dataset's name, public source, license, preprocessing and chronological split boundaries in your report.
3. Ensure IID and non-IID client partitions are generated reproducibly.
4. Document the compact model, optimizer, learning rate, batch size, local epochs and round count.
5. Define communication accounting clearly (upload, broadcast and overhead) and report bytes per round.
6. Replace generic GitHub links with the team's repository. PS-003 asks teams to create a private repository, add `aiori-hackathon` as collaborator and transfer repository ownership after acceptance.
7. Add verified team members and profile URLs; replace the report checklist with the final PDF.
8. Record that the project is a simulator: PS-003 explicitly excludes live cameras, city-wide deployment and formal privacy guarantees.

## Research reference

McMahan et al., *Communication-Efficient Learning of Deep Networks from Decentralized Data*, AISTATS 2017. [PMLR paper](https://proceedings.mlr.press/v54/mcmahan17a.html).

## Accessibility and performance notes

The UI uses semantic sections, labelled form controls, keyboard-focusable architecture nodes, chart tooltips and responsive layouts. Chart data is local and static; there are no client API calls. Before a public release, run Lighthouse and an accessibility audit against your actual deployed build, verify color contrast and keyboard interaction, and add a text/table alternative if the charts become a primary source of research evidence.
=======
# AIORI-3-HACKATHON-PROJECTS
## 🎥 Project Video Demonstration

Watch our project presentation and demonstration on YouTube:

https://youtube.com/shorts/N2vQJwc3dt4?si=E9sh-Yg8JyHD_14D
>>>>>>> origin/main
