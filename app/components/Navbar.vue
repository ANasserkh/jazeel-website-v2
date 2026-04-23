<script setup>
onMounted(() => {
    window.addEventListener('scroll', updateHeader, { passive: true });
    // ─── Mobile Menu ───
    mobileToggle.addEventListener('click', () => {
        document.getElementById('mobileMenu').classList.toggle('active');
    });

    // ─── Login Dropdown close on outside click ───
    document.addEventListener('click', (e) => {
        const dd = document.getElementById('loginDropdown');
        const wrap = e.target.closest('.login-dropdown-wrap');
        if (!wrap && dd) dd.classList.remove('open');
    });

    updateHeader();
    toggleNavbarBg()
});
function updateHeader() {
    const header = document.getElementById('mainHeader');
    const navLinks = document.querySelectorAll('.nav-link');
    const loginLink = document.getElementById('loginLink');
    const langBtn = document.getElementById('langBtn');
    const mobileToggle = document.getElementById('mobileToggle');

    const scrolled = window.scrollY > 40;
    if (scrolled) {
        header.classList.add('header-scrolled');
        navLinks.forEach(l => { l.style.color = '#07133F'; });
        if (loginLink) loginLink.style.color = '#07133F';
        if (langBtn) langBtn.style.color = '#5B6470';
        if (mobileToggle) mobileToggle.style.color = '#07133F';
    } else {
        header.classList.remove('header-scrolled');
        navLinks.forEach((l, i) => { l.style.color = i === 0 ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.6)'; });
        if (loginLink) loginLink.style.color = 'rgba(255,255,255,0.7)';
        if (langBtn) langBtn.style.color = 'rgba(255,255,255,0.5)';
        if (mobileToggle) mobileToggle.style.color = '#fff';
    }
}

const route = useRoute();
watch(() => route.path, () => {
    toggleNavbarBg();
});

function toggleNavbarBg() {
    const pages = ["donor-portal", "ngo-portal", "pricing"]

    if (pages.includes(route.name)) {
        document.getElementById('mainHeader').classList.add('light-nav');
    } else {

        document.getElementById('mainHeader').classList.remove('light-nav');
    }
}

</script>
<template>
    <!-- ═══════════════════════════════════════════════════════════════
     HEADER
     ═══════════════════════════════════════════════════════════════ -->
    <header id="mainHeader" class="fixed top-0 right-0 left-0 z-50 transition-all duration-300"
        style="background:transparent;">
        <div class="max-w-7xl mx-auto px-5 sm:px-8">
            <div class="flex items-center justify-between h-[68px]">
                <NuxtLink to="/" class="flex items-center gap-2">
                    <img src="~/assets/images/jazeel-logo.svg" alt="جزيل" class="h-8" id="headerLogo">
                </NuxtLink>

                <nav class="hidden lg:flex items-center gap-0.5" id="desktopNav">
                    <NuxtLink to="/"
                        class="nav-link px-4 py-2 rounded-lg text-[0.9375rem] font-medium text-white/60 hover:text-white hover:bg-white/10 transition-all">
                        الرئيسية</NuxtLink>
                    <NuxtLink to="/donor-portal"
                        class="nav-link px-4 py-2 rounded-lg text-[0.9375rem] font-medium text-white/60 hover:text-white hover:bg-white/10 transition-all">
                        بوابة
                        الجهات المانحة</NuxtLink>
                    <NuxtLink to="ngo-portal"
                        class="nav-link px-4 py-2 rounded-lg text-[0.9375rem] font-medium text-white/60 hover:text-white hover:bg-white/10 transition-all">
                        بوابة
                        الجمعيات</NuxtLink>
                    <NuxtLink to="pricing"
                        class="nav-link px-4 py-2 rounded-lg text-[0.9375rem] font-medium text-white/60 hover:text-white hover:bg-white/10 transition-all">
                        الأسعار</NuxtLink>
                    <a href="/grants"
                        class="nav-link px-4 py-2 rounded-lg text-[0.9375rem] font-medium text-white/60 hover:text-white hover:bg-white/10 transition-all">فرص
                        المنح</a>
                    <a href="donors-directory.html"
                        class="nav-link px-4 py-2 rounded-lg text-[0.9375rem] font-medium text-white/60 hover:text-white hover:bg-white/10 transition-all">دليل
                        المانحين</a>
                </nav>

                <div class="hidden lg:flex items-center gap-3">

                    <div class="login-dropdown-wrap">
                        <button
                            class="text-[0.9375rem] font-medium px-4 py-2 rounded-lg text-white/70 hover:text-white transition-all flex items-center gap-1.5"
                            id="loginLink" onclick="document.getElementById('loginDropdown').classList.toggle('open')">
                            تسجيل الدخول
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2.5" stroke-linecap="round">
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>
                        <div class="login-dropdown" id="loginDropdown">
                            <a href="https://ngo.jazeel.net.sa/#/login">
                                <span class="dd-icon" style="background:#EAF8F3;"><svg width="16" height="16"
                                        viewBox="0 0 24 24" fill="none" stroke="#19B58B" stroke-width="2">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg></span>
                                <div>
                                    <div class="text-navy">دخول الجمعيات</div>
                                    <div style="font-size:11px;font-weight:400;color:#5B6470;margin-top:1px;">إدارة
                                        المقترحات والمشاريع</div>
                                </div>
                            </a>
                            <a href="https://donor.jazeel.net.sa/login">
                                <span class="dd-icon" style="background:rgba(125,83,243,0.08);"><svg width="16"
                                        height="16" viewBox="0 0 24 24" fill="none" stroke="#7D53F3" stroke-width="2">
                                        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                                        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                                        <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                                    </svg></span>
                                <div>
                                    <div class="text-navy">دخول الجهات المانحة</div>
                                    <div style="font-size:11px;font-weight:400;color:#5B6470;margin-top:1px;">نشر الفرص وتقييم المقترحات</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <a href="https://ngo.jazeel.net.sa/#/register" class="btn-primary" style="padding:0.5rem 1.25rem;font-size:0.8125rem;">ابدأ التجربة
                        المجانية</a>
                </div>

                <button id="mobileToggle"
                    class="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center text-white hover:bg-white/10 transition-all">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                        stroke-linecap="round">
                        <path d="M4 7h16M4 12h16M4 17h16" />
                    </svg>
                </button>
            </div>
        </div>
        <div class="mobile-menu" id="mobileMenu">
            <NuxtLink to="/">الرئيسية</NuxtLink>
            <NuxtLink to="/donor-portal">بوابة الجهات المانحة</NuxtLink>
            <NuxtLink to="/ngo-portal">بوابة الجمعيات</NuxtLink>
            <NuxtLink href="/pricing">الأسعار</NuxtLink>
            <a href="/grants">فرص المنح</a>
            <a href="donors-directory.html">دليل المانحين</a>
            <div style="padding:0.75rem 1rem;margin-top:0.5rem;border-top:1px solid #E5E8EB;">
                <a href="https://ngo.jazeel.net.sa/#/register" class="btn-primary"
                    style="width:100%;justify-content:center;font-size:0.8125rem;padding:0.75rem;">ابدأ التجربة
                    المجانية</a>
            </div>
        </div>
    </header>

    <!-- ═══════════════════════════════════════════════════════════════
     HERO
     ═══════════════════════════════════════════════════════════════ -->
</template>

<style>
.light-nav .nav-link {
    @apply !text-navy/50 hover:text-navy hover:bg-navy/5;
}

.light-nav .nav-link.router-link-active {
    @apply !text-navy hover:bg-navy/5;
}

.light-nav #loginLink {
    @apply !text-navy/50 hover:text-navy hover:bg-navy/5;

}
</style>