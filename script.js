
// Data
const bootcampData = {
    title: "Iniciación a la programación FrontEnd",
    weeks: 6,
    modules: [
        { name: "Semana 1" },
        { name: "Semana 2" },
        { name: "Semana 3" },
        { name: "Semana 4" },
        { name: "Semana 5" },
        { name: "Semana 6" },
    ],
    stack: [
        {
            "type": "Proyecto",
            "name": "Web estática | <i class='bi bi-person-fill'></i>",
            
        },
        {
            "type": "Competencia",
            "name": "HTML, Git y GitHub, CSS - Estilizando tu página web",
           
        },
        {
            "type": "Proyecto",
            "name": "Proyecto Final de HTML y CSS",
            "start": 2,
            "end": 2
        },

        {
            "type": "Competencia",
            "name": "Modelo de Caja y Layout Básico, Flexbox, Diseño Responsivo - Viewport y Media Queries",
            "start": 3,
            "end": 3
        },
        {
            "type": "Competencia",
            "name": "Introducción a Figma y Diseño de Interfaz",
            "start": 3,
            "end": 3
        },
        {
            "type": "Competencia",
            "name": "Diseño Responsivo con Figma y Componentes",
            "start": 3,
            "end": 3
        },
        {
            "type": "Competencia",
            "name": "Revisión y Técnicas de CSS",
            "start": 3,
            "end": 3
        },
        {
            "type": "Proyecto",
            "name": "Proyecto Final de HTML y CSS",
            "start": 3,
            "end": 3
        },
        {
            "type": "Competencia",
            "name": "Introducción a las Buenas Prácticas de Desarrollo Web",
            "start": 2,
            "end": 2
        },
        {
            "type": "Competencia",
            "name": "Herramientas para Desarrolladores y Optimización",
            "start": 2,
            "end": 2
        },
        {
            "type": "Competencia",
            "name": "Preparación para JavaScript - Conceptos Fundamentales de Programación",
            "start": 5,
            "end": 5
        },
        {
            "type": "Competencia",
            "name": "Primeros Pasos con JavaScript, Estructuras de Control en JavaScript",
            "start": 5,
            "end": 5
        },
        {
            "type": "Competencia",
            "name": "Funciones en JavaScript",
            "start": 5,
            "end": 5
        },
        {
            "type": "Competencia",
            "name": "Introducción a la Manipulación del DOM",
            "start": 5,
            "end": 5
        },
        {
            "type": "Competencia",
            "name": "Eventos en JavaScript - Interactividad Básica",
            "start": 5,
            "end": 5
        },
        {
            "type": "Proyecto",
            "name": "Proyecto Final - Planificación e Inicio",
            "start": 6,
            "end": 6
        },
        
        {
            "type": "Competencia",
            "name": "Revisión del Proyecto Final",
            "start": 6,
            "end": 6
        },
        {
            "type": "Competencia",
            "name": "Presentación Final de Proyectos y Feedback",
            "start": 6,
            "end": 6
        },
        {
            "type": "Competencia",
            "name": "Siguientes Pasos y Recursos para Continuar Aprendiendo",
            "start": 6,
            "end": 6
        },
        
    ],
    

        "competencias": [
          {
            "id": 1,
            "nombre": "Trabajo en equipo",
            "descripcion": "Desarrollar proyectos en equipo, colaborando y compartiendo responsabilidades."
          },
          {
            "id": 2,
            "nombre": "Desarrollo práctico",
            "descripcion": "Aplicar conocimientos en proyectos reales mediante la metodología 'learning by doing'."
          },
          {
            "id": 3,
            "nombre": "Evaluación continua",
            "descripcion": "Evaluación constante a través de feedback en proyectos individuales y grupales."
          },
          {
            "id": 4,
            "nombre": "Resolución de problemas",
            "descripcion": "Capacidad para identificar problemas en los proyectos y ofrecer soluciones efectivas."
          },
          {
            "id": 5,
            "nombre": "Comunicación efectiva",
            "descripcion": "Exposición clara de ideas en presentaciones de proyectos y defensa ante preguntas específicas."
          },
          {
            "id": 6,
            "nombre": "Gestión de proyectos",
            "descripcion": "Planificación y ejecución de proyectos dentro de un marco de tiempo específico."
          },
          {
            "id": 7,
            "nombre": "Desarrollo de habilidades técnicas",
            "descripcion": "Adquirir competencias en programación, HTML, CSS y JavaScript."
          },
          {
            "id": 8,
            "nombre": "Competencias transversales",
            "descripcion": "Desarrollo de habilidades complementarias como liderazgo, trabajo bajo presión y adaptabilidad."
          },
          {
            "id": 9,
            "nombre": "Autoevaluación y mejora continua",
            "descripcion": "Reflexión y evaluación personal para mejorar en aspectos técnicos y de trabajo en equipo."
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

document.addEventListener("DOMContentLoaded", function () {
    const accordionContainer = document.getElementById("accordion");
  
    bootcampData.competencias.forEach((item, index) => {
      const accordionItem = document.createElement("div");
      accordionItem.className = "accordion-item";
  
      accordionItem.innerHTML = `
        <h2 class="accordion-header" id="heading${index}">
          <button class="accordion-button ${index !== 0 ? 'collapsed' : ''}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="collapse${index}">
            ${item.nombre}
          </button>
        </h2>
        <div id="collapse${index}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" aria-labelledby="heading${index}" data-bs-parent="#accordion">
          <div class="accordion-body">
            ${item.descripcion}
          </div>
        </div>
      `;
  
      accordionContainer.appendChild(accordionItem);
    });
  });
  

 