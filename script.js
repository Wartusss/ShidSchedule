const scheduleData = {
  "monday": [
    {
      "time": "13:05",
      "week": "all",
      "course": "",
      "title": "",
      "teacher": "",
      "location": "",
      "additionalInfo": ""
    },
    {
      "time": "14:40",
      "week": "all",
      "course": "language",
      "title": "Турецька та китайська мови: базовий рівень",
      "teacher": "Нікітюк Т. В. / Козоріз О. П. ",
      "location": "441 / 442 аудиторія",
      "additionalInfo": ""
    },
    {
      "time": "16:20",
      "week": "all",
      "course": "lection",
      "title": "Нова історія країн Азії та Африки",
      "teacher": "Шевченко Н. І.",
      "location": "457 аудиторія",
      "additionalInfo": ""
    },
    {
      "time": "17:55",
      "week": "all",
      "course": "seminar",
      "title": "Нова історія країн Азії та Африки",
      "teacher": "Шевченко Н. І.",
      "location": "457 аудиторія",
      "additionalInfo": ""
    },
  ],
  "tuesday": [
    {
      "time": "13:05",
      "week": "all", 
      "course": "",
      "title": "",
      "teacher": "",
      "location": "",
      "additionalInfo": ""
    },
    {
      "time": "14:40",
      "week": "all",
      "course": "seminar",
      "title": "Історія українського та зарубіжного китаєзнавства",
      "teacher": "Урусов В. Б.",
      "location": "460 аудиторія",
      "additionalInfo": ""
    },
    {
      "time": "16:20",
      "week": "all",
      "course": "language",
      "title": "Турецька та китайська мови: базовий рівень",
      "teacher": "Нікітюк Т. В. / Козоріз О. П. ",
      "location": "438 / 442 аудиторія",
      "additionalInfo": ""
    },
    {
      "time": "17:55",
      "week": "upper",
      "course": "lection",
      "title": "Історія українського та зарубіжного китаєзнавства",
      "teacher": "Урусов В. Б.",
      "location": "460 аудиторія",
      "additionalInfo": ""
    },
  ],
  "wednesday": [
    {
      "time": "13:05",
      "week": "all",
      "course": "",
      "title": "",
      "teacher": "",
      "location": "",
      "additionalInfo": ""
    },
    {
      "time": "14:40",
      "week": "all",
      "course": "language",
      "title": "Англійська",
      "teacher": "Цупрун Т. В.",
      "location": "440 аудиторія",
      "additionalInfo": ""
    },
    {
      "time": "16:20",
      "week": "all",
      "course": "language",
      "title": "Турецька та китайська мови: базовий рівень",
      "teacher": "Нікітюк Т. В. / Козоріз О. П. ",
      "location": "346 / 435 аудиторія",
      "additionalInfo": ""
    },
    {
      "time": "17:55",
      "week": "upper",
      "course": "language",
      "title": "Турецька та китайська мови: базовий рівень",
      "teacher": "Нікітюк Т. В. / Козоріз О. П. ",
      "location": "438 / 442 аудиторія",
      "additionalInfo": ""
    },
  ],
  "thursday": [
    {
      "time": "13:05",
      "week": "all",
      "course": "",
      "title": "",
      "teacher": "",
      "location": "",
      "additionalInfo": ""
    },
    {
      "time": "14:40",
      "week": "all",
      "course": "lection",
      "title": "Джерела до історії Сходу",
      "teacher": "Урусов В. Б. / Люлька В. А.",
      "location": "440 аудиторія",
      "additionalInfo": ""
    },
    {
      "time": "16:20",
      "week": "upper",
      "course": "seminar",
      "title": "Джерела до історії Сходу",
      "teacher": "Урусов В. Б. / Люлька В. А.",
      "location": "440 аудиторія",
      "additionalInfo": ""
    }
  ],
  "friday": [
    {
      "time": "13:05",
      "week": "all",
      "course": "",
      "title": "",
      "teacher": "",
      "location": "",
      "additionalInfo": ""
    },
    {
      "time": "14:40",
      "week": "all",
      "course": "lection",
      "title": "Дисципліна вільного вибору",
      "teacher": "",
      "location": "Онлайн",
      "additionalInfo": "https://telegra.ph/Discipl%D1%96na-v%D1%96lnogo-viboru-studenta-03-08"
    },

  ],

  };

const parameterIcons = {
  "teacher": "<i class='fas fa-user-tie'></i>&nbsp;",
  "location": "<i class='fas fa-map-marker-alt'></i>&nbsp;"
};

const courseNames = {
  "lection": "Лекція",
  "seminar": "Семінар",
  "language": "Мова"
};

const days = document.querySelectorAll('.day');
const scheduleContent = document.querySelectorAll('.schedule-content');
const today = new Date().getDay();
let currentDay = '';
let currentWeek = 'upper';
let isAlternativeMode = false;
const lessonTimes = ["13:05", "14:40", "16:20", "17:55"];

function openInDefaultBrowser(url) {
    if (window.location.href.startsWith('file://')) {
        window.open(url, '_system');
    } else {
        window.location.href = url;
    }
}

