// Debug tool for Shopify theme development
document.addEventListener('DOMContentLoaded', function() {
  // Create debug toggle button
  const debugButton = document.createElement('button');
  debugButton.className = 'debug-toggle';
  debugButton.innerText = 'Toggle Debug Info';
  document.body.appendChild(debugButton);
  
  // Toggle debug info visibility
  debugButton.addEventListener('click', function() {
    document.body.classList.toggle('debug-active');
    
    // Log collection info
    const debugInfo = document.querySelector('.collection-debug');
    if (debugInfo) {
      console.log('Collection Debug Info:');
      debugInfo.querySelectorAll('p').forEach(p => {
        console.log(p.innerText);
      });
    }
    
    // Check for product images
    const productImages = document.querySelectorAll('.bestseller-card__image');
    console.log(`Found ${productImages.length} product images`);
    productImages.forEach((img, index) => {
      console.log(`Image ${index + 1} src: ${img.src}`);
      console.log(`Image ${index + 1} complete: ${img.complete}`);
      console.log(`Image ${index + 1} natural dimensions: ${img.naturalWidth}x${img.naturalHeight}`);
    });
  });
  
  // Make debug button visible in development
  if (window.Shopify && window.Shopify.designMode) {
    debugButton.style.display = 'block';
  }
});
