// ── بيانات النماذج ──────────────────────────────────────────────
const MODELS = [
    // Claude
    { name: "Claude Opus 4.5",   provider: "Anthropic", family: "claude",   familyLabel: "Claude",   status: "semi-free", statusText: "شبه مجاني", specialty: "الكتابة الإبداعية", tags: ["الكتابة", "التحليل", "البحث"],            desc: "الأقوى من Anthropic، يتفوق في الكتابة الإبداعية والتحليل المعمق.", url: "https://claude.ai" },
    { name: "Claude Sonnet 4.5", provider: "Anthropic", family: "claude",   familyLabel: "Claude",   status: "semi-free", statusText: "شبه مجاني", specialty: "البرمجة",            tags: ["البرمجة", "التوازن", "السرعة"],          desc: "التوازن المثالي بين الأداء والسرعة، رائد في مهام البرمجة.",         url: "https://claude.ai" },
    { name: "Claude Haiku 3.5",  provider: "Anthropic", family: "claude",   familyLabel: "Claude",   status: "semi-free", statusText: "شبه مجاني", specialty: "السرعة",             tags: ["السرعة", "الكفاءة", "المهام اليومية"],   desc: "الأسرع من Anthropic، مثالي للمهام اليومية السريعة.",                url: "https://claude.ai" },

    // ChatGPT
    { name: "GPT-4o",  provider: "OpenAI", family: "chatgpt", familyLabel: "ChatGPT", status: "semi-free", statusText: "شبه مجاني", specialty: "متعدد الوسائط",      tags: ["الصور", "الصوت", "المحادثة"],          desc: "نموذج يفهم النصوص والصور والصوت بكفاءة عالية.",               url: "https://chatgpt.com" },
    { name: "GPT-o3",  provider: "OpenAI", family: "chatgpt", familyLabel: "ChatGPT", status: "paid",      statusText: "مدفوع",      specialty: "الاستدلال المنطقي", tags: ["الرياضيات", "المنطق", "الاستدلال"],    desc: "متخصص في الاستدلال المنطقي والرياضيات والمسائل العلمية.",      url: "https://chatgpt.com" },
    { name: "GPT-4.1", provider: "OpenAI", family: "chatgpt", familyLabel: "ChatGPT", status: "paid",      statusText: "مدفوع",      specialty: "السياق الطويل",     tags: ["البرمجة", "الملفات", "السياق الطويل"], desc: "متفوق في البرمجة ومعالجة السياقات الطويلة للمشاريع الكبيرة.", url: "https://chatgpt.com" },

    // Gemini
    { name: "Gemini 2.5 Pro",  provider: "Google", family: "gemini", familyLabel: "Gemini", status: "semi-free", statusText: "شبه مجاني", specialty: "البحث العلمي",    tags: ["البحث", "العلوم", "التحليل"],            desc: "الأقوى من Google، متفوق في البحث العلمي والتحليل المعمق.",      url: "https://gemini.google.com" },
    { name: "Gemini 2.0 Flash", provider: "Google", family: "gemini", familyLabel: "Gemini", status: "free",      statusText: "مجاني",      specialty: "السرعة الفائقة", tags: ["السرعة", "الكفاءة", "المجانية"],         desc: "فائق السرعة مع دعم متعدد الوسائط، مثالي للاستجابة الفورية.",   url: "https://gemini.google.com" },
    { name: "Gemini 1.5 Pro",  provider: "Google", family: "gemini", familyLabel: "Gemini", status: "semi-free", statusText: "شبه مجاني", specialty: "السياق المليوني", tags: ["المستندات", "الملفات", "السياق الطويل"], desc: "نافذة سياق مليون رمز، الأفضل لتحليل المستندات الضخمة.",        url: "https://gemini.google.com" },

    // Kimi
    { name: "Kimi k2",    provider: "Moonshot AI", family: "kimi", familyLabel: "Kimi", status: "free",      statusText: "مجاني",      specialty: "الوكلاء الذكية", tags: ["البرمجة", "الوكلاء", "الأتمتة"],      desc: "متخصص في بناء الوكلاء الذكية وأتمتة المهام البرمجية.",         url: "https://kimi.ai" },
    { name: "Kimi k1.5",  provider: "Moonshot AI", family: "kimi", familyLabel: "Kimi", status: "free",      statusText: "مجاني",      specialty: "التفكير العميق",  tags: ["التفكير", "الاستدلال", "المنطق"],      desc: "يتفوق في التفكير المتعمق خطوة بخطوة للمسائل المنطقية.",        url: "https://kimi.ai" },
    { name: "Moonshot v1", provider: "Moonshot AI", family: "kimi", familyLabel: "Kimi", status: "semi-free", statusText: "شبه مجاني", specialty: "اللغة الصينية",  tags: ["الترجمة", "اللغات", "التحليل"],        desc: "الأفضل في اللغة الصينية والترجمة مع نافذة سياق واسعة.",        url: "https://kimi.ai" },

    // Qwen
    { name: "Qwen3 235B",   provider: "Alibaba", family: "qwen", familyLabel: "Qwen", status: "free",      statusText: "مجاني",      specialty: "الرياضيات والعلوم", tags: ["الرياضيات", "البرمجة", "العلوم"], desc: "نموذج ضخم مفتوح المصدر يتفوق في الرياضيات والبرمجة والعلوم.", url: "https://chat.qwen.ai" },
    { name: "Qwen2.5-Max",  provider: "Alibaba", family: "qwen", familyLabel: "Qwen", status: "semi-free", statusText: "شبه مجاني", specialty: "التعددية اللغوية",  tags: ["العربية", "الترجمة", "اللغات"],    desc: "متميز في دعم اللغات المتعددة بما فيها العربية والصينية.",       url: "https://chat.qwen.ai" },
    { name: "QwQ-32B",      provider: "Alibaba", family: "qwen", familyLabel: "Qwen", status: "free",      statusText: "مجاني",      specialty: "الاستدلال الدقيق",  tags: ["التفكير", "الدقة", "الاستدلال"],   desc: "نموذج تفكير متخصص يحلل المشكلات خطوة بخطوة بدقة فائقة.",      url: "https://chat.qwen.ai" },

    // DeepSeek
    { name: "DeepSeek R1", provider: "DeepSeek", family: "deepseek", familyLabel: "DeepSeek", status: "free",      statusText: "مجاني",      specialty: "التفكير الرياضي",    tags: ["الرياضيات", "التفكير", "البحث"],     desc: "نموذج تفكير مفتوح المصدر، يتنافس مع o1 في الرياضيات والاستدلال.", url: "https://chat.deepseek.com" },
    { name: "DeepSeek V3", provider: "DeepSeek", family: "deepseek", familyLabel: "DeepSeek", status: "free",      statusText: "مجاني",      specialty: "البرمجة الاحترافية", tags: ["البرمجة", "الكفاءة", "التطوير"],     desc: "نموذج مفتوح المصدر يتفوق في البرمجة بكفاءة حسابية استثنائية.",   url: "https://chat.deepseek.com" },
    { name: "DeepSeek R2", provider: "DeepSeek", family: "deepseek", familyLabel: "DeepSeek", status: "semi-free", statusText: "شبه مجاني", specialty: "البحث العميق",       tags: ["الاستدلال", "البحث", "المنطق"],      desc: "أحدث نماذج DeepSeek، يجمع قوة الاستدلال والبحث العميق.",          url: "https://chat.deepseek.com" },
];

