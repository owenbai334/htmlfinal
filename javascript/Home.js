let Title =  document.getElementById("title");
let Article =  document.getElementById("content");
let Button =  document.getElementById("btn");
let list =  document.getElementById("list");

Button.addEventListener("click", function(){
    list.innerHTML = list.innerHTML+`
    <div class="article">
        <h2>${Title.value}</h2>
        <p>${Article.value}</p>
        <hr/>
    </div>
    `;
})