//----------------------------------  Check login session
const username = sessionStorage.getItem("username");
const role = sessionStorage.getItem("role");

//---------------------------------- Redirect if not logged in
if(!username){

    window.location.href = "login.html";
}

//---------------------------------- Prevent non-admin access
if(role !== "ADMIN"){

    window.location.href = "dashboard.html";
}


//------------------------------------- Get logged-in admin details
const userId = sessionStorage.getItem("userId");

//------------------------------------ Print values in browser(For testing)

console.log(username);
console.log(role);
console.log(userId);

//------------------------------- Store selected delete user ID
let selectedUserId = null;

//-------------------------------- Bootstrap delete modal instance
const deleteModal = new bootstrap.Modal(
    document.getElementById("deleteConfirmModal")
);

//---------------------------------- Reusable alert function(display the alert dynamically)
function showAlert(message, type){
    const alertArea = document.getElementById("alertArea");
    alertArea.innerHTML = `

        <div class="alert alert-${type} alert-dismissible fade show shadow-sm border-0 rounded-4">

            ${message}

            <button type="button"
                    class="btn-close"
                    data-bs-dismiss="alert">
            </button>

        </div>

    `;

    //------------------- Auto remove after 3 seconds
    setTimeout(() => {
        alertArea.innerHTML = "";
    }, 3000);

}

// ---------------------------------- Display admin username in navbar
document.getElementById("adminNavName").innerText = username;

//----------------------------------- Display admin name in welcome section
document.getElementById("welcomeAdminName").innerText = username;

//-----------------------------------  Display admin role badge
document.getElementById("adminRoleBadge")
        .innerHTML = `
            <i class="bi bi-shield-fill-check me-1"></i> ${role}
        `;


//------------------------------------  Show loading spinner
document.getElementById("tableSpinnerArea")
        .classList.remove("d-none");

function loadUsers(){       
// --------------------------------- Fetch all users from backend
fetch("http://localhost:8080/admin/users")

.then(response => response.json())

.then(data => {

    //----------------------------  Hide loading spinner
        document.getElementById("tableSpinnerArea")
        .classList.add("d-none");
        // console.log(data);

    //---------------------------- Get table body
    const tableBody = document.getElementById("userTableBody");

    //---------------------- Clear existing rows
    tableBody.innerHTML = "";


    //----------------------- Get logged-in admin ID
    const loggedInAdminId = sessionStorage.getItem("userId");

    //------------------------ Check if users exist
    if(data.length === 0)
        {
            document.getElementById("emptyStateMessage").classList.remove("d-none");

        }
    else
        {
            document.getElementById("emptyStateMessage").classList.add("d-none");

        }
    //----------------------  Loop through users
    data.forEach(user => {
    tableBody.innerHTML += `

        <tr>
            <td class="py-3 px-3 text-muted align-middle small">
                ${user.id}
            </td>

            <td class="py-3 px-3 text-white align-middle fw-medium">
                ${user.username}
            </td>

            <td class="py-3 px-3 align-middle">
                <span class="badge bg-info-subtle text-info border border-info-subtle px-2 py-1 rounded-pill">
                    ${user.role}
                </span>
            </td>

            <td class="py-3 px-3 align-middle">
                <span class="status-indicator active-node small">
                    <i class="bi bi-circle-fill me-1"></i>
                    Active
                </span>
            </td>

            <td class="py-3 px-3 align-middle text-end">
                <button
                    class="btn btn-outline-danger btn-sm px-2 py-1 rounded border-0 delete-btn"
                    data-user-id="${user.id}"
                    ${loggedInAdminId == user.id ? "disabled title='Cannot delete current admin'" : ""}
                >
                    <i class="bi bi-trash3-fill"></i>
                </button>
            </td>

        </tr>

    `;
});

//-------------------------  Get all delete buttons
const deleteButtons = document.querySelectorAll(".delete-btn");

// --------------------------- Add click event to each delete button
deleteButtons.forEach(button => {

    button.addEventListener("click", function(){

        //-------------------- Get user ID from button
        const userId = this.getAttribute("data-user-id");
        console.log(userId);

        // ------------------- Get selected user ID
        selectedUserId = this.getAttribute("data-user-id");

        //--------------------- Open modal
        deleteModal.show();
    });

});

})

.catch(error => {

    //--------------------------  Hide loading spinner on error
        document.getElementById("tableSpinnerArea")
        .classList.add("d-none");
        console.log(error);

}); 
}

loadUsers();

//----------------------------- Confirm delete button
document.getElementById("confirmDeleteBtn").addEventListener("click", function(){

    //----------------------- Call delete API
    fetch(`http://localhost:8080/admin/delete-user/${selectedUserId}`, {

        method: "DELETE"
    })

    .then(response => response.text())

    .then(data => {

        console.log(data);

        //---------------- Close modal
        deleteModal.hide();


        //---------------- Reload users table
        loadUsers();

        //---------------- Show success alert
        showAlert("User Deleted Successfully", "warning");
    })

    .catch(error => {

        console.log(error);

        //---------- Show delete error alert
        showAlert("Failed To Delete User", "danger");

    });

});

//------------------------------- Logout functionality for logout button
    document.getElementById("logoutBtn").addEventListener("click", function(){


    //-------------------  Clear session storage
    sessionStorage.clear();

    //-------------  Redirect to login page
    window.location.href = "login.html";

});

//-----------------------------------------  Add User Form Submit
document.getElementById("addUserForm").addEventListener("submit", function(event){

    //-------------------- Prevent page from being refresh
    event.preventDefault();

    //---------------------- Get values from the form
    const username = document.getElementById("newUsername").value;
    const password = document.getElementById("newPassword").value;
    const role = document.getElementById("newRole").value;

    //---------------------- Print values into the console(for testing)
    // console.log(username);
    // console.log(password);
    // console.log(role);

    //----------------------- Create user object

    const userData = {
    username: username,
    password: password,
    role: role
};

    //--------------------- Button elements
    const addBtnText = document.getElementById("addBtnText");
    const addBtnSpinner = document.getElementById("addBtnSpinner");
    const addUserBtn = document.getElementById("addUserBtn");

    //--------------------- Show spinner
    addBtnText.classList.add("d-none");
    addBtnSpinner.classList.remove("d-none");
    addUserBtn.disabled = true;


    //------------------------  Call backend API
fetch("http://localhost:8080/admin/add-user", {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify(userData)
})

.then(response => {
    if(!response.ok){
        throw new Error("Username already Exists..");
    }
    return response.json();
})

.then(data => {

    //--------------------- Hide spinner
    addBtnText.classList.remove("d-none");
    addBtnSpinner.classList.add("d-none");
    addUserBtn.disabled = false;

    //------------------ Reload updated users table
    loadUsers();

    //------------------ Reset form
    document.getElementById("addUserForm").reset();

    //------------------- Show success alert
    showAlert("User Added Successfully", "success");
})

.catch(error => {

    //------------------- Hide spinner on error

    addBtnText.classList.remove("d-none");
    addBtnSpinner.classList.add("d-none");
    addUserBtn.disabled = false;

    console.log(error);

    //------------------- Show error alert
    showAlert("Username already exists or failed to add user", "danger");
});


});