let employeePayrollList;
window.addEventListener('DOMContentLoaded', () => {
    employeePayrollList = getEmployeeDataFromStorage();
    document.querySelector('.emp-count').textContent = employeePayrollList.length;
    createInnerHTML();
})

const getEmployeeDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList')
        ? JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}

const createInnerHTML = () => {
    // let employeePayrollList = createEmployeePayrollJson();
    const headerHtml = `
    <tr>
        <th>ID'S</th>
        <th>Profile</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Actions</th>
    </tr>`;

    let innerHtml = `${headerHtml}`;
    // const innerHtml = ` ${headerHtml}
    for (const employeePayrollData of employeePayrollList) {
        innerHtml = `${innerHtml}
        <tr>
        <td>${employeePayrollData._id}</td>
        <td>
            <img class="profile" alt="profileImage" src="${employeePayrollData._profilePic}">
        </td>
        <td>${employeePayrollData._name}</td>
        <td>${employeePayrollData._gender}</td>
        <td>
            ${getDeptHtml(employeePayrollData._department)}
        </td>
        <td>${employeePayrollData._salary}</td>
        <td>${stringifyDate(employeePayrollData._startDate)}</td>
        <td>
            <img id="${employeePayrollData._id}" alt="edit" src="../assets/icons/create-black-18dp.svg" onClick=update(this)>
            <img id="${employeePayrollData._id}" alt="delete" src="../assets/icons/delete-black-18dp.svg" onClick=remove(this)>
        </td>
    </tr>`;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}

const createEmployeePayrollJson = () => {
    let employeePayrollList = [
        {
            "id": 1,
            "_name": "Mark",
            "_gender": "male",
            "_department": [
                "Finance"
            ],
            "_salary": "500000",
            "_startDate": 1572287400000,
            "_note": "All In One",
            "_profilePic": "../assets/profile-images/Ellipse -3.png"
        },
        {
            "id": 2,
            "_name": "Bill",
            "_gender": "male",
            "_department": [
                "Engineering"
            ],
            "_salary": "500000",
            "_startDate": "29 Oct 2019",
            "_note": "Terrific Engineer",
            "_profilePic": "../assets/profile-images/Ellipse -1.png"
        },
        {
            "_name": "Keerthi",
            "_gender": "female",
            "_department": [
                "Sales"
            ],
            "_salary": "400000",
            "_startDate": "29 Oct 2019",
            "_note": "",
            "_profilePic": "../assets/profile-images/Ellipse -1.png",
            "id": 3
        },
        {
            "_name": "Kavya",
            "_profilePic": "../assets/profile-images/Ellipse -1.png",
            "_gender": "female",
            "_department": [
                "Finance",
                "Engineer"
            ],
            "_salary": "428100",
            "_note": "                ",
            "_startDate": 1621189800000,
            "id": 5
        }
    ];
    return employeePayrollList;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class="dept-label">${dept}</div>`
    }
    return deptHtml;
}

//Remove row
const remove = (data) => {
    let employeeData = employeePayrollList.find(empData => empData._id == data.id);
    if (!employeeData)
        return;
    const index = employeePayrollList.map(empData => empData._id).indexOf(employeeData._id);
    employeePayrollList.splice(index, 1);
    localStorage.setItem('EmployeePayrollList', JSON.stringify(employeePayrollList));
    document.querySelector('.emp-count').textContent = employeePayrollList.length;
    createInnerHTML();
}

//Update Row
const update = (data) => {
    let employeeData = employeePayrollList.find(empData => empData._id == data.id);
    if (!employeeData)
        return;
    localStorage.setItem('edit-emp', JSON.stringify(employeeData));
    window.location.replace(site_properties.addEmployee);
}