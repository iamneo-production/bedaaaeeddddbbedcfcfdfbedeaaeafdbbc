
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import logo from './logo.svg';
import './App.css';
import StartQuiz from './components/StartQuiz';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import QuizApp from './components/QuizApp';
import Questions from './components/Questions';
import { useState } from 'react';
import Banner from './components/UI/Banner/Banner';

function App() {

  const [res,setRes] = useState(0);

  const setResults = (results) => {
    setRes(results);
  }

  const router = createBrowserRouter([
    {path:'/', element:<QuizApp></QuizApp>, children :[
      {path:'',element:<StartQuiz></StartQuiz>},
      {path:'ques',element:<Questions res={setResults}></Questions>},
      {path:'results',element:<Banner res={res}></Banner>}
    ]}
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;