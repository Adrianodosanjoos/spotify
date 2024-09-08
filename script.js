document.addEventListener('DOMContentLoaded', () => {

    const artistsDate = [
        {name: 'Ivandro Artista', Image: '.img/Ivandro-Artista.jpeg' },
        {name: 'Dillaz Artista', Image: './img/Dillaz Artista.jpeg' },
        {name: 'Coldplay Artista', Image: './img/Coldplay Artista.jpeg' },
        {name: 'Billie Elish Artista', Image: './img/Billie Elilish Artista.jpeg' },
        {name: 'Slow J Artista', Image: './img/slow J Artista.jpeg' },
        {name: 'The Weeknd Artista', Image: '.img/The weeknd Artista.jpeg' },
        {name: 'Pedro Sampaio Artista', Image: '.img/Pedro Sampaio Artista.jpeg' }
    ];
    
    const albumssDate = [
        {name: 'Afro Fado', artist:' Slow J', Image: './img/Afro Fado artist slow J.jpeg' },
        {name: 'Short nSweet', artist:'Capenter', Image: './img/Capenter.jpeg' },
        {name: 'HIT ME HARD AND SOFT', artist:'Billie Elish', Image: './img/HIT ME HARD AND SOFT artist Billie Eilish.jpeg' },
        {name: 'Trovador', artist:'Ivandro', Image: './img/Trovador artist Ivandro.jpeg' },
        {name: 'Utopia', artist:'Travis Scott', Image: './img/UTOPIA artist Travis Scott.jpeg' },
        {name: 'O Próprio', artist:'Dillaz', Image: './img/O Próprio artist Dillaz.jpeg' },
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



