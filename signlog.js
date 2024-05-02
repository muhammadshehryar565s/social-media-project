

//call function by clicking on login page
document.getElementById('login').addEventListener('click', function(event) {
  event.preventDefault();
  console.log('its wording')





  //getting value from input
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;





  // checking the condition for is user enter right value
  if (!username) {
    alert('Please enter username');
  } else if (!password) {
    alert('Please enter password');
  } else if (password.length < 8) {
    alert('Password must be at least 8 characters long');
  } 
  
  



  // getting the user complete information by validation of token by username and password that user entered
  else {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
        expiresInMins: 30, 
      })
    })
    .then(res => res.json())
    .then(loginData => {
      const token = loginData.token; 
      fetch('https://dummyjson.com/user/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, 
        }, 
      })





      //set the userdata into local storage and redirect to home page
      .then(res => res.json())
      .then(userData => {
        console.log(userData)
        if (Object.keys(userData).length !== 0) { // Check if userData is not empty
          localStorage.setItem('userData', JSON.stringify(userData));
          window.location.replace('index.html');
        } 
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
    })
    .catch(error => {
      console.error('Error logging in:', error);
    });






    //checking the user entered username and password is in json server database otherwise show user does not exit regitered with registrad user
    fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then((data) => {
      let userExists = false;
      data.users.forEach((user) => {
        const getusername = user.username;
        const getpassword = user.password;

        if (username === getusername && password === getpassword){
          userExists = true;
        }
      });
      if (!userExists){
        alert("User does not exist login with exited user");
        window.location.replace('login.html');
      }
    });
  }
});







