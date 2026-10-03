window.onload = () => {
    let prePostCard = [
        {
            title: "Welcome to My Blog",
            content: "This is my first blog post. I'm excited to share my thoughts and experiences with you all"
        },
        {
            title: "Learning JavaScript",
            content: "JavaScript is a powerful programming language that enables interactive web development. Today I learned about event listeners and DOM manipulation."
        },
        {
            title: "Web Development Tips",
            content: "Always write clean and maintainable code. Use meaningful variable names and comment your code when necessary."
        }
    ]
    prePostCard.map((post)=>createPost(post.title, post.content))

    let addBlogPostBtn = document.getElementById("add-post-btn")
    addBlogPostBtn.addEventListener("click", ()=>{addPost()})
}

const createPost = (getPost, getContent) => {
    const postCard = document.getElementById("post-card")

    const post = document.createElement("div")
    post.classList.add("post")

    const postTitle = document.createElement("h3")
    postTitle.textContent = getPost

    const editPostTitleBtn = document.createElement("button")
    editPostTitleBtn.textContent = "Edit Title"
    editPostTitleBtn.addEventListener("click", (e) => {
        editPostTitle(e.target.parentElement)
    })

    const postContent = document.createElement("p")
    postContent.textContent = getContent

    const editPostContentBtn = document.createElement("button")
    editPostContentBtn.textContent = "Edit Content"
    editPostContentBtn.addEventListener("click", (e) => {
        editPostContent(e.target.parentElement)
    })

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete Post"
    deleteBtn.addEventListener("click", (e) => {
        deletePost(e.target.parentElement)
    })

    post.appendChild(postTitle)
    post.appendChild(editPostTitleBtn)
    post.appendChild(postContent)
    post.appendChild(editPostContentBtn)
    post.appendChild(deleteBtn)
    postCard.appendChild(post)
}

const addPost = () => {
    const getPostTitle = prompt("Input your post title: ")
    const getPostContent = prompt("Input your post content: ")
    createPost(getPostTitle, getPostContent)
}

const editPostTitle = (target) => {
    //target <div><h3 title><button editTitle><p content><button editContent><button delete></div>
    const postTitle = target.firstChild
    // const editBlogTitleBtn = target.childNodes[1]
    const  newTitle = prompt("Edit your post title: ", postTitle.textContent)
    postTitle.textContent = newTitle
}

const editPostContent = (target) => {
    //target <div><h3 title><button editTitle><p content><button editContent><button delete></div>
    const postContent = target.childNodes[2]
    // const editBlogContentBtn = target.childNodes[3]
    const newContent = prompt("Edit your post content: ", postContent.textContent)
    postContent.textContent = newContent
}

const deletePost = (target) => {
    const postTitle = target.firstChild.textContent
    const toDelete = confirm(`Are you sure you want to delete "${postTitle}"?`)

    if(toDelete){
        target.remove()
        alert(`Post "${postTitle}" deleted successfully`)
    }
}