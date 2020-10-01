module.exports = function (app, db) {
  app.post("/palindrome", (req, res) => {
    var string = req.body.phrase;
    var result = palindrome(string);
    res.json({ phrase: result });
  });
};

function palindrome(string) {
  var characters = new Map();
  for (var char of string) {
    if (/[a-zA-Z]/.test(char)) {
      if (characters.has(char.toLowerCase())) {
        characters.set(char.toLowerCase(), characters.get(char) + 1);
      } else {
        characters.set(char.toLowerCase(), 1);
      }
    }
  }

  var odds = 0;
  for (var [key, value] of characters) {
    if (value % 2 != 0) {
      odds++;
    }
  }
  console.log(characters);
  console.log(odds);
  return odds > 1 ? false : true;
}
