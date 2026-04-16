// Tunggu halaman siap
document.addEventListener("DOMContentLoaded", function () {

    // Ambil tombol Save Calendar
    const btnCalendar = document.querySelector(".fa-calendar-check")?.closest("button");

    if (btnCalendar) {
        btnCalendar.addEventListener("click", function () {

            // =========================
            // DATA EVENT (UBAH DI SINI)
            // =========================
            const title = "Wedding of Wawan & Vera";
            const description = "Undangan Pernikahan Wawan & Vera";
            const location = "RT 10 RW 02, Desa Pajerukan, Kalibagor, Banyumas";
            
            // Format waktu (YYYYMMDDTHHmmssZ)
            const startDate = "20260315T030000Z"; // 10:00 WIB
            const endDate   = "20260315T070000Z"; // 14:00 WIB

            // =========================
            // GENERATE LINK GOOGLE CALENDAR
            // =========================
            const url = `https://calendar.google.com/calendar/render?action=TEMPLATE
            &text=${encodeURIComponent(title)}
            &dates=${startDate}/${endDate}
            &details=${encodeURIComponent(description)}
            &location=${encodeURIComponent(location)}`;

            // Buka Google Calendar
            window.open(url, "_blank");
        });
    }

});