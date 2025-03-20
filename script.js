
// Data
const bootcampData = {
    title: "Desarrollo web full stack",
    weeks: 24,
    modules: [
        { name: "Intro + Front", start: 1, end: 10 },
        { name: "Back", start: 11, end: 16 },
        { name: "fullstack", start: 17, end: 19 },
        { name: "Proyecto final", start: 20, end: 24 },
    ],
    stack: [
        // {
        //     type: "Competencia",
        //     name: "Gestionar equipos de forma eficiente",
        //     start: 1,
        //     end: 7,
        // },
        {
            type: "Proyecto",
            name: "Favorite Things | <i class='bi bi-person-fill'></i>",
            start: 1,
            end: 2,
        },
        {
            type: "Competencia",
            name: "Prototipado web: Figma",
            start: 1,
            end: 24,
        },
        {
            type: "Competencia",
            name: "Maquetación web: HTML",
            start: 2,
            end: 24,
        },
        {
            type: "Competencia",
            name: "Estilos web: CSS",
            start: 2,
            end: 24,
        },
        {
            type: "Proyecto",
            name: "Toquen el Dom | <i class='bi bi-people-fill'></i>",
            start: 3,
            end: 5,
        },
        {
            type: "Competencia",
            name: "Control de version : git y github",
            start: 3,
            end: 34,
        },
        {
            type: "Competencia",
            name: "Principios de programación: JavaScript",
            start: 4,
            end: 24,
        },
        {
            type: "Competencia",
            name: "Manipulación del DOM",
            start: 5,
            end: 24,

        },
        {
            type: "Competencia",
            name: "Eventos",
            start: 5,
            end: 24,
        },
        {
            type: "Proyecto",
            name: "CRUD Js vanila | <i class='bi bi-person-fill'></i>",
            start: 6,
            end: 7,
        },
        {
            type: "Competencia",
            name: "peticiones HTTP",
            start: 6,
            end: 24,
        },
        {
            type: "Proyecto",
            name: "APP React Museum | <i class='bi bi-people-fill'></i>",
            start: 8,
            end: 11,
        },
        {
            type: "Competencia",
            name: "LibFramework: React",
            start: 8,
            end: 24,
        },
        {
            type: "Competencia",
            name: "testing: vitest y testing library",
            start: 9,
            end: 24,

        },

        {
            type: "Proyecto",
            name: "API Express Museum | <i class='bi bi-people-fill'></i>",
            start: 12,
            end: 16,
        },
        {
            type: "Competencia",
            name: "Diseño y gestion de bases de datos",
            start: 12,
            end: 24,
        },
        {
            type: "Competencia",
            name: "Frameworks Back: Express",
            start: 13,
            end: 24,
        },
        {
            type: "Competencia",
            name: "Desarrollo con TDD: Jest + supertest",
            start: 13,
            end: 24,
        },
        {
            type: "Competencia",
            name: "Documentación de API",
            start: 14,
            end: 24,
        },
        {
            type: "Proyecto",
            name: "fullstack | <i class='bi bi-people-fill'></i>",
            start: 17,
            end: 19,
        },
        {
            type: "Competencia",
            name: "encriptación de contraseñas",
            start: 17,
            end: 24,
        },
        {
            type: "Competencia",
            name: "tokenización",
            start: 17,
            end: 24,
        },
        {
            type: "Competencia",
            name: "gestion de sesiones",
            start: 18,
            end: 24,
        },
        {
            type: "Proyecto",
            name: "Proyecto final | <i class='bi bi-people-fill'></i>",
            start: 20,
            end: 24,
        }
    ],
    links: {
        googleCalendar: "https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FMadrid&src=Y18zMDQ4MjU4NDYxYWE5MTk2YzE3YjgyNDc4OTk5NDk2MzNjNzMzZDk4MzhlZjFhZTQ1YzMzZTQ5ZDRkZGU5ZGZmQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%234285F4",
        zoom: "https://us02web.zoom.us/j/84219607621",
        classroom: "https://classroom.google.com/c/NzQ1NDc4OTU1MzQ4?cjc=qhpavje",
        discord: "https://discord.gg/u54GR4D3",
        github: "https://github.com/Factoria-F5-dev"
    },
    competencies: [
        {
            name: "Gestionar equipos de forma eficiente",
            metric: ["Planificación y gestión del proyecto"],
            indicator: {
                typeBasic: [
                    "Uso de roles Definidos",
                    "Uso de kanban / burndown chart",
                    "Uso de sprint backlog",
                    "Uso de herramientas de gestión de proyectos (Trello, Jira, etc.)",
                    "Uso de estimación de tareas",
                    "Uso de Actas de reuniones",
                    "Uso de Daily",
                    "Uso de Retros",
                    "Prioriza al equipo",
                    "Uso de Historias de usuario",
                    "Uso de Workflow diagram",
                    "Uso de Documentación (README) o celdas MD en notebook",
                ],
                typeExtra: [
                    "Integración de Gitflow con herramientas de gestión de proyectos (Jira y Trello)",
                ]
            },
            themes: {
                typeBasic: [
                    "Metodología Scrum y kanban (roles y ceremonias)",
                ],
                typeExtra: [
                    "Integración de Gitflow con herramientas de gestión de proyectos (Jira y Trello)",
                    "Herramientas de gestión de proyectos (Trello & Jira), actas de reuniones e historias de usuario",
                    "Documentación; archivos md (README), Workflow diagram, etc.",

                ]
            }
        },
        {
            name: "Comunicar efectivamente el desarrollo de un proyecto de forma claras y estructurada",
            indicator: {
                typeBasic: [
                    "Uso de Contenido Visual",
                    "Uso de Estructura ordenada",
                    "Uso de estructura Pragmática / Concreta",
                    "Participación del equipo",
                    "Uso de Storytelling",
                ],
                typeExtra: [
                    "Uso de herramientas de diseño (Canva, Figma, etc.)",
                ]
            }
        },
        {
            name: "Gestionar eficientemente proyectos de desarrollo con herramientas de control de versiones",
            indicator: {
                typeBasic: [
                    "Uso de github",
                    "Conectar repo local al remoto",
                    "Uso de Gitflow methodology",
                    "Uso de Commits descriptivos",
                    "Uso apropiado de ramas",
                    "Uso de Nomenclatura en commits",
                    "Uso de Nomenclatura en ramas",
                ],
                typeExtra: [
                    "Integración de github actions CI/CD",
                    "Uso de SonarQube, ESLint",
                    "Uso de Dependabot",
                ]
            },
            themes: {
                typeBasic: [
                    "Sistemas operativos (Windows, Linux, Mac)",
                    "Terminal unix (¿Unix está en todos los sistemas operativos?)",
                    "Git vs github",
                    "Gitflow",
                ],
                typeExtra: [
                    "Git actions CI/CD",
                    "Monitoreo de código y calidad con herramientas de integración continua (SonarQube, ESLint)",
                    "Manejo de versiones de dependencias con herramientas como Dependabot",
                    "Manejo de logs",
                ]
            }
        },
        {
            name: ["Bases de programación"],
            indicator: {
                typeBasic: [
                    "tipos de datos",
                    "palabras reservadas",
                    "operadores",
                    "controladores de flujo",
                    "estructuras de datos",
                    "Uso de Funciones, programación funcional",
                    "Manejo de errores (cláusula try/except)",
                    "Uso de POO (Programación Orientada a Objetos)",
                    "principios de programación y convenciones",
                    "Uso de librerías externas",
                
                ],
                typeExtra: [


                ]
            },
            themes: {
                typeBasic: [
                    "Introducción a JavaScript (tipos de datos, variables, operadores, estructuras de control)",
                    "Entornos virtuales (venv, conda, virtualenv)",
                    "Entornos de desarrollo IDEs (VSCode, Pycharm) & notebooks(Jupyter notebook, google colab)",
                    "POO (Programación Orientada a Objetos)",
                    "Programación funcional",
                    "Heramientas de logger",
                    "IOT",
                    "Introducción a redes y protocolos de comunicación",
                    "Api rest",
                    "CRUD",
                    "Frameworks (fASTAPI, Flask, Django)",
                    "Clean code (SOLID, DRY, KISS)",
                    "Patrones de Diseño",
                    "Regex",

                ],
                typeExtra: [
                    "Desarrollo de decoradores",
                    "Métodos mágicos",
                    "Hilos en python",
                    "Itertools",
                    "Protocolo SSH",
                    "Cross-site-origin (CORS)",
                ]
            }
        },
        // 
        // 
        {
            name: "Diseñar y gestionar bases de datos de manera eficiente",
            indicator: {
                typeBasic: [
                    "Uso de Modelado de datos",
                    "Uso de Normalización de datos"
                ],
                typeExtra: [
                    "Implementación de técnicas de seguridad en bases de datos",
                    "Implementación de bases de datos en la nube"
                ]
            },
            themes: {
                typeBasic: [
                    "Bases de datos relacionales (sql, mysql, postgresql)",
                    "Bases de datos no relacionales (mongo, firebase) & bases de datos vectoriales",
                    "ORM/ODM",
                    "Diagrama ER",
                    "Normalización de datos"
                ],
                typeExtra: [
                    "Diseño y gestión de bases de datos de alta disponibilidad y recuperación ante desastres",
                    "Migración y actualización de bases de datos: Estrategias y mejores prácticas"
                ]
            }
        },
        {
            name: "Implementar tests para garantizar la calidad del software",
            indicator: {
                typeBasic: [
                    "Uso de Test Unitarios",
                    "Uso de Test de Integración",
                    "Uso de TDD"
                ],
                typeExtra: [
                    "Covertura del 80% de código",
                    "Uso de Pruebas de aceptación y validación de funcionalidades (Test de Aceptación del Usuario - UAT)",
                    "Uso de Pruebas de compatibilidad (cross-browser, dispositivos, versiones)"
                ]
            },
            themes: {
                typeBasic: [
                    "Test Unitarios (pytest, unittest)",
                    "Test de Integración",
                    "Test driven development (TDD)",
                ],
                typeExtra: [
                    "Pruebas de integración continua y despliegue continuo (CI/CD)",
                    "Mocking y pruebas con dependencias externas (mockito, pytest-mock WireMock)"
                ]
            }
        },
        // {
        //     name: "Desplegar y gestionar aplicaciones en entornos de nube",
        //     indicator: {
        //         typeBasic: [
        //             "Uso de Docker",
        //             "Uso de un servicio de cloud (Azure, AWS, etc)",
        //             "Uso de plataformas de deployment (render, etc)"
        //         ],
        //         typeExtra: [
        //             "Uso avanzado de herramientas de orquestación de contenedores (Kubernetes, Docker Swarm)",
        //             "Implementación de pipelines CI/CD para automatización de despliegues (Jenkins, GitLab CI, GitHub Actions)",
        //             "Desarrollo de arquitecturas de microservicios con Kafka como backbone de comunicación"

        //         ]
        //     },
        //     themes: {
        //         typeBasic: [
        //             "Introducción a docker (contenedores, imágenes, volúmenes, redes)",
        //             "Despliegue y gestión de microservicios en la nube (Docker Compose)"
        //         ],
        //         typeExtra: [
        //             "Implementación de Kafka en microservicios con Docker y Kubernetes",
        //             "Optimización de costos y gestión de recursos en la nube",
        //             "Cloud Computing",
        //             "HDFS",
        //             "MLOps"
        //         ]
        //     }
        // },
    ]
}

