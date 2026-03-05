const faders = document.querySelectorAll(".fade");

const appearOptions = {
threshold: 0.3
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){
entries.forEach(entry => {
if(!entry.isIntersecting){
return;
}else{
entry.target.classList.add("show");
observer.unobserve(entry.target);
}
});
}, appearOptions);

faders.forEach(fader => {
appearOnScroll.observe(fader);
});
