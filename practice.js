const login = (req, res) => {
    const { username, password } = req.body;
    // variables for username and password recieved from the rquest body
    if (!username || !password) {
        // checks if either field is missing in a Or operator
        return res.status(400).json({ error: 'Username and password are required' });
      }
    // if the previson is true it returns an error response
      if (username === "admin" && password === "password123") {
        return res.status(200).json({ message: `Welcome, ${username}!` });
        // if the condition is true it returns a success response
      } else {
        return res.status(401).json({ error: "Invalid credentials" });
      }
    //   else block that if the condition in the previous if statement is false
    };
     // Extracts username and password from the request body using destructuring
    //  Checks if either field is missing and returns an error response. 
    // Validates the credentials and returns an appropriate response.

    // query parameters

    const filterProducts = (req, res) => {
        const { category, price } = req.query;
        // object that contains the query parameters sent in the URL  Category and price are values from the query
      
        console.log(`Filtering products by category: ${category}, price: ${price}`);
    //   Output message to the console indicating the applied filters
        res.json({ message: `Filtered products by category: ${category}, price: ${price}` });
      };
    //   Method sends JSON response with the specified message



    //    Extract query parameters category and price from the request query string
    //  Logs the values and returns a response confirming the applied filters
    