const { weeks, stack, periods, modules, links, title } = bootcampData;

//Generate the roadmap on page load
document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Carga los recursos en la web
    loadSources();
});


function loadSources() {
    setTitle(title);
    setGantt();
    setLinks(links);
    generateAcordion();
}

//Generador de título de la web
function setTitle(title) {
    const titleElement = document.getElementById("nav-title");
    const titleDocument = document.querySelector("title");
    titleElement.textContent = title;
    titleDocument.textContent = title;
}

//Generador de Links
function setLinks(links) {
    const link_buttons = document.querySelectorAll("[data-link]");

    // Itera sobre los botones y asigna los enlaces dinámicamente
    link_buttons.forEach(button => {
        const linkType = button.getAttribute("data-link"); // Obtiene el valor de data-link
        const anchor = button.querySelector("a"); // Encuentra el elemento <a> dentro del botón

        if (links[linkType] && anchor) { // Si hay un enlace asociado y el <a> existe
            anchor.href = links[linkType]; // Asigna el enlace al atributo href
        }

        if (linkType === "googleCalendar") {
            button.setAttribute('src', links[linkType])
        }

    })

}

//Generador del roadmap con el stack
function setGantt() {
    // Generador roadmap dependiendo del número de semanas
    function setWeeksValue(weeksNumber) {
        const weeksInput = document.getElementById("weeks");
        weeksInput.setAttribute("value", weeksNumber);
    }

    //Generador etiquetas roadmap
    function setStackTags(stack) {

        const list_tag_stack = document.querySelector(".list-inline");
        const types = [...new Set(stack.map(item => item.type))];

        function createListItem(item) {
            const listItem = document.createElement("li");
            listItem.classList.add("list-inline-item");
            const badge = document.createElement("span");
            badge.classList.add("badge");


            if (item === "Competencia") {
                badge.classList.add("temas");
                badge.innerHTML = `<i  class="bi bi-lightbulb-fill"></i> competencia`;
            } else if (item === "Course") {
                badge.classList.add("certificate-course");
                badge.innerHTML = `<i class="bi bi-arrow-return-right"></i> <i class="bi bi-bookmark-check"></i> certificado o curso`;
            } else if (item === "Proyecto") {
                badge.classList.add("project");
                badge.innerHTML = `<i class="bi bi-briefcase-fill"></i> | <i class="bi bi-people-fill"></i> project`;
            } else if (item === "Transición") {
                badge.classList.add("transicion");
                badge.innerHTML = `<i class="bi bi-diagram-3-fill"></i> transición-flexible`
            }



            listItem.appendChild(badge);
            return listItem;
        }

        // Generar la lista dinámica
        types.forEach(item => {
            const listItem = createListItem(item);
            list_tag_stack.appendChild(listItem);
        });
    }

    setWeeksValue(bootcampData.weeks);
    setStackTags(stack);

    const weeks = document.getElementById("weeks").value;
    const table = document.getElementById("gantt-table");
    table.innerHTML = "";

    if (modules.length > 0) {
        let moduleHeaderRow = "<tr><th class=''>Módulos</th>";

        modules.forEach(module => {
            let colspan = module.end - module.start + 1;
            moduleHeaderRow += `<th colspan="${colspan}">${module.name}</th>`;
        });
        moduleHeaderRow += "</tr>";
        table.innerHTML += moduleHeaderRow;
    }

    // Meses en el roadmap
    function generateGanttMonths(weeks) {
        let monthHeaderRow = "<tr><th>Meses</th>";
        for (let i = 1; i <= weeks; i += 4) {
            const month = Math.ceil(i / 4);
            let colspan = Math.min(4, weeks - i + 1);
            monthHeaderRow += `<th colspan="${colspan}">Mes ${month}</th>`;
        }

        monthHeaderRow += "</tr>";
        table.innerHTML += monthHeaderRow;
    }
    // generateMonthsGantt(weeks);

    // Semanas en el roadmap
    function generateGanttWeeks(weeks) {
        let weekHeaderRow = "<tr><th>Semanas</th>";
        for (let i = 1; i <= weeks; i++) {
            weekHeaderRow += `<th>${i}</th>`;
        }
        weekHeaderRow += "</tr>";
        table.innerHTML += weekHeaderRow;
    }
    generateGanttWeeks(weeks);

    // Stack en el roadmap
    let lastEnd = 0;
    function generateGanttStack(stack) {
        stack.forEach((item) => {
            let colorClass = "";
            let iconoProject = '<i class="bi bi-briefcase-fill"></i>';
            let iconoCompetencia = '<i class="bi bi-lightbulb-fill"></i>';
            let iconoIntegracion = '<i class="bi bi-diagram-3-fill"></i>';
            let iconCertificate = '<i class="bi bi-arrow-return-right"></i><i class="bi bi-bookmark-check"></i>';
            let icon = '';

            if (item.type === "Proyecto") {
                colorClass = "proyecto";
                item.start = item.start ? item.start : lastEnd + 1;
                item.end = item.end ? item.end : item.start + 2;
                icon = iconoProject;
            } else if (item.type === "Competencia") {
                colorClass = "tema";
                item.start = item.start ? item.start : lastEnd + 1;
                item.end = item.end ? item.end : item.start + 2;
                icon = iconoCompetencia;
            } else if (item.type === "Transición") {
                colorClass = "transicion";
                item.start = item.start ? item.start : lastEnd + 1;
                item.end = item.end ? item.end : item.start + 2;
                icon = iconoIntegracion;

            } else if (item.type === "Course") {
                colorClass = "certificate-course";
                item.start = item.start ? item.start : lastEnd + 1;
                item.end = item.end ? item.end : item.start + 2;
                icon = iconCertificate;
            }

            lastEnd = item.end;

            let row = `<tr><td class="label ${colorClass}">${icon} ${item.name}</td>`;

            for (let i = 1; i <= weeks; i++) {
                if (i >= item.start && i <= item.end) {
                    row += `<td class="block ${colorClass}"></td>`;
                } else {
                    row += `<td class="empty"></td>`;
                }
            }

            row += "</tr>";
            table.innerHTML += row;
        });
    }
    generateGanttStack(stack);


    // Ajustar el ancho del roadmap
    table.style.width = `${weeks * 30 + 260}px`;

}

