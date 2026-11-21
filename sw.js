// Dekning Sandefjord: lagrer appen og kartet så den virker uten nett. Bygget 20261121-183443.
const LAGER = "dekning-20261121-183443", FLISER = "dekning-fliser", MAKS_FLISER = 800;
const FAST = ["./", "manifest.webmanifest", "ikon-192.png", "apple-touch-icon.png", "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js", "dekning-0.png", "dekning-1.png", "kart14-00.jpg", "kart14-01.jpg", "kart14-10.jpg", "kart14-11.jpg", "kart15-0.jpg", "kart15-1.jpg"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(LAGER).then(c => c.addAll(FAST)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(n => Promise.all(n.filter(k => k !== LAGER && k !== FLISER).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

async function flis(req) {
  const lager = await caches.open(FLISER), funnet = await lager.match(req);
  if (funnet) return funnet;
  const svar = await fetch(req);
  if (svar.ok) {
    lager.put(req, svar.clone());
    lager.keys().then(k => { if (k.length > MAKS_FLISER) k.slice(0, k.length - MAKS_FLISER).forEach(x => lager.delete(x)); });
  }
  return svar;
}
async function nettForst(req) {
  try {
    const svar = await fetch(req);
    if (svar.ok) (await caches.open(LAGER)).put(req, svar.clone());
    return svar;
  } catch (feil) {
    return (await caches.match(req, { ignoreSearch: true })) || (await caches.match("./")) || Response.error();
  }
}
async function lagerForst(req) {
  const funnet = await caches.match(req);
  if (funnet) return funnet;
  const svar = await fetch(req);
  if (svar.ok) (await caches.open(LAGER)).put(req, svar.clone());
  return svar;
}

self.addEventListener("fetch", e => {
  const req = e.request, u = new URL(req.url);
  if (req.method !== "GET") return;
  if (u.hostname === "cache.kartverket.no") e.respondWith(flis(req).catch(() => Response.error()));
  else if (req.mode === "navigate") e.respondWith(nettForst(req));
  else if (u.origin === location.origin || /cdnjs\.cloudflare\.com|fonts\.(googleapis|gstatic)\.com/.test(u.hostname))
    e.respondWith(lagerForst(req).catch(() => Response.error()));
});
