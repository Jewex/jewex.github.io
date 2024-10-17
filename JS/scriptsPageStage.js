function toggleDetails(id) {
    const details = document.getElementById(id);
    const button = document.querySelector(`[onclick="toggleDetails('${id}')"]`);

    if (details.classList.contains('hidden')) {
        details.classList.remove('hidden');
        button.textContent = 'Afficher moins de détails';
    } else {
        details.classList.add('hidden');
        button.textContent = 'Afficher plus de détails';
    }
}
