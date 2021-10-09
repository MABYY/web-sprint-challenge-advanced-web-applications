Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics.
Add your answers to the questions within interview_answers.md file. These will not be counted as a part of your sprint score but will be
helpful for preparing you for your endorsement interview, and
enhancing overall understanding.

1- Explain what a token is used for.

A common pattern in we applications is for a login endpoint to exist, which takes a payload of username and password. If the credentials are known, the server responds with a fresh Jason Web Token (JWT).

These tokens are issued by the server and consist of strings of cryptic text, which can be stored on the client-side using local storage or session storage. Everytime the user interacts with application, the server reads the token and makes decisions for data transfer based on the client's permission.

In every request of interaction, the application adds an Authorization: <token> header to every request, to be allowed access to protected resources that require authentication.

2- What steps can you take in your web apps to keep your data secure?

Once we have this token, we can add two layers of protection to our app. One uses protected routes, and the other sends an authentication header with our API calls.

If you try to click on the Protected Page link, the user will be redirected to "/login" instead of being taken to the "/protected" page unless he has the right credentials - the token.

3- Describe how web servers work.

The "world wide web" (web) is a part of the internet - which is itself a network of interconnected computers. The web is just one way to share data over the internet.
It consists of a body of information stored on web servers, ready
to be shared across the world.

The term "web server" can mean
    1) a computer that stores the code for a website or
    2) a program that runs on such a computer.

The physical computer device that we call a web server is connected to the internet, and stores the code for different websites to be shared across the world at all times. When we load the code for our website or web apps on a server, we say that the server is "hosting" our website/app.

However, the server itself needs some code to tell it what to do. That software program is called a web server. Its main purpose is to "serve" web pages it retrieves from the user's project code to other users upon request.

In order to share information, computers can connect to the internet via the world wide web, locate a specific server computer through a URL and domain name, and retrieve information or resources from that server.

A URL is a formatted text string referring to the location of a resource on a computer network (most commonly the web).URLs are the universal standard for locating website addresses.

Most data on the web is shared through websites and web applications.
When we want to deploy our web app to the world wide web, we need to host that project on a web server so that it can be served up to people connected to the web.
There are many services that allow you to "rent" server space for your web app. You can deploy web apps to Amazon AWS servers, Google Servers, Netlify, Heroku, Gatsby, Github Pages, and Vercel among many, many others.

Deploying a static web app is a little different than deploying a dynamic web app.
A basic definition of a static site is one that has hardcoded data that doesn't change.

4- Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

CRUD is an acronym for C - create, R - read/retrieve, U -update, D - delete- the four basic functions that are implemented in any relational DB applications. Each of it can map to a standard SQL statement, HTTP protocol method or Data Distribution Service (DDS).REST is an API architecture which interacts with complex system whereas CRUD is a set of primitive operations which mostly manipulates data.

There is a long list of http verbs but the most commonly ised are POST, GET, PUT, PATCH, and DELETE.

GET: This Http method is used to read a representation of a resource. It should never modify any resources on the server. GET returns a representation in XML or JSON and an HTTP response code of 200 (OK). In an error case, it most often returns a 404 (NOT FOUND) or 400 (BAD REQUEST).

POST: This method is used to create a new http resource of a specified type in REST environment. Upon successful creation, the server should return a header with a link to the newly-created resource, along with a HTTP response code of 201 (CREATED).

PUT: This http verb is mostly used for complete replacement of an existing resource URI. One of the constraints of PUT is that one need to pass the entire resource object with updated values and old values which one wants to retain. If object is passed partially, it updates the missing field as null, thus leading to data inconsistency.

PATCH: his method is used when one wants to partially update the resources. Unlike PUT, one just have to send the updated fields in request and not the entire resource object.

DELETE: This http method is used to delete any existing resource of the system identified by a URI (Uniform Resource Identifier).
