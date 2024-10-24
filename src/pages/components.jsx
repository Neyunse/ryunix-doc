import Code from "../components/code";

const funct = `const Component = (props) => {
  return (
    <>
      <h1>{props.message}</h1>
    </>
  );
};

export default Component;
`;

const app = `import Component from "./Comonent.jsx"

const App = () => {
  return (
    <>
      <Component message="Hello world" />
    </>
  );
};

export default App;
`;

const Components = () => {
  return (
    <>
      <h1>Components</h1>
      <h2>Function Components</h2>
      <p>
        Functions as Components are flat functions that have as a parameter
        (props) as the only argument. They must always begin with a capital
        letter to be used in JSX or RYX.
      </p>
      <Code code={funct} title="Component.jsx" />
      <Code code={app} title="App.ryx" />
    </>
  );
};

export default Components;
