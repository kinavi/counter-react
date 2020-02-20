import Main from './pages/Main';
// import About from './pages/About';
// import Todo from './pages/Todo';
import NoMatch from './components/NoMatch';
import App from './components/App-v2';

export default [
  {
    ...App,
    routes: [
      {
        ...Main,
        path: '/',
        exact: true,
      },
      // {
      //   ...About,
      //   path: '/about',
      // },
      // {
      //   ...Todo,
      //   path: '/todo',
      // },
      {
        ...NoMatch,
      },
    ],
  },
];
