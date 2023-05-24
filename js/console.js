let gitname = document.getElementById('userNameGit');
gitname.innerHTML = `${sessionStorage.getItem('user')}`;

const comment4 = document.getElementById("fourth-comment");
const mmtypewriter = (comment, time, div)=>{
    let arrayComent = comment.split("");
    div.innerHTML = "";
    let cont = 0
    let writeComment = setInterval (()=>{
        div.innerHTML += arrayComent[cont];
        cont ++
        if (cont === arrayComent.length) {
            clearInterval(writeComment);
        }
    }, time)
}

setTimeout (() => {
    mmtypewriter("clear", 200, comment4);
    setTimeout (()=> {
        window.location.href = "game.html";
    }, 1300);

}, 1200);
