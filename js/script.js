console.log("Portfolio loaded");
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
const projects = [
  {
    title: "AI Resume Screener",
    description: "An AI-powered system that ranks resumes.",
    link: "#"
  },
  {
    title: "PG Management System",
    description: "Track rent, issues, and ratings for PGs.",
    link: "#"
  }
];

const container = document.getElementById("projects");

projects.forEach(p => {
  const card = `
    <div class="project-card" data-aos="zoom-in">
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <a href="${p.link}" target="_blank">View Project</a>
    </div>`;
  container.innerHTML += card;
});
