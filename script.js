'use strict';

/* ============================================================
   0. CONFIG — все данные и ссылки сайта в одном месте.
      Плейсхолдеры заменяются здесь — и обновятся по всему сайту.
   ============================================================ */
const CONFIG = {
    email: '[your@email.com]',
    resumePdf: '',                 // путь к resume.pdf или '' (тогда кнопка открывает печать)
    siteUrl: '',                   // домен для SEO, напр. 'https://ddunaev.ru' (JSON-LD + hreflang)

    /* Отправка формы: если telegramBotToken + telegramChatId заполнены — сообщения
       уходят в ваш Telegram через Bot API. Иначе — открывается почтовый клиент. */
    telegramBotToken: '',          // токен бота от @BotFather
    telegramChatId: '',            // ваш chat_id (узнать у @userinfobot)

    socials: {
        github:    'https://github.com/spayzik',
        hh:        'https://hh.ru/',
        habr:      'https://career.habr.com/',
        getmatch:  'https://getmatch.ru/',
        linkedin:  'https://linkedin.com/',
        telegram:  'https://t.me/sap4real',
    },

    /* Проекты: карточки + модальные окна с галереей рендерятся отсюда.
       Скриншоты клади в assets/projects/ с именами из shots. */
    projects: [
        {
            id: 'finguard',
            name: 'FinGuard',
            tag: 'FinTech / AI',
            roleKey: 'p1_role',
            descKey: 'p1_desc',
            hlKeys: ['p1_h1', 'p1_h2', 'p1_h3', 'p1_h4', 'p1_h5', 'p1_h6'],
            metrics: 'CAC · LTV · ROI',
            repo: 'https://github.com/spayzik/finguard-platform',
            stack: ['Python', 'FastAPI', 'Kafka', 'gRPC', 'GraphQL', 'Qdrant', 'Qwen 2.5', 'Kubernetes', 'Keycloak', 'Prometheus', 'Grafana'],
            shots: [
                'assets/projects/finguard-1.svg',
                'assets/projects/finguard-2.svg',
            ],
        },
        {
            id: 'ezlearn',
            name: 'EzLearn',
            tag: 'EdTech / AI',
            roleKey: 'p2_role',
            descKey: 'p2_desc',
            hlKeys: ['p2_h1', 'p2_h2', 'p2_h3', 'p2_h4'],
            metrics: '115+ pytest · 41+ vitest',
            repo: 'https://github.com/spayzik/ezlearn',
            stack: ['Python', 'FastAPI', 'React', 'TypeScript', 'SQLAlchemy', 'LM Studio', 'Qwen 2.5', 'ChromaDB', 'Docker', 'GitHub Actions'],
            shots: [
                'assets/projects/ezlearn-1.svg',
                'assets/projects/ezlearn-2.svg',
            ],
        },
    ],

    /* Компетенции: иконки + ключи текстов из I18N */
    skills: [
        {
            titleKey: 'sk1_title', items: ['sk1_l1', 'sk1_l2', 'sk1_l3', 'sk1_l4'],
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="8.5" y="14" width="7" height="7" rx="1.5"/><path d="M6.5 10v2h11v-2M12 12v2"/></svg>',
        },
        {
            titleKey: 'sk2_title', items: ['sk2_l1', 'sk2_l2', 'sk2_l3', 'sk2_l4'],
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"/><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/></svg>',
        },
        {
            titleKey: 'sk3_title', items: ['sk3_l1', 'sk3_l2', 'sk3_l3', 'sk3_l4'],
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.01a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.01a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
        },
        {
            titleKey: 'sk4_title', items: ['sk4_l1', 'sk4_l2', 'sk4_l3', 'sk4_l4'],
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-6"/></svg>',
        },
        {
            titleKey: 'sk5_title', items: ['sk5_l1', 'sk5_l2', 'sk5_l3', 'sk5_l4'],
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12l2 2 4-4"/></svg>',
        },
        {
            titleKey: 'sk6_title', items: ['sk6_l1', 'sk6_l2', 'sk6_l3', 'sk6_l4'],
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
        },
    ],

    /* Опыт работы (карточки HH/GetMatch-style; лого — assets/companies/*.webp|png|svg) */
        experience: [
        {
            dateKey: 'exp1_date', roleKey: 'exp1_role', companyKey: 'exp1_company',
            typeKey: 'exp1_type', locKey: 'exp1_loc',
            bullets: ['exp1_a1', 'exp1_a2', 'exp1_a3', 'exp1_a4'],
            logo: 'assets/companies/aquarius.webp',
            brand: '#00A3E0', initials: 'AQ',
        },
        {
            dateKey: 'exp2_date', roleKey: 'exp2_role', companyKey: 'exp2_company',
            typeKey: 'exp2_type', locKey: 'exp2_loc',
            bullets: ['exp2_a1', 'exp2_a2', 'exp2_a3', 'exp2_a4'],
            logo: 'assets/companies/stoloto.webp',
            brand: '#E30613', initials: 'S8',
        },
        {
            dateKey: 'exp3_date', roleKey: 'exp3_role', companyKey: 'exp3_company',
            typeKey: 'exp3_type', locKey: 'exp3_loc',
            bullets: ['exp3_a1', 'exp3_a2', 'exp3_a3'],
            logo: 'assets/companies/teleset.webp',
            brand: '#8B5CF6', initials: 'Т+',
        },
    ],

    education: [
        { year: '2028', typeKey: 'edu2_type', specKey: 'edu2_spec', placeKey: 'edu2_place' },
        { year: '2024', typeKey: 'edu1_type', specKey: 'edu1_spec', placeKey: 'edu1_place' },
    ],

    knowsAbout: [
        'Business Analysis', 'Systems Analysis', 'Requirements Engineering', 'Event Storming',
        'BPMN', 'UML', 'C4 Model', 'Solution Architecture', 'AI Engineering', 'RAG',
        'FinTech', 'EdTech', 'Microservices', 'Kubernetes',
    ],
};

/* ============================================================
   0.5. ТЁМНАЯ / СВЕТЛАЯ ТЕМА
   ============================================================ */
const THEME_KEY = 'dd_theme';
const themeMeta = document.querySelector('meta[name="theme-color"]');
const systemLight = window.matchMedia('(prefers-color-scheme: light)');

function getTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
    return systemLight.matches ? 'light' : 'dark';
}
function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    if (themeMeta) themeMeta.setAttribute('content', theme === 'light' ? '#F4F6FA' : '#08080C');
    document.querySelectorAll('.theme-toggle').forEach((b) => b.setAttribute('aria-pressed', String(theme === 'light')));
}
function toggleTheme() {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
    /* Обновляем палитру фона под новую тему (функция уже определена к моменту клика) */
    
}
applyTheme(getTheme());
document.querySelectorAll('.theme-toggle').forEach((b) => b.addEventListener('click', toggleTheme));
/* Пока пользователь не выбрал тему вручную — следуем за системной */
systemLight.addEventListener('change', (e) => {
    if (!localStorage.getItem(THEME_KEY)) applyTheme(e.matches ? 'light' : 'dark');
});

const GITHUB_SVG = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.14c0 .3.21.66.8.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>';

/* ============================================================
   1. СЛОВАРЬ ПЕРЕВОДОВ (RU / EN)
   ============================================================ */
