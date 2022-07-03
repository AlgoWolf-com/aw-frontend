import { useState, useEffect } from "react";
import axios from "axios";
import "./getMessage.css";

function GetMessage() {
  const [message, setMessage] = useState(null);
  
  const getMessage = async () => {
    const { data } = await axios.get("https://api.algowolf.com/message");
    console.log(data);
    setMessage(data.message);
  }

  useEffect(() => {
    getMessage();
  }, []);

  if (message === null)
  {
    return (
      <div className="App" data-testid="get-message">
        Loading...
      </div>
    );
  }

  return (
    <div className="App" data-testid="get-message">
      {message}
    </div>
  );
}

export default GetMessage;
