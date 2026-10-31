import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
const space = Space_Grotesk({ subsets:['latin'], variable:'--font-space' });
const mono = JetBrains_Mono({ subsets:['latin'], variable:'--font-mono' });
export const metadata: Metadata = {
  title: 'FED-TRAFFIC | Federated Traffic-Flow Prediction',
  description: 'An interactive research showcase evaluating federated traffic forecasting accuracy, convergence and communication cost with FedAvg.',
  openGraph: { title:'FED-TRAFFIC — Federated Traffic Forecasting', description:'Accuracy vs. communication cost across simulated intersections.', type:'website' },
  robots: { index:true, follow:true }
};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body className={`${space.variable} ${mono.variable}`}>{children}</body></html>; }
