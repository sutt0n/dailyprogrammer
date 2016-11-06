const readline = require('readline');

'use strict';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  rl.question('What is your age? ', (age) => {
    rl.question('What is your username? ', (username) => {

      console.log("Your name is " + name + ", you are " + age + " years old, and your Reddit username is " + username + ".");

      rl.close();

    });
  })
});
