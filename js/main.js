const albums = Array.from(document.querySelectorAll(".album"));
const backScrollButton = document.querySelector(".scrollback");

albums.forEach(e => {
    const album = e.querySelector(".album__photo_list");
    const albumParams = e.querySelector(".album__params");
    const length = e.dataset.length;
    const url = e.dataset.url;
    const params = {
        muah: e.dataset.muah,
        photo: e.dataset.photo,
        armor: e.dataset.armor,
        models: e.dataset.models,
        decor: e.dataset.decor,
        location: e.dataset.location
    };
    const paramsKeys = Object.keys(params);

    for (let i = 1; i <= length; i++){
        album.innerHTML += `<div class="album__photo_list_item"><img src="${url + i}.jpg" alt=""></div>`;
    };

    paramsKeys.forEach(key => {
        if (params[key]) {
            albumParams.innerHTML += `<p>${key}: ${params[key]}</p>`;
        }
    })
});
backScrollButton.addEventListener("click", () => {
    this.scrollTo(0,0);
})