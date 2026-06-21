// Privacy Consent Banner
document.addEventListener('DOMContentLoaded', () => {
    const privacyBanner = document.getElementById('privacy-banner');
    const acceptBtn = document.getElementById('privacy-accept');
    const privacyLink = document.getElementById('privacy-link');

    // Check if user has already accepted
    const hasAccepted = localStorage.getItem('privacyConsent') === 'accepted';

    if (!hasAccepted) {
        privacyBanner.classList.add('visible');
    }

    // Handle accept button
    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('privacyConsent', 'accepted');
        privacyBanner.classList.remove('visible');
    });

    // Privacy link naturally navigates to datenschutz.html
});
