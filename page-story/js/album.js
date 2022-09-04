//создание объектов с основой ссылкой на необходимое фото и айди для объекта

export default function albumFiller(element, stories, album, scrollback) {
    const redApple = [];
    const scaryBeautiful = [];
    const mainCharacter = [];
    const muse = [];
    const albumHeader = album.querySelector(".album__header_title");
    const albumImg = album.querySelector(".album__header_img");
    const photoList = document.getElementById("photoList");

    function renderAlbum() {
        const length = Number(element.dataset.length);
        const albumMaked = albumMaker(`${element.id}`, length);
        photoList.innerHTML = '';
        albumMaked.array.forEach(elem => {
            // photoList.innerHTML += `<div class="album__photo_list_item" id="${elem.id}"><img src="${elem.url}" alt=""></div>`;
            const div = document.createElement("div");
            div.classList.add(`album__photo_list_item`);
            div.id = `${elem.id}`;
            const img = document.createElement("img");
            img.src = `${elem.url}`;
            div.append(img);
            photoList.append(div);
        });
        albumMaked.array.length = 0;
        albumHeader.innerText = `${element.querySelector("h3").innerText}`;
        albumImg.style.backgroundImage = `url(${albumMaked.url}${element.id}.jpg)`;
        stories.classList.remove("stories--active");
        album.classList.add("album--active");
        scrollback.classList.remove("dn");
    }

    function PhotoMaker(nameOfAlbum, id, url) {
        this.url = `${url}.jpg`;
        this.id = `${nameOfAlbum}_${id}`;
    };

    //заполнение массива объектами из PhotoMaker
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
    renderAlbum();
};