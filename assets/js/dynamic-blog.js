function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function createParagraphs(paragraphs) {
  return paragraphs.map(p => `<p>${p.replace(/\n/g, "<br>")}</p>`).join("");
}

function renderTable(tableData) {
  let html = '<br><table style="width:100%;border-collapse:collapse;">';
  html += "<thead><tr>";
  tableData.headers.forEach(header => {
    html += `<th style="text-align:left;">${header}</th>`;
  });
  html += "</tr></thead><tbody>";
  tableData.rows.forEach(row => {
    html += "<tr>";
    row.forEach(cell => {
      html += `<td>${cell}</td>`;
    });
    html += "</tr>";
  });
  html += "</tbody></table><br>";
  return html;
}

function renderBlog(blog) {
  if (!blog) {
    document.getElementById("blog-content").innerHTML = "<p>Blog not found.</p>";
    return;
  }
  document.getElementById("blog-title").innerHTML = blog.title;
  let html = `<h2>${blog.title}</h2>`;
  
  // Intro paragraphs
  html += createParagraphs(blog.intro_paragraphs);
  
  // Gallery images
  if (blog.gallery && blog.gallery.length > 0) {
    html += '<div class="blog-gallery">';
    blog.gallery.forEach(img => {
      html += `<img src="${img}" alt="blog image" style="max-width: 30%; margin-right:10px;">`;
    });
    html += '</div>';
  }
  
  // Sections
  blog.sections.forEach(section => {
    html += `<h3>${section.heading}</h3>`;
    if (section.subheading) {
      html += `<h5>${section.subheading}</h5>`;
    }
    if (section.table) {
    html += renderTable(section.table);
    }
    if (section.paragraphs) {
      html += createParagraphs(section.paragraphs);
    }
  });
  
  document.getElementById("blog-content").innerHTML = html;
}

document.addEventListener("DOMContentLoaded", async () => {
  const id = getQueryParam("id") || 1; // default blog id
 const response = await fetch('assets/js/blog-detail-dynamic.json');
 const blogs = await response.json();
//  console.log(blogs);
  const blog = blogs.find(b => b.id == id);
        if (!blog) {
            window.location.href = 'error-404.html';
            return;
        }
//   console.log(blog);
  renderBlog(blog);
});
