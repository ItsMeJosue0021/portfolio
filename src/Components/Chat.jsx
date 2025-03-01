import react from 'react';
import { useState } from 'react';
import axios from 'axios';

const Chat = () => {
    
    const [input, setInput] = useState(""); 
    const [messages, setMessages] = useState([]); 

    const knowledgebase = `Knowledge Base: This is who I am, I am Joshua Salceda a Magna Cum Laude graduate of Information Technology from Cavite State University - Bacoor Campus, I graudated last September 19, 2025. I was born on March 23, 2000. I have been recognized as a top IT student, a consistent Dean’s Lister, and has received multiple awards, including Best Research Presenter and Best Research Proposal during my university’s research colloquium.

                        I specializes in full-stack web development, particularly in Laravel, React.js, Django, and Spring Boot (only for simple API). I have hands-on experience with database management using Oracle and MySQL, PostgreSQL as well as frontend technologies like React.js, HTML5, CSS3, Bootstrap, Tailwind CSS, axios, vite, JQuery and HTMX. My technical expertise extends to RESTful API development, version control with Git, and cloud deployment.

                        During my on-the-job training at Philippine Health Insurance Corporation Central Office, I played a key role in developing a Benefit Package Management System (a protoype), handling both frontend and backend development. I have also led capstone projects, including a Web-Based Management Information System for Mambog Elementary School and I developed a Funeral Management System for Torres Escaro Funeral Services (as a cpastone project, a commisioned one).

                        Aside from my technical skills, I have experience in customer service and teaching, conducting Sunday school lessons and training students in Microsoft Office applications. I am passionate about software development, eager to learn new technologies, and continuously improving my problem-solving skills by working on projects in Python, Java, and JavaScript frameworks.

                        With a strong academic background, proven leadership in research, and practical industry experience, I can say I am highly capable of contributing to any team as a software developer, application developer, or full-stack engineer. I am open to new opportunities and challenges that will allow me to grow as a professional and make a positive impact on society. 

                        Hobbies: I love to read books, I love to walk, I play guitar a little bit and I play drums at church. I am a Christian. 

                        Girlfriend: I have one and I love her so much she is Jennefer Morabor, She;s Beuatiful with a very sift heart.

                        Mother: My mother Is Victoria Salceda.

                        You can contact me Through my email: joshuasalceda0021@gmail.com.

                        Work: I currently work as a Software Developer at CosmoTech Phillipines, and I am currently on training about Software Development Life Cycle (SDLC).

                        You will be responding to the incoming question, don't give anything about me yet if no direct questions about me is asked but offer to be asked about me, asnwer as if you ar me, like you are joshua salceda, respond as casual, answer if need, if ever the question is not about whatever in the knowledge base, simply responed 'I'am sorry, I don't have an answer right now.' don't mention the phrase "knowledge base" provided to you, if the question is about me and answerable through the knowledge base, please don't answer plainly,
                        make it casual but professional, again don't give information unless asked and don't send greetins if you already sent one, if you are ask with "who" questions, only asnwer if it is about me or my girlfriend or mother as provided in the knowledgebase, also, stop re introducing yourself once you did already unless spicifically asked. Now, respond to the incoming question strictly based on the knowledge base nothing else:`;

    
    // const sendMessage = async (message = input) => {
        
    //     message = String(message || "").trim(); // Ensure message is a string and not undefined/null
    
    //     if (!message) return;

    //     setInput("");
    
    //     //const apiKey = "AIzaSyCe25tFzOTbZ12zy7vW2E3fv9sHPWg5-aY";  //AIzaSyCGBj3R-CP6PXdeZEP1r117SVO8DgqP6QA
    //     const apiKey = "AIzaSyCGBj3R-CP6PXdeZEP1r117SVO8DgqP6QA";
    //     const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
    
    //     const newMessages = [...messages, { text: message, sender: "user" }];
    //     setMessages(newMessages);
    //     const fullPrompt = `${knowledgebase}\n\nUser: ${message}\nBot:`;
    
    //     try {
    //         const response = await axios.post(url, {
    //             contents: [{ parts: [{ text: fullPrompt }] }],
    //         });
    //         const geminiResponse = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "I don't know the answer.";    
    //         setMessages([...newMessages, { text: geminiResponse, sender: "bot" }]);
    //     } catch (error) {
    //         console.error("Error:", error);
    //         setMessages([...newMessages, { text: "Error: Unable to fetch response", sender: "bot" }]);
    //     }
    
    //     setInput("");
    // };


    const sendMessage = async (message = input) => {
        message = String(message || "").trim(); // Ensure message is a string
    
        if (!message) return;
    
        setInput("");
    
        const apiKey = "AIzaSyCGBj3R-CP6PXdeZEP1r117SVO8DgqP6QA";
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
    
        const newMessages = [...messages, { text: message, sender: "user" }];
        setMessages(newMessages);
    
        // Keep only the last 5 messages for context (avoid exceeding token limits)
        const conversationHistory = newMessages.slice(-5).map(msg => 
            `${msg.sender === "user" ? "User" : "Joshua"}: ${msg.text}`
        ).join("\n");
    
        const fullPrompt = `${knowledgebase}\n\n${conversationHistory}\nJoshua:`;
    
        try {
            const response = await axios.post(url, {
                contents: [{ parts: [{ text: fullPrompt }] }],
            });
    
            const geminiResponse = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "I don't know the answer.";
            setMessages([...newMessages, { text: geminiResponse, sender: "bot" }]);
        } catch (error) {
            console.error("Error:", error);
            setMessages([...newMessages, { text: "Error: Unable to fetch response", sender: "bot" }]);
        }
    };
    
    const sampleQuestions = [
        "What is your name?",
        "Tell me about your skills.",
        "What projects have you worked on?",
        "Where did you study?",
        "What programming languages do you know?",
    ];
    
    const handleSampleClick = (question) => {
        sendMessage(question);
    };
    
    return (
        <div className="z-50 flex flex-col  items-center md:items-start">
            <h1 className='text-lg font-bold text-[#3B82F6] mb-4 md:mb-0'>Ask anything about me!</h1>
            <div className="w-full flex flex-col gap-4 max-w-[800px] border border-gray-200 rounded-xl p-4 bg-white bg-opacity-30">
                <div className="relative w-full flex flex-col rounded-lg overflow-y-auto h-[500px] md:h-[300px] p-5 px-2 space-y-2 bg-white bg-opacity-40">
                    {messages.map((msg, index) => (
                        <div 
                        key={index} 
                        className={`max-w-[75%] px-3 py-2 border border-gray-300 rounded-md ${
                            msg.sender === 'user' ? 'bg-blue-100 self-end' : 'bg-gray-100 self-start'
                        }`}
                        >
                        <strong className='text-sm'>{msg.sender === "user" ? "You:" : "Joshua:"}</strong>
                        <p>{msg.text}</p>
                        </div>
                    ))}

                    { messages && messages.length === 0 && (
                        <div className="absolute right-0 bottom-0 w-full flex flex-wrap gap-2 max-w-[800px] p-4">
                            {sampleQuestions.map((question, index) => (
                                <button 
                                    key={index} 
                                    className="px-3 py-2 text-sm text-left bg-gray-200 rounded-md hover:bg-gray-300 bg-opacity-50 transition"
                                    onClick={() => handleSampleClick(question)}
                                >
                                    {question}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className="w-full flex items-start gap-4">
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask something..." className='w-full bg-white bg-opacity-40 h-full px-4 py-3 text-base rounded-md'/>
                    <button className='px-4 py-3 text-base bg-[#3B82F6] text-white rounded-md' onClick={() => sendMessage()}>Send</button>
                </div>
            </div>
            <p className='text-xs py-2 px-1 text-left'>Note: This chatbot is AI-powered and may sometimes provide incorrect or incomplete responses. Please verify important information before relying on it.</p>
        </div>
    )
}

export default Chat;