const I18N = {
    ru: {
        nav_about: 'Обо мне', nav_approach: 'Подход', nav_skills: 'Компетенции',
        nav_career: 'Опыт', nav_projects: 'Проекты', nav_contact: 'Контакты',

        hero_label: 'Портфолио · Анализ & Архитектура',
        hero_name: 'Даниил Дунаев',
        hero_tagline: 'Fullstack-аналитик. Активно погружаюсь в смежные области (архитектуру, разработку, DevOps), чтобы говорить с инженерами на одном языке и превращать задачи бизнеса в предельно понятные требования.',
        hero_cta_projects: 'Смотреть проекты', hero_cta_contact: 'Связаться',
        hero_cta_resume: 'Скачать резюме',
        scroll: 'скролл',
        metaDesc: 'Портфолио Даниила Дунаева: fullstack-аналитик (системный + бизнес-анализ), проектирование архитектуры, AI-инженерия. FinGuard, EzLearn, микросервисы, unit-экономика.',
        ogTitle: 'Даниил Дунаев — Fullstack Analyst → Solution Architect',
        docTitle: 'Даниил Дунаев — Fullstack Analyst (Systems + Business) → Solution Architect',

        about_title: 'Обо мне',
        about_sub: 'Помимо сбора требований и проектирования архитектуры, я создаю собственные сервисы и погружаюсь в инфраструктуру (Docker, K8s).',
        about_text: '<p>Понимание кода, баз данных и устройства стендов помогает мне видеть архитектурные ограничения еще на этапе обсуждения задачи.</p><p>В результате я готовлю решения (UML, BPMN, ArchiMate, C4) и пишу ФТТ, которые разработчики и DevOps забирают в работу без лишних вопросов.</p>',
        stat_1: 'года в системном анализе',
        stat_2: 'систем в контуре интеграций (S8)',
        stat_3: 'рост выручки от нового канала (WB)',
        stat_4: 'AI-продукта, спроектированных с нуля',

        approach_title: 'Профессиональный подход',
        approach_sub: 'Полный цикл — от бизнес-проблемы до измеримого результата.',
        approach_kicker: 'Full-cycle analysis',
        approach_text: 'Моя сильная сторона — <strong>полный цикл</strong>: от бизнес-проблемы до работающего решения. Объединяю бизнес-анализ, системное проектирование и контроль внедрения — поэтому готовлю не просто ТЗ, а довожу решение до работающего продукта с измеримым эффектом.',
        c1_t: 'Business Problem', c1_s: 'проблема бизнеса как стартовая точка',
        c2_t: 'Requirements', c2_s: 'сбор и формализация требований',
        c3_t: 'Architecture & Design', c3_s: 'архитектура решения, API-контракты, потоки данных, интеграции',
        c4_t: 'Alignment', c4_s: 'согласование с командой разработки, уточнение и корректировки',
        c5_t: 'Production support', c5_s: 'сопровождение на всех этапах выхода в прод: комментарии, адаптации',
        c6_t: 'Monitoring', c6_s: 'метрики, наблюдаемость и эксплуатация',
        c7_t: 'Business Result', c7_s: 'измеримый бизнес-эффект',

        projects_title: 'Ключевые проекты',
        projects_sub: 'Два продукта, которые я спроектировал и собрал с нуля — от требований до релиза.',
        artifacts_title: 'Что я готовлю как аналитик — документы и модели',
        art_ftr_title: 'ФТТ',
        art_ftr_sub: 'Состояния, сценарии, БТ/ФТ/НФТ/AC, потоки данных',
        art_c4_title: 'C4 Model',
        art_c4_sub: 'Контекст, контейнеры, компоненты и код',
        art_archimate_title: 'ArchiMate',
        art_archimate_sub: 'Архитектура: бизнес, данные, приложения, инфраструктура',
        art_pitch_title: 'Презентация',
        art_pitch_sub: 'Материалы для демонстрации и защиты решения',
        p1_role: 'Роль: Solution Architect / Systems Analyst',
        p1_desc: 'Платформа мониторинга транзакций с <b>ML-скорингом</b> и AI-ассистентом для банков. Самостоятельно описал проект и составил <b>документ ФТТ</b> со всеми состояниями, to-be диаграммами, user stories, use cases, БТ/ФТ/НФТ/AC, потоками данных с атрибутными составами. Спроектировал <b>архитектуру C4 и ArchiMate</b>, микросервисную интеграцию (Kafka, gRPC, GraphQL), построил RAG-пайплайн с локальным LLM, настроил CI/CD в Kubernetes. Подготовил <b>презентацию проекта</b> и рассчитал юнит-экономику: CAC, LTV, ROI.',
        p2_role: 'Роль: Full-stack Architect & AI Engineer',
        p2_desc: 'AI-нативная LMS с <b>мультиагентной оркестрацией</b>, RAG, ролевыми тренажёрами и маркетплейсом. Разработал с нуля: бэкенд (FastAPI), фронтенд (React), AI-оркестратор на Qwen 2.5, <b>гибридный поиск</b> (ChromaDB + FTS), геймификацию и сертификации. Покрытие тестами — <b>115+ pytest, 41+ vitest</b>, аудит безопасности: 35/37 уязвимостей закрыто.',
        view_more: 'Подробнее',
        modal_hl_title: 'Ключевые результаты',
        close_btn: 'Закрыть',
        p1_h1: 'Составил ФТТ: состояния, to-be диаграммы, user stories, use cases, БТ/ФТ/НФТ/AC, потоки данных',
        p1_h2: 'Архитектура C4 и ArchiMate — микросервисы: Kafka-пайплайны, gRPC-контракты, GraphQL-шлюз',
        p1_h3: 'Идемпотентная обработка транзакций — без дублей и потери событий',
        p1_h4: 'ML-модель антифрода + RAG-ассистент на локальном LLM (Qwen 2.5)',
        p1_h5: 'Kubernetes-деплой, наблюдаемость (Prometheus/Grafana), юнит-экономика CAC / LTV / ROI',
        p1_h6: 'Подготовлена презентация проекта',
        p2_h1: 'Мультиагентный AI-оркестратор на Qwen 2.5 с ролевыми тренажёрами',
        p2_h2: 'Гибридный поиск: ChromaDB + FTS — ответы, опирающиеся на материалы курса',
        p2_h3: '115+ pytest и 41+ vitest; аудит безопасности: 35/37 уязвимостей закрыто',
        p2_h4: 'Геймификация, сертификации и маркетплейс курсов',

        skills_title: 'Компетенции',
        skills_sub: 'Технологии и практики, с которыми работаю каждый день — от требований до продакшена.',
        sk1_title: 'Архитектура',
        sk1_l1: 'Микросервисы, DDD, CQRS', sk1_l2: 'Saga, Event Storming',
        sk1_l3: 'C4 Model', sk1_l4: 'ArchiMate',
        sk2_title: 'AI & Data',
        sk2_l1: 'RAG, Qdrant, ChromaDB', sk2_l2: 'Локальные LLM (Qwen 2.5)',
        sk2_l3: 'ML-скоринг', sk2_l4: 'Kafka, CDC',
        sk3_title: 'DevOps',
        sk3_l1: 'Docker, Kubernetes, Helm', sk3_l2: 'GitHub Actions',
        sk3_l3: 'Prometheus, Grafana', sk3_l4: 'OpenSearch',
        sk4_title: 'Продукт',
        sk4_l1: 'Unit-экономика: CAC, LTV, ROI', sk4_l2: 'A/B-тесты',
        sk4_l3: 'WSJF-приоритизация', sk4_l4: 'FinOps',
        sk5_title: 'Анализ систем',
        sk5_l1: 'Требования: функциональные и нефункциональные', sk5_l2: 'Event Storming, BPMN, UML',
        sk5_l3: 'Use Cases, User Stories, критерии приёмки', sk5_l4: 'Gap-анализ, AS-IS / TO-BE',
        sk6_title: 'Инструменты',
        sk6_l1: 'SQL, REST / OpenAPI, Postman', sk6_l2: 'Jira, Confluence, Miro, draw.io',
        sk6_l3: 'Figma, Excel', sk6_l4: 'Git, Python для аналитики',

        career_title: 'Опыт работы',
        career_sub: 'Полный цикл — от сбора требований и архитектуры до внедрения и метрик.',
        exp1_date: 'Февраль 2026 — н.в.', exp1_role: 'Fullstack-аналитик', exp1_company: 'Производственная Компания Аквариус',
        exp1_type: 'Полная занятость', exp1_loc: 'Удалённо',
        exp1_a1: 'Совместно с РП выстроил процессы аналитики в новом подразделении: настроил базу знаний в Confluence, добавил глоссарий, структуру и шаблоны ФТТ',
        exp1_a2: 'Организовал онбординг и выступал наставником для двух системных аналитиков: курировал задачи, проводил ревью документации',
        exp1_a3: 'Собираю бизнес-требования и проектирую целевые архитектуры для внутренних B2B-систем (включая контур 1С)',
        exp1_a4: 'Оцениваю технические ограничения и риски на старте, обеспечивая гладкую передачу требований в команду разработки',
        exp2_date: 'Февраль 2025 — Декабрь 2025', exp2_role: 'Системный аналитик', exp2_company: 'S8 Capital (Столото)',
        exp2_type: 'Полная занятость', exp2_loc: 'Москва · гибрид',
        exp2_a1: 'Спроектировал интеграции с внешними системами (Kafka, RabbitMQ, REST) в высоконагруженной среде (более 500 систем)',
        exp2_a2: 'Запустил продажу билетов на WB (C&C), что открыло новый канал и увеличило выручку направления на 10%',
        exp2_a3: 'Разработал портал СБ с автоматизированными проверками, ускорив ручные процессы на 50%',
        exp2_a4: 'Подготовил детальные ФТТ/ТЗ и описал потоки данных (PostgreSQL, ClickHouse), кратно снизив вопросы от разработки',
        exp3_date: 'Ноябрь 2022 — Декабрь 2024', exp3_role: 'Системный аналитик', exp3_company: 'Телесеть+',
        exp3_type: 'Полная занятость', exp3_loc: 'Дубна',
        exp3_a1: 'Разработал чёткие API-контракты (JSON/XML) и документацию (SRS, ERD), снизив объём вопросов от разработки',
        exp3_a2: 'Смоделировал бизнес-процессы (BPMN) и спроектировал структуры БД, ускорив согласование требований',
        exp3_a3: 'Спроектировал интеграцию с мессенджерами и таск-трекером, автоматизировав обработку заявок техподдержки',

        edu1_type: 'СПО',
        edu1_spec: 'Сетевое и системное администрирование',
        edu1_place: 'Колледж государственного университета «Дубна»',
        edu2_type: 'Бакалавр',
        edu2_spec: 'Менеджмент и управление бизнесом',
        edu2_place: 'Московский международный университет, Москва',

        contact_title: 'Открыт к новым проектам',
        contact_sub: '',
        wish_label: 'Ищу роль',
        wish_text: '<b>Senior Systems Analyst / Solution Architect</b> · гибрид / удаленно · г. Москва',
        copy_done: 'Email скопирован', copy_fail: 'Не удалось скопировать',
        mail_open: 'Открываю почтовый клиент…',
        resume_hint: 'PDF добавлю позже — пока доступна печать (Ctrl+P)',
        f_name: 'Имя', f_name_ph: 'Как к вам обращаться',
        f_email: 'Email', f_email_ph: 'you@company.com',
        f_msg: 'Сообщение', f_msg_ph: 'Ваше предложение...',
        f_send: 'Отправить', f_sending: 'Отправка…',
        f_success: 'Сообщение отправлено — отвечу в течение дня.',
        f_error: 'Не удалось отправить. Попробуйте ещё раз или напишите на почту.',
        f_again: 'Написать ещё',

        footer_name: 'Даниил Дунаев', footer_built: 'сделано на чистом HTML/CSS/JS',
    },
    en: {
        nav_about: 'About', nav_approach: 'Approach', nav_skills: 'Skills',
        nav_career: 'Career', nav_projects: 'Projects', nav_contact: 'Contact',

        hero_label: 'Portfolio · Analysis & Architecture',
        hero_name: 'Daniil Dunaev',
        hero_tagline: "Fullstack Analyst. I actively dive into adjacent fields (architecture, engineering, DevOps) to speak the same language with engineers and turn business goals into clear requirements.",
        hero_cta_projects: 'View projects', hero_cta_contact: 'Get in touch',
        hero_cta_resume: 'Download CV',
        scroll: 'scroll',
        metaDesc: 'Portfolio of Daniil Dunaev: fullstack analyst (systems + business analysis), architecture design, AI engineering. FinGuard, EzLearn, microservices, unit economics.',
        ogTitle: 'Daniil Dunaev — Fullstack Analyst → Solution Architect',
        docTitle: 'Daniil Dunaev — Fullstack Analyst (Systems + Business) → Solution Architect',

        about_title: 'About me',
        about_sub: 'Beyond gathering requirements and designing architecture, I build my own services and dive into infrastructure (Docker, K8s).',
        about_text: '<p>Understanding codebases, databases, and environments helps me spot architectural constraints right at the discussion phase.</p><p>As a result, I design solutions (UML, BPMN, ArchiMate, C4) and write specs that developers and DevOps engineers can take straight into production without friction.</p>',
        stat_1: 'years in systems analysis',
        stat_2: 'systems in the integration loop (S8)',
        stat_3: 'revenue growth via new WB channel',
        stat_4: 'AI products designed from scratch',

        approach_title: 'Professional approach',
        approach_sub: 'The full cycle — from a business problem to a measurable result.',
        approach_kicker: 'Full-cycle analysis',
        approach_text: 'My strength is the <strong>full cycle</strong>: from a business problem to a working solution. I combine business analysis, systems design and delivery oversight — so I do not just write a spec, I deliver a working product with measurable impact.',
        c1_t: 'Business Problem', c1_s: 'the business problem as the starting point',
        c2_t: 'Requirements', c2_s: 'gathering and formalizing requirements',
        c3_t: 'Architecture & Design', c3_s: 'solution architecture, API contracts, data flows, integrations',
        c4_t: 'Alignment', c4_s: 'alignment with the engineering team, clarifications and adjustments',
        c5_t: 'Production support', c5_s: 'accompanying the project through all go-live stages: comments, adaptations',
        c6_t: 'Monitoring', c6_s: 'metrics, observability and operations',
        c7_t: 'Business Result', c7_s: 'measurable business impact',

        
        projects_title: 'Key projects',
        projects_sub: 'Two products I designed and built from scratch — from requirements to release.',
        artifacts_title: 'What I produce as an analyst — documents and models',
        art_ftr_title: 'FTR',
        art_ftr_sub: 'States, scenarios, BR/FR/NFR/AC, data flows',
        art_c4_title: 'C4 Model',
        art_c4_sub: 'Context, containers, components and code',
        art_archimate_title: 'ArchiMate',
        art_archimate_sub: 'Architecture: business, data, application, infrastructure',
        art_pitch_title: 'Presentation',
        art_pitch_sub: 'Materials for demo and solution sign-off',
        p1_role: 'Role: Solution Architect / Systems Analyst',
        p1_desc: 'A transaction monitoring platform with <b>ML scoring</b> and an AI assistant for banks. Independently authored the project and produced a <b>FTR document</b> covering all states, to-be diagrams, user stories, use cases, BRs/FRs/NFRs/ACs, and data flows with attribute sets. Designed <b>C4 and ArchiMate architecture</b>, microservice integrations (Kafka, gRPC, GraphQL), built a RAG pipeline with a local LLM, set up CI/CD in Kubernetes. Prepared a <b>project presentation</b> and calculated unit economics: CAC, LTV, ROI.',
        p2_role: 'Role: Full-stack Architect & AI Engineer',
        p2_desc: 'An AI-native LMS with <b>multi-agent orchestration</b>, RAG, role-based simulators and a marketplace. Built from scratch: backend (FastAPI), frontend (React), AI orchestrator on Qwen 2.5, <b>hybrid search</b> (ChromaDB + FTS), gamification and certification. Test coverage — <b>115+ pytest, 41+ vitest</b>; security audit: 35/37 vulnerabilities fixed.',
        view_more: 'Details',
        modal_hl_title: 'Key results',
        close_btn: 'Close',
        p1_h1: 'Authored FTR doc: states, to-be diagrams, user stories, use cases, BR/FR/NFR/AC, data flows',
        p1_h2: 'C4 & ArchiMate architecture — microservices: Kafka pipelines, gRPC contracts, GraphQL gateway',
        p1_h3: 'Idempotent transaction handling — no duplicates, no lost events',
        p1_h4: 'Fraud-detection ML model + RAG assistant on a local LLM (Qwen 2.5)',
        p1_h5: 'Kubernetes deployment, observability (Prometheus/Grafana), CAC / LTV / ROI unit economics',
        p1_h6: 'Project presentation prepared',
        p2_h1: 'Multi-agent AI orchestrator on Qwen 2.5 with role-based simulators',
        p2_h2: 'Hybrid search: ChromaDB + FTS — answers grounded in course materials',
        p2_h3: '115+ pytest and 41+ vitest; security audit: 35/37 vulnerabilities fixed',
        p2_h4: 'Gamification, certifications and a course marketplace',

        skills_title: 'Core skills',
        skills_sub: 'Technologies and practices I work with every day — from requirements to production.',
        sk1_title: 'Architecture',
        sk1_l1: 'Microservices, DDD, CQRS', sk1_l2: 'Saga, Event Storming',
        sk1_l3: 'C4 Model', sk1_l4: 'ArchiMate',
        sk2_title: 'AI & Data',
        sk2_l1: 'RAG, Qdrant, ChromaDB', sk2_l2: 'Local LLMs (Qwen 2.5)',
        sk2_l3: 'ML scoring', sk2_l4: 'Kafka, CDC',
        sk3_title: 'DevOps',
        sk3_l1: 'Docker, Kubernetes, Helm', sk3_l2: 'GitHub Actions',
        sk3_l3: 'Prometheus, Grafana', sk3_l4: 'OpenSearch',
        sk4_title: 'Product',
        sk4_l1: 'Unit economics: CAC, LTV, ROI', sk4_l2: 'A/B testing',
        sk4_l3: 'WSJF prioritization', sk4_l4: 'FinOps',
        sk5_title: 'Systems analysis',
        sk5_l1: 'Functional & non-functional requirements', sk5_l2: 'Event Storming, BPMN, UML',
        sk5_l3: 'Use cases, user stories, acceptance criteria', sk5_l4: 'Gap analysis, AS-IS / TO-BE',
        sk6_title: 'Tools',
        sk6_l1: 'SQL, REST / OpenAPI, Postman', sk6_l2: 'Jira, Confluence, Miro, draw.io',
        sk6_l3: 'Figma, Excel', sk6_l4: 'Git, Python for data analysis',

        career_title: 'Work experience',
        career_sub: 'The full cycle — from requirements and architecture to rollout and metrics.',
        exp1_date: 'Feb 2026 — present', exp1_role: 'Fullstack Analyst', exp1_company: 'Aquarius',
        exp1_type: 'Full-time', exp1_loc: 'Remote',
        exp1_a1: 'Collaborated with the PM to build analytics processes in a new unit: set up the Confluence knowledge base, glossary, structure, and spec templates',
        exp1_a2: 'Onboarded and mentored two systems analysts: supervised tasks and reviewed documentation',
        exp1_a3: 'Gather business requirements and design target architectures for internal B2B systems (including 1C environments)',
        exp1_a4: 'Evaluate technical constraints and risks upfront, ensuring a smooth handover of requirements to the dev team',
        exp2_date: 'Feb 2025 — Dec 2025', exp2_role: 'Systems Analyst', exp2_company: 'S8 Capital',
        exp2_type: 'Full-time', exp2_loc: 'Moscow · hybrid',
        exp2_a1: 'Designed external integrations (Kafka, RabbitMQ, REST) in a highload environment (500+ systems)',
        exp2_a2: 'Launched ticket sales on Wildberries (C&C), opening a new channel and boosting revenue by 10%',
        exp2_a3: 'Developed a security portal with automated checks, speeding up manual processes by 50%',
        exp2_a4: 'Produced detailed specs and data flow models (PostgreSQL, ClickHouse), drastically reducing dev questions',
        exp3_date: 'Nov 2022 — Dec 2024', exp3_role: 'Systems Analyst', exp3_company: 'Teleset+',
        exp3_type: 'Full-time', exp3_loc: 'Dubna',
        exp3_a1: 'Created clear API contracts (JSON/XML) and documentation (SRS, ERD), reducing dev blockages',
        exp3_a2: 'Modeled business processes (BPMN) and designed DB structures, accelerating requirements sign-off',
        exp3_a3: 'Designed messenger and task-tracker integrations, fully automating tech support ticket handling',

        edu1_type: 'Secondary vocational',
        edu1_spec: 'Network & Systems Administration',
        edu1_place: 'College of Dubna State University',
        edu2_type: "Bachelor's degree",
        edu2_spec: 'Management and Business Administration',
        edu2_place: 'Moscow International University, Moscow',

        contact_title: 'Open to new projects',
        contact_sub: '',
        wish_label: 'Looking for',
        wish_text: '<b>Senior Systems Analyst / Solution Architect</b> · hybrid / remote · Moscow',
        copy_done: 'Email copied', copy_fail: 'Copy failed',
        mail_open: 'Opening your mail client…',
        resume_hint: 'PDF coming soon — printable version available (Ctrl+P)',
        f_name: 'Name', f_name_ph: 'What should I call you',
        f_email: 'Email', f_email_ph: 'you@company.com',
        f_msg: 'Message', f_msg_ph: 'Your proposal...',
        f_send: 'Send', f_sending: 'Sending…',
        f_success: "Message sent — I'll reply within a day.",
        f_error: 'Failed to send. Please try again or email me directly.',
        f_again: 'Write again',

        footer_name: 'Daniil Dunaev', footer_built: 'built with pure HTML/CSS/JS',
    }
};

