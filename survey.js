const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  rl.question("What's an activity you like doing?", (activity) => {
    rl.question("What do you listen to while doing that?", (music) => {
      rl.question("Which meal is your favourite (e.g: dinner, brunch, etc.", (meal) => {
        rl.question("What's your favourite thing to eat for that meal?", (food) => {
          rl.question("Which sport is your absolute favourite?", (sport) => {
            rl.question("What is your superpower?", (power) => {
              console.log(`${name} likes ${activity} while listening to ${music}. ${name}'s favourite food to eat during ${meal} is ${food}. In ${name}'s spare time, they like to play ${sport}. If ${name} could pick one power, they'd pick ${power}. `);
              rl.close();
            });
          });
        });
      });
    });
  });
});