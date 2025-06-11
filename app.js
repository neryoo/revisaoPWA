if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js")
        .then(() => console.log("Service worker registrado com sucesso!"))
        .catch(err => console.error("Erro ao register Service Worker: " + err));
} else {
    console.log("Navegador não suporta Service Worker");
}