/* ============================================================
   2. СЛУЖЕБНЫЕ ФУНКЦИИ
   ============================================================ */
let currentLang = 'ru';
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouch = window.matchMedia('(pointer: coarse)').matches;

const heroSection = document.getElementById('hero');
const heroContent = document.getElementById('hero-content');

/* Достаёт значение по точечному пути: resolvePath(CONFIG, 'socials.github') */
function resolvePath(obj, path) {
    return path.split('.').reduce((o, k) => (o ? o[k] : undefined), obj);
}

/* Проставляет href/text из CONFIG по data-href / data-email-text / data-copy */
function applyConfig() {
    document.querySelectorAll('[data-href]').forEach(el => {
        const key = el.dataset.href;
        let url = key === 'email' ? `mailto:${CONFIG.email}` : resolvePath(CONFIG, key) || '';
        if (url) {
            el.href = url;
            if (key === 'resumePdf') el.setAttribute('download', '');
        } else {
            el.removeAttribute('href');
        }
    });
    document.querySelectorAll('[data-email-text]').forEach(el => {
        el.textContent = CONFIG.email;
    });
    document.querySelectorAll('[data-copy]').forEach(el => {
        el.dataset.copy = CONFIG.email;
    });
    /* Подсказка про печать видна только пока нет PDF */
    document.getElementById('resume-hint').style.display = CONFIG.resumePdf ? 'none' : '';
}

