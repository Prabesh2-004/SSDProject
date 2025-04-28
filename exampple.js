// Array of arrays (less readable)
const users = [];

for (let i = 0; i < 3; i++) {
  const username = prompt(`Enter username for user ${i + 1}:`);
  const email = prompt(`Enter email for user ${i + 1}:`);
  const password = prompt(`Enter password for user ${i + 1}:`);
  
  users.push([username, email, password]);
}

console.log("All users:", users);
console.log("First user email:", users[0][1]); // Email is at index 1