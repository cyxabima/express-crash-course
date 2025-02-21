

const button = document.querySelector("#get-post-button")
const output = document.querySelector("#output")
const form =  document.querySelector("#form-add-post")

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

async function addPost(e) {
    e.preventDefault()

        const formData = new FormData(this)
        const title  = formData.get('title');
        try {
            const response =  await fetch("http://localhost:7080/api/posts",
                {
                    method : "POST",
                    headers : {
                        "content-type" : 'application/json'
                    },
                    body : JSON.stringify({title})
                }
            );

            if(!response.ok){
                throw new Error("Post failed")
            }
        
            const newPost  = await response.json();

            const postEl = document.createElement("div");
            postEl.textContent =  newPost.title;
            getPost()
            output.appendChild(postEl)
        } catch (error) {
            console.error("an error occur", error)
        }

    
}

button.addEventListener('click', getPost)

form.addEventListener('submit', addPost)



// async function addPost(e) {
//     e.preventDefault()

//     const formData = new FormData(this)
//     const title  = formData.get('title');

//     fetch('http://localhost:7080/posts', {
//         method: "POST", 
//         headers : {
//             "Content-Type " : "application/json"
//         },
//         body : JSON.stringify({title})
//     }).then((response)=>{
//         newPost = response.json()

//         const postEl = document.createElement("div")
//         postEl.textContent = newPost.title
//         getPost()
//         output.appendChild(postEl)
        


//     }).catch((error)=>{
//         console.error("error adding post ", error)
//     })



// }