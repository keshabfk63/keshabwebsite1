const a=document.querySelector('hamb');
const b=document.querySelector("navbar-nav");
a.addEventListener("click",()=>{
	a.classList.toggle("active");
	b.classList.toggle("active");
})
document.querySelector(".nav-link".forEach(n => n.addEventListener("click", () => {
	a.classList.remove("active");
	b.classList.remove("active");
}))