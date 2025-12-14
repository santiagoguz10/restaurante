let vacancyModal = new bootstrap.Modal(document.getElementById('vacancyModal'));
let formModal = new bootstrap.Modal(document.getElementById('formModal'));
let selectedVacancy = '';

function openVacancy(title, description) {
    selectedVacancy = title;
    document.getElementById('vacancyTitle').textContent = title;
    document.getElementById('vacancyDescription').textContent = description;
    vacancyModal.show();
}

function openForm() {
    vacancyModal.hide();
    document.getElementById('puesto').value = selectedVacancy;
    formModal.show();
}

document.getElementById('applyForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const cvInput = document.getElementById('cvFile');
    const file = cvInput.files[0];

    if (!file) {
        alert('Por favor, sube tu CV en PDF.');
        return;
    }

    if (file.type !== 'application/pdf') {
        alert('Solo se permiten archivos PDF.');
        return;
    }

    // Solo frontend demo
    alert('Solicitud enviada correctamente para "' + selectedVacancy + '".\nCV: ' + file.name);

    formModal.hide();
    this.reset();
});
