window.onload = () => {
    const photoList = document.getElementById("photoList");
    const scrollback = document.getElementById("story_scrollback");

    const story = Array.from(document.querySelectorAll(".story"));

    const stories = document.querySelector(".stories");
    const storyWrapper = document.querySelector(".stories_wrapper");
    const album = document.querySelector(".album");
    const albumHeader = album.querySelector(".album__header_title");
    const albumImg = album.querySelector(".album__header_img");

    const redApple = [];
    const scaryBeautiful = [];
    const mainCharacter = [];
    const muse = [];

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

    //событие на клик по альбому
    story.forEach(el => {
        el.addEventListener("mouseup", function () {
            const length = Number(this.dataset.length);
            const albumMaked = albumMaker(`${this.id}`, length);
            photoList.innerHTML = '';
            albumMaked.array.forEach(elem => {
                photoList.innerHTML += `<div class="album__photo_list_item" id="${elem.id}"><img src="${elem.url}.jpg" alt=""></div>`;
                const photo = document.getElementById(`${elem.id}`);
                // photo.style.backgroundImage = `url(${elem.url}.jpg)`;
            });
            albumMaked.array.length = 0;
            albumHeader.innerText = `${this.querySelector("h3").innerText}`;
            albumImg.style.backgroundImage = `url(${albumMaked.url}${this.id}.jpg)`;
            stories.classList.remove("stories--active");
            album.classList.add("album--active");
            scrollback.classList.remove("dn");
        });
    });
    scrollback.addEventListener("mouseup", function() {
        this.classList.add("dn");
        stories.classList.add("stories--active");
        album.classList.remove("album--active");
    })
    //создание объектов с основой ссылкой на необходимое фото и айди для объекта
    function PhotoMaker(nameOfAlbum, id, url) {
        this.url = url;
        this.id = `${nameOfAlbum}_${id}`;
    };

    //заполнение массива Музы объектами из PhotoMaker
    function albumMaker(nameOfAlbum, length) {
        let urlObj;
        for (let i = 1; i < length + 1; i++) {
            function urlFinder() {
                switch (nameOfAlbum) {
                    case "muse":
                        return {
                            url: '../../img/stories/muse/',
                            array: muse
                        };
                        break;
                    case "scary_beautiful":
                        return {
                            url: '../../img/stories/scary_beautiful/',
                            array: scaryBeautiful
                        };
                        break;
                    case "main_character":
                        return {
                            url: '../../img/stories/main_character/',
                            array: mainCharacter
                        };
                        break;
                    case "red_apple":
                        return {
                            url: '../../img/stories/red_apple/',
                            array: redApple
                        };
                        break;
                }
            }

            urlObj = urlFinder();
            let photoUrl = new PhotoMaker(nameOfAlbum, i, `${urlObj.url + i}`);
            urlObj.array.push(photoUrl);
        }
        ;
        return urlObj;
    };
}