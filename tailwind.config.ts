import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'], theme: { extend: { colors: { ink:'#0A0E1A', panel:'#101827', cyan:'#00E5FF', violet:'#7C3AED', muted:'#8995AA' }, fontFamily: { sans:['var(--font-space)','sans-serif'], mono:['var(--font-mono)','monospace'] } } }, plugins: [] };
export default config;
