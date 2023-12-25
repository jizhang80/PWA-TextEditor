const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    console.log("not installed");
    butInstall.style.visibility = 'visible';
    butInstall.textContent = 'Install!';

    // TODO: Implement a click event handler on the `butInstall` element
    butInstall.addEventListener('click', async () => {
        event.prompt();
        butInstall.setAttribute('disabled', true);
        butInstall.textContent = 'Installed!';
    });
});



// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    butInstall.setAttribute('disabled', true);
    butInstall.style.visibility = 'visible';
    butInstall.textContent = 'Installed!';
    console.log('👍', 'appinstalled', event);
});
