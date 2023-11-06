function showContent(contentId) {
  // Hide all content divs
  const contentDivs = document.getElementsByClassName('content');
  for (const contentDiv of contentDivs) {
    contentDiv.classList.remove('show');
  }

  // Show the selected content div
  const selectedContent = document.getElementById(contentId);
  if (selectedContent) {
    selectedContent.classList.add('show');
  }
}

// Show the content related to the first button by default when the page is loaded
showContent('content1');
