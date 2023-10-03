document.addEventListener("DOMContentLoaded", function () {
  const mostrarWebButton = document.getElementById("mostrar-web");
  const webContent = document.getElementById("web-content");
  const stardContainer = document.querySelector(".stard");
  const space = document.querySelector(".space");

  let isOn = false; // Estado del interruptor

  mostrarWebButton.addEventListener("click", function () {
    if (!isOn) {
      // Si está apagado, enciende y muestra el contenido después de 0.5 segundos
      mostrarWebButton.style.transform = "translateY(-2em)";
      setTimeout(function () {
        stardContainer.style.display = "none";
        space.style.display = "none";
        webContent.style.display = "block"; // Muestra el contenido
        webContent.style.opacity = "1"; // Establece la opacidad en 1 para hacerlo visible
      }, 200);
      isOn = true;
      // Si está encendido, apaga y oculta el contenido
      mostrarWebButton.style.transform = "translateY(0)";
      stardContainer.style.display = "none";
      space.style.display = "none";
      webContent.style.opacity = "0"; // Cambia la opacidad a 0 para ocultar el contenido
      setTimeout(function () {
        webContent.style.display = "none"; // Oculta el contenido después de la transición de opacidad
      }, 500); // Ajusta el tiempo según la duración de la transición
      isOn = false;
    }
  });
});
