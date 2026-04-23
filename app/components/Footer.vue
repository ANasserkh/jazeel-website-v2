<script setup></script>
<template>

<!-- ═══════════════════════════════════════════════════════════════
     FOOTER
     ═══════════════════════════════════════════════════════════════ -->
<footer class="bg-navy pt-14 pb-8">
  <div class="max-w-7xl mx-auto px-5 sm:px-8">
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
      <div>
        <img src="../jazeel-logo.svg" alt="جزيل" class="h-7 mb-4 brightness-0 invert">
        <p class="text-body-sm text-white/35 leading-relaxed">منصة تقنية سعودية تمكّن القطاع غير الربحي من إدارة الاستراتيجية والمقترحات والمشاريع وفرص المنح بكفاءة واحترافية.</p>
      </div>
      <div>
        <h4 class="text-body-sm font-bold text-white mb-4">المنصة</h4>
        <ul class="space-y-2.5">
          <li><NuxtLink to="/" class="text-body-sm text-white/35 hover:text-jgreen transition-colors">الرئيسية</NuxtLink></li>
          <li><NuxtLink to="/donor-portal" class="text-body-sm text-white/35 hover:text-jgreen transition-colors">بوابة الجهات المانحة</NuxtLink></li>
          <li><NuxtLink to="/ngo-portal" class="text-body-sm text-white/35 hover:text-jgreen transition-colors">بوابة الجمعيات</NuxtLink></li>
          <li><NuxtLink to="/pricing" class="text-body-sm text-white/35 hover:text-jgreen transition-colors">الأسعار</NuxtLink></li>
          <li><NuxtLink to="/grants" class="text-body-sm text-white/35 hover:text-jgreen transition-colors">فرص المنح</NuxtLink></li>
          <li><NuxtLink to="/donors-directory" class="text-body-sm text-white/35 hover:text-jgreen transition-colors">دليل المانحين</NuxtLink></li>
        </ul>
      </div>
      <div>
        <h4 class="text-body-sm font-bold text-white mb-4">معلومات</h4>
        <ul class="space-y-2.5">
          <li><a href="#" class="text-body-sm text-white/35 hover:text-jgreen transition-colors">عن جزيل</a></li>
          <li><a href="#" class="text-body-sm text-white/35 hover:text-jgreen transition-colors">مركز المعرفة</a></li>
          <li><a href="#" class="text-body-sm text-white/35 hover:text-jgreen transition-colors">سياسة الخصوصية</a></li>
          <li><a href="#" class="text-body-sm text-white/35 hover:text-jgreen transition-colors">شروط الاستخدام</a></li>
          <li><a href="#" class="text-body-sm text-white/35 hover:text-jgreen transition-colors">تواصل معنا</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-body-sm font-bold text-white mb-4">تابعنا</h4>
        <div class="flex gap-2.5">
          <a href="#" class="w-9 h-9 rounded-lg bg-white/[0.05] flex items-center justify-center text-white/35 hover:bg-jgreen/15 hover:text-jgreen transition-all">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#" class="w-9 h-9 rounded-lg bg-white/[0.05] flex items-center justify-center text-white/35 hover:bg-jgreen/15 hover:text-jgreen transition-all">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
        <div class="mt-6">
          <h4 class="text-body-sm font-bold text-white mb-3">النشرة البريدية</h4>
          <div class="flex gap-2">
            <input type="email" placeholder="بريدك الإلكتروني" class="flex-1 px-4 py-2.5 rounded-sys bg-white/[0.05] border border-white/[0.08] text-body-sm text-white placeholder:text-white/25 focus:outline-none focus:border-jgreen/40 transition-colors">
            <button class="btn-primary" style="padding:0.625rem 1rem;font-size:0.8125rem;">اشترك</button>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="text-micro text-white/25">© 2026 جزيل. جميع الحقوق محفوظة.</p>
      <div class="flex gap-6">
        <a href="#" class="text-micro text-white/25 hover:text-white/50 transition-colors">سياسة الخصوصية</a>
        <a href="#" class="text-micro text-white/25 hover:text-white/50 transition-colors">شروط الاستخدام</a>
      </div>
    </div>
  </div>
</footer>

</template>