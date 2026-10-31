export type MetricPoint = { round: number; centralized: number; iid: number; non_iid: number };
export type ClientRound = { round: number; value: number };
export type Results = {
  meta: { demo: boolean; description: string; clients: number; rounds: number; seeds: number[]; generated_at: string };
  seeds: number[];
  iid: { mae: number[]; rmse: number[]; rounds: MetricPoint[] };
  non_iid: { mae: number[]; rmse: number[]; rounds: MetricPoint[] };
  centralized: { mae: number[]; rmse: number[]; rounds: MetricPoint[] };
  comm_bytes_per_round: number[];
  per_client: Record<string, { skew: string; rounds: ClientRound[] }>;
  forecast_samples: Record<string, { timestamps: string[]; actual: number[]; iid: number[]; non_iid: number[] }>;
  experimental_setup: { learning_rate: number; batch_size: number; local_epochs: number; rounds: number; model: string; split: string };
};
