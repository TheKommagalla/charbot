

// document.addEventListener("DOMContentLoaded", () => {
//     const containerData = [
//         {
//             image: "https://source.unsplash.com/200x200/?nature",
//             title: "Beautiful Nature",
//             description: "Experience the beauty of nature with lush greenery and breathtaking landscapes."
//         },
//         {
//             image: "https://source.unsplash.com/200x200/?technology",
//             title: "Advanced Technology",
//             description: "Explore the marvels of modern technology shaping our world."
//         },
//         {
//             image: "https://source.unsplash.com/200x200/?city",
//             title: "Urban Life",
//             description: "Discover the energy and diversity of urban living in bustling cities."
//         },
//         {
//             image: "https://source.unsplash.com/200x200/?space",
//             title: "The Cosmos",
//             description: "Dive into the mysteries of space and the universe beyond our imagination."
//         }
//     ];

//     const mainContainer = document.getElementById("main-container");

//     // Check if mainContainer exists
//     if (mainContainer) {
//         // Dynamically create container elements
//         containerData.forEach((item, index) => {
//             const container = document.createElement("div");
//             container.className = "container";

//             container.innerHTML = `
//                 <img src="${item.image}" alt="${item.title}">
//                 <div class="text">
//                     <h2>${item.title}</h2>
//                     <p>${item.description}</p>
//                 </div>
//             `;

//             container.dataset.index = index;
//             mainContainer.appendChild(container);
//         });

//         // On scroll animation
//         const containers = document.querySelectorAll('.container');

//         const loadContainers = () => {
//             containers.forEach(container => {
//                 const containerTop = container.getBoundingClientRect().top;
//                 const triggerBottom = window.innerHeight * 0.8;

//                 if (containerTop < triggerBottom) {
//                     container.classList.add("show");
//                 }
//             });
//         };

//         window.addEventListener("scroll", loadContainers);
//         loadContainers(); // Load initially
//     } else {
//         console.error("Main container not found.");
//     }
// });
// Sign-in function: Store credentials in localStorage
function signin() {
    function signin() {
        // Get input values
        var username = document.getElementById("floatingInput").value.trim();
        var password = document.getElementById("floatingPassword").value.trim();
    
        // Check for empty fields
        if (username === "" || password === "") {
            Swal.fire({
                icon: 'warning',
                title: 'Incomplete Fields',
                text: 'Please enter both email and password!',
            });
            return;
        }
    
        // Save data to localStorage
        try {
            localStorage.setItem("Email", username);
            localStorage.setItem("Password", password);
    
            Swal.fire({
                icon: 'success',
                title: 'Sign-Up Successful',
                text: 'Your account has been created successfully!',
            }).then(() => {
                window.location.href = "App.html"; // Redirect to app.html
            });
        } catch (e) {
            console.error("LocalStorage Error:", e);
            Swal.fire({
                icon: 'error',
                title: 'Storage Error',
                text: 'Unable to store user data. Please try again.',
            });
        }
    }
    
    // var username = document.getElementById("floatingInput").value;
    // var password = document.getElementById("floatingPassword").value;

    // // Check for empty input fields
    // if (username === "" || password === "") {
    //     Swal.fire({
    //         icon: 'warning',
    //         title: 'Incomplete Fields',
    //         text: 'Please enter both email and password!',
    //     });
    //     return;
    // }

    // // Store credentials in localStorage
    // localStorage.setItem("Email", username);
    // localStorage.setItem("Password", password);

    // // Redirect to App.html
    // Swal.fire({
    //     icon: 'success',
    //     title: 'Sign Up Successful',
    //     text: 'You have been signed up successfully!',
    // }).then(() => {
    //     window.location.href = "app.html";
    // });
}

// Validate User function for login
function validateUser() {
    // Get user input
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Retrieve credentials from localStorage
    // var storedEmail = localStorage.getItem("Email");
    // var storedPassword = localStorage.getItem("Password");

    // Check for empty fields
    if (username === "" || password === "") {
        Swal.fire({
            icon: 'warning',
            title: 'Incomplete Fields',
            text: 'Please enter both email and password!',
        });
        return;
    }

    // Validate credentials
    if (username === "admin@gmail.com" && password === "admin@123")
    {
        Swal.fire({
            icon: 'success',
            title: 'Login Successful',
            text: 'Welcome back!',
        }).then(() => {
            window.location.href = "App.html"; // Redirect to app page
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Credentials',
            text: 'The email or password you entered is incorrect.',
        });
    }
}
