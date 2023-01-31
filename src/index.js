import './index.css';
import App from './App';
import { RootContextProvider } from './context/RootContext'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// ReactDOM.render(
//   <React.StrictMode>
//     <RootContextProvider>
//       <App />
//     </RootContextProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// react 18---
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RootContextProvider>
      <App />
    </RootContextProvider>
  </StrictMode>
);