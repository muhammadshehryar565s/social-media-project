
//check if user not in local stroge redirect to login page





// get user data from local storage
//geting data from html file by id
var userData = JSON.parse(localStorage.getItem('userData'));
const getprofile= document.getElementById("profile")
const profileDiv= document.createElement('div')
const postcontainer = document.getElementById("post-container");
const display = document.querySelector("#display-data");
const getsearch = document.getElementById('search');
const getfollowers = document.getElementById('followers');
const clearLocalStorageButton = document.getElementById('clearLocalStorageButton');



clearLocalStorageButton.addEventListener('click', function() {
  // Clear the localStorage
  localStorage.clear();
  // Optionally, you can also display a message or perform any other action
  if (!localStorage.getItem('userData')) {

    window.location.href = 'login.html';
  }
  
 
});




//for getting login user and display his profile
profileDiv.innerHTML=`       <div
class="card-header text-center"
style="
  background-image: url(https://www.zdnet.com/a/img/resize/a0dcec40a8cd8d2e1b3a9e12a05c2819622d20be/2021/07/19/8a337c80-5ed6-43a1-98fb-b981d420890f/programming-languages-shutterstock-1680857539.jpg?auto=webp&fit=crop&height=1200&width=1200);
  height: 50px;
"
>
<img
  src="${userData.image}"
  style="
    width: 70px;
    height: 70px;
    border: 2px solid white;
    border-radius: 50%;
  "
/>
</div>
<div
class="card-body mt-4"
style="font-family: 'Poppins', sans-serif"
>
<p class="card-title header text-center">
  <a
    
    target="_blank"
    style="color: #212529"
    >${userData.firstName} ${userData.lastName}</a
  >
</p>
<div
  class="text-center"
  style="margin-bottom: 10px; color: #5f5f5f"
>
  ${userData.company.title}
</div>
<hr />
<div class="card-text">
  <div>
    <span class="view">Who viewed your profile</span
    ><span class="float-right view mt-1" style="color: #0a66c2"
      >43</span
    >
  </div>
  <div>
    <span class="view">Views for your profile today </span
    ><span class="float-right view mt-1" style="color: #0a66c2"
      >34</span
    >
  </div>
</div>
</div>
<div class="card-footer">

</div>`;
getprofile.appendChild(profileDiv);








//for getting and displaying all users

fetch("https://dummyjson.com/users?limit=8")
  .then((res) => res.json())
  .then((data) => {
    data.users.forEach((follow) => { 
      const followersDiv = document.createElement("div");

      followersDiv.innerHTML = ` <img
      src="${follow.image}"
      class="right-panel-pic mr-1"
    />
    <div class="header ml-1 d-inline-flex" style="font-size: 14px">
      ${follow.firstName} ${follow.lastName}
    </div>`;

      getfollowers.appendChild(followersDiv);
    });
  })
  .catch(error => {
    console.error('Error fetching follower data:', error);
  });







