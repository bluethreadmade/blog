// DEPENDENCIES
// get blog entries array from local storage
const blogEntries = JSON.parse(localStorage.getItem('blogEntries'));
const blogPosts = document.querySelector('.blog-posts');

// DATA

// FUNCTIONS
// render the objects in the blog entries array to list items on blog.html

// check if the array is in local storage by console logging
console.log(blogEntries);
renderBlog();

function renderBlog () {
    //render a new li for every blog entry
    for (let i = 0; i <blogEntries.length; i++) {
        const blogEntry = blogEntries[i];

        const li = document.createElement('li');
        li.textContent = blogEntry.blogContent;
        li.setAttribute('data-index', i);

        blogPosts.appendChild(li);
    };
};

// USER INTERACTIONS