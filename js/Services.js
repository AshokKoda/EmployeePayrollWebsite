window.addEventListener('DOMContentLoaded', (event) => {

    validateName();
    salaryRange();
})

function validateName() {
    const name = document.querySelector('#name');
    const nameError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        const nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name.value)){
            nameError.textContent = "";
        }else{
            nameError.textContent = "Name is incorrect";
        }
    });
}

function salaryRange() {
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function () {
        output.textContent = salary.value;
    });
}