function displaySchedule(day) {
    scheduleContent.forEach(content => {
        content.innerHTML = '';
    });
    const dayData = scheduleData[day];
    if (dayData) {
        dayData.forEach(timeSlotData => {
            if ((day !== 'sunday' && day !== 'saturday') && ((timeSlotData.week === 'all' || timeSlotData.week === currentWeek) && ((!isAlternativeMode && !timeSlotData.alternative) || (isAlternativeMode && timeSlotData.alternative)))) {
                if (timeSlotData.course) {
                    const classElement = document.createElement('div');
                    classElement.classList.add('class');
                    const courseTitle = document.createElement('strong');
                    courseTitle.textContent = courseNames[timeSlotData.course];
                    courseTitle.dataset.course = timeSlotData.course;
                    classElement.appendChild(courseTitle);
                    const title = document.createElement('p');
                    const titleText = document.createElement('span');
                    titleText.textContent = timeSlotData.title;
                    title.appendChild(titleText);
                    titleText.style.fontWeight = 'bold';
                    classElement.appendChild(title);

                    Object.keys(parameterIcons).forEach(parameter => {
                      if (timeSlotData[parameter]) {
                          const icon = document.createElement('span');
                          icon.innerHTML = parameterIcons[parameter];
                          const parameterValue = document.createElement('span');
                          parameterValue.textContent = timeSlotData[parameter];
                          const parameterElement = document.createElement('p');
                          parameterElement.appendChild(icon);
                          parameterElement.appendChild(parameterValue);
                          if (parameter === 'location' || parameter === 'additionalInfo') {
                              parameterElement.style.marginBottom = '20px';
                          }
                          classElement.appendChild(parameterElement);
                      }
                    });

                    if (timeSlotData.additionalInfo && timeSlotData.additionalInfo.includes('https')) {
                        const additionalInfo = document.createElement('button');
                        additionalInfo.textContent = 'Посилання';
                        additionalInfo.classList.add('additional-info-button');
                        additionalInfo.addEventListener('click', () => openInDefaultBrowser(timeSlotData.additionalInfo));
                        classElement.appendChild(additionalInfo);
                        title.style.marginBottom = '10px';
                    }
                    scheduleContent.forEach((content, index) => {
                        if (lessonTimes[index] === timeSlotData.time) {
                            content.appendChild(classElement);
                        }
                    });
                }
            }
        });
    }
}

days.forEach(day => {
    day.addEventListener('click', () => {
        days.forEach(d => d.classList.remove('active'));
        day.classList.add('active');
        currentDay = day.dataset.day;
        displaySchedule(currentDay);
    });
});

document.getElementById('upper-week').addEventListener('click', () => {
  currentWeek = 'upper';
  scheduleContent.forEach(content => content.innerHTML = '');
  displaySchedule(currentDay);
  document.getElementById('upper-week').classList.add('active');
  document.getElementById('lower-week').classList.remove('active');
});

document.getElementById('lower-week').addEventListener('click', () => {
  currentWeek = 'lower';
  scheduleContent.forEach(content => content.innerHTML = '');
  displaySchedule(currentDay);
  document.getElementById('lower-week').classList.add('active');
  document.getElementById('upper-week').classList.remove('active');
});

document.getElementById('normal-mode').addEventListener('click', () => {
  if (isAlternativeMode) {
    isAlternativeMode = false;
    displaySchedule(currentDay);
    document.getElementById('normal-mode').classList.add('active');
    document.getElementById('alternative-mode').classList.remove('active');
  }
});


document.getElementById('alternative-mode').addEventListener('click', () => {
  if (!isAlternativeMode) {
    isAlternativeMode = true;
    displaySchedule(currentDay);
    document.getElementById('alternative-mode').classList.add('active');
    document.getElementById('normal-mode').classList.remove('active');
  }
});

const resetActiveDay = () => {
  days.forEach(d => d.classList.remove('active'));
};

const upperWeekButton = document.getElementById('upper-week');
const lowerWeekButton = document.getElementById('lower-week');

upperWeekButton.addEventListener('click', () => {
  if (currentWeek !== 'upper') {
    currentWeek = 'upper';
    scheduleContent.forEach(content => content.innerHTML = '');
    displaySchedule(currentDay);
    upperWeekButton.classList.add('active');
    lowerWeekButton.classList.remove('active');
  }
});

lowerWeekButton.addEventListener('click', () => {
  if (currentWeek !== 'lower') {
    currentWeek = 'lower';
    scheduleContent.forEach(content => content.innerHTML = '');
    displaySchedule(currentDay);
    lowerWeekButton.classList.add('active');
    upperWeekButton.classList.remove('active');
  }
});

window.addEventListener('DOMContentLoaded', (event) => {
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            if (navigator.userAgent.includes('iPhone') || navigator.userAgent.includes('Android')) {
                window.open(link.href, '_system');
            } else {
                window.open(link.href, '_blank');
            }
        });
    });
});

if (today === 0) {
  const currentDayElement = days[6];
  resetActiveDay();
  currentDayElement.classList.add('active');
  currentDay = currentDayElement.dataset.day;
  displaySchedule(currentDay);
} else {
  const currentDayElement = days[today - 1];
  resetActiveDay();
  currentDayElement.classList.add('active');
  currentDay = currentDayElement.dataset.day;
  displaySchedule(currentDay);
}
