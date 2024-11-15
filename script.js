// script.js

// تاریخ شروع (امروز)
const startDate = new Date();
const daysToAdd = 10;

// محاسبه تاریخ پایان
const endDate = new Date(startDate.getTime() + daysToAdd * 24 * 60 * 60 * 1000);

// به‌روزرسانی تایمر
function updateCountdown() {
    const now = new Date();
    const timeRemaining = endDate - now;

    if (timeRemaining <= 0) {
        document.getElementById("countdown-timer").textContent = "Launched!";
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("countdown-timer").textContent = 
        `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
}

// اجرای تایمر
setInterval(updateCountdown, 1000);
