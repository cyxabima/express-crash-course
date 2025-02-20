

const button = document.querySelector("#get-post-button")
const output = document.querySelector("#output")

const getPost = async () => {
    output.innerHTML = ""
    try {
        let response = await fetch('http://localhost:7080/api/posts');
        // if(!response.ok){
        //     throw new Error("error in fetching")
        // }
        const posts = await response.json();

        posts.forEach(post => {
            const postEl = document.createElement("div");
            postEl.textContent = post.title
            output.appendChild(postEl)
            
        });
    } catch (error) {
        console.log("error while fetching for post ", error)
    }
}


button.addEventListener('click', getPost)