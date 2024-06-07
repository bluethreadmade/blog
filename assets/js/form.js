// DEPENDENCIES
const userNameInput = document.querySelector('#username');
const blogTitleInput = document.querySelector('#title');
const blogContentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');

// DATA
let blogEntries = [];

// Load existing blog entries from localStorage when the page loads
window.onload = function() {
    const storedEntries = localStorage.getItem('blogEntries');
    if (storedEntries) {
        blogEntries = JSON.parse(storedEntries);
    }
};

// FUNCTIONS
// send submission to localstorage
function storeBlog(event) {
    event.preventDefault();

    if (userNameInput.value == '' || blogTitleInput.value == ''|| blogContentInput.value == '') {
        alert("Fill out all information");
    };
    
    // object stored in localstorage
    const blogEntry = {
        userName: userNameInput.value,
        blogTitle: blogTitleInput.value,
        blogContent: blogContentInput.value,
    };

    // push blogentry object to blog entries array
    blogEntries.push(blogEntry);

    localStorage.setItem('blogEntries', JSON.stringify(blogEntries));

    // clear input boxes
    userNameInput.value = '';
    blogTitleInput.value = '';
    blogContentInput.value = '';

    // send user to blog posts page when blog is submitted    
    window.location.assign("blog.html");
};

// USER INTERACTIONS
// event listener for submit
submitButton.addEventListener('click', storeBlog);