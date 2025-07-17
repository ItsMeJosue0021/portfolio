import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { IoSend } from "react-icons/io5";

const Chat = () => {
    
    const [input, setInput] = useState(""); 
    const [messages, setMessages] = useState([]); 
    const [isLoading, setIsLoading] = useState(false);

    const knowledgebase = `Knowledge Base: This is who I am, I am Joshua Salceda a Magna Cum Laude graduate of Information Technology from Cavite State University - Bacoor City Campus, I graudated last September 19, 2024. I was born on March 23, 2000. I have been recognized as a top IT student, a consistent Dean’s Lister, and has received multiple awards, including Best Research Presenter and Best Research Proposal during my university’s research colloquium.

                        I specializes in full-stack web development, particularly in Laravel MVC and API, Django MVT framework, ASP.NET Core basics and React.js/Next.js with TypeScript and ES6 and Spring Boot (only for API with Layered approach). I experience with database management using MySQL, PostgreSQL as well as frontend technologies like, HTML5, CSS3, Bootstrap, Tailwind CSS, axios, vite, JQuery and HTMX. My technical expertise extends to RESTful API development, version control with Git, Github, MS DevOps, and Hostinger deployment.

                        During my on-the-job training at Philippine Health Insurance Corporation Central Office, I played a key role in developing a Benefit Package Management System (a protoype), handling both frontend and backend development. I have also led capstone projects, including a Web-Based Management Information System for Mambog Elementary School and I developed a Funeral Management System for Torres Escaro Funeral Services (as a cpastone project, a commisioned one).

                        Aside from my technical skills, I have experience in customer service and teaching, conducting Sunday school lessons and training students in Microsoft Office applications. I am passionate about software development, eager to learn new technologies, and continuously improving my problem-solving skills by working on projects in Python, Java, and JavaScript frameworks.

                        With a strong academic background, proven leadership in research, and practical industry experience, I can say I am highly capable of contributing to any team as a software developer, application developer, or full-stack engineer. I am open to new opportunities and challenges that will allow me to grow as a professional and make a positive impact on society. 

                        Hobbies: I love to read books, I love to walk, I play guitar a little bit and I play drums at church. I am a Christian. 

                        Mother: My mother Is Victoria Salceda My Father is Alfredo Salceda.

                        You can contact me Through my email and mobile number: joshuasalceda0021@gmail.com, 09335260170

                        Work: I am currently actively looking for work, I can be a frontend developer with experienc ein Next.js with TypeScript or a backend developer with experience in Laravel MVC and API, with baisc knowledge in Springboot as well for API development.

                        When ask about myself like "Tell me about yoursel" add this: I have worked on multiple commisioned projects and I mainly used Laravel MVC and API framework with React.js. In school I also gained a solid foundation of API development using Java and Springboot, gaining knowledge in OOP, MVC and Layered Architecture, Dependecy Injection, JDBC, etc. In my OJT at Philippine Health Insurance Corporation Central Office, I was able to learn  Django MVT framework and led the development of the prototype of the Benefit Package Magnagement System. I also have experience in React.js and Next.js for frontend development. 

                        You will be responding to the incoming question, don't give anything about me yet if no direct questions about me is asked but offer to be asked about me, asnwer as if you ar me, like you are joshua salceda, respond as casual, answer if need, if ever the question is not about whatever in the knowledge base, simply responed 'I'am sorry, I don't have an answer right now.' don't mention the phrase "knowledge base" provided to you, if the question is about me and answerable through the knowledge base, please don't answer plainly,
                        make it casual but professional, again don't give information unless asked and don't send greetins if you already sent one, if you are ask with "who" questions, only asnwer if it is about me or my girlfriend or mother as provided in the knowledgebase, also, stop re introducing yourself once you did already unless spicifically asked. Now, respond to the incoming question strictly based on the knowledge base nothing else:`;

    
    const sendMessage = async (message = input) => {
        message = String(message || "").trim(); // Ensure message is a string
    
        if (!message) return;
    
        setInput("");
        setIsLoading(true);
    
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
        } finally {
            setIsLoading(false);
        }
    };
    
    const sampleQuestions = [
        "Tell me about yourself.",
        "How can I contact you?",
        "Tell me about your skills.",
        "What projects have you worked on?",
        "Where did you study?",
        "Tell mre about your experience.",
    ];
    
    const handleSampleClick = (question) => {
        sendMessage(question);
    };

    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);
    
    return (
        <div className="z-50 flex flex-col  items-center md:items-start">
            <h1 className='text-xl font-bold text-[#3B82F6] mb-4 md:mb-0'>Ask anything about me!</h1>
            <div className="w-full flex flex-col gap-4 max-w-[800px] border border-gray-200 rounded-xl p-4 bg-white bg-opacity-30">
                <div className="relative w-full flex flex-col rounded-lg overflow-y-auto h-[500px] md:h-[300px] p-5 px-2 space-y-2 bg-white bg-opacity-40 scrollbar-hide">
                    {messages.map((msg, index) => (
                        <div 
                        key={index} 
                        className={`max-w-[75%] ${
                            msg.sender === 'user' ? 'self-end' : 'self-start'
                        }`}
                        >
                            <div className={`flex items-end gap-1 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                <div className={`flex items-center ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-1`}>
                                    {msg.sender === 'user' ? (
                                        <div className=" rounded-full inline-block"></div>
                                    ) : (
                                        <img src="/img/profile.JPG" alt="Bot Avatar" className="min-w-6 w-6 min-h-6 h-6 object-cover object-center rounded-full inline-block mr-2" />
                                    )}
                                </div>
                                <div className={`px-3 py-2 shadow-sm rounded-md ${msg.sender === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                                    <p className='text-sm'>{msg.text}</p>
                                </div>
                            </div>
                            
                        </div>
                    ))}

                    {isLoading && (
                        <div className="max-w-[75%] self-start flex items-center gap-1">
                            <img src="/img/profile.JPG" alt="Bot Avatar" className="min-w-6 w-6 min-h-6 h-6 object-cover object-center rounded-full inline-block mr-2" />
                            <p className="italic text-xs text-gray-500 animate-pulse px-3 py-2 shadow-sm rounded-md bg-gray-100">Typing...</p>
                        </div>
                    )}

                    { messages && messages.length === 0 && (
                        <div className="absolute right-0 bottom-0 w-full flex flex-wrap gap-2 max-w-[800px] p-4">
                            {sampleQuestions.map((question, index) => (
                                <button 
                                    key={index} 
                                    className="px-3 py-2 text-xs text-left bg-gray-200 rounded-md hover:bg-gray-300 bg-opacity-50 transition"
                                    onClick={() => handleSampleClick(question)}
                                >
                                    {question}
                                </button>
                            ))}
                        </div>
                    )}

                    <div ref={bottomRef} />
                </div>

                <div className="w-full flex items-start gap-4">
                    <input type="text" 
                    value={input} onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault(); 
                            sendMessage();
                        }
                    }} 
                    placeholder="Ask something..." 
                    className='w-full bg-white bg-opacity-40 h-full px-4 py-3 text-base rounded-md'/>
                    <button className='px-4 py-2.5 text-base bg-[#3B82F6] text-white rounded-md hover:scale-105 transition-all duration-300' onClick={() => sendMessage()}>
                        <IoSend size={22}/>
                    </button>
                </div>
            </div>
            <p className='text-xs py-2 px-1 text-left'>Warning: This chatbot is AI-powered and only responds based on the data provided to it and does not have access to external resources. Please verify important information before relying on it.</p>
        </div>
    )
}

export default Chat;