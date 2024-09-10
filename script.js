<script>
    const draggableImage = document.getElementById('draggable-image');
    let isDragging = false;
    let initialX, initialY, currentX, currentY;

    // Mouse down event to start dragging
    draggableImage.addEventListener('mousedown', (e) => {
        isDragging = true;
        // Get the initial mouse position
        initialX = e.clientX - draggableImage.offsetLeft;
        initialY = e.clientY - draggableImage.offsetTop;
        draggableImage.style.cursor = 'grabbing';
        document.addEventListener('mousemove', moveImage);
    });

    // Mouse up event to stop dragging
    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            draggableImage.style.cursor = 'grab';
            document.removeEventListener('mousemove', moveImage);
        }
    });

    // Function to move the image
    function moveImage(e) {
        if (isDragging) {
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
            draggableImage.style.left = `${currentX}px`;
            draggableImage.style.top = `${currentY}px`;
            draggableImage.style.transform = 'none'; // Disable original centering transform
        }
    }
</script>
