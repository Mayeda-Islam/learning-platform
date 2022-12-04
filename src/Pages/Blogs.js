import React from "react";

const Blogs = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-5xl mb-16 font-semibold text-center mt-20">
        Question Answer
      </h2>
      <div className="w-4/5 mb-6 mx-auto">
        <h3 className="font-bold text-3xl">1.what is cors?</h3>
        <p className="text-1xl  text-justify">
          CORS is a way to whitelist requests to your web server from certain
          locations, by specifying response headers like
          'Access-Control-Allow-Origin'. It's an important protocol for making
          cross-domain requests possible, in cases where there's a legitimate
          need to do so
        </p>
      </div>
      <div className="w-4/5 mb-6 mx-auto">
        <h3 className="font-bold text-2xl">
          2.Why are you using firebase?
          <br /> What other options do you have to
          implement authentication?
        </h3>
        <p className="text-1xl  text-justify">
          Firebase helps you develop high-quality apps, grow your user base, and
          earn more money. Each feature works independently, and they work even
          better together. The Firebase Realtime Database lets you build rich,
          collaborative applications by allowing secure access to the database
          directly from client-side code.Firebase is Google’s mobile application
          development platform. It has a lot of different products that cover
          much of what’s needed to build a mobile app. It would take a lot of
          time to describe the complete set of situations where Firebase can be
          helpful
        </p>
        <h5 className="text-xl font-semibold"> other options to
          implement authentication:</h5>
          <ol class="list-disc ml-4">
            <li>OneLogin</li>
            <li>Amazon Cognito</li>
            <li>Firebase</li>
            <li>Auth0</li>
            <li>Authress</li>
            <li>Frontegg</li>
            <li>Keycloak</li>
            <li>PingIdentity</li>
            <li>Okta</li>
          </ol>
      </div>
      <div className="w-4/5 mb-6 mx-auto">
        <h3 className="font-bold text-2xl">3. How does the private route work?</h3>
        <p className="text-1xl  text-justify">
        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
        </p>
      </div>
      <div className="w-4/5 mb-6 mx-auto">
        <h3 className="font-bold text-2xl">4. What is Node? How does Node work?</h3>
        <p className="text-1xl  text-justify">
        Node.js is an open-source server environment. Node.js is cross-platform and runs on Windows, Linux, Unix, and macOS. Node.js is a back-end JavaScript runtime environment. Node.js runs on the V8 JavaScript Engine and executes JavaScript code outside a web browser.

        </p>
        <p>It is used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
      </div>
    </div>
  );
};

export default Blogs;
