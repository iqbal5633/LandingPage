// Inisialisasi Animasi AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Jalankan Icon Lucide
lucide.createIcons();

// Slider Testimoni Otomatis
const slider = document.getElementById('testimonial-slider');
if (slider) {
    let index = 0;
    setInterval(() => {
        index = (index + 1) % 2; 
        slider.style.transform = `translateX(-${index * 100}%)`;
    }, 4000);
}
