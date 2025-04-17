// Language switcher functionality
document.addEventListener('DOMContentLoaded', function() {
  // Get the current page path
  const currentPath = window.location.pathname;
  const currentPage = currentPath.split('/').pop();
  
  // Determine current language from page name
  let currentLang = 'en';
  if (currentPage.includes('-he.')) {
    currentLang = 'he';
  } else if (currentPage.includes('-fr.')) {
    currentLang = 'fr';
  }
  
  // Function to switch language
  function switchLanguage(lang) {
    let newPage = '';
    
    // Handle index page
    if (currentPage === 'index.html' || currentPage === 'index-he.html' || currentPage === 'index-fr.html') {
      newPage = lang === 'en' ? 'index.html' : `index-${lang}.html`;
    } 
    // Handle other pages
    else {
      // Extract base name without language suffix and extension
      let baseName = currentPage.replace(/-he\.html$/, '').replace(/-fr\.html$/, '').replace(/\.html$/, '');
      
      // Create new page name with appropriate language suffix
      newPage = lang === 'en' ? `${baseName}.html` : `${baseName}-${lang}.html`;
    }
    
    // Navigate to the new page
    window.location.href = newPage;
  }
  
  // Add event listeners to language switcher buttons
  document.querySelectorAll('.lang-switch').forEach(button => {
    button.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      switchLanguage(lang);
    });
  });
  
  // Highlight current language in switcher
  const currentLangButton = document.querySelector(`.lang-switch[data-lang="${currentLang}"]`);
  if (currentLangButton) {
    currentLangButton.classList.add('active-lang');
  }
});
