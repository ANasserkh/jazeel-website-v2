<script setup>
useSeoMeta({
    title: 'الشروط والأحكام — جزيل',
    description: 'تعرف على الشروط والأحكام وسياسة الخصوصية المنظمة لاستخدام منصة جزيل، بما يضمن الشفافية وحماية البيانات لجميع المستخدمين.',
})

const sections = [
    { id: 'overview', title: 'نظرة عامة' },
    { id: 'privacy', title: 'سياسة الخصوصية' },
    { id: 'tos', title: 'بنود الخدمة' },
    { id: 'security', title: 'أمن المعلومات' },
    { id: 'faq', title: 'الأسئلة الشائعة' }
]
</script>

<template>
    <main>
        <!-- ═══════════════════════════════════════════════════════════════
         HERO
         ═══════════════════════════════════════════════════════════════ -->
        <section class="hero-gradient relative overflow-hidden pt-[120px] pb-20 sm:pt-[160px] sm:pb-32">
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <div class="absolute top-24 left-16 w-80 h-80 rounded-full bg-jgreen/[0.04] blur-[100px]"></div>
                <div class="absolute bottom-16 right-20 w-96 h-96 rounded-full bg-jgreen/[0.03] blur-[120px]"></div>
            </div>

            <div class="relative max-w-7xl mx-auto px-5 sm:px-8 text-center">
                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] mb-6 reveal visible"
                    style="animation: fadeUp 0.6s ease both;">
                    <span class="w-1.5 h-1.5 rounded-full bg-jgreen"></span>
                    <span class="text-white/60 text-micro">شروط الاستخدام وسياسة الخصوصية</span>
                </div>
                <h1 class="text-display-sm sm:text-display text-white mb-6 reveal visible"
                    style="animation: fadeUp 0.6s 0.1s ease both;">
                    سياسة الخصوصية وبنود الخدمة  <br> <span class="text-jgreen">وأمن المعلومات</span>
                </h1>
                <p class="text-body-lg text-white/50 max-w-2xl mx-auto reveal visible"
                    style="animation: fadeUp 0.6s 0.15s ease both;">
                    تهدف سياسة الخصوصية وبنود الخدمة وأمن المعلومات الى تنظيم العلاقة بين منصة جزيل والمستخدمين، وبيان
                    السياسات المنظمة لاستخدام الخدمات الرقمية المقدمة عبر المنصة، بما يضمن الشفافية، وحماية البيانات،
                    وأمن المعلومات، وجودة الخدمة، ووضوح الحقوق والالتزامات.
                </p>
            </div>
        </section>

        <!-- ═══════════════════════════════════════════════════════════════
         CONTENT
         ═══════════════════════════════════════════════════════════════ -->
        <section class="py-20 bg-white relative z-10 -mt-10 sm:-mt-16">
            <div class="max-w-7xl mx-auto px-5 sm:px-8">
                <div class="grid lg:grid-cols-12 gap-12">

                    <!-- Sidebar Navigation -->
                    <aside class="lg:col-span-3 hidden lg:block sticky top-24 self-start">
                        <div class="card-sys p-6 border-neutral-border/40">
                            <h4 class="text-micro font-bold text-navy mb-4 uppercase tracking-wider">محتويات الصفحة</h4>
                            <nav class="space-y-1">
                                <a v-for="section in sections" :key="section.id" :href="`#${section.id}`"
                                    class="block py-2.5 px-3 rounded-lg text-body-sm text-neutral-text hover:bg-jgreen/5 hover:text-jgreen transition-all border-r-2 border-transparent hover:border-jgreen">
                                    {{ section.title }}
                                </a>
                            </nav>
                        </div>
                    </aside>

                    <!-- Main Content -->
                    <div class="lg:col-span-9 space-y-16">

                        <!-- Overview -->
                        <div id="overview" class="reveal">
                            <h2 class="text-heading-sm text-navy mb-6 flex items-center gap-3">
                                <span
                                    class="w-8 h-8 rounded-lg bg-jgreen/10 flex items-center justify-center text-jgreen">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2.5">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 16v-4" />
                                        <path d="M12 8h.01" />
                                    </svg>
                                </span>
                                نظرة عامة
                            </h2>
                            <div class="prose prose-neutral max-w-none text-body text-neutral-text space-y-4">
                                <p>تهدف هذه السياسة إلى تنظيم العلاقة بين منصة جزيل والمستخدمين، وبيان السياسات المنظمة
                                    لاستخدام الخدمات الرقمية، بما يضمن الشفافية وحماية البيانات.</p>
                                <ul class="grid sm:grid-cols-2 gap-4 mt-6">
                                    <li class="bg-neutral-bg p-5 rounded-xl border border-neutral-border/30">
                                        <strong class="text-navy block mb-2">سياسة الخصوصية</strong>
                                        <span class="text-body-sm leading-relaxed">توضح سياسة الخصوصية في منصة جزيل
                                            كيفية جمع البيانات الشخصية والمؤسسية، وآلية استخدامها، ووسائل حمايتها،
                                            والحقوق المتعلقة بها، بما يتوافق مع الأنظمة المعمول بها.</span>
                                    </li>
                                    <li class="bg-neutral-bg p-5 rounded-xl border border-neutral-border/30">
                                        <strong class="text-navy block mb-2">بنود الخدمة</strong>
                                        <span class="text-body-sm leading-relaxed">تحدد بنود الخدمة الشروط والأحكام
                                            المنظمة لاستخدام منصة جزيل، وتوضح حقوق المستخدمين والتزاماتم، وآلية التسجيل
                                            والاستفادة من الخدمات، بما يضمن تجربة موثوقة وعادلة وآمنة.</span>
                                    </li>
                                    <li class="bg-neutral-bg p-5 rounded-xl border border-neutral-border/30">
                                        <strong class="text-navy block mb-2">مركز الامن في جزيل</strong>
                                        <span class="text-body-sm leading-relaxed">مركز الأمن في جزيل هو الجهة المعنية
                                            بحماية الأنظمة والبيانات، ومتابعة المخاطر الأمنية، والاستجابة للحوادث، بما
                                            يعزز موثوقية المنصة واستمرارية خدماتها.</span>
                                    </li>
                                    <li class="bg-neutral-bg p-5 rounded-xl border border-neutral-border/30">
                                        <strong class="text-navy block mb-2">مبادئنا بشأن الخصوصية والأمان</strong>
                                        <span class="text-body-sm leading-relaxed">تلتزم جزيل بحماية خصوصية المستخدمين
                                            وأمن معلوماتهم، واستخدامها للأغرض المشروعة فقط، وتطبيق ضوابط تقنية تنظيمية
                                            تضمن السرية والسلامة والثقة.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <!-- Privacy Policy -->
                        <div id="privacy" class="reveal">
                            <h2 class="text-heading-sm text-navy mb-6 flex items-center gap-3">
                                <span
                                    class="w-8 h-8 rounded-lg bg-jgreen/10 flex items-center justify-center text-jgreen">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2.5">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                </span>
                                سياسة الخصوصية
                            </h2>
                            <div class="prose prose-neutral max-w-none text-body text-neutral-text space-y-6">
                                <p>توضح سياسة الخصوصية في منصة جزيل كيفية جمع البيانات الشخصية والمؤسسية، وآلية
                                    استخدامها، ووسائل حمايتها، والحقوق المتعلقة بها، بما يتوافق مع الأنظمة المعمول بها.
                                </p>

                                <div class="grid sm:grid-cols-2 gap-x-8 gap-y-10 mt-8">
                                    <div class="space-y-3">
                                        <h4 class="text-body font-bold text-navy">المعلومات التي تجمعها جزيل</h4>
                                        <p class="text-body-sm leading-relaxed">تجمع المنصة البيانات التي يقدمها
                                            المستخدم عند التسجيل أو استخدام الخدمات، مثل بيانات الجمعية، ووسائل التواصل،
                                            والمعلومات التشغيلية اللازمة لتقديم الخدمة بكفاءة وتحسين تجربة الاستخدام.
                                        </p>
                                    </div>
                                    <div class="space-y-3">
                                        <h4 class="text-body font-bold text-navy">لماذا تجمع جزيل البيانات</h4>
                                        <p class="text-body-sm leading-relaxed">يتم جمع البيانات لتمكين تشغيل المنصة،
                                            والتحقق من الهوية، وإدارة الحسابات، وتقديم الخدمات، وتحسين الأداء، ورفع
                                            مستوى الأمان، والالتزام بالمتطلبات النظامية والتنظيمية.</p>
                                    </div>
                                    <div class="space-y-3">
                                        <h4 class="text-body font-bold text-navy">استخدام البريد الإلكتروني</h4>
                                        <p class="text-body-sm leading-relaxed">يوافق المستخدم عند التسجيل على استخدام
                                            البريد الإلكتروني أو وسائل التواصل المسجلة لإرسال الإشعارات، والتنبيهات،
                                            والفواتير، والتحديثات، والرسائل الإعلامية أو التعريفية المرتبطة بخدمات
                                            المنصة.</p>
                                    </div>
                                    <div class="space-y-3">
                                        <h4 class="text-body font-bold text-navy">عناصر التحكم في خصوصيتك</h4>
                                        <p class="text-body-sm leading-relaxed">توفر منصة "جزيل" عناصر تحكم تمكّن
                                            المستخدم من إدارة بياناته الشخصية، مثل تحديث المعلومات أو تعديلها. كما تتيح
                                            خيارات للتحكم في مستوى مشاركة البيانات، مع الالتزام بحماية الخصوصية وفق
                                            الأنظمة المعمول بها.</p>
                                    </div>
                                    <div class="space-y-3">
                                        <h4 class="text-body font-bold text-navy">مشاركة معلوماتك</h4>
                                        <p class="text-body-sm leading-relaxed">تلتزم منصة "جزيل" بعدم مشاركة معلومات
                                            المستخدمين مع أي طرف ثالث إلا عند الحاجة التشغيلية أو بناءً على متطلبات
                                            نظامية. وقد تتم مشاركة البيانات مع جهات ذات علاقة بالخدمة، مثل المانحين أو
                                            الشركاء.</p>
                                    </div>
                                    <div class="space-y-3">
                                        <h4 class="text-body font-bold text-navy">الحفاظ على أمان معلوماتك</h4>
                                        <p class="text-body-sm leading-relaxed">نطبق إجراءات تقنية وتنظيمية تضمن سرية
                                            البيانات وسلامتها، وتمنع الوصول غير المصرح به. كما يتم تحديث الأنظمة بشكل
                                            مستمر، مع تقييد الوصول للمعلومات على الجهات المخوّلة فقط.</p>
                                    </div>
                                    <div class="space-y-3">
                                        <h4 class="text-body font-bold text-navy">الاحتفاظ بالمعلومات</h4>
                                        <p class="text-body-sm leading-relaxed">تحتفظ المنصة بالمعلومات فقط للمدة
                                            اللازمة لتقديم الخدمة وتحقيق الأغراض التشغيلية، أو وفق ما تتطلبه الأنظمة.
                                            وبعد انتهاء الحاجة إليها، يتم حذفها أو إخفاء هويتها بطريقة آمنة.</p>
                                    </div>
                                    <div class="space-y-3">
                                        <h4 class="text-body font-bold text-navy">الامتثال والتعاون التنظيمي</h4>
                                        <p class="text-body-sm leading-relaxed">تلتزم جزيل بالامتثال للأنظمة واللوائح
                                            المعمول بها، والتعاون مع الجهات التنظيمية المختصة عند الطلب، بما يضمن تعزيز
                                            الشفافية وحماية المستخدمين وسرية المعلومات.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Terms of Service -->
                        <div id="tos" class="reveal">
                            <h2 class="text-heading-sm text-navy mb-6 flex items-center gap-3">
                                <span
                                    class="w-8 h-8 rounded-lg bg-jgreen/10 flex items-center justify-center text-jgreen">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2.5">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                        <path d="M14 2v6h6" />
                                        <path d="M16 13H8" />
                                        <path d="M16 17H8" />
                                        <path d="M10 9H8" />
                                    </svg>
                                </span>
                                بنود الخدمة
                            </h2>
                            <div class="prose prose-neutral max-w-none text-body text-neutral-text space-y-6">
                                <p>هي الشروط والأحكام التي تنظم استخدام منصة جزيل، وتوضح حقوق المستخدمين والتزاماتهم،
                                    وآلية الاستفادة من الخدمات المقدمة.</p>

                                <div>
                                    <h3 class="text-body font-bold text-navy mb-3">علاقتك مع جزيل</h3>
                                    <p>تعمل المنصة كحلقة وصل تقنية وتنظيمية بين الجمعيات والفرص التمويلية والخدمات
                                        المرتبطة بها، ولا تعد جهة مانحة أو مستفيدة مباشرة من المشاريع ما لم يعلن خلاف
                                        ذلك.</p>
                                </div>

                                <div class="grid sm:grid-cols-2 gap-6 mt-4">
                                    <div class="space-y-2">
                                        <h4 class="text-body font-bold text-navy">التسجيل والحسابات</h4>
                                        <p class="text-body-sm">يشترط للتسجيل تقديم بيانات صحيحة ومحدثة، ويكون التسجيل
                                            الأساسي عبر الجهة الرسمية برقم الترخيص المعتمد.</p>
                                    </div>
                                    <div class="space-y-2">
                                        <h4 class="text-body font-bold text-navy">حساب واحد لكل جمعية</h4>
                                        <p class="text-body-sm">لكل جمعية حساب رسمي واحد فقط داخل المنصة، بهدف توحيد
                                            البيانات، ومنع الازدواجية، وتسهيل إدارة الطلبات والخدمات والصلاحيات.</p>
                                    </div>
                                    <div class="space-y-2">
                                        <h4 class="text-body font-bold text-navy">مسؤولية المستخدم</h4>
                                        <p class="text-body-sm">يتحمل المستخدم مسؤولية صحة المعلومات المدخلة، والمحافظة
                                            على سرية بيانات الدخول، وعدم إساءة استخدام المنصة أو الخدمات المقدمة.</p>
                                    </div>
                                    <div class="space-y-2">
                                        <h4 class="text-body font-bold text-navy">الرسوم والمدفوعات</h4>
                                        <p class="text-body-sm">قد تفرض رسوم على بعض الخدمات أو الاشتراكات، ويتم توضيحها
                                            قبل إتمام الطلب، ويعد استخدام الخدمة موافقة على الرسوم المعلنة.</p>
                                    </div>
                                    <div class="space-y-2">
                                        <h4 class="text-body font-bold text-navy">الملكية الفكرية</h4>
                                        <p class="text-body-sm">جميع الحقوق المتعلقة بالمنصة من اسم تجاري، وأنظمة،
                                            وتصاميم، ومحتوى، وقواعد بيانات محفوظة لصالح جزيل.</p>
                                    </div>
                                    <div class="space-y-2">
                                        <h4 class="text-body font-bold text-navy">التعديلات على البنود</h4>
                                        <p class="text-body-sm">يحق للمنصة تعديل أو تحديث بنود الخدمة في أي وقت، ويعد
                                            استمرار الاستخدام بعد التحديث موافقة على النسخة المعدلة.</p>
                                    </div>
                                </div>

                                <div>
                                    <h3 class="text-body font-bold text-navy mb-3">المحتوى وإدارة الحسابات</h3>
                                    <p>يجب أن يكون المحتوى المرفوع أو المدخل صحيحًا ونظاميًا، ويحق للمنصة مراجعة أو
                                        إيقاف أو حذف أي محتوى مخالف للأنظمة أو السياسات. كما يحق للمنصة تعليق أو إلغاء
                                        الحسابات المخالفة أو التي يثبت إساءة استخدامها.</p>
                                </div>

                                <div class="p-5 bg-jgreen/5 rounded-xl border border-jgreen/10 mt-4">
                                    <h4 class="text-body font-bold text-navy mb-2">في حال وجود مشاكل أو خلافات</h4>
                                    <p class="text-body-sm">تتم معالجة المشكلات عبر قنوات الدعم الرسمية أولًا، وفي حال
                                        تعذر الحل الودي تخضع العلاقة للأنظمة المعمول بها في المملكة العربية السعودية.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Security -->
                        <div id="security" class="reveal">
                            <h2 class="text-heading-sm text-navy mb-6 flex items-center gap-3">
                                <span
                                    class="w-8 h-8 rounded-lg bg-jgreen/10 flex items-center justify-center text-jgreen">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2.5">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    </svg>
                                </span>
                                أمن المعلومات
                            </h2>
                            <div class="prose prose-neutral max-w-none text-body text-neutral-text space-y-6">
                                <p>أمن المعلومات في منصة جزيل هو مجموعة السياسات والإجراءات والتقنيات المطبقة لحماية
                                    البيانات والأنظمة والبنية الرقمية من المخاطر الأمنية، وضمان السرية والسلامة
                                    والتوافر.</p>

                                <div class="grid sm:grid-cols-2 gap-6 mt-4">
                                    <div class="space-y-2">
                                        <h4 class="text-body font-bold text-navy">حماية الأنظمة والبيانات</h4>
                                        <p class="text-body-sm">تطبق المنصة ضوابط تقنية وإدارية لحماية الأنظمة والبيانات
                                            من الوصول غير المصرح به، أو الاختراق، أو العبث، أو الفقد، أو سوء الاستخدام.
                                        </p>
                                    </div>
                                    <div class="space-y-2">
                                        <h4 class="text-body font-bold text-navy">إدارة الصلاحيات والوصول</h4>
                                        <p class="text-body-sm">يتم منح صلاحيات الدخول للمستخدمين وفق الحاجة والصلاحيات
                                            المحددة، مع تقييد الوصول إلى البيانات الحساسة على الجهات المخولة فقط.</p>
                                    </div>
                                    <div class="space-y-2">
                                        <h4 class="text-body font-bold text-navy">المراقبة والاستجابة للحوادث</h4>
                                        <p class="text-body-sm">تتابع المنصة المخاطر والمحاولات غير المشروعة، وتتخذ
                                            الإجراءات اللازمة لمعالجة الحوادث الأمنية وتقليل آثارها واستعادة الخدمة عند
                                            الحاجة.</p>
                                    </div>
                                    <div class="space-y-2">
                                        <h4 class="text-body font-bold text-navy">النسخ الاحتياطي واستمرارية الأعمال
                                        </h4>
                                        <p class="text-body-sm">تعتمد المنصة إجراءات مناسبة للنسخ الاحتياطي واستمرارية
                                            الخدمة بما يحد من أثر الأعطال التقنية أو الظروف الطارئة.</p>
                                    </div>
                                </div>

                                <div class="p-5 bg-jgreen/5 rounded-xl border border-jgreen/10 mt-4">
                                    <h4 class="text-body font-bold text-navy mb-2">مسؤولية المستخدم الأمنية</h4>
                                    <p class="text-body-sm">يلتزم المستخدم بالمحافظة على سرية بيانات الدخول، وعدم مشاركة
                                        كلمات المرور، وإبلاغ المنصة عند الاشتباه بأي استخدام غير مصرح به.</p>
                                </div>
                            </div>
                        </div>

                        <!-- FAQ -->
                        <div id="faq" class="reveal">
                            <h2 class="text-heading-sm text-navy mb-6 flex items-center gap-3">
                                <span
                                    class="w-8 h-8 rounded-lg bg-jgreen/10 flex items-center justify-center text-jgreen">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2.5">
                                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                        <path d="M12 17h.01" />
                                    </svg>
                                </span>
                                الأسئلة الشائعة
                            </h2>
                            <div class="space-y-4">
                                <div class="p-6 rounded-xl bg-neutral-bg">
                                    <h4 class="text-body font-bold text-navy mb-2">لماذا يجب التسجيل برقم ترخيص الجمعية؟
                                    </h4>
                                    <p class="text-body-sm text-neutral-text leading-relaxed">يُطلب التسجيل باستخدام رقم
                                        ترخيص الجمعية للتحقق من هوية الجهة وضمان صحة بياناتها واعتماديتها، ولتنظيم
                                        العمليات داخل المنصة بشكل رسمي وموثوق. كما أن لكل جمعية حسابًا واحدًا فقط
                                        مرتبطًا برقم الترخيص، وذلك لضمان توحيد البيانات، ومنع التكرار، وتسهيل إدارة
                                        الطلبات والخدمات من خلال الحساب الرسمي المعتمد للجمعية.</p>
                                </div>
                                <div class="p-6 rounded-xl bg-neutral-bg">
                                    <h4 class="text-body font-bold text-navy mb-2">كيف تحمي جزيل خصوصيتي وتحافظ على أمان
                                        معلوماتي؟</h4>
                                    <p class="text-body-sm text-neutral-text leading-relaxed">تحمي جزيل خصوصيتك عبر
                                        استخدام بياناتك وفق سياسة خصوصية واضحة، مع تطبيق ضوابط تقنية وإدارية لحمايتها من
                                        الوصول غير المصرح به أو إساءة الاستخدام. كما تلتزم بعدم بيع بياناتك الشخصية، ولا
                                        تشاركها إلا عند الحاجة لتقديم الخدمة أو للامتثال للأنظمة.</p>
                                </div>
                                <div class="p-6 rounded-xl bg-neutral-bg">
                                    <h4 class="text-body font-bold text-navy mb-2">لماذا يتم ربط حسابي بمنطقة معيّنة؟
                                    </h4>
                                    <p class="text-body-sm text-neutral-text leading-relaxed">يتم ربط حسابك بمنطقة
                                        معيّنة لتنظيم الخدمات والفرص والمشاريع المرتبطة بنطاق عمل جهتك، وتقديم تجربة
                                        أكثر دقة وملاءمة بحسب التغطية الجغرافية المعتمدة. وهذا يساعد جزيل على تحسين
                                        إدارة البيانات، وتوجيه الفرص والتقارير والدعم بطريقة أكثر ارتباطًا بسياق الجهة.
                                    </p>
                                </div>
                                <div class="p-6 rounded-xl bg-neutral-bg">
                                    <h4 class="text-body font-bold text-navy mb-2">كيف يمكنني إزالة معلوماتي على منصة
                                        جزيل؟</h4>
                                    <p class="text-body-sm text-neutral-text leading-relaxed">بحسب السياسة المنشورة، إذا
                                        رغبت في إزالة معلوماتك أو ممارسة حقوقك المتعلقة ببياناتك الشخصية على منصة جزيل،
                                        فيمكنك التواصل مباشرة مع المنصة عبر البريد الإلكتروني <a
                                            href="mailto:hi@jazeel.net.sa"
                                            class="text-jgreen hover:underline">hi@jazeel.net.sa</a>.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <!-- ═══════════════════════════════════════════════════════════════
         CTA
         ═══════════════════════════════════════════════════════════════ -->
        <section class="cta-gradient py-20 sm:py-24 relative overflow-hidden">
            <div class="absolute inset-0 pointer-events-none">
                <div class="absolute top-10 right-16 w-72 h-72 rounded-full bg-jgreen/[0.04] blur-[100px]"></div>
                <div class="absolute bottom-10 left-16 w-80 h-80 rounded-full bg-jgreen/[0.03] blur-[120px]"></div>
            </div>
            <div class="relative max-w-3xl mx-auto px-5 sm:px-8 text-center reveal">
                <h2 class="text-heading sm:text-display-sm text-white mb-5">
                    لديك استفسار حول السياسات؟
                </h2>
                <p class="text-body-lg text-white/45 max-w-xl mx-auto mb-10">
                    فريقنا جاهز للإجابة على أي تساؤلات تتعلق بالخصوصية أو شروط الاستخدام.
                </p>
                <div class="flex flex-wrap justify-center gap-3">
                    <NuxtLink to="/contact" class="btn-primary" style="padding:0.875rem 2.25rem;">
                        تواصل معنا الآن
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2.5" stroke-linecap="round">
                            <path d="m12 19-7-7 7-7" />
                            <path d="M19 12H5" />
                        </svg>
                    </NuxtLink>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
.prose h3 {
    margin-top: 0;
}

@media (min-width: 1024px) {
    .sticky {
        top: 100px;
    }
}
</style>
