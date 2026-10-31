import raw from '@/public/data/results.json';
import type { Results } from './types';
export const results = raw as Results;
export const mean = (values: number[]) => values.reduce((a,b)=>a+b,0) / Math.max(values.length,1);
export const std = (values: number[]) => { const m=mean(values); return Math.sqrt(mean(values.map(v=>(v-m)**2))); };
export const pct = (n:number) => `${n.toFixed(1)}%`;
export const bytesToMB = (n:number) => n / (1024*1024);
