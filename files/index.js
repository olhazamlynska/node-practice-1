const fs = require('fs/promises');
const path = require('path');

// console.log(__dirname);
// console.log(__filename);

const filmsPath = path.join(__dirname, '..', 'db', 'films.json');

// console.log(filmsPath);

class fileOperations {
  constructor(filmsPath) {
    this.filmsPath = filmsPath;
  }
  async read() {
    try {
      return await fs.readFile(this.filmsPath, 'utf-8');
    } catch (error) {
      console.log(error.message);
    }
  }
  async create(data) {
    return await fs.writeFile(this.filmsPath, JSON.stringify(data, null, 2));
  }
  async remove() {
    try {
      await fs.unlink(this.filmsPath);
    } catch (error) {}
  }
  async update(newFilm) {
    try {
      const films = JSON.parse(await this.read());
      const newFilms = [...films, newFilm];
      return await fs.writeFile(
        this.filmsPath,
        JSON.stringify(newFilms, null, 2)
      );
    } catch (error) {
      console.log(error.message);
    }
  }
  async display() {
    console.log(await this.read());
  }
}

// Функція з замиканням
// function asyncHandler(func) {
//   return function () {
//     try {
//       func();
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
// }

// Те ж саме без замикання
// function asyncHandler(func) {
//   try {
//     return func;
//   } catch (error) {
//     console.log(error.message);
//   }
// }

const file = new fileOperations(filmsPath);
// file.display();

const data = [
  {
    id: '10',
    title: 'Street kings',
    year: '2010',
  },
  {
    id: '20',
    title: 'Harry Potter',
    year: '1999',
  },
  {
    id: '30',
    title: 'Forest Gumb',
    year: '1990',
  },
];

// file.create(data);

asyncHandler(file.create(data));

// const newFilm = [
//   {
//     id: '40',
//     title: 'StarWars',
//     year: '1970',
//   },
// ];

// file.update(newFilm);

// file.remove();
