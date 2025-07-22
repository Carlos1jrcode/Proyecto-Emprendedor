// Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) {
      setTimeout(() => (loader.style.display = "none"), 1000);
    }
  });
  
  // Modo oscuro
  const toggle = document.getElementById("darkToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });
  }
  
  // Scroll reveal simple con fade usando IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });
  
  document.querySelectorAll("[data-aos]").forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
  });
  
  // Validación y manejo del formulario de contacto
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const nombre = document.getElementById("nombre").value.trim();
      const correo = document.getElementById("correo").value.trim();
      const mensaje = document.getElementById("mensaje").value.trim();
  
      if (nombre && correo && mensaje) {
        alert(`¡Gracias, ${nombre}! Tu mensaje fue enviado correctamente.`);
        this.reset();
      } else {
        alert("Por favor, completa todos los campos.");
      }
    });
  }
  
  // Lógica de transferencias
  const transferForm = document.getElementById("transferForm");
  const mensajeConfirmacion = document.getElementById("mensajeConfirmacion");
  const btnReset = document.getElementById("resetTransfer");
  
  if (transferForm) {
    transferForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const nombre = document.getElementById("nombre").value.trim();
      const pais = document.getElementById("paisDestino")?.value;
      const monto = parseFloat(document.getElementById("monto").value);
      const metodo = document.getElementById("metodoPago")?.value;
  
      if (nombre && pais && monto > 0 && metodo) {
        transferForm.style.display = "none";
        if (mensajeConfirmacion) mensajeConfirmacion.style.display = "flex";
      } else {
        alert("Por favor, completa todos los campos correctamente.");
      }
    });
  }
  
  if (btnReset) {
    btnReset.addEventListener("click", () => {
      if (mensajeConfirmacion) mensajeConfirmacion.style.display = "none";
      if (transferForm) {
        transferForm.reset();
        transferForm.style.display = "block";
      }
    });
  }
  