//Generador de acordeón de competencias
function generateAcordion() {
    // Obtener el contenedor del acordeón
    const accordionContainer = document.getElementById('accordion');
    // Generar dinámicamente el contenido del acordeón
    bootcampData.competencies.forEach((competency, index) => {
        const collapseId = `collapse${index}`;
        const headingId = `heading${index}`;
        const expanded = index === 0 ? 'true' : 'false';
        const showClass = index === 0 ? 'show' : '';

        console.log(competency);

        const accordionItem = `
        <div class="accordion-item">
            <h2 class="accordion-header" id="${headingId}">
                <button class="accordion-button ${index !== 0 ? 'collapsed' : ''}" 
                    type="button" data-bs-toggle="collapse" 
                    data-bs-target="#${collapseId}" 
                    aria-expanded="${expanded}" 
                    aria-controls="${collapseId}">
                    <span><i class="bi bi-lightbulb-fill"></i>  ${competency.name}</span>
                </button>
            </h2>
            <div id="${collapseId}" class="accordion-collapse collapse ${showClass}" aria-labelledby="${headingId}" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <p><strong>Indicadores</strong></p>
                    <ul>
                        ${competency.indicator?.typeBasic?.length > 0 ? `
                        <li>
                            Básicos
                            <ul class="list-inline">
                                ${competency.indicator.typeBasic.map(criterio => `<li class="list-inline-item"><span class="badge badge-soft-success">${criterio}</span></li>`).join('')}
                            </ul>
                        </li>
                        ` : ''}
                        ${competency.indicator?.typeExtra?.length > 0 ? `
                        <li>
                            Extra
                            <ul class="list-inline">
                                ${competency.indicator.typeExtra.map(criterio => `<li class="list-inline-item"><span class="badge badge-soft-danger">${criterio}</span></li>`).join('')}
                            </ul>
                        </li>
                        ` : ''}
                    </ul>
                    ${competency.themes?.typeBasic?.length > 0 ? `<p><strong>Temas</strong></p>` : ''}
                    <ul>
                        ${competency.themes?.typeBasic?.length > 0 ? `
                        <li>
                            Básicos
                            <ul class="list-inline">
                                ${competency.themes.typeBasic.map(pildora => `<li class="list-inline-item"><span class="badge badge-soft-success">${pildora}</span></li>`).join('')}
                            </ul>
                        </li>
                        ` : ''}
                        ${competency.themes?.typeExtra?.length > 0 ? `
                        <li>
                            Extra
                            <ul class="list-inline">
                                ${competency.themes.typeExtra.map(pildora => `<li class="list-inline-item"><span class="badge badge-soft-danger">${pildora}</span></li>`).join('')}
                            </ul>
                        </li>
                        ` : ''}
                    </ul>
                </div>
            </div>
        </div>
`;


        // Insertar el elemento generado en el contenedor
        accordionContainer.innerHTML += accordionItem;
    });
}
