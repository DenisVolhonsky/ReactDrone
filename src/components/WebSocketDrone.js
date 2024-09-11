import React, { useState, useEffect } from "react";

const WebSocketDrone = () => {
  const [message, setMessage] = useState("No data yet");
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    // Подключаемся к публичному WebSocket серверу
    const ws = new WebSocket("wss://echo.websocket.org");

    // Обрабатываем сообщения от сервера
    ws.onmessage = (event) => {
      setMessage(`Received: ${event.data}`);
    };

    // Очищаем WebSocket при размонтировании компонента
    return () => {
      ws.close();
    };
  }, []);

  // Функция для отправки сообщения на сервер
  const sendMessage = () => {
    if (inputMessage.trim() !== "") {
      const ws = new WebSocket("wss://echo.websocket.org");
      ws.onopen = () => {
        ws.send(inputMessage);
        setMessage(`Sent: ${inputMessage}`);
        setInputMessage("");
      };
    }
  };

  return (
    <div>
      <h3>WebSocket Test</h3>
      <p>{message}</p>
      <input
        type="text"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        placeholder="Enter message"
      />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
};

export default WebSocketDrone;
