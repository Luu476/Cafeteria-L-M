let articlesContainer = document.querySelector('.articles_container');

// Crear un artículo
const createArticle = (imageSrc, description) => {
    let article = document.createElement('article');

    let img = document.createElement('img');
    img.src = imageSrc;
    img.alt = description;

    let p = document.createElement('p');
    p.textContent = description;

    article.appendChild(img);
    article.appendChild(p);

    return article;
};

// Agregar artículos al contenedor
articlesContainer.appendChild(createArticle('./imagenes/landingpage/coffee01.jpeg', 'Sumérgete en la intensidad de nuestro espresso.'));
articlesContainer.appendChild(createArticle('./imagenes/landingpage/cake01.png', 'Descubre la exquisitez de nuestras tortas.'));
articlesContainer.appendChild(createArticle('./imagenes/fot/coff/Capuccino.jpg', 'Déjate llevar por la cremosidad de nuestro capuchino.'));
