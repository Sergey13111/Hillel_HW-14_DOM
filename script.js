"use strict";

const getAlboms = async () => {
    try {
        function createNode(element) {
            return document.createElement(element);
        }
        
        function append(parent, el) {
          return parent.appendChild(el);
        }

        const ul = document.getElementById('albums');

        const response = await fetch("https://jsonplaceholder.typicode.com/albums");
        const albums = await response.json();
        return albums.map(function(album) {
            const li = createNode("li");
            li.innerHTML = `${album.title}`;
            append(ul, li);
            li.classList.add("album_title");
        });
    } catch (error) {
        return console.log(error);
    }
};

getAlboms();