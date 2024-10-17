function toggle() {
    const element = document.getElementById('navbar_small__ul');
    console.log('toggle');
    if (!element.classList.contains('toggled')) {
        element.classList.add('toggled');
    }
    else {
        element.classList.remove('toggled');
    }
}