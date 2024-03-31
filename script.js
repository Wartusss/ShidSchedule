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
      "additionalInfo": "",
      "alternative": false
    },
    {
      "time": "14:40",
      "week": "all",
      "course": "lection",
      "title": "Дисципліна вільного вибору",
      "teacher": "",
      "location": "Онлайн",
      "additionalInfo": "https://telegra.ph/Discipl%D1%96na-v%D1%96lnogo-viboru-studenta-03-08",
      "alternative": false
    },
    //
    {
      "time": "13:05",
      "week": "all",
      "course": "",
      "title": "",
      "teacher": "",
      "location": "",
      "additionalInfo": "",
      "alternative": true
    },
    {
      "time": "14:40",
      "week": "all",
      "course": "lection",
      "title": "Дисципліна вільного вибору",
      "teacher": "",
      "location": "Онлайн",
      "additionalInfo": "https://telegra.ph/Discipl%D1%96na-v%D1%96lnogo-viboru-studenta-03-08",
      "alternative": true
    },
  ],
  "saturday": [
    {},
    ],
  "sunday": [
    {}
    ]
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
days.forEach(day => {
    const dayName = day.dataset.day;
    if (dayName === 'saturday' || dayName === 'sunday') {
        day.style.display = 'none';
    }
});
const scheduleContent = document.querySelectorAll('.schedule-content');
const today = new Date().getDay();
let currentDay = '';
let currentWeek = 'upper';
let isAlternativeMode = false;
const lessonTimes = ["13:05", "14:40", "16:20", "17:55"];
const switchBtn = document.getElementById('switch');
const nightElements = document.querySelectorAll('.container, body');

switchBtn.addEventListener('change', function() {
    if (this.checked) {
        nightElements.forEach(element => {
            element.classList.add('night');
        });
    } else {
        nightElements.forEach(element => {
            element.classList.remove('night');
        });
    }
});

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
        content.style.display = 'none';
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

                    const lessonIndex = lessonTimes.indexOf(timeSlotData.time);
                    if (lessonIndex !== -1) {
                        const timeBar = document.querySelectorAll('.time-bar')[lessonIndex];
                        if (isCurrentTimeSlot(timeSlotData.time)) {
                            timeBar.classList.add('current-time');
                        }
                        scheduleContent[lessonIndex].appendChild(classElement);
                        scheduleContent[lessonIndex].style.display = 'flex';
                    }
                }
            }
        });

        lessonTimes.forEach((time, index) => {
            const timeBar = document.querySelectorAll('.time-bar')[index];
            if (scheduleContent[index].children.length === 0) {
                timeBar.style.display = 'none';
            } else {
                timeBar.style.display = 'block';
            }
        });
    } else {
        scheduleContent.forEach(content => {
            content.style.display = 'none';
        });
    }
}

function isCurrentTimeSlot(time) {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const currentTimeString = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    return currentTimeString === time;
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

const kyivTimeZone = 'Europe/Kiev';

const currentTime = new Date().toLocaleString('en-US', {timeZone: kyivTimeZone});
const currentHour = new Date(currentTime).getHours();
const currentMinute = new Date(currentTime).getMinutes();
const currentTimeInMinutes = currentHour * 60 + currentMinute;

const timePeriods = [
  { start: 13 * 60 + 5, end: 14 * 60 + 25 },
  { start: 14 * 60 + 40, end: 16 * 60 },
  { start: 16 * 60 + 20, end: 17 * 60 + 40 },
  { start: 17 * 60 + 55, end: 19 * 60 + 15 }
];

let highlightedIndex = -1;
for (let i = 0; i < timePeriods.length; i++) {
  const { start, end } = timePeriods[i];
  if (currentTimeInMinutes >= start && currentTimeInMinutes <= end) {
    highlightedIndex = i;
    break;
  }
}

if (highlightedIndex !== -1) {
  const timeBarBlocks = document.querySelectorAll('.time-bar-block');
  timeBarBlocks[highlightedIndex].classList.add('current-time');
}