/* Копирование с фолбэком для старых браузеров и iOS */
function copyText(text) {
    return new Promise((resolve, reject) => {
        const fallback = () => {
            try {
                const ta = document.createElement('textarea');
                ta.value = text;
                ta.setAttribute('readonly', '');
                ta.style.position = 'fixed';
                ta.style.opacity = '0';
                document.body.appendChild(ta);
                ta.select();
                const ok = document.execCommand('copy');
                document.body.removeChild(ta);
                ok ? resolve() : reject(new Error('execCommand failed'));
            } catch (err) {
                reject(err);
            }
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(resolve, fallback);
        } else {
            fallback();
        }
    });
}

const toast = document.getElementById('toast');
let toastTimer;
function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2000);
}

document.querySelectorAll('[data-copy]').forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        copyText(el.dataset.copy)
            .then(() => showToast(I18N[currentLang].copy_done))
            .catch(() => showToast(I18N[currentLang].copy_fail));
    });
});

/* ============================================================
   3. ДИНАМИЧЕСКИЙ РЕНДЕР СЕКЦИЙ (данные из CONFIG)
   ============================================================ */
function renderDynamic() {
    const d = I18N[currentLang];

    document.getElementById('education-list').innerHTML = CONFIG.education.map((e, i) => `
        <div class="education-item reveal" style="--delay:${(0.05 + i * 0.08).toFixed(2)}s">
            <span class="education-year">${e.year}</span>
            <div>
                <p class="education-degree">${d[e.typeKey]} · ${d[e.specKey]}</p>
                <p class="education-place">${d[e.placeKey]}</p>
            </div>
        </div>`).join('');

    document.getElementById('timeline').innerHTML = CONFIG.experience.map((ex, i) => {
        const brand = ex.brand || '#00D2FF';
        const soft = brand.startsWith('#')
            ? `color-mix(in srgb, ${brand} 18%, transparent)`
            : 'rgba(0, 210, 255, 0.12)';
        const initials = ex.initials || (d[ex.companyKey] || '?').slice(0, 2).toUpperCase();
        const logoInner = ex.logo
            ? `<img src="${ex.logo}" alt="" loading="lazy" decoding="async" onerror="this.outerHTML='<span>${initials}</span>'">`
            : `<span>${initials}</span>`;
        const meta = [ex.typeKey && d[ex.typeKey], ex.locKey && d[ex.locKey]].filter(Boolean);
        return `
        <article class="exp-card reveal" style="--delay:${(0.05 + i * 0.1).toFixed(2)}s; --exp-brand:${brand}; --exp-brand-soft:${soft}">
            <div class="exp-logo" aria-hidden="true">${logoInner}</div>
            <div class="exp-body">
                <div class="exp-head">
                    <div class="exp-head-main">
                        <h3 class="exp-role">${d[ex.roleKey]}</h3>
                        <p class="exp-company">${d[ex.companyKey]}</p>
                    </div>
                    <div class="exp-head-meta">
                        <time class="exp-date">${d[ex.dateKey]}</time>
                        ${meta.length ? `<div class="exp-tags">${meta.map(m => `<span>${m}</span>`).join('')}</div>` : ''}
                    </div>
                </div>
                <ul class="exp-bullets">
                    ${ex.bullets.map(b => `<li>${d[b]}</li>`).join('')}
                </ul>
            </div>
        </article>`;
    }).join('');

    document.getElementById('skills-grid').innerHTML = CONFIG.skills.map((s, i) => `
        <div class="skill-card reveal" style="--delay:${(0.05 + i * 0.07).toFixed(2)}s">
            <div class="skill-icon">${s.icon}</div>
            <h3>${d[s.titleKey]}</h3>
            <ul>
                ${s.items.map(k => `<li>${d[k]}</li>`).join('')}
            </ul>
        </div>`).join('');

    document.getElementById('projects-grid').innerHTML = CONFIG.projects.map((p, i) => `
        <article class="project-card reveal" style="--delay:${(0.1 + i * 0.1).toFixed(2)}s"
                 data-project="${p.id}" tabindex="0" role="button"
                 aria-haspopup="dialog" aria-label="${p.name}: ${d.view_more}">
            <div class="project-visual">
                <div class="project-visual-fallback">${p.name}</div>
                <img src="${p.shots[0]}" alt="${p.name}" width="640" height="400"
                     loading="lazy" decoding="async">
                <span class="view-badge">${d.view_more}</span>
            </div>
            <span class="project-tag">${p.tag}</span>
            <div>
                <h3 class="project-title">${p.name}</h3>
                <p class="project-subtitle">${d[p.roleKey]}</p>
            </div>
            <p class="project-desc">${d[p.descKey]}</p>
            <ul class="stack">
                ${p.stack.map(t => `<li>${t}</li>`).join('')}
            </ul>
            <div class="project-footer">
                <span class="project-metrics">${p.metrics}</span>
                <a href="${p.repo}" target="_blank" rel="noopener" class="btn btn--ghost btn--sm" data-stop>
                    ${GITHUB_SVG} GitHub
                </a>
            </div>
        </article>`).join('');

    /* Обновление эффектов и наблюдателя появления */
    bindEffects();
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

/* ============================================================
   4. ЯЗЫК
   ============================================================ */
function applyLang(lang) {
    const dict = I18N[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = dict[el.dataset.i18n] ?? '';
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        el.innerHTML = dict[el.dataset.i18nHtml] ?? '';
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        el.placeholder = dict[el.dataset.i18nPh] ?? '';
    });
    /* Динамическое обновление SEO-мета */
    document.title = dict.docTitle ?? '';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', dict.metaDesc ?? '');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', dict.metaDesc ?? '');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', dict.ogTitle ?? '');
    renderDynamic();
    splitHeroName(); // пересобираем имя по буквам
}

