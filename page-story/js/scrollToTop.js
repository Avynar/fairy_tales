export default function scrollToTop(scrollback, stories, album){
    scrollback.classList.add("dn");
    stories.classList.add("stories--active");
    album.classList.remove("album--active");
};