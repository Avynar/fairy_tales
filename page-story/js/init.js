import scrollStories from './scroll-story.js';
import albumFiller from "./album.js";
import scrollToTop from "./scrollToTop.js";

export default function init() {
    const scrollback = document.getElementById("story_scrollback");
    const story = Array.from(document.querySelectorAll(".story"));
    const stories = document.querySelector(".stories");
    const album = document.querySelector(".album");

    //ф-я горизонтального скролла
    scrollStories(stories);

    //отрисовка нужного альбома по клику на обложку
    story.forEach(el => {
        el.addEventListener("mouseup", function () {
            albumFiller(this, stories, album, scrollback);
        })
    });
    scrollback.addEventListener("mouseup", function () {
        scrollToTop(scrollback, stories, album);
    })
}
