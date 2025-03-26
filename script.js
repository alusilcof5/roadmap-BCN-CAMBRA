
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
            name: " Web estática | <i class='bi bi-person-fill'></i>",
            start: 1,
            end: 2,
        },
        {
            type: "Competencia",
            name: "Prototipado ",
            start: 1,
            end: 24,
        },
        {
            type: "Competencia",
            name: "Maquetación ",
            start: 2,
            end: 24,
        },
        {
            type: "Competencia",
            name: "Estilos",
            start: 2,
            end: 24,
        },
        {
            type: "Proyecto",
            name: " Web dinámica | <i class='bi bi-people-fill'></i>",
            start: 3,
            end: 5,
        },
        {
            type: "Competencia",
            name: "Control de versiones",
            start: 3,
            end: 34,
        },
        {
            type: "Competencia",
            name: "Principios de programación",
            start: 4,
            end: 24,
        },
        {
            type: "Competencia",
            name: "Manipulación del DOM y eventos",
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
            name: " Peticiones HTTP",
            start: 6,
            end: 24,
        },
        {
            type: "Proyecto",
            name: " APP React | <i class='bi bi-people-fill'></i>",
            start: 8,
            end: 11,
        },
        {
            type: "Competencia",
            name: "Framework y librerías: Frontend",
            start: 8,
            end: 24,
        },
        {
            type: "Competencia",
            name: "Testing: Frontend",
            start: 9,
            end: 24,

        },

        {
            type: "Proyecto",
            name: " API Express | <i class='bi bi-people-fill'></i>",
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
            name: "Framework y librerías: Backend",
            start: 13,
            end: 24,
        },
        {
            type: "Competencia",
            name: "Testing: Backend y Desarrollo con TDD",
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
            name: " Fullstack | <i class='bi bi-people-fill'></i>",
            start: 17,
            end: 19,
        },
        {
            type: "Competencia",
            name: "Seguridad y Autenticación de Usuarios",
            start: 17,
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
        googleCalendar: "https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FMadrid&src=ZmFjdG9yaWEuZjVfZGV2XzFyZm",
        zoom: "https://us02web.zoom.us/j/84219607621",
        classroom: "https://classroom.google.com/",
        discord: "https://discord.gg/u54GR4D3",
        github: "https://github.com/Factoria-F5-dev"
    },
    competencies: [

       {
         name: "Prototipado web",
        metric: ["Desarrollo del Diseño de producto"],
        indicator: {
            typeBasic: [
                "Uso de la herramienta de diseño Figma",
                "Uso de wireframes",
                "Uso de diseño responsivo",
                "Uso de prototipado de alta fidelidad",
            ],
            typeExtra: [
                "Uso de diseño de experiencia de usuario (UX)",
                "Uso de diseño de interfaz de usuario (UI)",
                "Uso de diseño de interacción",
            ],
                           
        },
        themes: {
            typeBasic: [
                "Introduccion al diseño y prototipado web con Figma",
                "Introduccion a UX/UI",
                "Diseño responsivo y atomic design",

            ],
            typeExtra: [
                "Estudio de usuario (UX)",
                "Accesibilidad web",
                "Prototipado interactivo",
            ],

            }
        },
        {
            name: "Maquetación y Diseño web",
            indicator: {
                typeBasic: [
                    "Uso de HTML",
                    "Uso de etiquetas semánticas",
                    "Uso de CSS",
                    "Uso de Flexbox",
                    "Uso de Grid",
                    "Uso de Media queries",
                    "Uso de Diseño responsive",
                    
                ],
                typeExtra: [
                    "Uso de Preprocesadores",
                    "Uso de Tailwind",
                    "Uso de Diseño web accesible",
                ],
            },
            themes: {
                typeBasic: [
                    "introducción a maquetación web: HTML semántico",
                    "introducción al estilo web: Pilares de CSS",
                    "Contenedores: Flexbox y Grid",
                    "Diseño responsive: Media queries",
                ],
                typeExtra: [
                    "Preprocesadores",
                    "Tailwind",
                    "Diseño web accesible",
                ]
            }
        },
        {
            name: "Control de versiones",
            indicator: {
                typeBasic: [
                    "Uso de git",
                    "Uso de github",
                    "Uso de gitflow",
                    "Uso de commits descriptivos",
                    "Uso de ramas",
                    "Uso de nomenclatura en commits",
                    "Uso de nomenclatura en ramas",
                ],
                typeExtra: [
                    "Uso de conventional commits",
                    "Uso de issues y pull requests",
                    "Uso de etiquetas",
                ]
            },
        },
        {
            name: ["Bases de programación"],
            indicator: {
                typeBasic: [
                    "Deteccion de tipos de datos",
                    "Uso palabras reservadas",
                    "Uso de operadores",
                    "Uso de controladores de flujo",
                    "Uso de estructuras de datos",
                    "Uso de la consola",
                    "Uso de Funciones",
                    "Uso del formato JSON",
                   // "Manejo de errores (cláusula try/except)",
                    "Uso de POO (Programación Orientada a Objetos)",
                
                ],
                typeExtra: [
                    "Uso de los principios de programación y convenciones",
                    "Uso de librerías externas",
                    "Documentación de código",
                ]
            },
            themes: {
                typeBasic: [
                    "Introducción a JavaScript (tipos de datos, variables, operadores, estructuras de control)",
                    "Manipulación del DOM",
                    "Eventos",
                    "Funciones",
                    "POO (Programación Orientada a Objetos)",
                    "Manejo de errores",
                    "Librerías externas",
                ],
                typeExtra: [
                    "Web components",
                    "Documentación de código",
                    "Manejo de logs",
                ]
            }
        },
        {
            name: "Peticiones HTTP",
            indicator: {
                typeBasic: [
                    "Uso de Fetch",
                    "Uso de Promesas",
                    "Uso de asincronismo",
                    "Uso de métodos HTTP",
                    "Uso de APIs",
                    "Uso de JSON",
                    "Uso de variables de entorno",
                    "Uso de manejo de errores",
                ],
                typeExtra: [
                    "Uso de Axios",
                    "Uso de cookies",
                    "Uso de localStorage",
                ]
            },
            themes: {
                typeBasic: [
                    "Fetch y promesas: asincronia en Js",
                    "Métodos HTTP",
                    "Formato JSON",
                    "Json Server y Postman",
                    "APIs",
                ],
                typeExtra: [
                    "Axios",
                    "Cookies y localStorage",
                ]
            }
        },
        {
            name: "Testing para garantizar la calidad del software",
            indicator: {
                typeBasic: [
                    "Uso de Test Unitarios",
                    "Uso de Test de Integración",
                    "Uso de TDD"
                ],
                typeExtra: [
                    "Manejo de la covertura de código",
                ]
            },
            themes: {
                typeBasic: [
                    "Test Unitarios (jest, vitest)",
                    "Test de Integración (supertest)",
                    "Test driven development (TDD)",
                ],
                typeExtra: [
                    "Mocking y pruebas con dependencias externas",
                    "testing E2E",
                ]
            }
        },
        {
            name: "Desarrollo de aplicaciones Frontend",
            indicator: {
                typeBasic: [
                    "Uso de React",
                    "Uso de una buena estructuración de carpetas",
                    "Uso de una buena componetización", 
                    "Uso de props",
                    "Uso de React Hooks useSatate, useEffect",
                    "Uso de React Router",
                    "Uso de Contexto",
                    "Uso de React Testing Library",
                    "Uso de apis externas para la gestión de datos",
                    "Uso de Axios",
                    "Uso de variables de entorno",
                ],
                typeExtra: [
                    "Uso de Zustand",
                    "Uso de Next.js",
                    "Uso de Storybook",
                    "Uso de TypeScript",
                    "Uso de una librería de estilos (taildwind, material-ui)",
                ],
            },
            themes: {
                typeBasic: [
                    "Introducción a React",
                    "Componentes y Props",
                    "Hooks",
                    "Router",
                    "Context",
                    "Testing",
                    "APIs",
                ],
                typeExtra: [
                    "Zustand",
                    "Next.js",
                    "Storybook",
                    "TypeScript",
                    "Librerías de estilos",
                ]
            }
        },
        {
            name: "Diseñar y gestionar bases de datos de manera eficiente",
            indicator: {
                typeBasic: [
                    "Uso de Modelado de datos",
                    "Uso del lenguaje SQL",
                    "Uso de bases de datos relacionales",
                ],
                typeExtra: [
                    "Uso de bases de datos no relacionales",
                    "Implementación de técnicas de seguridad en bases de datos",
                ]
            },
            themes: {
                typeBasic: [
                    "Bases de datos relacionales (sql, mysql, postgresql)",
                    "ORM",
                    "Diagrama ER",
                ],
                typeExtra: [
                    "Bases de datos no relacionales (mongoDB)",
                    "Seguridad en bases de datos",
                    "Migración y actualización de bases de datos: Estrategias y mejores prácticas"
                ]
            }
        },
        {
            name: "Desarrollo de aplicaciones Backend",
            indicator: {
                typeBasic: [
                    "Uso de typeScript",
                    "Uso de Framework Express",
                    "Uso de una buena estructuración de carpetas",
                    "Uso de middlewares",
                    "Uso de rutas",
                    "Uso de controladores",
                    "Uso de servicios",
                    "Uso de bases de datos",
                    "Uso de ORM",
                    "Uso de Validadores",
                    "Uso de variables de entorno",
                    "Uso de manejo de errores",
                    "Uso de Testing",
                    "Uso de Documentación",
                ],

                },
            themes: {
                typeBasic: [
                    "Bases de datos relacionales",
                    "Introducción a Express",
                    "Middlewares",
                    "Rutas, Controladores, Modelos y Servicios",
                    "ORM, Validadores y manejo de errores",
                    "Testing",
                    "Documentación",
                ],
                typeExtra: [
                    "Bases de datos no relacionales",
                    "Documentación",
                    "Manejo de logs",
                ]
            },
        },
        {
            name: "Desarrollo Fullstack: Seguridad y Autenticación de Usuarios",
            indicator: {
                typeBasic: [
                    "Uso de una buena estructuración de carpetas",
                    "Uso de una buena documentacion y naming",
                    "Uso de encriptación de contraseñas",
                    "Uso de tokenización",
                    "Uso de gestión de sesiones",
                    "Uso de variables de entorno",
                    "Uso de manejo de errores",

                ],
                typeExtra: [
                    "Uso de Zustand",
                    "Uso de despliegue de aplicaciones",
                    "Uso de Next.js",
                    "Uso de Storybook",
                    "Uso de TypeScript",
                    "Uso de testing E2E",
                ],
            },
            themes: {
                typeBasic: [
                    "Encriptación y tokenización: bcrypt y JWT",
                    "Gestión de sesiones, Contexto Y localStorage",
                    "Variables de entorno y manejo de errores",
                    "Documentación",
                ],
                typeExtra: [
                    "Zustand",
                    "Despliegue de aplicaciones",
                    "Next.js",
                    "Storybook",
                    "TypeScript",
                    "Testing E2E",
                ]
            }

        },
        // 
        // 
        {
            name: "Automatización de procesos de desarrollo",
            indicator: {
                typeBasic: [
                    "Uso de Docker",
                    "Uso de Docker Compose",
                    "Uso de Github Actions CI, CD",
                    "Uso de Integración de Docker con Github Actions",
                ],
                typeExtra: [
                    "Uso de Implementación de Kafka en microservicios con Docker y Kubernetes",
                    "Uso de Optimización de costos y gestión de recursos en la nube",
                ]
            },
                themes: {
                typeBasic: [
                    "Introducción a docker (contenedores, imágenes, volúmenes, redes)",
                    "Despliegue y gestión de microservicios en la nube (Docker Compose)",
                    "Github Actions CI, CD",
                    "Integración de Docker con Github Actions",
                ],
                typeExtra: [
                    "Implementación de Kafka en microservicios con Docker y Kubernetes",
                    "Optimización de costos y gestión de recursos en la nube",
                ]
            }
        },
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
        }
        
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

            let row = `<tr><td class="label ${colorClass} stack-col">${icon} ${item.name}</td>`;

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