function setLang(lang) {
    if (lang === currentLang) return;
    currentLang = lang;
    localStorage.setItem('dd_portfolio_lang', lang);
    document.getElementById('lang-ru').classList.toggle('active', lang === 'ru');
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    document.documentElement.lang = lang;

    const nodes = document.querySelectorAll('[data-i18n], [data-i18n-html]');
    nodes.forEach(n => n.classList.add('i18n-fade', 'fading'));
    setTimeout(() => {
        applyLang(lang);
        nodes.forEach(n => n.classList.remove('fading'));
        setTimeout(() => nodes.forEach(n => n.classList.remove('i18n-fade')), 300);
    }, 250);
}

/* Появление имени по буквам (градиент наследуется от родителя) */
function splitHeroName() {
    const el = document.querySelector('#hero-title .gradient-text');
    const title = document.getElementById('hero-title');
    const text = el.textContent;
    el.innerHTML = text.split('').map((c, i) =>
        c === ' ' ? ' ' : `<span class="char" style="--i:${i}">${c}</span>`
    ).join('');
    title.classList.remove('playing');
    void title.offsetWidth; // принудительный reflow для перезапуска анимации
    title.classList.add('playing');
}

/* ============================================================
   5. ПРЕЛОАДЕР + РЕЗЮМЕ
   ============================================================ */
