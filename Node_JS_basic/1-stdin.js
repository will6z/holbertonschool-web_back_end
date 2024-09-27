// 1-stdin.js

console.log("Welcome to Holberton School, what is your name?");

process.stdin.on('data', (data) => {
  // Normalize the input by removing both \r and \n characters
  const name = data.toString().trim().replace(/\r?\n|\r/g, '');

  // Output the name
  console.log(`Your name is: ${name}`);

  // Exit the process after the output
  process.exit();
});

process.on('exit', () => {
  console.log('This important software is now closing');
});

