import React, { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { HiSparkles, HiArrowLeft } from "react-icons/hi2";

const syllabuses = {
    fullstack: [
        {
            module: "Modul 1: HTML + CSS",
            lessons: [
                "İnternet tarixi, Veb tərifi. Veb Proqramlaşdırma. Veb texnologiyalarına giriş",
                "HTML-ə giriş. HTML mətn formatlaşdırma, şəkil əlavə etmə",
                "HTML siyahılar: Sırasız siyahılar, Sıralı siyahılar, Tərif siyahıları. İç-içə siyahılar",
                "HTML cədvəllər: Cədvəl atributları. Sadə cədvəl, Kompleks cədvəllər. Cədvəl düzəni",
                "Hiper keçidlər: Xarici keçidlər, Daxili keçidlər, Lövbərlər. Hədəf çərçivələr",
                "Çərçivələr. iFrame. Düzən və tətbiq",
                "Form elementləri. Form atributları",
                "CSS-ə giriş. CSS tətbiqi: Sətir daxili CSS, Daxili CSS, Xarici CSS",
                "CSS fonlar. Qısaldılmış xassələr. Şrift və mətn formatlaşdırma",
                "CSS qutu modeli: En, Hündürlük, Çərçivə, Kənar boşluq, Daxili boşluq",
                "CSS seçiciləri: Id və Siniflər. Sözde-siniflər, sözde-elementlər",
                "CSS Display: Blok, Sətir daxili, Sətir daxili-blok. Qutu ölçüləndirmə xassələri",
                "CSS düzəni: Float, Clear. HTML5 Semantik elementlər",
                "CSS Responsiv Veb Dizayn (RWD): Media sorğuları, Mobil-əvvəl prinsipi",
                "Photoshop istifadəsi: İnterfeys, Qatlar, Seçim, Transformasiyalar, Doldurma",
                "Professional veb sayt düzəni. CSS Position: nisbi-mütləq, sabit, yapışan",
                "CSS Display: flex. Flex qutuları ilə veb sayt düzəni",
                "CSS Display Grid: Grid konteyner, Grid elementləri. Grid düzəni",
                "Bootstrap çərçivəsi: İstifadəsi, Düzən sinifləri, Komponentlər",
                "CSS preprosessorlar: SASS / SCSS. Quraşdırma, Tətbiq",
                "CSS Transformasiyalar: 2D, 3D. Keçidlər. Animasiya",
                "GIT VCS, GIT əmrləri: init, status, add, commit. GitHub. Saytı GitHub.io-da yayımlama"
            ]
        },
        {
            module: "Modul 2: JS + JS Advanced + jQuery + AJAX",
            lessons: [
                "JavaScript-ə giriş. JS tətbiqi. Obyekt. Metod. Hadisə. Çıxış və Giriş",
                "Dəyişənlər. Veri tipləri. Rəqəmlər. Arifmetik operatorlar. Sonra/əvvəl artırma/azaltma",
                "JS DOM: InnerHTML, Value xassələri, getElementById() metodu. Sətir veri tipləri",
                "JS Funksiyalar: Funksiya çağırışı, onclick hadisəsi, Rəqəm və Sətir metodları",
                "Arqumentli funksiyalar. Math obyekti və metodları: floor, ceil, round, random, abs, min, max",
                "Boolean, Boolean cəbri, Məntiqi operatorlar. Şərtlər: if - else if - else, switch - case - default. Üçlü operator",
                "Dövrlər: for, iç-içə for, while",
                "Massivlər. Massiv metodları. Massiv çeşidləmə. For dövrləri ilə massivlərdən istifadə",
                "Çoxölçülü massivlər",
                "DOM metodları: getElementsByClassName(), getElementsByTagName(), querySelectorAll()",
                "Obyektlər: Xassələr, Metodlar, this açar sözü",
                "Obyektlər və Massivlərdən istifadə",
                "Müasir rejim 'use strict'. Dəyişənlər, dəyişən əhatə dairəsi. Köhnə 'var'. Primitiv veri tipləri",
                "Primitivlərin metodları: Rəqəmlər, Sətirlər, Booleanlar. Müqayisələr. Məntiqi operatorlar",
                "Regular ifadələr",
                "Funksiya tərifləri, Funksiya ifadələri, Ox funksiyaları",
                "Obyektlər: Obyekt istinadı və kopyalanması. Obyekt metodları, 'this', Funksiya konstruktoru",
                "Massivlər: Massiv metodları. Destrukturlaşdırma təyinatı. Map və Set. Obyektin digər tiplərə çevrilməsi",
                "DOM ağacı: Axtarış. Node xassələri və atributları. Stil və siniflər",
                "Brauzer hadisələri: Siçan hadisələri. Forma idarəetmələri",
                "HTML Qrafikası: SVG və Canvas. Canvas rəsmkarlığı - Koordinatlar, Qradientlər, Mətn, Şəkillər, Animasiya, Nümunələr",
                "Funksiya inkişafı: Rekursiya, Dəyişən əhatə dairəsi, Bağlayıcı. Dekoratorlar, Ötürmə, Funksiya bağlama",
                "Obyekt xassə bayraqları və təsvirləri. Xassə getter və setter-ləri",
                "Prototiplər və İrs: f.prototype, native prototiplər, prototype metodları",
                "Siniflər: Əsas sintaksis, Sinif irsi, Statik xassələr və metodlar, Private və protected, Mixins",
                "Asinxron JS: Callback funksiyaları, Promise, Promise zəncirləri, Async/await",
                "jQuery",
                "jQuery-ə giriş. Sintaksis. DOM seçiciləri. jQuery Hadisələri",
                "jQuery Effektlər: Gizlət/Göstər/Dəyiş, Sönmə, Sürüşmə, Animasiya",
                "jQuery HTML DOM: Almaq, Təyin etmək, Əlavə etmək, Silmək, css",
                "jQuery Traversing: Əcdadlar, Nəvələr, Qardaşlar, Filtrləmə",
                "jQuery Plaginlər: jQueryUI - Sürükləyib-buraxma, Form Validator",
                "AJAX & Fetch",
                "Şəbəkə sorğuları: XML və JSON. AJAX. Fetch. Form məlumatı. Fetch API. URL obyektləri",
                "jQuery AJAX: Yükləmə, Alma, Göndərmə",
                "Modullar: Giriş, İxrac və İdxal, Dinamik idxallar"
            ]
        },
        {
            module: "Modul 3: React",
            lessons: [
                "Node JS, NPM, Webpack, React nədir? React Alternativləri. React Quraşdırılması",
                "Qovluq Strukturunun başa düşülməsi, Komponent Əsasları və JSX",
                "Funksional Komponent yaratmaq və İstifadəsi. Props-larla işləmək",
                "Metod istinadını komponentlər arasında ötürmək",
                "Siyahıların çıxarılması: Siyahılar və Açarlar, Çevik Siyahılar",
                "Metodlarla Hadisələrin idarə edilməsi. State və Həyat dövrü. State-in manipulyasiyası",
                "'İki tərəfli bağlama' əlavə etmək. Şərtli render etmə",
                "Stilərin dinamik təyin edilməsi. Radium əlavə etmək və istifadəsi. Radium və Media Sorğularının istifadəsi",
                "Styled Components. Dinamik stillər. CSS Modulları ilə işləmək",
                "React App-lərində səhvlərin aradan qaldırılması: Xəta mesajlarının başa düşülməsi, Məntiqi səhvlər, Dev Tools, Sourcemaps, React Developer Tools",
                "Layihə strukturu: App-in komponentlərə bölünməsi. Sinif-əsaslı vs Funksional komponentlər",
                "Hooks-a giriş: State Hook, Effect Hook",
                "React Router",
                "Redux",
                "App-in Web-ə deploy edilməsi: Deploy addımları, Layihənin qurulması, Firebase",
                "HTTP, DNS, Domen, Hosting, FTP. Veb saytın yayımlanması"
            ]
        },
        {
            module: "Modul 4: React və TypeScript ilə Frontend Development",
            lessons: [
                "React və REST API Əsasları",
                "React API və REST API anlayışlarına giriş",
                "REST API - Yaratma və Oxuma Əməliyyatları",
                "REST API & TypeScript Əsasları",
                "REST API - Yeniləmə və Silmə Əməliyyatları",
                "TypeScript Əsasları və İnterfeyslər",
                "Next.js Əsasları",
                "Next.js-ə giriş və Routing",
                "Next.js-də Məlumat əldə etmə və Stilizasiya",
                "Next.js İnkişaf etmiş Anlayışlar",
                "Next.js-də Render etmə, Keşləmə və Optimallaşdırma",
                "Next.js və Git ilə Deploy"
            ]
        },
        {
            module: "Modul 5: Node.js və Express ilə Backend Development",
            lessons: [
                "Node.js Əsasları",
                "Node.js-ə giriş və Modul Strukturu",
                "Node.js Routing, Formlar & Fayl Sistemi",
                "Express.js Əsasları",
                "Express-ə giriş və HTTP Sorğuları",
                "Middleware anlayışları və Practical Layihə",
                "Express Routing & Middleware",
                "Express-də Routing",
                "Full Stack Layihələrdə Middleware tətbiqi"
            ]
        },
        {
            module: "Modul 6: Verilənlər Bazası Əsasları (NoSQL)",
            lessons: [
                "Verilənlər bazalarına giriş və MongoDB",
                "MongoDB CRUD Əməliyyatları və Mongoose İnteqrasiyası",
                "Verilənlər bazası və SQL Mastery"
            ]
        },
        {
            module: "Modul 7: Mongoose ilə MongoDB",
            lessons: [
                "Mongoose CRUD Əməliyyatları",
                "NoSQL Verilənlər bazalarının strukturlanması və idarə edilməsi",
                "MySQL ilə Relational Verilənlər bazaları",
                "MySQL və RDB Arxiviterturasına giriş",
                "Verilənlər bazası konfiqurasiyası və SQL Sorğuları",
                "İnkişaf etmiş SQL Joins, Saxlanılmış prosedurlar və Funksiyalar",
                "Sequelize ORM İnteqrasiyası",
                "Tətbiq Layihələri I",
                "Full Stack App-lərdə Autentifikasiya və Avtorizasiya",
                "Express.js Middleware-in praktikada tətbiqi",
                "Full Stack İnteqrasiya və Deploy",
                "Tətbiq Layihələri II",
                "Express.js API-lərinin inkişafı (Verilənlər bazası olmadan)",
                "Express.js API-lərinin inkişafı (Relational DB ilə)",
                "Practical Backend Bacarıqları",
                "Məlumat validasiya texnikaları",
                "Express.js-də fayl yükləməsinin idarə edilməsi",
                "Test və Debugging",
                "Node və Express App-lərinin Debugging-i",
                "Test yazmaq və Xəta idarəetmə"
            ]
        }
    ],

    "digital-marketing": [
        {
            module: "Modul 1: Digital Marketinqdə Kontent",
            lessons: [
                "Marketinq və kontentə giriş",
                "Brending: Tone of voice (ToV)",
                "Kontent növləri",
                "Kontent kanalları",
                "Kontent strategiyaları və optimallaşdırma",
                "Reklam kampaniyaları",
                "AI ilə kontent yaradılması",
                "Kopyrayting: Adlandırma, şüar və motto",
                "Ads Manager - Sıfırdan Ads Manager platformasının tam izahı"
            ]
        },
        {
            module: "Modul 2: Meta Reklamları",
            lessons: [
                "A/B Test - Reklamda A/B test necə işləyir",
                "Bütün Platformalar - Reklam platformalarına addım-addım bələdçi",
                "Business Suite - Business Suite alətinin A-dan Z-yə öyrənilməsi",
                "Custom, Lookalike, Saxlanmış Auditoriyalar (Retargeting) - Auditoriya seqmentlərinin yaradılması",
                "Meta Pixel - Veb saytın sosial media ilə Pixel vasitəsilə əlaqələndirilməsi",
                "SMM (Rəqib Araşdırması) - Rəqib araşdırması necə aparılır",
                "LinkedIn Reklamları - LinkedIn reklamlarına ümumi baxış",
                "Kampaniya yaratmaq (Bütün Məqsədlər) - Bütün növ reklam kampaniyalarının A-dan Z-yə yaradılması",
                "Veb saytda Sosial Media üçün Hadisələr - Veb sayt hadisələrinin Meta-da izlənməsi",
                "Practical SMM Günü - Real brend reklamlarının yaradılması və satışların yaradılması",
                "Email marketinq",
                "İnfluencer marketinq"
            ]
        },
        {
            module: "Modul 3: Google Ads və Digital Reklam Strategiyaları",
            lessons: [
                "Google Ads-ə giriş və Kontekstual Reklam",
                "Google Ads platformasının əsasları",
                "Reklam formatlarına ümumi baxış (Search, Display və s.)",
                "Kontekstual reklam anlayışı",
                "Google reklam ekosistemi, MCC hesabı",
                "Google Ads-ə giriş və Açar sözlərə araşdırma",
                "Açar söz növləri (geniş, ifadə, dəqiq)",
                "Google Keyword Planner və digər alətlərin istifadəsi",
                "Rəqib araşdırması metodları",
                "Açar söz strategiyasının inkişaf etdirilməsi",
                "Google Search Reklamları Kampaniya Strukturu və Reklam yaradılması",
                "Kampaniya → Reklam Qrupu → Reklam strukturu",
                "Kampaniya məqsədlərinin təyin edilməsi",
                "Reklam başlıqlarının və təsvirlərinin yazılması",
                "Uzantılar və onların effektiv istifadəsi",
                "Google Ads – YouTube və App Reklamları",
                "YouTube reklamlarının növləri və məqsədləri",
                "Video reklam strategiyaları",
                "Mobil app reklamları: App quraşdırmaları və məşğulluq kampaniyaları",
                "Performans ölçülməsi və optimallaşdırma",
                "Google Ads – Display Reklamları və Remarketing",
                "Google Display Network (GDN) anlayışı",
                "Banner dizaynı və vizual elementlər",
                "Remarketing və hədəf auditoriyalar",
                "Yerləşdirmələr və kontekstə uyğun reklamlar",
                "GTM və GA4 – Konversiya izləmə və Analitika",
                "Google Tag Manager-ə giriş",
                "GA4-də hadisə və konversiya izləmə",
                "GA4 interfeysi və əsas metrikalar",
                "Reklam performansının ölçülməsi və analizi"
            ]
        },
        {
            module: "Modul 4: Axtarış Mühərriki Optimallaşdırma (SEO)",
            lessons: [
                "SEO – Semantik nüvə və On/Off-Page SEO",
                "SEO-nun əsas anlayışları və məqsədləri",
                "Açar söz araşdırması və semantik nüvənin qurulması",
                "On-page SEO",
                "Off-page SEO",
                "Texniki SEO",
                "Texniki SEO-nun əsas komponentləri",
                "SEO alətləri",
                "Xüsusu snippet növləri",
                "Əsas SEO strategiyaları",
                "Bazar case study-ləri",
                "SEO növləri - Müxtəlif SEO növləri hansılardır",
                "Google Botları - Google botları addım-addım necə işləyir?",
                "Açar söz növləri",
                "SERP Strukturu - SERP strukturu nədir və hansı əsas elementlərə diqqət yetirməliyik?",
                "Rank Math Plugin (Digər SEO Alətləri) - SEO yerinə yetirmək üçün Rank Math izahı",
                "Google My Business - Biznesinizi Google Maps-ə əlavə etmək (SEO üçün)",
                "SEO üçün Admin Panel Brief - Veb sayt SEO layihəsi haqqında developer-ə necə brief vermək",
                "Açar söz araşdırması - Açar söz araşdırması düzgün necə aparılır",
                "On-page, Off-page, Texniki SEO - Müxtəlif SEO növlərinin A-dan Z-yə faktorları",
                "Core Web Vitals Metrikaları - Core Web Vitals izahı və optimallaşdırılması",
                "SEO Strategiyası - SEO strategiyası necə hazırlanır (şablon təqdim olunacaq)",
                "BlackHat və WhiteHat SEO",
                "URL, Title, Meta Description, Keyword, Heading Strukturu - SEO-nun əsas elementləri",
                "SEO üçün ChatGPT istifadəsi",
                "Practical SEO Günü - Real brend veb saytlarında SEO tətbiqi"
            ]
        }
    ],

    "data-science": [
        {
            module: "Modul 1: Proqramlaşdırma və Veri Əsasları",
            lessons: [
                "Data Analiz üçün SQL (joins, subqueries, window functions, views)",
                "Data Science üçün Python (dəyişənlər, dövrlər, funksiyalar)",
                "Alqoritmlər və Problem həlli (Leetcode Practice)",
                "NumPy, Pandas, və Matplotlib",
                "Veri təmizləmə & Exploratory Data Analysis (EDA)"
            ]
        },
        {
            module: "Modul 2: Maşın Öyrənmə Əsasları",
            lessons: [
                "Scikit-learn: Pipeline-lar, Model Təlimi, və Qiymətləndirmə Metrikaları",
                "Supervised Learning: Xətti modellər, Qərar ağacları, SVM, Ensemble metodlar",
                "Unsupervised Learning: PCA, Klasterləşdirmə",
                "Scikit-learn ilə Time Series Analizi"
            ]
        },
        {
            module: "Modul 3: Deep Learning & Neural Networks",
            lessons: [
                "TensorFlow və Neural Networks-ə giriş",
                "Deep Learning modellərinin təlimi",
                "Transfer Learning və Model scaling",
                "Xəta analizi və Model tuning"
            ]
        },
        {
            module: "Modul 4: Kompüter Görməsi",
            lessons: [
                "CNNs və Şəkil təsnifatı (MNIST, Fashion MNIST)",
                "YOLO ilə Obyekt aşkarlama",
                "İnkişaf etmiş CNN arxitekturaları (UNET, GoogLeNet, Vision Transformers)",
                "Tətbiqlər: Lane Detection, Siamese Networks ilə Face Verification"
            ]
        },
        {
            module: "Modul 5: Natural Language Processing (NLP)",
            lessons: [
                "TensorFlow ilə NLP",
                "Sentiment Analysis, SkimLit NLP, və Shakespeare NLP Layihəsi",
                "TensorFlow ilə Time Series Forecasting"
            ]
        },
        {
            module: "Modul 6: İnkişaf etmiş Mövzular & Karyera Hazırlığı",
            lessons: [
                "AutoEncoders & GANs",
                "Layihə: GAN Fashion MNIST",
                "Model Deploy və Production-da scaling",
                "Tableau ilə Data Vizualizasiya",
                "Müsahibə hazırlığı & Case study-lər"
            ]
        }
    ],

    "it-project-management": [
        {
            module: "Modul 1: IT Layihə İdarəetməsinə Ümumi Baxış",
            lessons: [
                "Agile və waterfall yanaşmalarının tərifi",
                "Agile və waterfall yanaşmaları arasındakı fərq",
                "Uyğunlaşma qabiliyyəti",
                "Əməkdaşlıq"
            ]
        },
        {
            module: "Modul 2: Layihələr və Layihə Meneceri",
            lessons: [
                "Layihə menecerinin rolu",
                "Daxili və xarici mühit",
                "Layihə strukturları",
                "Layihə və məhsul həyat dövrləri",
                "Agile proqram təminatı inkişafı",
                "PM prosesləri",
                "Layihə İdarəetmə Ofisi",
                "Portfolio idarəetməsi"
            ]
        },
        {
            module: "Modul 3: IT Layihə Həyat Dövrü",
            lessons: [
                "Başlanğıc",
                "Planlaşdırma",
                "İcra",
                "Monitorinq və Nəzarət",
                "Bağlanış"
            ]
        },
        {
            module: "Modul 4: Layihə İnteqrasiyası İdarəetməsi",
            lessons: [
                "Nizamnamə",
                "PM Planı",
                "Layihə Biliklərinin idarə edilməsi",
                "Üçlü məhdudiyyətlər"
            ]
        },
        {
            module: "Modul 5: Agile Practice Guide",
            lessons: [
                "Ümumi Agile praktikaları",
                "Scrum",
                "Kanban metodu",
                "Məhsul siyahısı, iteration burn-down və release burn-up diaqramları kimi tipik agile metrikaları"
            ]
        },
        {
            module: "Modul 6: Layihə Əhatə Dairəsi İdarəetməsi",
            lessons: [
                "Spesifikasiya",
                "Məhdudiyyətlər, limitlər, fərziyyələr",
                "Texniki tələblər",
                "Agile layihələrinin əhatə dairəsi, WBS",
                "Məhsul backlog siyahısı",
                "Qısa agile iterasiyaları üçün müxtəlif çatdırılmalar"
            ]
        },
        {
            module: "Modul 7: Layihə Cədvəli İdarəetməsi, Tərəfdaşların cəlb edilməsi və Əlaqələndirmə",
            lessons: [
                "Cədvəlin planlanması və inkişafı",
                "Cədvəlin nəzarəti",
                "Tərəfdaşların müəyyən edilməsi",
                "Tərəfdaş gözləntilərinin idarə edilməsi",
                "Əlaqələndirmə alətləri"
            ]
        },
        {
            module: "Modul 8: Layihə Xərc İdarəetməsi və Earned Value Management",
            lessons: [
                "Xərc idarəetməsinin planlanması",
                "Xərc qiymətləndirilməsi",
                "Büdcənin müəyyən edilməsi və nəzarəti",
                "Planlaşdırılmış dəyər, qazanılmış dəyər və faktiki xərc",
                "Xərc və Cədvəl Performans Göstəriciləri",
                "Xərc və cədvəl analizləri"
            ]
        },
        {
            module: "Modul 9: Layihə Resurs İdarəetməsi",
            lessons: [
                "Resurs idarəetməsinin planlanması",
                "Fəaliyyət resurslarının qiymətləndirilməsi",
                "Resursların əldə edilməsi",
                "Komandanın inkişafı",
                "Komandanın idarə edilməsi",
                "Resursların nəzarəti"
            ]
        },
        {
            module: "Modul 10: Layihə Risk İdarəetməsi",
            lessons: [
                "Müsbət və mənfi risklər",
                "Risk strategiyaları",
                "Keyfiyyətli risk analizləri",
                "Ehtiyatlar və rezervlər"
            ]
        },
        {
            module: "Modul 11: IT Layihə Menecerlərinin Çətinlikləri",
            lessons: [
                "Qeyri-müəyyən biznes tələbləri",
                "Dəyişən son-istifadəçi ehtiyacları və üstünlükləri",
                "Sürətlə dəyişən texnologiya",
                "Uzaqdan iş"
            ]
        },
        {
            module: "Modul 12: Effektiv IT Layihə İdarəetməsinin Əhəmiyyəti",
            lessons: [
                "Yaxşılaşdırılmış müştəri münasibətləri",
                "Qısa inkişaf müddəti",
                "Aşağı xərclər / Yüksək keyfiyyət",
                "Yaxşılaşdırılmış məhsuldarlıq",
                "Daha yaxşı daxili koordinasiya"
            ]
        },
        {
            module: "Modul 13: Uğurlu IT Layihələrinin Açarları",
            lessons: [
                "Aydın son məqsəd",
                "Son-istifadəçi təlimi / əldən tutma",
                "Müəyyən edilmiş rollar və məsuliyyətlər",
                "Şəffaf iş axını",
                "Əhatə dairəsi dəyişikliyinin idarə edilməsi",
                "Risk idarəetməsi",
                "Adekvat sənədləşdirmə",
                "Layihə idarəetməsi"
            ]
        }
    ],
    "ai-engineering": [
        {
            module: "Modul 1: Data Science və Feature Engineering üçün SQL",
            lessons: [
                "Data analizi, təmizlənməsi və feature engineering üçün ekspert səviyyəli sorğu bacarıqlarının qurulması",
                "SQL Əsasları: SELECT, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT, ləqəblər",
                "JOIN-lar: INNER, LEFT, RIGHT, FULL, SELF JOIN-lar",
                "Subqueries, nested queries, scalar vs correlated subqueries",
                "Window funksiyaları: ROW_NUMBER, RANK, NTILE, LAG, LEAD, running totals",
                "CTEs (Common Table Expressions) və recursive queries",
                "Aqreqasiyalar: COUNT, SUM, AVG, MIN, MAX, GROUPING SETS, ROLLUP, CUBE",
                "Filtrləmə + təmizləmə: NULL-ların idarə edilməsi, dublikatların silinməsi, SQL-də normalizasiya",
                "A/B test analizi: lift metrikaları, raw log-lardan statistik əhəmiyyət",
                "SQL-də feature-ların qurulması: zaman-əsaslı feature-lar, event funnels, retention cohorts",
                "Sorğu optimallaşdırma əsasları (EXPLAIN planları)",
                "Mini Layihələr: Marketinq funnel hadisələrinin analizi",
                "User churn prediction feature engineering",
                "Alətlər: PostgreSQL, SQLite, BigQuery, Mode/Redash"
            ]
        },
        {
            module: "Modul 2: AI üçün Python Proqramlaşdırma Əsasları",
            lessons: [
                "Modular, saxlanılabilir və production-ready Python kodunun yazılması",
                "Python sintaksis & semantikası: dəyişənlər, dövrlər, funksiyalar, əhatə dairələri",
                "Veri tipləri: siyahılar, tuple-lar, çoxluqlar, lüğətlər, mutability, iteration",
                "Funksional Python: map, filter, lambda, list comprehensions",
                "Fayl I/O (CSV, JSON, YAML, pickle), xəta idarəetməsi, context manager-lar",
                "OOP: sinif dizaynı, irs, xüsusi metodlar (init, str)",
                "Virtual mühitlər (venv, pipenv, poetry), paket idarəetməsi",
                "Kod strukturlanması: modullar, paketlər, docstrings, type hints",
                "Logging, debugging, assertions",
                "pytest ilə unit test, test əhatəsi",
                "argparse ilə CLI alətləri",
                "API-lərlə işləməyə giriş (məs., requests)",
                "Mini Layihə: Public API-dan məlumat çəkən və CSV/DB-ə saxlayan CLI-əsaslı ETL pipeline"
            ]
        },
        {
            module: "Modul 3: ML Mühəndisləri üçün Data Strukturları & Alqoritmlər",
            lessons: [
                "Sistem dizaynı və model performansı üçün vacib problem həlli və tətbiq bacarıqlarının inkişafı",
                "Çeşidləmə: quicksort, mergesort, bubble, heap sort",
                "Axtarış: binary search, hash cədvəlləri",
                "Data Strukturları: yığımlar, növbələr, yığınlar, linked listlər",
                "İnkişaf etmiş: trie-lər, qrafiklar, ağaclar (binary, BST), hash map-lər, çoxluqlar",
                "Qrafik alqoritmləri: DFS, BFS, Dijkstra",
                "Alqoritm paradigmaları: tamahkarlıq, böl və idarə et, DP",
                "Mürəkkəbliyin başa düşülməsi: zaman/kosmos mübadiləsi (Big O notation)",
                "Praktika: Gündəlik LeetCode çalışmaları",
                "Müsahibə tipli problem həlli (Python-əsaslı)",
                "Xüsusi Diqqət: LRU cache",
                "Real-time tövsiyə sistemi strukturu",
                "Vektor axtarışı üçün təxmini ən yaxın qonşu"
            ]
        }
    ],

};



function CourseDetail() {
    const { courseId } = useParams();
    const course = syllabuses[courseId];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleMouseMove = (e) => {
        const { currentTarget, clientX, clientY } = e;
        const { left, top } = currentTarget.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;
        currentTarget.style.setProperty("--mouse-x", `${x}px`);
        currentTarget.style.setProperty("--mouse-y", `${y}px`);
    };

    if (!course) return (
        <div className="min-h-screen bg-[#06090f] flex items-center justify-center text-[#378079] font-mono tracking-widest animate-pulse">
            // ERROR_404: DATA_NOT_FOUND
        </div>
    );

    return (
        <div className="min-h-screen bg-[#06090f] text-[#f0ebe2] relative overflow-hidden font-sans">
            
            <div className="absolute inset-0 z-0 pointer-events-none" 
                 style={{ 
                     backgroundImage: `linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)`, 
                     backgroundSize: '60px 60px' 
                 }} />

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 py-12">
                
                <header className="mb-16 animate-[fadeUp_0.7s_ease_both]">
                    <Link to="/" className="inline-flex items-center gap-2 mb-8 group text-[#378079]">
                        <HiArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[9px] tracking-[0.4em] uppercase font-black">Sistemə Qayıt</span>
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4 italic text-transparent"
                        style={{ WebkitTextStroke: '1px #f0ebe2' }}>
                        {courseId}
                    </h1>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.3s]">
                    {course.map((mod, index) => (
                        <div key={index} 
                             onMouseMove={handleMouseMove}
                             className="group/card relative bg-[#06090f] border border-white/10 flex flex-col h-[420px] transition-all duration-300 overflow-hidden"
                             style={{ 
                                 clipPath: 'polygon(0 0, calc(100% - 25px) 0, 100% 25px, 100% 100%, 25px 100%, 0 calc(100% - 25px))' 
                             }}
                        >
                            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover/card:opacity-100 transition duration-300 z-0"
                                style={{
                                    background: `radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(55,128,121,0.15), transparent 40%)`
                                }}
                            />

                            <div className="p-8 pb-4 shrink-0 relative z-10">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-4 h-px bg-[#378079]" />
                                    <span className="text-[9px] font-mono text-[#378079] tracking-[0.3em] font-bold uppercase italic">
                                        Modul {index + 1}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-[#f0ebe2] uppercase tracking-tight leading-tight group-hover/card:text-[#378079] transition-colors duration-300">
                                    {mod.title}
                                </h3>
                            </div>

                            <div className="flex-1 overflow-y-auto px-8 pb-8 custom-card-scrollbar relative z-10">
                                <ul className="space-y-4">
                                    {mod.lessons.map((lesson, idx) => (
                                        <li key={idx} className="flex items-start gap-4 group/item">
                                            <div className="mt-1.5 w-1 h-1 bg-[#378079]/30 group-hover/item:bg-[#378079] transition-all shrink-0" />
                                            <span className="text-[10px] text-white/30 group-hover/item:text-white transition-colors uppercase tracking-[0.1em] leading-relaxed">
                                                {lesson}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="absolute top-4 right-6 font-['Bebas_Neue'] text-3xl text-white/[0.03] select-none group-hover/card:text-[#378079]/10 transition-colors">
                                {(index + 1).toString().padStart(2, '0')}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .custom-card-scrollbar::-webkit-scrollbar {
                    width: 2px;
                }
                .custom-card-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-card-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(55, 128, 121, 0.1);
                }
                .custom-card-scrollbar:hover::-webkit-scrollbar-thumb {
                    background: rgba(55, 128, 121, 0.4);
                }
            `}</style>
        </div>
    );
}

export default CourseDetail;