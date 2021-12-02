var faker = require('faker');

var database = { url_images: []};

for (var contador = 1; contador <= 10; contador++) {
    database.url_images.push({
        idImages: contador,
        description: faker.lorem.sentences(),
        imagen_url: "https://www.hogarmania.com/archivos/202109/animales-felices-portada-668x400x80xX-1.jpg"

    })
}

console.log(JSON.stringify(database)); //Error