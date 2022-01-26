window.addEventListener('DOMContentLoaded', () => {
    createInnerHTML();
})

const createInnerHTML = () => {
    const innerHtml = `
    <tr>
        <th></th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Actions</th>
    </tr>

    <tr>
        <td>
            <img class="profile" alt="profileImage" src="../assets/profile-images/Ellipse -1.png">
        </td>
        <td>Koda Ashok</td>
        <td>Male</td>
        <td>
            <div class="dept-label">HR</div>
            <div class="dept-label">Engineer</div>
        </td>
        <td>400000</td>
        <td> 1 Jan 2022</td>
        <td>
            <img alt="edit" src="../assets/icons/create-black-18dp.svg">
            <img alt="delete" src="../assets/icons/delete-black-18dp.svg">
        </td>
    </tr>
    `;



    document.querySelector('#display').innerHTML = innerHtml;
}