// Wappen click animation and toggle
document.addEventListener('DOMContentLoaded', function() {
    const wappenImg = document.querySelector('.logo-section img');
    
    if (!wappenImg) return;
    
    let isWappen = true;
    
    wappenImg.style.cursor = 'pointer';
    
    wappenImg.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Remove any existing animation class
        wappenImg.classList.remove('wappen-animate', 'animation-flip');
        
        // Trigger reflow to restart animation
        void wappenImg.offsetWidth;
        
        // Add flip animation
        wappenImg.classList.add('wappen-animate', 'animation-flip');
        
        // Change image in the middle of the animation (when opacity is 0)
        setTimeout(() => {
            if (isWappen) {
                wappenImg.src = 'images/Zirkel.svg';
                wappenImg.alt = 'Zirkel KDStV Nordmark';
            } else {
                wappenImg.src = 'images/Wappen.svg';
                wappenImg.alt = 'Wappen KDStV Nordmark';
            }
            isWappen = !isWappen;
        }, 300);
        
        // Remove animation class after animation completes
        setTimeout(() => {
            wappenImg.classList.remove('wappen-animate', 'animation-flip');
        }, 600);
    });
});
