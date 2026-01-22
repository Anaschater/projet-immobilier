مزيان زكرياء 👌، غادي نشرح ليك **الكونسيبت (الفكرة)** ديال المشروع ديالك بطريقة مبسطة ومهنية، بحال إلا غادي تقدمها فـ présentation أو rapport.

---

## 💡 فكرة المشروع (Concept du projet)

### 🏢 اسم المشروع:  
**Système de gestion immobilière pour une agence de syndic**

---

## 🎯 الهدف من المشروع

الهدف من هاد المشروع هو تطوير **تطبيق ويب** كيساعد وكالة متخصصة فـ تسيير العقارات (biens immobiliers) باش تدير:

- إدارة المدن، الأحياء، العقارات، والعقود
- تسجيل الدخول من طرف syndic
- عرض معلومات العقارات اللي مسؤول عليهم syndic
- تتبع العقود والمداخيل الشهرية والسنوية
- حماية الوصول للبيانات عبر authentification

---

## 🧱 مكونات النظام

### 👤 1. Authentification Syndic
- كل syndic عندو code و mot de passe
- يقدر يدخل فقط إذا كانت المعلومات صحيحة
- بعد الدخول، يشوف غير المعلومات اللي كيتعلقو به

### 🏙️ 2. Gestion des Villes
- إضافة مدينة جديدة
- تعديل أو حذف مدينة
- تصفية المدن حسب code أو région
- عرض العقود المرتبطة بمدينة معينة

### 🏠 3. Gestion des Biens Immobiliers
- كل bien عندو type (appartement, villa…)
- مرتبط بحي، والحي مرتبط بمدينة، والمدينة بمنطقة
- كل bien كيتسجل مع معلوماتو (adresse, superficie, etc.)

### 📄 4. Gestion des Contrats
- كل عقد مربوط بـ bien و syndic
- فيه prix_mensuel، date, état (en cours, résilié)
- يتم احتساب chiffre d’affaire تلقائياً (prix_mensuel × 12)

### 📊 5. Statistiques & Web Service
- عرض عدد العقارات والعقود
- Web service كيرجع عدد biens و العقود résiliés منذ 2013
- صفحة لاختبار هاد الخدمة

---

## 🧠 القيمة المضافة

- تسهيل إدارة العقارات والعقود
- واجهة بسيطة وآمنة للمستخدم
- تقارير مالية تلقائية حسب الأحياء والمدن والمناطق
- إمكانية التوسع مستقبلاً (PDF, export, notifications…)

---

## 🛠️ التكنولوجيات المستعملة

| Côté | Technologie |
|------|-------------|
| Frontend | React.js |
| Backend (mocké) | Redux Toolkit |
| Authentification | React Router + Redux |
| Données | JSON / Redux Store |
| Web Service (simulé) | Fonction JS |

---

إذا بغيتي، نقدر نكتب ليك **مقدمة رسمية** بحال لي كتكون فـ rapport de stage أو mémoire، أو نزيدك **diagramme de classes** أو **cas d’utilisation UML**.  
شنو تحب نكمل عليه؟