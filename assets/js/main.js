let txt = document.getElementById("txt")
let inhalt = document.getElementById("inhalt")


function show() {
    event.preventDefault();
    switch (txt.value) {
        case "Mar":
            inhalt.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_aries.png" alt=""> <h1>Your horoscope is Aries</h1> <p>Today your patience might be tested when one or more of your projects gets put on hold by someone…</p>`
            break;
        case "Apr":
            inhalt.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_taurus.png" alt=""> <h1>Your horoscope is TAURUS</h1> <p>Your intense energy makes you a great candidate for a leadership position right now, so if you are…</p>`
            break;
        case "May":
            inhalt.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_gemini.png" alt=""> <h1>Your horoscope is GEMINI</h1> <p>If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…</p>`
            break;
        case "Jun":
            inhalt.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_cancer.png" alt=""> <h1>Your horoscope is CANCER</h1> <p>Too many different elements in your life are overlapping with each other right now—and it's your…</p>`
            break;
        case "Jul":
            inhalt.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_leo.png" alt=""> <h1>Your horoscope is LEO</h1> <p>The issues you'll be dealing with today are very complicated ones—you will have to navigate your…</p>`
            break;
        case "Aug":
            inhalt.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_virgo.png" alt=""> <h1>Your horoscope is VIRGO</h1> <p>You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…</p>`
            break;
        case "Sep":
            inhalt.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_libra.png" alt=""> <h1>Your horoscope is LIBRA</h1> <p>Pick a cultural event that's coming up and get some tickets for it today.</p>`
            break;
        case "Oct":
            inhalt.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_scorpio.png" alt=""> <h1>Your horoscope is SCORPIO</h1> <p>Someone will challenge a belief that you've held for a very long time today—and they will say an…</p>`
            break;
        case "Nov":
            inhalt.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_sagittarius.png" alt=""> <h1>Your horoscope is SAGITTARIUS</h1> <p>Someone in your life needs to step up and take on more responsibility—and you need to tell them to....</p>`
            break;
        case "Dec":
            inhalt.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_capricorn.png" alt=""> <h1>Your horoscope is CARICORN</h1> <p>Breaking the rules is not always a bad thing—especially if the rules limit your creativity..</p>`
            break;
        case "Jan":
            inhalt.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_aquarius.png" alt=""> <h1>Your horoscope is AQUARIUS</h1> <p>Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…</p>`
            break;
        case "Feb":
            inhalt.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_pisces.png" alt=""> <h1>Your horoscope is PISCES</h1> <p>Communication is very important today—written, spoken, and even nonverbal body language will all…</p>`
            break;

    }
}