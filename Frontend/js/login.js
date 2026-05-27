document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    //-------------- Get form input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const selectedRole = document.getElementById('userRole').value; 

    //-------------- to check the values in the console
    // console.log(username);
    // console.log(password);
    // console.log(selectedRole);
    
    const btnText = document.getElementById('btnText');
    const btnSpinner = document.getElementById('btnSpinner');
    const submitBtn = document.getElementById('submitBtn');
    const errorMsg = document.getElementById('errorMessage');
    
    // Clear any existing error messages before starting
    errorMsg.classList.add('d-none');
    
    // Show Spinner, Hide Text, Disable Button to prevent double-submission
    btnText.classList.add('d-none');
    btnSpinner.classList.remove('d-none');
    submitBtn.disabled = true;

    fetch('http://localhost:8080/login', {

            method: 'POST',

    headers: {
        'Content-Type': 'application/json'
    },

    body: JSON.stringify({
        username: username,
        password: password
    })

})
.then(response => {

    if(!response.ok)
        {
            throw new Error("Invalid Credentials");
        }

        return response.json();
            
})

.then(data => {

   if(data && data.role)
    {
        if(selectedRole === data.role)
            {
                console.log("Role Matched");

                //--------------------- Store logged-in user details---------------//
                sessionStorage.setItem("userId", data.id);
                sessionStorage.setItem("username", data.username);
                sessionStorage.setItem("role", data.role);

                console.log(sessionStorage.getItem("username"));
                console.log(sessionStorage.getItem("role"));

                //----------------------- Redirect based on role---------------------//
                if(data.role === "ADMIN")
                    {
                        window.location.href = "../pages/admin.html";
                    }
                else
                    {
                        window.location.href = "../pages/dashboard.html";
                    }
            }
        else
            {   
                //--------------------- Stop spinner
                    btnText.classList.remove('d-none');
                    btnSpinner.classList.add('d-none');
                    submitBtn.disabled = false;

                //---------------------- Clear fields values
                    document.getElementById("username").value = "";
                    document.getElementById("password").value = ""; 
                    
                //----------------------- show errors   
                    console.log("Role Mismatch");
                    errorMsg.classList.remove('d-none');

                //------------------ Auto hide error after 3 sec
                setTimeout(() => {
                    errorMsg.classList.add('d-none');
                },3000);    
            }
    }
    else
        {
            //--------------------- Stop spinner
                    btnText.classList.remove('d-none');
                    btnSpinner.classList.add('d-none');
                    submitBtn.disabled = false;

            //---------------------- Clear fields values
                    document.getElementById("username").value = "";
                    document.getElementById("password").value = "";        

            //----------------------- show errors   
                    console.log("Role Mismatch");
                    errorMsg.classList.remove('d-none');

            //------------------ Auto hide error after 3 sec
                setTimeout(() => {
                    errorMsg.classList.add('d-none');
                },3000);        
        }
})

.catch(error => {

    console.log(error);
    //--------------------- Stop spinner
                    btnText.classList.remove('d-none');
                    btnSpinner.classList.add('d-none');
                    submitBtn.disabled = false;

    //---------------------- Clear fields values
                    document.getElementById("username").value = "";
                    document.getElementById("password").value = "";
                    
    //----------------------- show errors   
                    errorMsg.classList.remove('d-none'); 
                    
    //------------------ Auto hide error after 3 sec
                setTimeout(() => {
                    errorMsg.classList.add('d-none');
                },3000);                  

    
});
    
    
});