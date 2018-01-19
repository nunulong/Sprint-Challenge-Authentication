<!-- Answers to the Short Answer Essay Questions go here -->

1. Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

Answer: Middleware to express framework is the function that have access to the request object, response object and next middleware function in the application's request-response cycle. Middleware functions can perform the following tasks:
  * Execute any code.
  * Make changes to the request and the response objects.
  * End the request-response cycle.
  * Call the next middleware function in the stack.
If the middleware does not end the request-response cycle, it must call next() to pass control to the next middleware function.

From perspective of web usage, session or visit is a unit of measurement of a user's actions taken within a period of time or with regard to completion of a task. For express framework, session is a middleware that can store user information in the server and also generate cookie that stores the user session id information in the browser.

Bcrypt is a password hashing function based on the Blowfish cipher. Besides incorporating a salt to protect against rainbow table attacks, bcrypt is an adaptive function: over time, the iteration count can be increased to make it slower, so it remains resistant to brute-force search attacks even with increasing computation power.

JWT stands for json web token which is a json-based web standard for creating access tokens that assert some number of claims. For example, a server could generate a token that has the claim "logged in as admin" and provide that to a client. The client could then use that token to prove that it is logged in as admin. The tokens are signed by the server's key, so the client and server are both able to verify that the token is legitimate. The tokens are designed to be compact, URL-safe and usable especially in web browser single sign-on (SSO) context.

2. What does bcrypt do in order to prevent attacks?

Answer: Bcrypt takes the original password, a random long string as salt, and the bcrypt cost which is a number to encode the plain password using hash function before the password gets stored in the database. When user tries to login with the original password, bcrypt will compare the original password with the hashing password in the database. If these passwords match, the user is authenticated by the system. Since the database does not store the plain password, the hacker cannot use brute force search or rainbow table methods to decode the hashing password because the bcrypt hashing function is slow.

3. What are the three parts of the JSON Web Token?

Answer: JSON Web Tokens consist of three parts separated by dots (.), which are:
  1. Header
  2. Payload
  3. Signature

  1. The header typically consists of two parts: the type of the token, which is JWT, and the hashing algorithm being used, such as HMAC SHA256 or RSA.

  2. The second part of the token is the payload, which contains the claims. Claims are statements about an entity (typically, the user) and additional metadata. There are three types of claims: registered, public, and private claims.

  * Registered claims: These are a set of predefined claims which are not mandatory but recommended, to  provide a set of useful, interoperable claims. Some of them are: iss (issuer), exp (expiration time), sub (subject),aud (audience), and others.

  * Public claims: These can be defined at will by those using JWTs. But to avoid collisions they should be defined in the IANA JSON Web Token Registry or be defined as a URI that contains a collision resistant namespace.

  * Private claims: These are the custom claims created to share information between parties that agree on using them and are neither registered or public claims.

  3. Signature
  To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that.
