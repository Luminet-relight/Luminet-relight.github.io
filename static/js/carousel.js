document.addEventListener('DOMContentLoaded', function () {
    // Initialize Glide.js carousel
    const glide = new Glide('#image-carousel', {
        type: 'carousel',
        perView: 1,
        focusAt: 'center',
        autoplay: false,
        hoverpause: true,
    });

    // Function to reinitialize magnification for the active slide
    function reinitializeMagnify() {
        // Find the currently active slide
        const activeSlide = document.querySelector('.glide__slide--active');
        if (!activeSlide) {
            console.error('No active slide found');
            return;
        }

        // Find the image containers in the active slide
        const container1 = activeSlide.querySelector('.image-container:nth-child(1)');
        const container2 = activeSlide.querySelector('.image-container:nth-child(2)');

        if (container1 && container2) {
            const container1Id = container1.id;
            const container2Id = container2.id;

            console.log(`Reinitializing magnify for ${container1Id} and ${container2Id}`);
            magnifyLinked(container1Id, container2Id, 2); // Ensure IDs are correct
        } else {
            console.error('Containers not found in active slide');
        }
    }

    // Initialize magnify on the first load
    reinitializeMagnify();

    // Update magnify whenever the slide changes
    glide.on('run.after', reinitializeMagnify);

    // Mount the carousel
    glide.mount();
});
