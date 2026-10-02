let posts = [
    {
        id: 1,
        title: "Welcome to My Blog",
        content: "This is my first blog post. I'm excited to share my thoughts and experiences with you all"
    },
    {
        id: 2,
        title: "Learning JavaScript",
        content: "JavaScript is a powerful programming language that enables interactive web development. Today I learned about event listeners and DOM manipulation."
    },
    {
        id: 3,
        title: "Web Development Tips",
        content: "Always write clean and maintainable code. Use meaningful variable names and comment your code when necessary."
    }
]
let nextID = 4;
window.onload = () => {
    const postList = document.getElementById("post-list")
    const addBtn = document.getElementById("add-post")

    const inventBtn = (text) => {
        const btn = document.createElement("button")
        btn.textContent=text
        return btn;
    }
}