//post html 
const createPostHTML = (post) => {
  return `
    <div class="card-header">
      <span>
        <div class="d-inline-flex flex-column ml-1 align-middle">
          <span class="posttext">
            <a style="color: #212529">${post.title}</a>
          </span>
          <span class="profile-desc">${post.body}</span>
        </div>
      </span>
    </div>
    <div>
      <div class="ml-3 mb-2">
        <span>
          <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt="Like Icon">
        </span>
        <span>
          <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" alt="Clap Icon">
        </span>
        <span class="profile-desc">
          <img src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97" alt="Heart Icon"> 44
        </span>
      </div>
      <div class="card-footer mt-1 text-center">
        <span>
          <button class="ref btn btn-light p-2">
            <i class="far fa-thumbs-up fa-md" style="font-size: 1.2rem">
              <span class="ml-2 mediatext">Like</span>
            </i>
          </button>
        </span>
        <span>
          <button class="ref btn btn-light p-2 ml-4 comments-btn" data-post-id="${post.id}">
            <i class="far fa-comment fa-md" style="font-size: 1.2rem">
              <span class="ml-2 mediatext">Comments</span>
            </i>
          </button>
        </span>
        <span>
          <button class="ref btn btn-light p-2 ml-4">
            <i class="fas fa-share fa-md" style="font-size: 1.2rem">
              <span class="ml-2 mediatext">Share</span>
            </i>
          </button>
        </span>
        <span>
          <button class="ref btn btn-light p-2 ml-4">
            <i class="fas fa-paper-plane fa-md" style="font-size: 1.2rem">
              <span class="ml-2 mediatext">Send</span>
            </i>
          </button>
        </span>
        <hr style="border: 0; height: 1px; background-color: black;">
      </div>
    </div>
  `;
};











  // Fetch posts and display them
  fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      data.posts.forEach((post) => {
        const postdiv = document.createElement("div");
        postdiv.innerHTML = createPostHTML(post);
         
        postcontainer.appendChild(postdiv);

        const commentsBtn = postdiv.querySelector('.comments-btn');
        commentsBtn.addEventListener("click", function () {
          const postId = this.getAttribute('data-post-id');

          fetch("https://dummyjson.com/comments")
            .then((res) => res.json())
            .then((commentData) => {
              const postComments = commentData.comments.filter(comment => comment.postId == postId);

              const commentsdiv = document.createElement("div");
              commentsdiv.className = "comments-container";
              commentsdiv.innerHTML = `
                <div class="container mt-5">
                  <div class="comment-box">
                    <h2>Comments</h2>
                    <div class="comment-list">
                      ${postComments.map(comment => `
                        <div class="comment card mb-3">
                          <div class="row g-0">
                            <div class="col-md-10">
                              <div class="card-body">
                                <h5 class="card-title comment-author">${comment.user.username}</h5>
                                <p class="card-text comment-text">${comment.body}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      `)}
                    </div>
                    <div class="comment-form">

                    </div>
                  </div>
                </div>
              `;

              const existingCommentsContainer = postdiv.querySelector('.comments-container');
              if (existingCommentsContainer) {
                existingCommentsContainer.remove();
              }

              postdiv.appendChild(commentsdiv);
            });
        });
      });
    });








// faching user for post search
async function fetchUsers() {
  try {
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();
    return data.users;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}





//display user that are searched
const displayUsers = async () => {
  let query = getsearch.value.trim().toLowerCase();

  try {
    const users = await fetchUsers();

    display.innerHTML = '';

    if (query) {
      let filteredUsers = users.filter((user) =>
        user.firstName.toLowerCase().includes(query) ||
        user.username.toLowerCase().includes(query)
      );

      const userElements = filteredUsers.map((user) => {
        const { firstName, username } = user;
        return `
          <div class="container user-container" user-id="${user.id}">
            <p>Name: ${firstName}</p>
            <p>Username: ${username}</p>
          </div>
          <hr>
        `;
      });

      if (userElements.length > 0) {
        display.innerHTML = userElements.join("");
      } else {
        display.innerHTML = '<p class="no-results">No results found.</p>';
      }
    }
  } catch (error) {
    console.error('Error displaying users:', error);
  }
};








//display user post when user click on particular searched user
getsearch.addEventListener('input', displayUsers);
function handleClick(event) {
  const clickedElement = event.target.closest('.user-container');
  if (clickedElement) {
    const userId = clickedElement.getAttribute('user-id');
    console.log('User ID clicked:', userId);

    // Clear existing posts before fetching and displaying user-specific posts
    postcontainer.innerHTML = '';

    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((postData) => {
        const userPosts = postData.posts.filter(post => post.userId == userId);

        userPosts.forEach((post) => {
          const postdiv = document.createElement("div");
          postdiv.innerHTML = createPostHTML(post);
          postcontainer.appendChild(postdiv);
            
          
        });
      });
  }
}

display.addEventListener('click', handleClick);


