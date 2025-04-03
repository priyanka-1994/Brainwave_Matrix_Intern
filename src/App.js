import React from "react";
import Chat from "./Chat";  // Import the Chat component

function App() {
    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Realtime Chat App</h1>
            <Chat />  {/* Render the Chat component here */}
        </div>
    );
}

export default App;
