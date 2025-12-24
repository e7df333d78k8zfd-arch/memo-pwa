self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("memo-cache").then(cache =>
      cache.addAll(["index.html"])
    )
  );
});
