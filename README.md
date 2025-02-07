# Module4
Codeboxx Module Module 4

## Research Documentation ( Bonus Points)

## What is Node.js?
Node.js is a runtime environment that allows you to run JavaScript on the server-side, outside of a web browser. It’s built on the V8 JavaScript engine (the same engine that powers Google Chrome) and enables developers to build scalable, high-performance applications, particularly for building web servers and networked applications.

Node.js is asynchronous and event-driven, meaning it can handle many operations (like file reads, database queries, and API calls) without blocking other tasks. This makes it great for applications that need to handle lots of concurrent connections, like real-time apps (chat, games, collaborative tools) and APIs.

Some key features:
- **Non-blocking, event-driven architecture:** Node.js uses a single-threaded event loop to handle requests efficiently.
- **Fast execution:** Thanks to the V8 engine, Node.js is very fast for I/O-heavy tasks.
- **Package manager (npm):** Node.js comes with npm, which is the world's largest ecosystem of open-source libraries and packages.

Node.js has become widely used for building scalable back-end systems and microservices due to its speed and efficiency.

## What is Express? 
Express is a web application framework for Node.js that simplifies the process of building web servers and APIs. It provides a set of tools and features to streamline common tasks in web development, such as routing, handling HTTP requests and responses, and middleware management. Express is minimal and flexible, allowing developers to add only the functionality they need, while still providing essential tools for building scalable and maintainable applications.

Some key features of Express:
- **Routing:** Express provides an easy way to define routes for handling different HTTP methods (GET, POST, PUT, DELETE, etc.) and paths. You can define how the server responds to specific requests.
- **Middleware support:** Express allows you to use middleware functions that can modify the request or response objects, handle errors, or perform other tasks like authentication and logging.
- **Templating engines:** It can integrate with templating engines (like EJS, Pug, or Handlebars) to generate dynamic HTML content.
- **Serving static files:** Express makes it easy to serve static files like images, CSS, or JavaScript.
- **Scalability:** It works well with large applications, providing features like routing, session handling, and more.

Express is often used to build APIs, single-page apps (SPAs), and RESTful services, and it’s one of the most popular frameworks for Node.js due to its simplicity and flexibility. It's a great starting point for developers building web applications on the Node.js platform.

## Give Three Reasons why we choose Node Express for Rocket Elevators? 
Here are three reasons why developers often choose Node.js with Express for building web applications:

1. **Fast and Scalable**: Node.js uses a non-blocking, event-driven architecture, which allows it to handle many concurrent requests efficiently. This makes it ideal for building scalable applications, especially for real-time data processing and applications with high traffic demands. Express, as a minimal and flexible web framework, builds on this by providing an easy way to handle HTTP requests.

2. **JavaScript Everywhere**: With Node.js and Express, developers can use JavaScript both on the server side and the client side, making the development process more cohesive. This "JavaScript everywhere" approach allows for shared code between the server and the client, reducing the complexity of the codebase.

3. **Large Ecosystem & Community**: Node.js has a huge ecosystem of libraries and tools available through npm (Node Package Manager), which speeds up development by providing ready-made solutions. Express, being one of the most popular frameworks for Node.js, benefits from a large community, extensive documentation, and a wealth of middleware and plugins to make development faster and easier.

Would you like to know more about how Node.js and Express can be used in a specific type of project?



## // look for: what's the defference between using .send and .json

.send(data)

Can send strings, objects, buffers, or arrays.
Automatically detects the content type (e.g., text/plain for strings, application/json for objects).
If you pass an object, Express will internally convert it to JSON before sending.

.json(data)

Specifically sends JSON data.
Ensures that the Content-Type header is set to application/json.
Only works with objects or arrays (not strings).

## C.R.U.D - Restful API's
Create - Post   
Read - Get
Update - Put/Patch
Delete - Delete

## Middleware ia provided 
Built-in Middleware - (Comes with Express)
Third-Party Middleware - (Installed via npm) cookie - parser
Custom Middleware - (User-defined) base - middleware

// pricing.standard
    // pricing.standard.fee
    
    // req.body => object => { key:value }
    // req.query => object => { key:value }
    // { Apartments: '100', Floors: '6', Tier: 'Standard' }
    
    // req.body.Aparments
    // req.query.Aparments
  // ALWAYS TEST YOUR VARIABLE WITH A CONSOLE.lOG

  // The parameters will come from the request
    // req.body
    // req.query

  // Need 3 parameters to be able to calculate the quote residential
    // Number of Floors (number)
    // Number of Apartment (number)
    // Tier (standard, premium, excelium)

  // Use the function you have in residentialCalcul.ja to make the calculation.
  // const numberOfElevator = residentialElevatorCalcul( Number of Apartment, Number of Floors)

  // if (statement) {}
  // Use an if statement to verify what Tier we have to precise the calculation depending of it.

  // Using the Tier (standard, premium, excelium)

  // unit price (1 elevator) depending of the Tier
  // price of elevators = number of elevator * unit price
  // installation fee (depending of the Tier)
  // totalprice = price of elevators + installation fee 

  // const result = {key:value} 


// Arrow Function. It's a function using Name = () => {}
// It is exactly the same thing as a functionName(){}

// inside the parentheses, we call that : parameters

// const pricing = {
//    standard: { price: 8000, fee: 0.10 },
//    premium: { price: 12000, fee: 0.15 },
//    excelium: { price: 15000, fee: 0.20 },
// };

// pricing.standard
// pricing.standard.fee

// req.body => object => { key:value }
// req.query => object => { key:value }
// { Apartments: '100', Floors: '6', Tier: 'Standard' }

// req.body.Aparments
// req.query.Aparments

const queriesExample = (req, res) => {
  // deconstruct the variable from an object (the object is the request we receive)
  const { bodyExample } = req.body
  console.log(bodyExample)

  const { queryExample } = req.query
  console.log(queryExample)

  const { paramsExample } = req.params
  console.log(paramsExample)

  const { key1 } = deconstruct
  console.log(key1)

  // console.log("console.log of our test as a string")
  res.send("reponse of our test as a string")
}