const preloader = document.getElementById('preloader');
function hidePreloader() {
    preloader.classList.add('done');
    document.body.classList.remove('locked');
    heroSection.classList.add('playing'); // каскадное появление блоков героя
    if (!prefersReduced) splitHeroName();
}
window.addEventListener('load', () => setTimeout(hidePreloader, 600));
setTimeout(hidePreloader, 2500); // страховка, если load не сработал

/* Повторные визиты в рамках сессии — без прелоадера */
if (sessionStorage.getItem('dd_portfolio_seen')) {
    document.addEventListener('DOMContentLoaded', () => setTimeout(hidePreloader, 0));
} else {
    sessionStorage.setItem('dd_portfolio_seen', '1');
}

/* Резюме: файл из CONFIG или печать (window.print) */
document.querySelectorAll('[data-resume]').forEach(a => {
    a.addEventListener('click', (e) => {
        if (!CONFIG.resumePdf) {
            e.preventDefault();
            window.print();
        }
    });
});

/* ============================================================
   6. ШАПКА, СКРОЛЛ, BACK-TO-TOP, SCROLLSPY, ПОЯВЛЕНИЕ, СЧЁТЧИКИ
   ============================================================ */
const header = document.getElementById('header');
const scrollHint = document.querySelector('.scroll-hint');
const progressBar = document.getElementById('progress-bar');
const toTop = document.getElementById('to-top');
const ringCircle = document.getElementById('ring-circle');
const RING_C = 138.23; // длина окружности прогресс-кольца

/* Палитры фона: 4 ключевые позиции (t=0..1), каждая — три стопа градиента [r,g,b].
   Очень тёмные: близки к базовому #08080C, чтобы фон оставался таким же глубоким,
   а градиент лишь едва-едва переливался оттенком при скролле. */


function lerp(a, b, t) { return a + (b - a) * t; }

window.addEventListener('scroll', () => {
    const doc = document.documentElement;
    const p = doc.scrollTop / (doc.scrollHeight - doc.clientHeight);
    header.classList.toggle('scrolled', doc.scrollTop > 40);
    const headerCta = document.querySelector('.header-cta');
    if (headerCta) headerCta.style.display = doc.scrollTop > window.innerHeight * 0.8 ? 'inline-flex' : 'none';
    scrollHint.classList.toggle('hidden', doc.scrollTop > 120);
    progressBar.style.transform = `scaleX(${Math.min(p, 1)})`;
    toTop.classList.toggle('visible', doc.scrollTop > 600);
    ringCircle.style.strokeDashoffset = RING_C * (1 - Math.min(p, 1));

    // Аурора реагирует на скролл: блобы разъезжаются, оттенок плывёт
    if (!prefersReduced) {
        const t = Math.max(0, Math.min(p, 1));
        doc.style.setProperty('--s1y', (7 + 16 * t) + 'vh');
        doc.style.setProperty('--s2y', (-6 - 14 * t) + 'vh');
        doc.style.setProperty('--s3y', (-9 + 12 * t) + 'vh');
        doc.style.setProperty('--s4y', (6 - 14 * t) + 'vh');
        doc.style.setProperty('--s5y', (5 + 11 * t) + 'vh');
        doc.style.setProperty('--shue', Math.round(18 * Math.sin(t * Math.PI)) + 'deg');
    }
}, { passive: true });

toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* Мобильное меню */
const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobile-nav');
function closeMenu() {
    burger.classList.remove('open');
    mobileNav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
}
burger.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
});
mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
/* Закрытие по клику вне панели и по Esc */
document.addEventListener('click', (e) => {
    if (mobileNav.classList.contains('open') &&
        !mobileNav.contains(e.target) && !burger.contains(e.target)) closeMenu();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (photoViewer.classList.contains('open')) closePhotoViewer();
        else if (projectModal.classList.contains('open')) closeProjectModal();
        else closeMenu();
    }
});

/* SCROLLSPY: подсветка активного пункта меню */
const navLinks = document.querySelectorAll('.nav a, .mobile-nav a');
const spy = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            const id = '#' + e.target.id;
            navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === id));
        }
    });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('section[id], footer[id]').forEach(s => spy.observe(s));

/* Появление блоков при скролле */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* Анимированные счётчики статистики */
function animateCounter(el) {
    const target = parseFloat(el.dataset.count);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    if (prefersReduced) { el.textContent = prefix + target + suffix; return; }
    const dur = 1300;
    let t0 = null;
    function frame(t) {
        if (!t0) t0 = t;
        const p = Math.min((t - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = prefix + Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
}
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            animateCounter(e.target);
            counterObserver.unobserve(e.target);
        }
    });
}, { threshold: 0.6 });
document.querySelectorAll('.stat .num').forEach(el => counterObserver.observe(el));

/* ============================================================
   7. МОДАЛКА ПРОЕКТА + ГАЛЕРЕЯ ФОТО
   ============================================================ */
const projectModal = document.getElementById('project-modal');
const photoViewer = document.getElementById('photo-viewer');
const photoViewerImg = document.getElementById('photo-viewer-img');
let currentProject = null;

function openProjectModal(id) {
    const p = CONFIG.projects.find(x => x.id === id);
    if (!p) return;
    currentProject = p;
    const d = I18N[currentLang];
    projectModal.innerHTML = `
        <div class="modal-overlay" data-close></div>
        <div class="modal-dialog" role="dialog" aria-modal="true" aria-label="${p.name}">
            <button class="modal-close" data-close aria-label="${d.close_btn}">✕</button>
            <span class="project-tag">${p.tag}</span>
            <h3 class="modal-title">${p.name}</h3>
            <p class="modal-role">${d[p.roleKey]}</p>
            <div class="modal-gallery">
                ${p.shots.map((s, i) => `
                    <figure data-photo="${i}">
                        <img src="${s}" alt="${p.name} ${i + 1}" width="640" height="400"
                             loading="lazy" decoding="async">
                        <figcaption>${i + 1} / ${p.shots.length}</figcaption>
                    </figure>`).join('')}
            </div>
            <p class="modal-desc">${d[p.descKey]}</p>
            <div class="modal-stack">
                <span class="modal-label">Stack</span>
                <ul class="stack">${p.stack.map(t => `<li>${t}</li>`).join('')}</ul>
            </div>
            <h4 class="modal-hl-title">${d.modal_hl_title}</h4>
            <ul class="modal-hl">
                ${p.hlKeys.map(k => `<li>${d[k]}</li>`).join('')}
            </ul>
            <p class="modal-metrics">${p.metrics}</p>
            <div class="modal-footer">
                <a href="${p.repo}" target="_blank" rel="noopener" class="btn btn--primary">${GITHUB_SVG} GitHub</a>
            </div>
        </div>`;
    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('locked');
    projectModal.querySelector('.modal-dialog').scrollTop = 0;
}

function closeProjectModal() {
    projectModal.classList.remove('open');
    projectModal.setAttribute('aria-hidden', 'true');
    currentProject = null;
    if (!photoViewer.classList.contains('open')) document.body.classList.remove('locked');
}

function openPhotoViewer(src, alt) {
    photoViewerImg.src = src;
    photoViewerImg.alt = alt;
    photoViewer.classList.add('open');
    photoViewer.setAttribute('aria-hidden', 'false');
}

function closePhotoViewer() {
    photoViewer.classList.remove('open');
    photoViewer.setAttribute('aria-hidden', 'true');
    if (!projectModal.classList.contains('open')) document.body.classList.remove('locked');
}

