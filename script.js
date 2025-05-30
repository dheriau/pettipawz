document.getElementById('bgInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(evt) {
        document.body.style.backgroundImage = `url('${evt.target.result}')`;
        document.body.style.backgroundRepeat = 'repeat';
        document.body.style.backgroundSize = '60px';
        // Önizleme için:
        const preview = document.getElementById('bgPreview');
        preview.src = evt.target.result;
        preview.style.display = 'block';
    };
    reader.readAsDataURL(file);
});

document.getElementById('contactBtn').addEventListener('click', function() {
    window.location.href = "mailto:dheriau@gmail.com?subject=pettipawz.com%20alan%20adı%20satışı&body=Merhaba,%20pettipawz.com%20alan%20adıyla%20ilgileniyorum.";
});