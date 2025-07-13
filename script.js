document.addEventListener("DOMContentLoaded", () => {
  // Circle progress bars
  document.querySelectorAll('.circle').forEach(circle => {
    const percent = circle.dataset.percent;
    const canvas = circle.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const radius = canvas.width / 2 - 10;
    const lineWidth = 8;

    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = '#333';
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.strokeStyle = '#00ff7f';
    ctx.beginPath();
    ctx.arc(
      canvas.width / 2,
      canvas.height / 2,
      radius,
      -0.5 * Math.PI,
      (percent / 100) * 2 * Math.PI - 0.5 * Math.PI
    );
    ctx.stroke();
  });

  // Contact form
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent! (In a real project, connect to backend)");
    form.reset();
  });

  // Dynamic Projects
  const projects = [
    {
      title: "Music Website",
      description: "🎵 “A modern music website where users can discover, stream, and enjoy music from around the world. Designed and developed by me with a focus on clean design, smooth streaming, and user-friendly experience.”",
      image: "./assets/music-psd.png",
      link: "./Music Website Web2/index.html"
    },
    {
      title: "Vidos Website",
      description: "🎬 “A sleek video streaming platform where users can watch, share, and enjoy high-quality videos. Fully designed and developed by me with a focus on modern UI, smooth playback, and responsive design.”",
      image: "./assets/video-psd.png",
      link: "./Vidoes Website Web3/index.html"
    },
    {
      title: "E-Commerce Website",
      description: "🛒 “A modern E-Commerce website designed and developed by me, featuring an intuitive shopping experience, secure checkout, and responsive design for all devices.”",
      image: "./assets/e-commerce-psd.png",
      link: "./E-Commerce Website/index.html"
    }
  ];

  const projectContainer = document.querySelector("#projects .row");

  projects.forEach((project, index) => {
    const delay = index === 1 ? " animate__delay-1s" : index === 2 ? " animate__delay-2s" : "";
    const col = document.createElement("div");
    col.className = `col-md-4 mb-4 animate__animated animate__fadeInUp${delay}`;
    col.innerHTML = `
      <div class="project-card">
        <img src="${project.image}" alt="${project.title}" class="img-fluid rounded mb-3">
        <h5>${project.title}</h5>
        <p>${project.description}</p>
        <a href="${project.link}" class="btn btn-outline-green btn-sm">View Project</a>
      </div>
    `;
    projectContainer.appendChild(col);
  });
});
