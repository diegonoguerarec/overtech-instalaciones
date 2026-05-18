    // Hamburger
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });

    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => observer.observe(el));

    // Form submit (redirige a WhatsApp)
    function handleSubmit() {
      const nombre = document.getElementById('nombre').value.trim();
      const telefono = document.getElementById('telefono').value.trim();
      const servicio = document.getElementById('servicio').value;
      const mensaje = document.getElementById('mensaje').value.trim();

      if (!nombre) { alert('Por favor ingresá tu nombre.'); return; }

      const text = `Hola Overtech! Mi nombre es ${nombre}.${telefono ? ' Mi teléfono: ' + telefono + '.' : ''}${servicio ? ' Me interesa: ' + servicio + '.' : ''}${mensaje ? ' Detalle: ' + mensaje : ''}`;
      const waUrl = `https://wa.me/595982208948?text=${encodeURIComponent(text)}`;
      window.open(waUrl, '_blank');

      document.getElementById('formSuccess').style.display = 'block';
      document.getElementById('nombre').value = '';
      document.getElementById('telefono').value = '';
      document.getElementById('servicio').value = '';
      document.getElementById('mensaje').value = '';
    }
