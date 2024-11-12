function redirectBasedOnInstallation() {
    // Check if the app is installed
    const isInstalled = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;

    if (isInstalled) {
        window.location.href = "/kandlus/home.html"; // Page for installed app
    } 
}

window.onload = redirectBasedOnInstallation;