/* Клик по карточке открывает детали; кнопка GitHub — отдельно */
document.getElementById('projects-grid').addEventListener('click', (e) => {
    if (e.target.closest('[data-stop]')) return;
    const card = e.target.closest('[data-project]');
    if (card) openProjectModal(card.dataset.project);
});
document.getElementById('projects-grid').addEventListener('keydown', (e) => {
    const card = e.target.closest('[data-project]');
    if (card && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        openProjectModal(card.dataset.project);
    }
});

projectModal.addEventListener('click', (e) => {
    if (e.target.closest('[data-close]')) { closeProjectModal(); return; }
    const fig = e.target.closest('.modal-gallery figure');
    if (fig && e.target.tagName === 'IMG' && currentProject) {
        const i = +fig.dataset.photo;
        openPhotoViewer(currentProject.shots[i], `${currentProject.name} ${i + 1}`);
    }
});
photoViewer.addEventListener('click', closePhotoViewer);

/* Если скриншот не загрузился — показываем градиент-заглушку */
document.addEventListener('error', (e) => {
    if (e.target && e.target.tagName === 'IMG') {
        const wrap = e.target.closest('.project-visual') || e.target.closest('.modal-gallery figure');
        if (wrap) wrap.classList.add('no-img');
    }
}, true);

/* ============================================================
   8. ЭФФЕКТЫ: ПАРАЛЛАКС, 3D-НАКЛОН, МАГНИТНЫЕ КНОПКИ, КУРСОР
   ============================================================ */
if (!isTouch && !prefersReduced) {
    heroSection.addEventListener('mousemove', (e) => {
        const r = heroSection.getBoundingClientRect();
        const nx = (e.clientX - r.left) / r.width - 0.5;
        const ny = (e.clientY - r.top) / r.height - 0.5;
        heroContent.style.transform = `translate3d(${nx * -18}px, ${ny * -14}px, 0)`;
    });
    heroSection.addEventListener('mouseleave', () => {
        heroContent.style.transition = 'transform 0.7s cubic-bezier(0.22,1,0.36,1)';
        heroContent.style.transform = 'translate3d(0,0,0)';
        setTimeout(() => heroContent.style.transition = '', 700);
    });
}

/* Навешивает эффекты на элементы, отрендеренные динамически (data-fx — защита от повторов) */
function bindEffects() {
    if (isTouch) return;
    document.querySelectorAll('.project-card, .exp-card, .artifact-card').forEach(el => {
        el.addEventListener('mousemove', e => {
            const r = el.getBoundingClientRect();
            const cx = r.width / 2;
            const cy = r.height / 2;
            const rx = -(e.clientY - r.top - cy) / (cy / 4);
            const ry = (e.clientX - r.left - cx) / (cx / 4);
            el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02, 1.02, 1.02)`;
            el.style.zIndex = '10';
            el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
            el.style.setProperty('--my', (e.clientY - r.top) + 'px');
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = '';
            el.style.zIndex = '1';
            el.style.removeProperty('--mx');
            el.style.removeProperty('--my');
        });
    });
}

/* ============================================================
   9. ЧАСТИЦЫ НА КАНВАСЕ (динамическая плотность + пауза вне экрана)
   ============================================================ */
(function particles() {
    const canvas = document.getElementById('hero-canvas');
    const ctx = canvas.getContext('2d');
    let w, h, particles;
    const mouse = { x: null, y: null };
    const LINK_DIST = 150;
    const MOUSE_DIST = 220;

    function resize() {
        w = canvas.width = heroSection.offsetWidth;
        h = canvas.height = heroSection.offsetHeight;
        const count = Math.min(140, Math.floor(w * h / 20000));
        particles = Array.from({ length: count }, () => ({
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35,
            r: Math.random() * 1.6 + 0.5,
        }));
    }

    function step() {
        ctx.clearRect(0, 0, w, h);
        for (const p of particles) {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > w) p.vx *= -1;
            if (p.y < 0 || p.y > h) p.vy *= -1;
            if (mouse.x !== null) {
                const dx = mouse.x - p.x, dy = mouse.y - p.y;
                const d = Math.hypot(dx, dy);
                if (d < MOUSE_DIST && d > 0.001) {
                    p.x += (dx / d) * 0.45;
                    p.y += (dy / d) * 0.45;
                }
            }
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 210, 255, 0.45)';
            ctx.fill();
        }
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const a = particles[i], b = particles[j];
                const d = Math.hypot(a.x - b.x, a.y - b.y);
                if (d < LINK_DIST) {
                    const alpha = (1 - d / LINK_DIST) * 0.14;
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.strokeStyle = `rgba(90, 140, 255, ${alpha})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }
        rafId = requestAnimationFrame(step);
    }

    heroSection.addEventListener('mousemove', (e) => {
        const r = canvas.getBoundingClientRect();
        mouse.x = e.clientX - r.left;
        mouse.y = e.clientY - r.top;
    });
    heroSection.addEventListener('mouseleave', () => { mouse.x = mouse.y = null; });
    window.addEventListener('resize', resize);

    /* Пауза анимации, пока hero не в зоне видимости (экономия CPU) */
    let running = false;
    let rafId = null;
    function start() { if (!running && !prefersReduced) { running = true; step(); } }
    function stop() { running = false; if (rafId) { cancelAnimationFrame(rafId); rafId = null; } }

    resize();
    if (prefersReduced) { ctx.clearRect(0, 0, w, h); }
    else {
        const heroIO = new IntersectionObserver((entries) => {
            entries.forEach(en => en.isIntersecting ? start() : stop());
        }, { threshold: 0.01 });
        heroIO.observe(heroSection);
        start();
    }
})();

/* ============================================================
   9.5. СВЕТЛЯЧКИ + СВЕТОВОЙ СЛЕД ЗА КУРСОРОМ (на весь сайт)
   ============================================================ */
(function heroAmbience() {
    if (isTouch || prefersReduced) return;
    const fireCanvas = document.getElementById('hero-fireflies');
    const light = document.getElementById('hero-light');
    if (!fireCanvas || !light) return;
    const fctx = fireCanvas.getContext('2d');

    let w, h, flies = [];
    const FLY_COUNT = 26;
    const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999 };
    const lightPos = { x: -9999, y: -9999 };
    let rafId = null;
    let running = false;

    function resize() {
        w = fireCanvas.width = window.innerWidth;
        h = fireCanvas.height = window.innerHeight;
        flies = Array.from({ length: FLY_COUNT }, () => ({
            x: Math.random() * w,
            y: Math.random() * h,
            r: Math.random() * 1.6 + 0.6,
            base: 0.10 + Math.random() * 0.22,
            tw: Math.random() * Math.PI * 2,
            tws: 0.004 + Math.random() * 0.012,
            vx: (Math.random() - 0.5) * 0.14,
            vy: (Math.random() - 0.5) * 0.14,
            hue: Math.random() < 0.6 ? '56, 189, 248' : (Math.random() < 0.5 ? '139, 92, 246' : '99, 102, 241'),
        }));
    }

    document.addEventListener('mousemove', (e) => {
        mouse.tx = e.clientX;
        mouse.ty = e.clientY;
        light.classList.add('visible');
    }, { passive: true });
    document.addEventListener('mouseleave', () => {
        mouse.tx = mouse.ty = -9999;
        light.classList.remove('visible');
    });

    function step() {
        fctx.clearRect(0, 0, w, h);
        mouse.x += (mouse.tx - mouse.x) * 0.08;
        mouse.y += (mouse.ty - mouse.y) * 0.08;
        lightPos.x += (mouse.x - lightPos.x) * 0.10;
        lightPos.y += (mouse.y - lightPos.y) * 0.10;
        if (mouse.x > -100 && mouse.y > -100) {
            light.style.transform = `translate3d(${lightPos.x - 260}px, ${lightPos.y - 260}px, 0)`;
        }

        for (const f of flies) {
            f.x += f.vx;
            f.y += f.vy;
            if (f.x < -10) f.x = w + 10; else if (f.x > w + 10) f.x = -10;
            if (f.y < -10) f.y = h + 10; else if (f.y > h + 10) f.y = -10;
            f.tw += f.tws;
            const a = f.base * (0.55 + 0.45 * Math.sin(f.tw));
            const dx = mouse.x - f.x, dy = mouse.y - f.y;
            const d = Math.hypot(dx, dy);
            if (d < 180 && d > 0.001) { f.x -= (dx / d) * 0.12; f.y -= (dy / d) * 0.12; }
            fctx.beginPath();
            fctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
            fctx.fillStyle = `rgba(${f.hue}, ${a})`;
            fctx.fill();
        }
        rafId = requestAnimationFrame(step);
    }

    function start() { if (!running) { running = true; step(); } }
    function stop() { running = false; if (rafId) { cancelAnimationFrame(rafId); rafId = null; } }

    resize();
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', () => {
        document.hidden ? stop() : start();
    });
    start();
})();

