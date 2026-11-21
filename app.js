// MODEL: дані та логіка роботи з ними
const Model = {
    lecturer: {
        name: "Юлія Ульяновська",
        position: "Кандидат технічних наук, доцент",
        department: "Кафедра комп’ютерних наук та інженерії програмного забезпечення · Факультет Інноваційних технологій",
        email: "ulyanovska@umsf.dp.ua",
        research: "Інтелектуальні автоматизовані системи, методи обробки нечітких та неповних даних.",
        courses: [
            {
                title: "Комп'ютерні науки",
                description: "Підготовка висококваліфікованих фахівців із компетентостями, необхідними для проведення теоретичних та експериментальних досліджень в галузі комп’ютерних наук, вирішення складних практичних завдань у сфері комп’ютерних технологій (в тому числі зі знанням особливостей митного законодавства), здатних здійснювати на відповідному рівні професійної діяльності розробку, впровадження і супровід інтелектуальних систем аналізу й обробки даних в організаційних, технічних, природничих і соціально-економічних системах.",
                updated: "2026.11.21",
                programUrl: "https://www.umsf.dp.ua/about/tur-po-umsf/28-spetsialnosti/999-122"
            },
            {
                title: "Інженерія програмного забезпечення",
                description: "Досягнення здобувачами результатів навчання, які дозволять їм під час професійної діяльності ставити і розв’язувати складні задачі і проблеми з розроблення, забезпечення кості, впровадження та супроводу програмних засобів, що передбачає проведення досліджень та/або здійснення інновацій в умовах невизначеності та ризику, у тому числі із знанням особливостей митної справи.",
                updated: "2026.11.21",
                programUrl: "https://umsf.dp.ua/index.php/vstup-osvita/spetsialnosti-osvitni-prohramy/28-spetsialnosti/1000-121"
            }
        ]
    },

    getLecturer() {
        return this.lecturer;
    },

    getCourses() {
        return this.lecturer.courses;
    }
};


// VIEW: створює та показує HTML
const View = {
    render(lecturer, courses) {
        const app = document.querySelector("#app");

        const courseCards = courses.map(course => `
        <article class="course-card">
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <p>
        <a href="${course.programUrl}">Програма курсу</a>
        ·
        <a href="${course.materialsUrl}">Навчальні матеріали</a>
        </p>
        <p class="updated">Оновлено: ${course.updated}</p>
        </article>
        `).join("");

        app.innerHTML = `
        <section class="profile">
        <h1>${lecturer.name}</h1>
        <p>${lecturer.position}</p>
        <p>${lecturer.department}</p>
        <p>
        Електронна пошта:
        <a href="mailto:${lecturer.email}">${lecturer.email}</a>
        </p>
        <p>${lecturer.office}</p>
        </section>

        <section>
        <h2>Навчальні курси</h2>
        <div class="course-list">
        ${courseCards}
        </div>
        </section>

        <section>
        <h2>Наукова діяльність</h2>
        <p>${lecturer.research}</p>
        </section>
        `;
    },

    showMessage(message) {
        alert(message);
    }
};


// CONTROLLER: пов’язує модель і представлення
const Controller = {
    init() {
        const lecturer = Model.getLecturer();
        const courses = Model.getCourses();

        View.render(lecturer, courses);
    }
};


// Запуск застосунку
Controller.init();
