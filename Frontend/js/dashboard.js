//------------------------  Check login session
const username = sessionStorage.getItem("username");

//-------------------------- Redirect if not logged in
if(!username){

    window.location.href = "login.html";
}

//---------------------------- Get logged-in user details from sessionStorage

const role = sessionStorage.getItem("role");

//-------------------------- Print values in console for testing
console.log(username);
console.log(role);

//---------------  Display username in navbar
document.getElementById("navUsername").innerText = username;


//----------------  Display username in welcome section
document.getElementById("welcomeUser").innerText = username;


//---------------  Display role badge
document.getElementById("userRoleBadge").innerHTML = `
    <i class="bi bi-shield-check me-1"></i> ${role}
`;

//------------------  Get logged-in userId
const userId = sessionStorage.getItem("userId");

//------------------ Show loading spinner
document.getElementById("tableSpinnerArea")
        .classList.remove("d-none");

//------------------- Fetch records from backend API
fetch(`http://localhost:8080/records/${userId}`)

.then(response => response.json())

.then(data => {

    //------------------------- Hide loading spinner
        document.getElementById("tableSpinnerArea")
        .classList.add("d-none");
        console.log(data);

    //-------------------- Get table body
        const tableBody = document.getElementById("recordsTableBody");

    //--------------------- Clear existing table data
        tableBody.innerHTML = "";


    //---------------------- Checking if records exist
        if(data.length === 0)
            {
                document.getElementById("noRecordsMessage")
                .classList.remove("d-none");
            }
        else
            {
                document.getElementById("noRecordsMessage")
                .classList.add("d-none");
            }    
    //---------------------- Loop through records
        data.forEach(record => {
        tableBody.innerHTML += `

        <tr>

            <td class="py-3 px-4 text-white align-middle fw-medium">
                ${record.resourceName}
            </td>

            <td class="py-3 px-4 align-middle">
                <span class="badge bg-dark-subtle text-cyan border border-info-subtle px-3 py-2 rounded">
                    ${record.accessLevel}
                </span>
            </td>

        </tr>

    `;
});   

})

.catch(error => {

    //--------------------  Hide loading spinner on error
        document.getElementById("tableSpinnerArea")
        .classList.add("d-none");
        console.log(error);

});

//----------------------------------------- Logout functionality for logout button----------------------------------//
document.getElementById("logoutBtn")
        .addEventListener("click", function(){

    //------------------  Clear session storage
    sessionStorage.clear();


    //-------------------- Redirect to login page
    window.location.href = "login.html";

});