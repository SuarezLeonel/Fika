const horizontalSwiper = new Swiper('.swiper-container', {
    direction: 'horizontal', // Orientación horizontal
    slidesPerView: 2, // Mostrar 2 tarjetas visibles (tarjeta principal + partes de las laterales)
    spaceBetween: 1, // Espacio reducido entre las tarjetas
    centeredSlides: true, // Centrar la tarjeta activa
    loop: true, // Slider en bucle
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});