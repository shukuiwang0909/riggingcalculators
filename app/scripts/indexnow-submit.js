#!/usr/bin/env node
/**
 * IndexNow batch submission for riggingcalculators.com
 * Run: node scripts/indexnow-submit.js
 * Docs: https://www.indexnow.org/documentation
 */

const KEY = 'riggingcalculators-indexnow-key';
const HOST = 'riggingcalculators.com';
const BASE = `https://${HOST}`;

const urls = [
  // Root redirect
  `${BASE}/`,
  // English pages
  `${BASE}/en/`,
  `${BASE}/en/shackle-size-calculator/`,
  `${BASE}/en/sling-angle-calculator/`,
  `${BASE}/en/wire-rope-capacity-calculator/`,
  `${BASE}/en/crane-load-calculator/`,
  `${BASE}/en/charts/shackle-size-chart/`,
  `${BASE}/en/charts/wire-rope-size-chart/`,
  `${BASE}/en/charts/sling-capacity-chart/`,
  `${BASE}/en/charts/swl-chart/`,
  `${BASE}/en/crosby/g-209/`,
  `${BASE}/en/crosby/g-2130/`,
  `${BASE}/en/crosby/s-209/`,
  `${BASE}/en/privacy/`,
  `${BASE}/en/terms/`,
  `${BASE}/en/disclaimer/`,
  // Chinese pages
  `${BASE}/zh/`,
  `${BASE}/zh/shackle-size-calculator/`,
  `${BASE}/zh/sling-angle-calculator/`,
  `${BASE}/zh/wire-rope-capacity-calculator/`,
  `${BASE}/zh/crane-load-calculator/`,
  `${BASE}/zh/charts/shackle-size-chart/`,
  `${BASE}/zh/charts/wire-rope-size-chart/`,
  `${BASE}/zh/charts/sling-capacity-chart/`,
  `${BASE}/zh/charts/swl-chart/`,
  `${BASE}/zh/crosby/g-209/`,
  `${BASE}/zh/crosby/g-2130/`,
  `${BASE}/zh/crosby/s-209/`,
  `${BASE}/zh/privacy/`,
  `${BASE}/zh/terms/`,
  `${BASE}/zh/disclaimer/`,
];

async function submit() {
  const body = JSON.stringify({ host: HOST, key: KEY, urlList: urls });
  console.log(`Submitting ${urls.length} URLs to IndexNow...`);

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body,
  });

  console.log(`Status: ${res.status} ${res.statusText}`);
  if (res.status === 202) {
    console.log('Success — URLs queued for indexing.');
  } else if (res.status === 200) {
    console.log('Success — URLs submitted.');
  } else {
    const text = await res.text();
    console.error('Error response:', text);
  }
}

submit().catch(console.error);
