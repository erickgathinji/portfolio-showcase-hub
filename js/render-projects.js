document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("accordionContainer");
  const currentCategory = container?.dataset.category || "data"; // renders this if not defined in html

  const projects = PortfolioProjects[currentCategory] || [];

  if (!container) {
    console.error("accordionContainer not found!");
    return;
  }

  // Sort by dateValue (newest first)
  const sortedProjects = [...projects].sort((a, b) => new Date(b.dateValue) - new Date(a.dateValue));

  let html = "";
  sortedProjects.forEach((project, index) => {
    const isFirst = "";
    const expanded = "false";
    const collapsedClass = "collapsed";

    const tagHtml = project.tags?.map(tag => `<span class="custom-tag">#${tag}</span>`).join(" ") || "";

    const extraLinksHtml = project.links?.map(linkObj => {
      const style = linkObj.style || "btn-outline-secondary";
      return `<a class="btn ${style} me-2" href="${linkObj.url}" target="_blank">${linkObj.label}</a>`;
    }).join(" ") || "";

    html += `
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading-${index}">
          <button class="accordion-button ${collapsedClass}" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapse-${index}" aria-expanded="${expanded}"
            aria-controls="collapse-${index}">
            ${project.date} - ${project.title}
          </button>
        </h2>
        <div id="collapse-${index}" class="accordion-collapse collapse ${isFirst}"
          aria-labelledby="heading-${index}" data-bs-parent="#accordionContainer">
          <div class="accordion-body">
            <p>${project.description}</p>
            <div class="mb-4">${tagHtml}</div>
            <div class="d-flex flex-wrap gap-2 mb-3">
              <a class="btn btn-outline-success" href="${project.link}" target="_blank">View Project</a>
              ${extraLinksHtml}
            </div>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
});
