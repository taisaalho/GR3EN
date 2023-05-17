const staticGr3en = "dev-gr3en-site-v1";
const assets = [
  "/GR3EN/index.html",
  "/GR3EN/src/assets/img/Award 1.svg",
  "/GR3EN/src/assets/img/Award 2.svg",
  "/GR3EN/src/assets/img/Award 3.svg",
  "/GR3EN/src/assets/img/Award 4.svg",
  "/GR3EN/src/assets/img/imagemOcorrencia.svg",
  "/GR3EN/src/assets/img/imagemAtividade.png",
  "/GR3EN/src/assets/img/imgAtividade.svg",
  "/GR3EN/src/assets/img/Logo 2.svg",
  "/GR3EN/src/assets/img/main1.svg",
  "/GR3EN/src/assets/img/main2.svg",
  "/GR3EN/src/assets/img/main3.svg",
  "/GR3EN/src/assets/img/Mask group.svg",
  "/GR3EN/src/assets/img/mountains 2.webp",
  "/GR3EN/src/assets/img/mountains.webp",
  "/GR3EN/src/assets/img/podium.svg",
  "/GR3EN/src/assets/img/podium1.svg",
  "/GR3EN/src/assets/img/podium2.svg",
  "/GR3EN/src/assets/img/podium3.svg",
  "/GR3EN/src/assets/img/projeto.jpg",
  "/GR3EN/src/assets/img/sand.webp",
  "/GR3EN/src/main.js",
  "GR3EN/src/serviceWorker.js"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticGr3en).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});