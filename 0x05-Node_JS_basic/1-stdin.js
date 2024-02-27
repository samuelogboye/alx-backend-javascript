// Import the readline module
const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user "What is your name?" and wait for their response
rl.question('Welcome to Holberton School, what is your name? \n', (name) => {
  // Print a greeting message using the provided name
  console.log(`Your name is: ${name}`);

  // Close the readline interface after use
  rl.close();

  console.log('This important software is now closing \n');
});
