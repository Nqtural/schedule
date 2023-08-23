//Get md link from urlParams and append md as html to main
if (link != null) {
  fetchMarkdown(urlPrefix + link + urlSuffix).then((md) => {
    mdToHtml(md).then((html) => {
      document.getElementById("main").innerHTML = html;
      addEditLink(link);
    });
  });
}
