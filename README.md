# Developer Portfolio

A fast, dependency-free bilingual portfolio for **Radwan Abdulhadi Ahmed / رضوان عبدالهادي أحمد / [@rad03i2](https://github.com/rad03i2)**. It presents selected real projects, technical skills and a concise developer profile in a responsive, accessible interface.

## English

### Overview & why it exists
This repository is the source for a lightweight personal portfolio that can be opened directly or hosted as a static site. It avoids frameworks and third-party runtime services so the page stays portable, auditable and easy to maintain.

### Key features
- Responsive single-page design for mobile and desktop.
- English/Arabic switch with correct LTR/RTL direction; preference persists locally.
- Light/dark theme switch with local persistence.
- Filterable project cards linked to their GitHub repositories.
- Semantic HTML, keyboard-visible skip link, accessible controls and reduced-motion support.
- No analytics, cookies, API keys, external fonts or runtime dependencies.

### Preview
Open `index.html` locally. For screenshots, capture the hero and project grid at desktop width plus one mobile/Arabic view. The public portfolio may also be available at [rdwan.dev](https://rdwan.dev).

### Requirements & installation
Any modern browser is enough. Clone and open the file:

```bash
git clone https://github.com/rad03i2/developer-portfolio.git
cd developer-portfolio
```

Double-click `index.html`, or serve it locally:

```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`.

### Configuration
Project data, categories, skills and translated interface strings live in `script.js`. Theme tokens and layout rules live in `style.css`. No `.env` file is required.

### Project structure
```text
.
├── index.html          # semantic page structure
├── style.css           # responsive themes and layout
├── script.js           # projects, filters, language and theme behavior
├── tests/portfolio.test.mjs
├── .github/workflows/ci.yml
├── CONTRIBUTING.md
├── SECURITY.md
└── LICENSE
```

### Testing
Requires Node.js 20+ only for development validation (not to run the site):

```bash
node --test tests/portfolio.test.mjs
node --check script.js
```
CI runs these checks on Node.js 20 and 22.

### Limitations
Project descriptions are maintained manually; the page does not call the GitHub API or automatically synchronize repository metadata. There is no contact form or server-side component. JavaScript is required for project rendering, filtering and preference controls.

### Security & privacy
The site is static and collects no visitor data. External links use `noopener noreferrer`. See `SECURITY.md` for reporting guidance. If hosted, HTTPS and appropriate response headers remain the host's responsibility.

### Optional roadmap
Optional future improvements include a build-time project-data generator, richer project screenshots and automated accessibility checks. These are enhancements, not requirements for current operation.

### Contributing & license
See `CONTRIBUTING.md`. Released under the MIT License; see `LICENSE`.

### Author
**Radwan Abdulhadi Ahmed**  
**رضوان عبدالهادي أحمد**  
GitHub: **[@rad03i2](https://github.com/rad03i2)**

---

## العربية

### نظرة عامة ولماذا يوجد المشروع
هذا المستودع هو مصدر معرض أعمال شخصي خفيف وسريع يعرض مشاريع رضوان ومهاراته بصورة منظمة. يعمل كموقع ثابت دون أطر عمل أو خدمات تشغيل خارجية، لذلك يسهل تشغيله ومراجعته وصيانته.

### المزايا الرئيسية
- تصميم متجاوب للهاتف وسطح المكتب.
- تبديل كامل بين الإنجليزية والعربية مع اتجاه LTR/RTL الصحيح وحفظ الاختيار محليًا.
- وضع فاتح وداكن مع حفظ التفضيل على الجهاز.
- بطاقات مشاريع قابلة للتصفية ومرتبطة بمستودعاتها على GitHub.
- HTML دلالي، رابط تجاوز للمحتوى، عناصر تحكم واضحة ودعم تقليل الحركة.
- لا تحليلات ولا ملفات تعريف ارتباط ولا مفاتيح API ولا خطوط خارجية أو اعتماديات تشغيل.

### المعاينة
افتح `index.html` مباشرة. عند إضافة صور للمستودع يُفضّل تصوير واجهة البداية وشبكة المشاريع على سطح المكتب، إضافة إلى لقطة للهاتف باللغة العربية. وقد يتوفر الموقع العام أيضًا على [rdwan.dev](https://rdwan.dev).

### المتطلبات والتثبيت
يكفي متصفح حديث. استنسخ المشروع ثم افتح `index.html`، أو شغّل خادمًا محليًا:

```bash
python -m http.server 8000
```
ثم افتح `http://localhost:8000`.

### الإعداد والاستخدام
توجد بيانات المشاريع والتصنيفات والمهارات والنصوص المترجمة داخل `script.js`، بينما توجد ألوان الثيم والتخطيط في `style.css`. لا يحتاج المشروع إلى `.env`.

### بنية المشروع
البنية موضحة في قسم Project structure أعلاه: صفحة HTML، ملف تنسيق، منطق JavaScript، اختبارات، CI، ووثائق المساهمة والأمان والترخيص.

### الاختبارات
Node.js 20+ مطلوب فقط للتحقق أثناء التطوير:

```bash
node --test tests/portfolio.test.mjs
node --check script.js
```
وتنفذ GitHub Actions الاختبارات على Node.js 20 و22.

### القيود
بيانات المشاريع تُحدّث يدويًا ولا تتم مزامنتها تلقائيًا من GitHub. لا يوجد نموذج اتصال أو خادم خلفي. يحتاج عرض المشاريع والتصفية وتبديل اللغة والثيم إلى JavaScript.

### الأمان والخصوصية
الموقع ثابت ولا يجمع بيانات الزوار. الروابط الخارجية محمية بـ`noopener noreferrer`. راجع `SECURITY.md` للإبلاغ عن المشكلات. عند الاستضافة تبقى HTTPS وترويسات الحماية مسؤولية منصة الاستضافة.

### تطوير اختياري
يمكن مستقبلًا إضافة مولد بيانات للمشاريع وقت البناء، وصور أغنى للمشاريع، وفحوص وصول آلية. هذه تحسينات اختيارية وليست وظائف ناقصة في النسخة الحالية.

### المساهمة والترخيص
راجع `CONTRIBUTING.md`. المشروع مرخص برخصة MIT الموجودة في `LICENSE`.

### المؤلف
**Radwan Abdulhadi Ahmed**  
**رضوان عبدالهادي أحمد**  
GitHub: **[@rad03i2](https://github.com/rad03i2)**
