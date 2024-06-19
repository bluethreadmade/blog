// get blog entries array from local storage
const blogEntries = JSON.parse(localStorage.getItem('blogEntries'));
const blogPosts = document.querySelector('.blog-posts');
const backButton = document.querySelector('#back-button')

// check if the array is in local storage by console logging
console.log(blogEntries);
renderBlog();

// render the objects in the blog entries array to list items on blog.html
function renderBlog () {
    
    //render a new li for every blog entry
    for (let i = 0; i <blogEntries.length; i++) {
        const blogEntry = blogEntries[i];

        const post = document.createElement('ul');
        post.setAttribute('data-index', i);
        blogPosts.appendChild(post);

            const blogPostTitle = document.createElement('h3');
            blogPostTitle.textContent = blogEntry.blogTitle;
            post.appendChild(blogPostTitle)

            const blogPostContent = document.createElement('p');
            blogPostContent.textContent = blogEntry.blogContent;
            blogPostContent.classList.add('content-class');
            post.appendChild(blogPostContent);

            const blogPoster = document.createElement('p');
            blogPoster.textContent = `Posted by: ${blogEntry.userName}`;
            blogPoster.classList.add('poster-class');
            post.appendChild(blogPoster);
    };
};

function back (event) {
    window.location.assign("index.html");
};

backButton.addEventListener('click', back);
