// DEPENDENCIES
const userNameInput = document.querySelector('#username');
const blogTitleInput = document.querySelector('#title');
const blogContentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');

// DATA

// FUNCTIONS
// send submission to localstorage
function storeBlog(event) {
    event.preventDefault();
    
    // object stored in localstorage
    const blogEntry = {
        userName: userNameInput.value,
        blogTitle: blogTitleInput.value,
        blogContent: blogContentInput.value,
    };

    localStorage.setItem('blogEntry', JSON.stringify(blogEntry));

    // clear input boxes
    userNameInput.value = '';
    blogTitleInput.value = '';
    blogContentInput.value = '';

};

// USER INTERACTIONS
// event listener for submit
submitButton.addEventListener('click', storeBlog);