const list = document.querySelector('.post-container')
const backBtn = document.querySelector('#btnLogout')
const btnCreatePost = document.querySelector('#btnCreatePost')
document.addEventListener('DOMContentLoaded', () => {
    const data = localStorage.getItem('Posts')
    
    if(data){
        const parsedData = JSON.parse(data);
        parsedData.forEach(item =>{
            let id = item.id
            let title = item.title
            let content = item.content
            const listItem = document.createElement("div");
            listItem.innerHTML = `<li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">${title}</div>
               <p>${content}</p>
            </div>
            <span class="badge text-bg-danger rounded-pill">delete</span>
          </li>`;
            list.appendChild(listItem)
        })

    }
})

backBtn.addEventListener('click', () => {
    localStorage.removeItem('Posts')
    localStorage.removeItem('ID')
    window.location.href = '../login/login.html'
})

btnCreatePost.addEventListener('click', ()=>{
    window.location.href = '../Post/index.html'
})