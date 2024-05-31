function showDate() {
    let out = document.getElementById('current-date-ru');
    let today = new Date();
    out.innerHTML = today.toLocaleString('ru-RU');

    let out1 = document.getElementById('current-date-en');
    let today1 = new Date();
    out1.innerHTML = today1.toLocaleString('en-US');

    let out2 = document.getElementById('current-date-de');
    let today2 = new Date();
    out2.innerHTML = today2.toLocaleString('de-DE');

    let out3 = document.getElementById('current-date-fr');
    let today3 = new Date();
    out3.innerHTML = today3.toLocaleString('fr-FR');

    let out4 = document.getElementById('current-date-ja');
    let today4 = new Date();
    out4.innerHTML = today4.toLocaleString('ja-JP');

    let out5 = document.getElementById('current-date-es');
    let today5 = new Date();
    out5.innerHTML = today5.toLocaleString('es-ES');
}