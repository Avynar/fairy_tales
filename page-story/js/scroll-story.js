export default function scrollStories(stories){
    const storyWrapper = document.querySelector(".stories_wrapper");

    //scroll-X выбор альбома
    stories.addEventListener('mousemove', function (e) {
        if (window.outerWidth / 2 - e.pageX > window.outerWidth / 3) {
            storyWrapper.style.transform = 'translateX(21.2rem)'
        } else if (window.outerWidth / 2 - e.pageX < window.outerWidth / (-3.15)) {
            storyWrapper.style.transform = 'translateX(-21.2rem)'
        }
    });

    //отцентровка альбомов
    stories.addEventListener('mouseout', () => {
        storyWrapper.style.transform = `translateX(0)`
    });
};

