<script setup>
onMounted(() => {

    revealObserver();
    animateCounters();

})


function revealObserver() {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObserver.observe(el));

}
// ─── Counter Animation ───
function animateCounters() {
    document.querySelectorAll('.counter-value[data-target]').forEach(el => {
        const target = parseInt(el.dataset.target);
        if (el.dataset.animated) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !el.dataset.animated) {
                    el.dataset.animated = 'true';
                    const duration = 1800;
                    const start = performance.now();
                    function update(now) {
                        const progress = Math.min((now - start) / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        const current = Math.round(eased * target);
                        el.textContent = (target >= 100 ? '+' : '') + current + (target < 100 ? '%' : '');
                        if (progress < 1) requestAnimationFrame(update);
                    }
                    requestAnimationFrame(update);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.3 });
        observer.observe(el);
    });
}

const route = useRoute();
watch(() => route.path, () => {
    revealObserver();
    animateCounters();
});


</script>

<template>
    <Navbar />

    <div>
        <slot />
    </div>
    <Footer />
</template>
