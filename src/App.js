import axios from 'axios';
import { useState, useEffect } from "react";
import './App.css';


function App() {
  const [message, setMessage] = useState(null);
  
  useEffect(() => {
    const getMessage = async () => {
      const { data } = await axios("https://api.algowolf.com/message");
      console.log(data);
      setMessage(data.message);
    }

    getMessage();
  }, []);

  if (message === null)
  {
    return (
      <div className="App">
        Loading...
      </div>
    );
  }

  return (
    <div className="App">
      {message}
    </div>
  );
}

export default App;
