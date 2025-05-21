// Modular user authentication
function validateInput(input) {
   if (!input || input.length < 6) {
       throw new Error("Input must be at least 6 characters.");  
}    return true;
}
function queryDatabase(username) {
// Simulated database query
   return username === "testUser";
}
function generateToken(user) {
   return `${user}-token`;
}
// Authentication flow
function authenticateUser(username) {
   validateInput(username);
   const userExists = queryDatabase(username);
   if (!userExists) throw new Error("User not found.");
   return generateToken(username);
}
console.log(authenticateUser("testUser")); // Output: testUser-token