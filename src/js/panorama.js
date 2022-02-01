(() => {
    const panorama = document.getElementById('panorama');
    let {x: panoramaX, y: panoramaY} = panorama.getBoundingClientRect();
    let {clientWidth: panoramaWidth} = panorama;
    let {clientHeight: panoramaHeight} = panorama;

    const image = document.getElementById('panorama-image');
    const {clientWidth: imageWidth} = image;

    panorama.addEventListener('mousemove', parallaxHandler)
    window.addEventListener('resize', setVariables)

    /**
     * parallaxHandler
     * @param {MouseEvent} event
     */
    function parallaxHandler(event) {
        const {x, y, percentX, percentY} = getMousePosition(event);
        const differentWidth = imageWidth - panoramaWidth;
        console.log(percentX);
        const imageOffset = differentWidth * percentX;
        image.style.transform = `translateX(-${imageOffset}px)`;
    }

    /**
     * @param {MouseEvent} event
     */
    function getMousePosition(event) {
        const x = Math.round(event.clientX - panoramaX);
        const y = Math.round(event.clientY - panoramaY);
        const percentX = x / panoramaWidth;
        const percentY = y / panoramaWidth;
        return {x, y, percentX, percentY};
    }

    function setVariables() {
        const {x, y} = panorama.getBoundingClientRect();
        panoramaX = x;
        panoramaY = y;
        panoramaWidth = panorama.clientWidth;
        panoramaHeight = panorama.clientHeight;
        image.style.transform = '';
    }
})();
