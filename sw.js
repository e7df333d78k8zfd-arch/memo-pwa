self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("memo-cache-v3").then(cache =>
      cache.addAll([
        "index.html",
        "manifest.json",
        "icon-192.png",
        "icon-512.png"
      ])
    )
  );
});
