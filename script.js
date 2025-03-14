document.getElementById('loadMoreBtn').addEventListener('click', function() {
    const detailsSection = document.getElementById('detailsSection');
    detailsSection.style.display = 'block';
    this.style.display = 'none'; // Esconde o botão após clicar
});
