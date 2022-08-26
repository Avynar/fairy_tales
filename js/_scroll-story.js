window.onload = () => {
    const story = document.querySelector(".stories");
    const storyWrapper = document.querySelector(".stories_wrapper");

    story.addEventListener('mousemove', function(e) {
        if (window.outerWidth/2 - e.pageX > window.outerWidth/4){
            storyWrapper.style.transform = 'translateX(20rem)'
        }
        if (window.outerWidth/2 - e.pageX < window.outerWidth/(-4)){
            storyWrapper.style.transform = 'translateX(-20rem)'
        }
    })
}