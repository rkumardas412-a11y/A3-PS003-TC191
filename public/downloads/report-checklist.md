# FED-TRAFFIC report checklist

Replace this checklist with the final PDF report before submission.

- Problem statement and research question
- Public dataset name, source URL, license and preprocessing
- Chronological train / validation / test split boundaries
- Compact forecasting model architecture and parameter count
- Client partition procedure for IID and non-IID experiments
- FedAvg configuration and client participation policy
- Three random seeds and per-seed MAE / RMSE
- Convergence curves and communication bytes per round
- Definition of communication accounting (weights, metadata, protocol overhead)
- Limitations: simulation only; no live cameras, city-wide deployment or formal privacy guarantee
