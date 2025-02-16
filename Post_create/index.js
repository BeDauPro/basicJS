const inputTitlePost = document.querySelector('#inputTitlePost')
const inputContentPost = document.querySelector('#inputContentPost')
const formCreatePost = document.querySelector('form')


async function createPost(e){
    e.preventDefault()
    // đọc input 
    let inputTitle = inputTitlePost.value
    let inputContent = inputContentPost.value
    let authorID = localStorage.getItem("ID")

    // fetch api 
    let url = 'http://localhost:3000/posts'

    if(inputTitle && inputContent && authorID){
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "title" : inputTitle,
                    "content" : inputContent,
                    "authorID": authorID
                })
            })
            if (!response.ok) {
                window.alert(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log("Server Response:", data);
             window.location.href = '../Home/home.html'
        } catch (error) {
            console.error("Error:", error);
            
        }
    }
}
formCreatePost.addEventListener('submit', createPost)