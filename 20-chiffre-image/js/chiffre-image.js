document.addEventListener('DOMContentLoaded', function() {
    const numberInput = document.getElementById('numberInput');
    const numberDiv = document.getElementById('numberDiv');
    const image = numberDiv.querySelector('img');

    numberInput.addEventListener('input', function() {
        const value = numberInput.value;
        if (value >= 0 && value <= 9) {
            image.src = `image/${value}.jpg`;
            image.alt = `Image chiffre ${value}`;
        }
    });
});
