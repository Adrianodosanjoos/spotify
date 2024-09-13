document.addEventListener('DOMContentLoaded', () => {

    const artistsDate = [
        {name: 'Ivandro Artista', image: './img/Ivandro-Artista.jpeg' },
        {name: 'Dillaz Artista', image: './img/Dillaz-Artista.jpeg' },
        {name: 'Coldplay Artista', image: './img/Coldplay-Artista.jpeg' },
        {name: 'Billie Elish Artista', image: './img/Billie-Elilish-Artista.jpeg' },
        {name: 'Slow J Artista', image: './img/slow-J-Artista.jpeg' },
        {name: 'The Weeknd Artista', image: './img/The-weeknd-Artista.jpeg' },
        {name: 'Pedro Sampaio Artista', image: './img/Pedro-Sampaio-Artista.jpeg' }
    ];
    
    const albumssDate = [
        {name: 'Afro Fado', artist:' Slow J', image: './img/Pedro-Sampaio-Artista.jpeg' },
        {name: 'Short nSweet', artist:'Capenter', image: './img/Capenter.jpeg' },
        {name: 'HIT ME HARD AND SOFT', artist:'Billie Elish', image: './img/HIT-ME-HARD-AND-SOFT-artist-Billie-Eilish.jpeg' },
        {name: 'Trovador', artist:'Ivandro', image: './img/Trovador-artist-Ivandro.jpeg' },
        {name: 'Utopia', artist:'Travis Scott', image: './img/UTOPIA-artist-Travis-Scott.jpeg' },
        {name: 'O Próprio', artist:'Dillaz', image: './img/O-Próprio-artist-Dillaz.jpeg' },
    ];

    const artistGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albums-grid')

    artistsDate.forEach(artist =>{
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')

        artistCard.innerHTML =`
        <img src=${artist.image} alt=${artist.name}>
        <h3>${artist.name}</h3>
        <p>artista</p>

        `

        artistGrid.appendChild(artistCard)
    })

    albumssDate.forEach(album =>{
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')

        albumCard.innerHTML =`
        <img src=${album.image} alt=${album.name}>
        
        <p>${album.name}</p>

        `

        albumsGrid.appendChild(albumCard)
    })

    

})



