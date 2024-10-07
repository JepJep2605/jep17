
const correctPassword = "secret123";

let userPassword = "";

do {
   
       userPassword = prompt("Enter your password: ");
           
               if (userPassword !== correctPassword) {
                       console.log("Incorrect password. Please try again.");
                           }
                               
                               } while (userPassword !== correctPassword);

                               console.log("Success! You've entered the correct password.");