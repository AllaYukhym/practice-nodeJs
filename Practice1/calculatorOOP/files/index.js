console.log("Hello from files");

const path = require("path");
const fs = require("fs/promises");

// console.log(__dirname);
// console.log(__filename);

const filmsPath = path.join(__dirname, "..", "db", "films.json");

console.log(filmsPath);

class FilesOperation {
  constructor(filmsPath) {
    this.filmsPath = filmsPath;
  }

  async deasplay() {
    console.log(await this.read());
  }

  async create(data) {
    await fs.writeFile(this.filmsPath, JSON.stringify(data, null, 4));
  }

  async read() {
    return await fs.readFile(this.filmsPath, "utf-8");
  }

  async update(newFilm) {
    const films = JSON.parse(await this.read());
    films.push(newFilm);
    this.create(films);
  }

  async remove() {
    await fs.unlink(this.filmsPath);
  }
}

const newFilm = {
  id: "10",
  Title: "Avatar-2",
  Year: "2009",
  Rated: "PG-13",
  Released: "18 Dec 2009",
};
const filmsData = [
  {
    id: "1",
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
  },
  {
    id: "2",
    Title: "I Am Legend",
    Year: "2007",
    Rated: "PG-13",
    Released: "14 Dec 2007",
    Runtime: "101 min",
  },
  {
    id: "2",
    Title: "300",
    Year: "2006",
    Rated: "R",
    Released: "09 Mar 2007",
    Runtime: "117 min",
  },
  {
    id: "3",
    Title: "The Avengers",
    Year: "2012",
    Rated: "PG-13",
    Released: "04 May 2012",
    Runtime: "143 min",
  },
];
const file = new FilesOperation(filmsPath);

// file.deasplay();
// file.create(filmsData);
// file.remove();
file.update(newFilm);
