const array = [
    {img:"/images/ngo.png",
     name:"NGO Website",
     description:"A website for ngo ",
     link:"https://ngo-updated.vercel.app/"
    },
    {img:"/images/sportmate.png",
     name:"SportMate69",
     description:"A Social app where user can find and conncet with sports perons ",
     link:"https://sportmate69.onrender.com/"
    },
    {img:"/images/menteshala.png",
     name:"Menteshala",
     description:"A site where mentees can conncet with mentors from different domains",
     link:"https://menteshala-final.onrender.com/"
    },
    {img:"./images/Tictac.png",
     name:"TicTacToe Game",
     description:"A simple tic-tac-toe game with html,css,js",
     link:"www.google.com"
    },
    {img:"./images/fanta.png",
     name:"Fanta Animated Website",
     description:"Animated webpage with gsap",
     link:"www.google.com"
    },
    {img:"/images/devtal.png",
        name:"DevtalTech ",
        description:"A website for an company named devtal [Built on - Wordpress]",
        link:"http://devtaltech.wuaze.com/"
       },
    {img:"/images/Miranda.png",
     name:"Miranda Paper PORTFOLIO",
     description:"A traditional looking webpage",
     link:"www.google.com"
    },
    {img:"/images/bubble.png",
     name:"Bubble Game",
     description:"A simple game with html,css,js",
     link:"www.google.com"
    }
]

let container = document.querySelector(".projectscontainer");
let html = ""
array.map((item)=>{
    html += ` <div class="projectcard">
    <div class="projectimg">
     <img src=${item.img} alt="">
    </div>
    <div class="projecttext">
        <h2>${item.name}</h2>
        <p>${item.description}</p>
        <a href="${item.link}">SITE</a>
    </div>
  </div>`
}
)


container.innerHTML=html;
