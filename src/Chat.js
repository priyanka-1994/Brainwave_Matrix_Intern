import React, { useState, useEffect } from "react";
import { auth, database } from "./firebase";  // Import Firebase
import { ref, push, onValue } from "firebase/database";  // Import Realtime Database functions

const Chat = () => {
    const [messages, setMessages] = useState([]);  // Store messages
    const [newMessage, setNewMessage] = useState("");  // New message input
    const user = auth.currentUser;  // Get the current user

    // Fetch messages from Firebase
    useEffect(() => {
        const messagesRef = ref(database, "messages"); // Reference 'messages' in DB
        onValue(messagesRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const messageList = Object.values(data);
                setMessages(messageList);
            }
        });
    }, []);

    // Send message to Firebase
    const sendMessage = () => {
        if (newMessage.trim() !== "") {
            const messagesRef = ref(database, "messages");
            push(messagesRef, {
                text: newMessage,
                user: user ? user.displayName : "Anonymous",
                timestamp: Date.now()
            });
            setNewMessage(""); // Clear input field
        }
    };

    return (
        <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}> 
            <h2>Chat Room</h2>
            {/* Display Messages */}

            <div style={{ border: "1px solid #ccc", padding: "10px", height: "300px", overflowY: "auto" }}>
                {messages.map((msg, index) => (
                    <p key={index}><strong>{msg.user}:</strong> {msg.text}</p>
                ))}
            </div>
            <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                style={{ width: "80%", padding: "5px", marginTop: "10px" }}
            />
            <button onClick={sendMessage} style={{ marginLeft: "10px" }}>Send</button>   
     </div>
    );
};

export default Chat;