/* ============================================================
   10. ФОРМА: Telegram Bot API или mailto-фолбэк
   ============================================================ */
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const formSubmit = document.getElementById('form-submit');
const formAgain = document.getElementById('form-again');

/* ============================================================
   9.6. ТЕРМИНАЛЬНОЕ ИНТРО В HERO (печать команд по кругу)
   ============================================================ */
(function heroTerminal() {
    const lineEl = document.getElementById('term-line');
    if (!lineEl) return;
    const commands = [
        'whoami',
        'cat role',
        'ls projects',
        'git log --oneline',
    ];
    const outputs = {
        'whoami': 'Fullstack Analyst (Systems + Business)',
        'cat role': 'Requirements → Architecture → Delivery',
        'ls projects': 'FinGuard  EzLearn',
        'git log --oneline': '4+ years · 500+ systems · highload · FinTech',
    };
    let cmdIdx = 0, charIdx = 0, phase = 'typing';
    let timer = null;

    // При prefers-reduced-motion сразу показываем первую команду без анимации
    if (prefersReduced) {
        lineEl.textContent = outputs[commands[0]];
        return;
    }

    const TYPING_MS = 46;
    const HOLD_MS = 1800;
    const PAUSE_MS = 900;

    function typeChar() {
        if (charIdx <= commands[cmdIdx].length) {
            lineEl.textContent = commands[cmdIdx].slice(0, charIdx++);
            timer = setTimeout(typeChar, TYPING_MS);
        } else {
            phase = 'exec';
            timer = setTimeout(clearLine, HOLD_MS);
        }
    }

    function clearLine() {
        if (charIdx > 0) {
            lineEl.textContent = commands[cmdIdx].slice(0, --charIdx);
            timer = setTimeout(clearLine, TYPING_MS);
        } else {
            lineEl.textContent = outputs[commands[cmdIdx]];
            phase = 'show';
            cmdIdx = (cmdIdx + 1) % commands.length;
            charIdx = 0;
            timer = setTimeout(typeChar, PAUSE_MS);
        }
    }

    // Начинаем после появления hero
    setTimeout(typeChar, 1200);
})();

/* Формирует текст сообщения в Telegram */
function formatTgMessage(d) {
    return [
        '\u{1F4AC} Новое сообщение с портфолио',
        '',
        `\u{1F464} Имя: ${d.get('name')}`,
        `\u{1F4E7} Email: ${d.get('email')}`,
        '',
        d.get('message'),
    ].join('\n');
}

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    formStatus.className = 'form-status';
    const d = new FormData(contactForm);

    /* Honeypot: бот-заполнитель попадает в скрытое поле — молча игнорируем */
    if (d.get('_gotcha')) return;

    /* Нет токена — открываем почтовый клиент */
    if (!CONFIG.telegramBotToken || !CONFIG.telegramChatId) {
        const subject = encodeURIComponent(`[Portfolio] ${d.get('name')}`);
        const body = encodeURIComponent(`${d.get('message')}\n\n— ${d.get('name')} (${d.get('email')})`);
        window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
        showToast(I18N[currentLang].mail_open);
        return;
    }

    formSubmit.disabled = true;
    formSubmit.textContent = I18N[currentLang].f_sending;
    try {
        const res = await fetch(`https://api.telegram.org/bot${CONFIG.telegramBotToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: CONFIG.telegramChatId,
                text: formatTgMessage(d),
            }),
        });
        const j = await res.json();
        if (j && j.ok) {
            contactForm.classList.add('sent');
            formStatus.classList.add('success');
            formStatus.textContent = I18N[currentLang].f_success;
            contactForm.reset();
        } else {
            throw new Error(j && j.description ? j.description : 'telegram rejected');
        }
    } catch {
        formStatus.classList.add('error');
        formStatus.textContent = I18N[currentLang].f_error;
    } finally {
        formSubmit.disabled = false;
        formSubmit.textContent = I18N[currentLang].f_send;
    }
});

formAgain.addEventListener('click', () => {
    contactForm.classList.remove('sent');
    formStatus.className = 'form-status';
    formStatus.textContent = '';
});

/* ============================================================
   11. SEO: JSON-LD + HREFLANG (из CONFIG)
   ============================================================ */
function buildSeo() {
    const sameAs = Object.values(CONFIG.socials)
        .filter(u => u && u.startsWith('http') && !u.endsWith('/'));
    const ld = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: currentLang === 'en' ? 'Daniil Dunaev' : 'Даниил Дунаев',
        url: CONFIG.siteUrl || undefined,
        image: CONFIG.siteUrl ? `${CONFIG.siteUrl.replace(/\/$/, '')}/og.png` : 'og.png',
        jobTitle: 'Fullstack Analyst (Systems + Business) / Solution Architect',
        sameAs: sameAs,
        knowsAbout: CONFIG.knowsAbout,
        alumniOf: CONFIG.education.map(e => ({ '@type': 'EducationalOrganization', name: I18N.ru[e.placeKey] })),
        workLocation: 'Russia',
    };
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify(ld);
    document.head.appendChild(s);

    /* hreflang подключается автоматически, когда заполнен CONFIG.siteUrl */
    if (CONFIG.siteUrl) {
        const base = CONFIG.siteUrl.replace(/\/$/, '');
        [['ru', base], ['en', `${base}?lang=en`], ['x-default', base]].forEach(([h, href]) => {
            const l = document.createElement('link');
            l.rel = 'alternate';
            l.hreflang = h;
            l.href = href;
            document.head.appendChild(l);
        });
    }
}

/* ============================================================
   12. ИНИЦИАЛИЗАЦИЯ
   ============================================================ */
applyConfig();

/* Бегущая строка: дублируем содержимое для бесшовного цикла */
document.getElementById('marquee-track').innerHTML +=
    document.querySelector('.marquee-part').outerHTML;

/* Восстанавливаем выбранный ранее язык */
if (localStorage.getItem('dd_portfolio_lang') === 'en') {
    currentLang = 'en';
    document.getElementById('lang-en').classList.add('active');
    document.getElementById('lang-ru').classList.remove('active');
    document.documentElement.lang = 'en';
}
applyLang(currentLang);
bindEffects();
buildSeo();
