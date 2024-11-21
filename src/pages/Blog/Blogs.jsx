import React from "react";

const Blogs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* accordian  */}
      <div className=" md:w-3/4 mx-auto my-12">
        <div className="join join-vertical ">
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Tell us the differences between uncontrolled and controlled
              components.
            </div>
            <div className="collapse-content">
              <p>
                Controlled and uncontrolled components represent distinct
                approaches to managing state in React applications. In
                controlled components, React oversees and controls the component
                state, which is passed down from a parent component as props.
                This approach ensures a clear and explicit data flow, ideal for
                scenarios requiring precise coordination. In contrast,
                uncontrolled components manage their state independently, often
                leveraging refs to interact directly with the DOM. This approach
                is suitable for situations where React does not need full
                control over the state, offering simplicity and ease of
                integration with non-React code or imperative APIs. The decision
                between controlled and uncontrolled components hinges on the
                specific requirements and design principles of a given
                application.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              How to validate React props using PropTypes
            </div>
            <div className="collapse-content">
              <p>
                In React, PropTypes is a library that enables the validation of
                component props, ensuring that they adhere to specified types.
                To use PropTypes, first, import it into your component file.
                Next, define the PropTypes for your component by creating a
                propTypes property, detailing the expected types for each prop.
                For instance, you can specify that a prop should be a string,
                number, boolean, or other types, and whether it is required.
                During development, if a prop does not match the defined type or
                is missing when marked as required, React will issue a warning
                in the console. This helps catch potential errors and enhances
                the reliability of your components by enforcing the expected
                prop types. The PropTypes library also provides various
                validators, allowing for intricate type checking, and its usage
                contributes to a more robust and maintainable codebase.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Tell us the difference between nodejs and express js.
            </div>
            <div className="collapse-content">
              <p>
                Node.js and Express.js are both JavaScript-based technologies
                commonly used in web development, but they serve different
                purposes. Node.js is a runtime environment that allows the
                execution of JavaScript code on the server side. It provides the
                platform for building scalable and high-performance network
                applications. In contrast, Express.js is a web application
                framework built on top of Node.js, simplifying the process of
                building web applications and APIs. Express.js provides a set of
                features and tools, such as routing, middleware, and templating,
                to streamline the development of web applications. While Node.js
                is the underlying runtime, Express.js acts as a higher-level
                framework that facilitates the creation of web servers and
                handling HTTP requests and responses. In essence, Node.js is the
                runtime environment, and Express.js is a framework that runs on
                top of Node.js, providing a more structured and feature-rich
                approach for building web applications
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              What is a custom hook, and why will you create a custom hook?
            </div>
            <div className="collapse-content">
              <p>
                A custom hook in React is a JavaScript function that
                encapsulates reusable logic or stateful behavior and can be
                shared across multiple components. Custom hooks allow developers
                to extract complex logic from components, promoting code
                reusability, and maintainability. The naming convention for
                custom hooks is to use the prefix "use" to indicate that it
                follows the rules of Hooks in React. Developers create custom
                hooks when they find themselves duplicating or sharing similar
                logic among different components. This can include tasks like
                managing state, handling side effects, or encapsulating behavior
                specific to a certain feature. Custom hooks abstract away the
                implementation details, allowing components to consume the logic
                without needing to understand its internal workings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
