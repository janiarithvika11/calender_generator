// Select the button and input fields
const generateBtn = document.getElementById('generateBtn');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const calendarDiv = document.getElementById('calendar');

// Month names
const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

// Days in each month
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Generate calendar on button click
generateBtn.addEventListener('click', () => {
    const month = parseInt(monthInput.value) - 1; // Adjust month index
    const year = parseInt(yearInput.value);

    // Validation
    if (isNaN(month) || isNaN(year) || month < 0 || month > 11) {
        alert('Please enter valid month (1-12) and year');
        return;
    }

    generateCalendar(month, year);
});

// Function to generate the calendar
function generateCalendar(month, year) {
    // Clear previous calendar
    calendarDiv.innerHTML = '';

    // Check for leap year
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    daysInMonth[1] = isLeapYear ? 29 : 28; // Set February days

    // Get the first day of the month (0 = Sunday, 1 = Monday, ...)
    const firstDay = new Date(year, month).getDay();

    // Display month and year
    const monthYearDisplay = document.createElement('div');
    monthYearDisplay.className = 'month-year';
    monthYearDisplay.innerHTML = `<h2>${monthNames[month]} ${year}</h2>`;
    calendarDiv.appendChild(monthYearDisplay);

    // Create the header for weekdays
    const weekdays = ['su','Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    weekdays.forEach(day => {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'day';
        dayDiv.innerText = day;
        calendarDiv.appendChild(dayDiv);
    });

    // Add blank spaces for days before the first day
    for (let i = 0; i < firstDay; i++) {
        const blank = document.createElement('div');
        blank.className = 'date'; // To maintain layout
        calendarDiv.appendChild(blank);
    }

    // Fill in the dates for the month
    for (let i = 1; i <= daysInMonth[month]; i++) {
        const dateDiv = document.createElement('div');
        dateDiv.className = 'date';
        dateDiv.innerText = i;
        calendarDiv.appendChild(dateDiv);
    }
}
