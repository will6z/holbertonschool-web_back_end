// 1-stdin.js

// Display the welcome message
console.log("Welcome to Holberton School, what is your name?");

// Listen for user input on standard input (stdin)
process.stdin.on('data', (data) => {
  // Convert the input buffer to a string and remove any trailing newlines
  const name = data.toString().trim();

  // Display the name
  console.log(`Your name is: ${name}`);

  // Close the process after displaying the final message
  process.exit();
});

// Listen for when the process is about to exit
process.on('exit', () => {
  console.log('This important software is now closing');
});

