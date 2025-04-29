export function formatTime(seconds) {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
}

export function parseTime(formattedTime) {
    if (formattedTime == "") {
        return 0;
    }
    const [hours, minutes, seconds] = formattedTime.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds;
}