const NAV=`<header><b>UAP Montana</b><nav><a href="index.html">Home</a><a href="map.html">Map</a><a href="reports.html">Reports</a><a href="historic.html">Historic cases</a><a href="resources.html">Live sky &amp; resources</a><a href="report.html">Report a sighting</a></nav></header>`;
const FOOT=`<footer>Montana-only index of <b>public</b> UAP reports. Each entry links to the original report at its source (NUFORC, MUFON, Enigma Labs). Locations are city/town level only. Summaries are short excerpts; read full reports at the source. Map data © OpenStreetMap contributors; place names © GeoNames (CC BY 4.0).</footer>`;
document.body.insertAdjacentHTML('afterbegin',NAV);document.body.insertAdjacentHTML('beforeend',FOOT);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safeUrl=u=>/^https:\/\/[^\s"'<>]+$/.test(u||'')?esc(u):'#';
async function j(p){const r=await fetch(p);if(!r.ok){document.querySelector('main')?.insertAdjacentHTML('afterbegin',`<p class="card">Could not load ${esc(p)} (${r.status}).</p>`);throw new Error(p)}return r.json()}
