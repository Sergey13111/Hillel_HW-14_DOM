"use strict";

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.append(el);
}

const getAlboms = async () => {
    try {
        const ul = document.getElementById('albums');

        const response = await fetch("https://jsonplaceholder.typicode.com/albums");
        const albums = await response.json();
        return albums.map(function(album) {
            const li = createNode("li");
            li.innerHTML = album.title;
            li.classList.add("album_title");
            append(ul, li);
        });
    } catch (error) {
        return console.log(error);
    }
};

getAlboms();