const FAMILIES = [
    { id: "all",      label: "الكل" },
    { id: "claude",   label: "Claude" },
    { id: "chatgpt",  label: "ChatGPT" },
    { id: "gemini",   label: "Gemini" },
    { id: "kimi",     label: "Kimi" },
    { id: "qwen",     label: "Qwen" },
    { id: "deepseek", label: "DeepSeek" },
];


let currentFamily = "all";
let currentStatus = "all";



function buildFamilyNav() {
    const nav = document.getElementById("familyNav");

    nav.innerHTML = FAMILIES.map(f =>
        `<button class="family-btn ${f.id === "all" ? "active" : ""}" data-family="${f.id}">${f.label}</button>`
    ).join("");

    nav.querySelectorAll(".family-btn").forEach(btn => {
        btn.addEventListener("click", function () {
            // إزالة active من الكل ثم إضافتها للمضغوط
            nav.querySelectorAll(".family-btn").forEach(b => b.classList.remove("active"));
            this.classList.add("active");

            currentFamily = this.dataset.family;
            applyFilters();
        });
    });
}


// ── دالة: تطبيق الفلاتر وعرض النتائج ───────────────────────────
function applyFilters() {
    const query = document.getElementById("searchInput").value.toLowerCase();

    const result = MODELS.filter(function (model) {
        const matchSearch = model.name.toLowerCase().includes(query)
                         || model.desc.toLowerCase().includes(query)
                         || model.specialty.toLowerCase().includes(query)
                         || model.tags.some(t => t.toLowerCase().includes(query));

        const matchFamily = currentFamily === "all" || model.family === currentFamily;
        const matchStatus = currentStatus === "all" || model.status === currentStatus;

        return matchSearch && matchFamily && matchStatus;
    });

    renderCards(result);
    document.getElementById("modelCount").textContent = result.length + " نموذج";
}


// ── دالة: رسم البطاقات ───────────────────────────────────────────
function renderCards(models) {
    const grid = document.getElementById("modelGrid");

    if (models.length === 0) {
        grid.innerHTML = `<div class="empty">لا توجد نماذج مطابقة للبحث 🔍</div>`;
        return;
    }

    grid.innerHTML = models.map(function (model) {
        // تحديد class الشارة حسب الحالة
        let badgeClass = "";
        if (model.status === "free")      badgeClass = "badge-free";
        if (model.status === "semi-free") badgeClass = "badge-semi";
        if (model.status === "paid")      badgeClass = "badge-paid";

        return `
            <article class="card">
                <div class="card-top">
                    <span class="badge ${badgeClass}">${model.statusText}</span>
                    <span class="family-badge">${model.familyLabel}</span>
                </div>

                <div class="specialty"> متميز في: ${model.specialty}</div>

                <h3>${model.name}</h3>
                <span class="provider">${model.provider}</span>

                <p>${model.desc}</p>

                <div class="tags">
                    ${model.tags.map(t => `<span class="tag">${t}</span>`).join("")}
                </div>

                <a href="${model.url}" target="_blank">استكشاف النموذج ↗</a>
            </article>
        `;
    }).join("");
}


// ── دالة: تبديل المظهر (فاتح / داكن) ───────────────────────────
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-theme");

    if (currentTheme === "dark") {
        html.setAttribute("data-theme", "light");
    } else {
        html.setAttribute("data-theme", "dark");
    }
}


// ── تشغيل كل شيء عند تحميل الصفحة ─────────────────────────────
document.addEventListener("DOMContentLoaded", function () {

    // بناء أزرار الشركات
    buildFamilyNav();

    // عرض كل النماذج في البداية
    renderCards(MODELS);
    document.getElementById("modelCount").textContent = MODELS.length + " نموذج";

    // البحث
    document.getElementById("searchInput").addEventListener("input", applyFilters);

    // تغيير المظهر
    document.getElementById("themeToggle").addEventListener("click", toggleTheme);

    // فلاتر التسعير
    document.querySelectorAll(".filter-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            currentStatus = this.dataset.status;
            applyFilters();
        });
    });

});
