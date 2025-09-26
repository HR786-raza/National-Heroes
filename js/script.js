const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');

document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
        popupImg.src = img.src;
        popup.style.display = 'flex';
    });
});

popup.addEventListener('click', () => {
    popup.style.display = 'none';
});