const input = document.querySelector('input[type="file"]');
input.addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
        console.log('width:', img.naturalWidth, 'height:', img.naturalHeight);
        URL.revokeObjectURL(url);
        document.getElementById("output").textContent='Розмір карти: ' + img.naturalWidth/8 + 'x' + img.naturalHeight/8 + ', Загільна кількість клітинок: ' + (img.naturalWidth/8) * (img.naturalHeight/8)
    };
    img.onerror = () => { console.error('Invalid image'); URL.revokeObjectURL(url); };
    img.src = url;
});

