// Service worker: red primero, caché como respaldo (siempre ves la última versión y también funciona sin internet)
const CACHE='mindpulse-v3';
const FILES=['./','index.html','manifest.json','favicon-32.png','icon-192.png','icon-512.png','icon-1024.png','icon-maskable-192.png','icon-maskable-512.png','apple-touch-icon.png'];
// Cada archivo se guarda por separado: si falta uno, los demás igual quedan en caché
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>Promise.all(FILES.map(f=>c.add(f).catch(()=>{})))).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  if(new URL(e.request.url).origin!==location.origin)return;   // peticiones externas: no se tocan
  e.respondWith(
    fetch(e.request).then(r=>{
      if(r&&r.ok&&r.type==='basic'){const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy)).catch(()=>{})}   // solo guarda respuestas correctas
      return r;
    }).catch(()=>caches.match(e.request,{ignoreSearch:true}).then(r=>r||caches.match('index.html')))
  );
});
