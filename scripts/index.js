(() => {

    

})()



(() => {

    const lastNameInput = document.getElementById("last-name");
    const lastNameElement = document.getElementById("js-last");

    lastNameInput.addEventListener("input", (event) => {
        lastNameElement.textContent = event.target.value;
    })

    const firstNameInput = document.getElementById("first-name");
    const firstNameElement = document.getElementById("js-first");

    firstNameInput.addEventListener("input", (event) => {
        firstNameElement.textContent = event.target.value;
    })

    const subtitleInput = document.getElementById("subtitle");
    const subtitleElement = document.getElementById("js-subtitle");

    subtitleInput.addEventListener("input", (event) => {
        subtitleElement.textContent = event.target.value;
    })

    const dateOfBirthInput = document.getElementById("dob");
    const dateOfBirthElement = document.getElementById("js-dob");

    dateOfBirthInput.addEventListener("input", (event) => {
        dateOfBirthElement.textContent = new Date(event.target.value).toLocaleDateString("vi-VN");
    })

    const addressInput = document.getElementById("address");
    const addressElement = document.getElementById("js-address");

    addressInput.addEventListener("input", (event) => {
        addressElement.textContent = event.target.value;
    })

    const phoneInput = document.getElementById("phone");
    const phoneElement = document.getElementById("js-phone");

    phoneInput.addEventListener("input", (event) => {
        phoneElement.textContent = event.target.value;
    })

    const emailInput = document.getElementById("email");
    const emailElement = document.getElementById("js-email");

    emailInput.addEventListener("input", (event) => {
        emailElement.textContent = event.target.value;
    })

    // SOCIAL

    // OBJECTIVE

    const objectiveContentInput = document.getElementById("objective-content");
    const objectiveContentElement = document.getElementById("js-objective-content");

    objectiveContentInput.addEventListener("input", (event) => {
        objectiveContentElement.textContent = event.target.value;
    })

    // EXPERIENCE

    const workExperienceHeadingInput = document.getElementById("work-experience-heading");
    const workExperienceHeadingElement = document.getElementById("js-work-experience-heading");

    workExperienceHeadingInput.addEventListener("input", (event) => {
        workExperienceHeadingElement.textContent = event.target.value;
    })

    // EDUCATION

    const educationHeadingInput = document.getElementById("education-heading");
    const educationHeadingElement = document.getElementById("js-education-heading");

    educationHeadingInput.addEventListener("input", (event) => {
        educationHeadingElement.textContent = event.target.value;
    })

    // PROJECT

    const projectHeadingInput = document.getElementById("project-heading");
    const projectHeadingElement = document.getElementById("js-project-heading");

    projectHeadingInput.addEventListener("input", (event) => {
        projectHeadingElement.textContent = event.target.value;
    })

    // AWARD

    const awardHeadingInput = document.getElementById("award-heading");
    const awardHeadingElement = document.getElementById("js-award-heading");

    awardHeadingInput.addEventListener("input", (event) => {
        awardHeadingElement.textContent = event.target.value;
    })

    // CERTIFICATE

    const certificateHeadingInput = document.getElementById("certificate-heading");
    const certificateHeadingElement = document.getElementById("js-certificate-heading");

    certificateHeadingInput.addEventListener("input", (event) => {
        certificateHeadingElement.textContent = event.target.value;
    })

})()