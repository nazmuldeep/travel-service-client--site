import React from 'react';


const Blog = () => {
    return (
        <div>


            <div className=" grid max-w-sm gap-5 m-auto w-100 mb-8 lg:grid-cols-4 mt-14 sm:mx-auto lg:max-w-full">
                <div className="px-10 py-20  border rounded lg:px-5 lg:py-10 xl:py-20">

                    <a
                        href="/"
                        className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        aria-label="Read article"

                    >
                        Difference between SQL and NoSQL
                    </a>
                    <p className="max-w-xs  mb-2 text-black">
                        Ans: SQL databases are a type of system software that supports management, analysis, capturing and querying the structured data in a relational format. NoSQL databases are a type of software that allows to maintain and retrieve structured, unstructured, polymorphic data for different purposes.
                        SQL supports predefined schemas, making the storage of data restrictive to structured type only.	Nosql supports dynamic schemas to store different forms of data.

                    </p>

                </div>
                <div className="px-10 py-20  border rounded lg:px-5 lg:py-10 xl:py-20">

                    <a
                        href="/"
                        className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        aria-label="Read article"

                    >
                        What is JWT, and how does it work?
                    </a>
                    <p className="max-w-xs mx-auto mb-2 text-black">
                        Ans: A JSON web token (JWT) is a JSON object used to communicate information securely over the internet (between two parties). It can be utilized for information exchange as well as an authentication method.
                        JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.


                    </p>

                </div>
                <div className="px-10 py-20  border rounded lg:px-5 lg:py-10 xl:py-20">

                    <a
                        href="/"
                        className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        aria-label="Read article"

                    >
                        How does NodeJS handle multiple requests at the same time?

                        ?
                    </a>
                    <p className="max-w-xs mx-auto mb-2 text-black">
                        Ans: NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.

                    </p>

                </div>
                <div className="px-10 py-20  border rounded lg:px-5 lg:py-10 xl:py-20">

                    <a
                        href="/"
                        className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        aria-label="Read article"

                    >
                        Difference between JavaScript and Node.js.
                    </a>
                    <p className="max-w-xs mx-auto mb-2 text-black">
                        Ans : JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google’s v8 engine.

                        JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.

                        JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t have the capability to add HTML.

                    </p>

                </div>
            </div>


        </div >
    );
};

export default Blog;