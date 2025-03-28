// Loads the express module
const express = require("express");
const hbs = require("hbs");

const bodyParser = require("body-parser");

const path = require("path");

//Creates our express server
const app = express();
const port = 3000;

//Serves static files (we need it to import a css file)
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));

//Sets a basic route
app.get("/", (req, res) => {
  res.render("index");
});

// Render the initial page with the number input form
app.get("/happy", (req, res) => {
  res.render("happy");
});

// Create express route binder for draw.hbs and get the data from the url as parameters
// that came from index.hbs

app.post("/happy", (req, res) => {
  const name = req.body.name;
  const gender = req.body.gender;
  
  if (!name || !gender) {
    return res.send("Error: Please complete your input.");
  }

  const pronoun = gender === "male" ? "he's" : "she's";
  let guests = [];

  let i = 1;
  while (req.body[`name${i}`]) {
    if (req.body[`checkbox${i}`] === "on") {
      guests.push(req.body[`name${i}`]);
    }
    i++;
  }

  // Happy Birthday song as an array
  let happyBirthdayLyrics = `Happy birthday to you. Happy birthday to you. Happy birthday dear ${name}. Happy birthday to you!`.split(" ");
  let song = "";
  // Generate Happy Birthday song output
  for (let i = 0; i < happyBirthdayLyrics.length; i++) {
    let singer = guests[i % guests.length];  // Corrected to always cycle through all guests
    song += `${singer}: ${happyBirthdayLyrics[i]} <br>`;
  }

  // Good Fellow song with pronoun replacement
  let goodFellowLyrics = `For ${pronoun} a jolly good fellow. For ${pronoun} a jolly good fellow. For ${pronoun} a jolly good fellow, which nobody can deny!`;

  // Add Good Fellow song to the output
  song += `<br>${guests[happyBirthdayLyrics.length % guests.length]}: ${goodFellowLyrics}`;
  if (guests.length === 0) {
    song = "No guests to sing the song.";
  }
  // Render happy.hbs with generated song
  res.render("happy", { song });
});

// Makes the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));
