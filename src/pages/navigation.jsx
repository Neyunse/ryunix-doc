import Code from "../components/code";
import Alert from "../components/alert";

const nav = `import {
  useRouter
} from "@unsetsoft/ryunixjs"

function Home() {
  return (
    <>
    <h1>Home</h1>
    </>
  )
}

function Test() {
  return (
    <>
    <h1>Test</h1>
    </>
  )
}

const NotFound = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
    </div>
  );
};


const App = () => {
  const routes = [
    { path: '/', component: <Home /> },
    { path: '/test', component: <Test /> },
    { NotFound: <NotFound /> },  
  ];
  
  const { Children, NavLink } = useRouter(routes);

  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/test">Test</NavLink>
        <NavLink to="/this-not-exist">404</NavLink>

      </nav>
      <div>
        <Children />
      </div>
    </div>
  );
};

export default App
`;

const Navigation = () => {
  return (
    <>
      <h1>Navigation <span className="beta">Beta</span></h1>
      <h2>Children & Navigate</h2>

      <Code code={nav} title="App.jsx" />

      <Alert type="warning">
        Navigation only works in environments such as Vercel.
      </Alert>
      <br />
      <Alert type="warning">
        Navigate to pages like "/a/a" cause error
      </Alert>
    </>
  );
};

export default Navigation;
