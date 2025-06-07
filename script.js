const mediaItems = document.querySelectorAll('.media');
let current = 0;
function showNext() {
    if (current > 0) mediaItems[current - 1].style.display = 'none';
    if (current < mediaItems.length) {
        mediaItems[current].style.display = 'block';
        current++;
        setTimeout(showNext, 5000);
    }
}
showNext();
