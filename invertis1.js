let btn = document.getElementById("admission1");
let admissionBox = document.getElementById("admission");
let footer = document.querySelector(".footer");

btn.addEventListener("click", function () {
    admissionBox.classList.toggle("active");
    admissionBox.style.display = "block";
    academicbox.style.display = "none";
    fees.style.display = "none";
    application.style.display = "none";
    //   footer.style.display="none";

    // button text toggle
    //   if (admissionBox.classList.contains("active")) {
    //     btn.textContent = "Admission";
    //   } else {
    //     btn.textContent = "Admission";
    //   }
});

let btn1 = document.getElementById("academic1");
let academicbox = document.getElementById("academic2");
btn1.addEventListener("click", function () {
    academicbox.classList.toggle("active");
    academicbox.style.display = "block";
    admissionBox.style.display = "none";
    fees.style.display = "none";
    application.style.display = "none";
    if (academicbox.classList.contains("active")) {
        btn1.textContent = "Academic";
    } else {
        btn1.textContent = "Academic";
    }
});
let header = document.querySelector(".core1");
let body = document.querySelector(".course_detail");
let icon = document.querySelector(".icon");
header.addEventListener("click", () => {
    if (body.style.display === "block") {
        body.style.display = "none";
        icon.textContent = "+";
    }
    else {
        body.style.display = "block";
        icon.textContent = "-";
    }
});
let header1 = document.querySelector(".elective1");
let body1 = document.querySelector(".elective_detail");
let icon1 = document.querySelector(".icon");
header1.addEventListener("click", () => {
    if (body1.style.display === "block") {
        body1.style.display = "none";
        icon1.textContent = "+";
    }
    else {
        body1.style.display = "block";
        icon1.textContent = "-";
    }
});
let feesBtn = document.getElementById("fees1");
let fees = document.getElementById("fees");
feesBtn.addEventListener("click", function () {
    fees.classList.toggle("active");
    fees.style.display = "block";
    admissionBox.style.display = "none";
    academicbox.style.display = "none";
    application.style.display = "none";
});
let applicationBtn = document.getElementById("application1");
let application = document.getElementById("application");
applicationBtn.addEventListener("click", () => {
    application.classList.toggle("active");
    application.style.display = "block";
    admissionBox.style.display = "none";
    academicbox.style.display = "none";
    fees.style.display = "none";
});