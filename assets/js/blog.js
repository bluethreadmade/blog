// DEPENDENCIES
// get blog entries array from local storage
const blogEntries = JSON.parse(localStorage.getItem('blogEntries'));
const blogPosts = document.querySelector('.blog-posts');

// get the mode toggle icon
const modeToggle = document.querySelector('#dark-light-toggle');

// DATA

// FUNCTIONS

// check if the array is in local storage by console logging
console.log(blogEntries);
renderBlog();

// render the objects in the blog entries array to list items on blog.html
function renderBlog () {
    
    //render a new li for every blog entry
    for (let i = 0; i <blogEntries.length; i++) {
        const blogEntry = blogEntries[i];

        const li = document.createElement('li');
        li.textContent = blogEntry.blogTitle;
        li.setAttribute('data-index', i);
        blogPosts.appendChild(li);

        const blogPostTitle = document.createElement('p');
        blogPostTitle.textContent = blogEntry.blogContent;

        li.appendChild(blogPostTitle);

        const blogPoster = document.createElement('p');
        blogPoster.textContent = blogEntry.userName;
        
        li.appendChild(blogPoster);
    };
};

function displayModeToggle (event) {
    event.preventDefault();
    console.log("click");
};

// USER INTERACTIONS
// event listener for light/dark mode
modeToggle.addEventListener('click', displayModeToggle);