if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/assets/js/serviceWorker.js').then(function(registration) {
        console.log('Service Worker registered with scope:', registration.scope);

        // Listen for updates to the Service Worker
        registration.onupdatefound = function() {
            const newWorker = registration.installing;
            newWorker.onstatechange = function() {
                if (newWorker.state === 'installed') {
                    // Check if there's an existing service worker
                    if (navigator.serviceWorker.controller) {
                        // New update available, notify the user
                        notifyUserAboutUpdate(newWorker);
                    }
                }
            };
        };
    }).catch(function(error) {
        console.log('Service Worker registration failed:', error);
    });
}

// Function to notify the user about the update
function notifyUserAboutUpdate(newWorker) {
    const updateNotification = document.createElement('div');
    updateNotification.className = 'update-notification';
    updateNotification.innerHTML = `
        <p>A new version of the app is available!</p>
        <button id="refresh">Refresh</button>
    `;
    document.body.appendChild(updateNotification);

    // Add event listener to refresh the page when the user clicks "Refresh"
    document.getElementById('refresh').addEventListener('click', function() {
        if (newWorker) {
            newWorker.postMessage({ action: 'skipWaiting' });  // Tell the new service worker to activate immediately
        }
        window.location.reload(); // Reload the page to get the new version
    });
}
