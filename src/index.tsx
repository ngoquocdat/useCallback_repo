import * as React from "react";
import { memo, useState } from "react";
import * as ReactDOM from "react-dom/client";
// import { StyledEngineProvider } from '@mui/material/styles';
// import Demo from './demo';

// ReactDOM.createRoot(document.querySelector("#root")).render(
//   <React.StrictMode>
//     <StyledEngineProvider injectFirst>
//       <Demo />
//     </StyledEngineProvider>
//   </React.StrictMode>
// );

// const Button = memo(
//   ({ onClick }: any): any =>
//     console.log("render button") || <button onClick={onClick}>Click</button>
// );
const Button = memo(({ onClick }: any): any => {
  console.log("render button");
  return <button onClick={onClick}>Click</button>;
});

const Parent = () => {
  const [counter, setCounter] = useState(0);

  const increment = React.useCallback(
    (step) => () => {
      console.log("increment: ", counter);
      setCounter((counter) => counter + step);
    },
    []
  ); // the function is recreated all the time

  return (
    <div>
      <Button onClick={increment(1)} />
      <hr />
      <div>{counter}</div>
    </div>
  );
};

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <Parent />
  </React.StrictMode>
);
