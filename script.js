function Projects(name, imageUrl, url, id) {
    this.name = name
    this.src = imageUrl
    this.url = (e) => window.open(
        `${url}`, "_blank");
    this.id = id
}

function ChangeImg() {
    achievement.setAttribute("src",`Images/${achievementsArr[N]}`)
}
let projectsArr = {
    "STOCK PRICE": new Projects("STOCK PRICE PREDICTION SYSTEM", 
    "ATM.png", 
    "#",
    "STOCK PRICE"), 

    "SPORTS": new Projects("SPORTS E- COMMERCE WEBSITE", 
    "Book.png", 
    "https://github.com/mridulapbk/ProShop-E-Commerce-main",
    "SPORTS"), 

    "Social": new Projects("Social Distance and Face-Mask Tracker main", 
    "Attendance.png", 
    "https://github.com/mridulapbk/Social-Distance-and-Face-Mask-Tracker-main",
    "Social"), 
 
}

let achievementsArr = ['img_1.jpeg','img_2.jpeg', 'img_3.jpeg',
 'img_4.jpeg', 'img_5.jpeg', 'img_6.jpeg', 'img_7.jpeg', 'img_8.jpeg','img_9.jpeg', 'img_10.jpeg',
 'img_11.jpeg', 'img_12.jpeg', 'img_13.jpeg', 'img_14.jpeg',, 'img_15.jpeg', 'img_16.jpeg'    
]
const noOfImages = achievementsArr.length
const projects = document.querySelector(".projects")

for (const project in projectsArr) {
    let projectObj = projectsArr[project]
    let newProject = document.createElement("div")
    newProject.textContent = projectObj['name']
    // newProject.setAttribute('src', `Images/${projectObj['src']}`)
    // newProject.setAttribute('alt', projectObj['name'])
    newProject.setAttribute('id', projectObj['id'])
    newProject.addEventListener('click', projectObj['url'])
    newProject.classList.add("project")
    projects.appendChild(newProject)
    console.log(newProject)
}
let N = 0
const achievement = document.querySelector(".achievements img")
ChangeImg()
const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".prev")
nextBtn.addEventListener('click', function(){
    N=(N+1)%noOfImages
    ChangeImg()})
prevBtn.addEventListener('click', function(){
    N=(N-1+noOfImages)%noOfImages
    ChangeImg()})
