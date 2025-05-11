
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, ArrowRight, X, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTED_QUESTIONS = [
  "How do I sell my license?",
  "What types of software can I sell?",
  "How much is my license worth?",
  "How long does the process take?"
];

const MOCK_RESPONSES: Record<string, string> = {
  "how do i sell my license?": "To sell your license, simply upload the license details through our secure platform, and our team will verify its transferability. We'll provide a valuation within 24 hours, and once you accept, you'll receive payment through your preferred method.",
  "what types of software can i sell?": "We accept most enterprise software licenses including Microsoft, Adobe, Oracle, SAP, Autodesk, and many other major vendors. The software must have transferable licensing rights according to the original agreement.",
  "how much is my license worth?": "The value depends on several factors including the software type, remaining subscription time, and current market demand. On average, enterprise software can fetch up to 70% of the original price, productivity suites up to 60%, and creative tools up to 50%.",
  "how long does the process take?": "The entire process typically takes 3-5 business days from submission to payment. License verification happens within 24 hours, and once you accept our offer, payment is processed within 1-2 business days.",
  "default": "Thanks for your question! Our team specializes in helping businesses like yours recover value from unused software licenses. Can you provide more details about your specific software license, and I'd be happy to assist you further."
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = input.trim();
    setInput("");
    
    // Add user message to chat
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate API delay
    setTimeout(() => {
      // Get mock response based on user's question
      const normalizedUserMessage = userMessage.toLowerCase();
      let responseContent = MOCK_RESPONSES.default;
      
      // Check if we have a specific response for this question
      Object.keys(MOCK_RESPONSES).forEach(key => {
        if (normalizedUserMessage.includes(key)) {
          responseContent = MOCK_RESPONSES[key];
        }
      });
      
      // Add assistant response after a delay
      setMessages((prev) => [...prev, { 
        role: "assistant", 
        content: responseContent 
      }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSuggestedQuestion = (question: string) => {
    setInput(question);
    handleSendMessage();
  };

  return (
    <>
      {/* Chat button */}
      <motion.div
        className="fixed bottom-4 right-4 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-gradient-to-r from-softsell-600 to-teal-600 text-white shadow-lg hover:shadow-xl dark:shadow-softsell-800/20"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Open chat</span>
        </Button>
      </motion.div>

      {/* Chat widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-4 right-4 w-full sm:max-w-[400px] z-50 rounded-lg shadow-xl"
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
          >
            <div className="flex flex-col h-[500px] rounded-lg overflow-hidden border bg-card text-card-foreground shadow-lg">
              {/* Header */}
              <div className="p-4 bg-gradient-to-r from-softsell-600 to-teal-600 text-white flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Bot className="h-5 w-5" />
                  <h3 className="font-medium">SoftSell Assistant</h3>
                </div>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="text-white/90 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Chat messages */}
              <div className="flex-1 overflow-auto p-4 bg-secondary/30">
                {messages.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-4">
                    <Bot className="h-10 w-10 text-softsell-600 mb-4" />
                    <h3 className="font-medium text-lg mb-2">Hi there! 👋</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      I'm your SoftSell assistant. How can I help you today?
                    </p>
                    <div className="grid gap-2 w-full">
                      {SUGGESTED_QUESTIONS.map((question) => (
                        <Button 
                          key={question} 
                          variant="outline"
                          className="justify-start text-left h-auto py-2"
                          onClick={() => handleSuggestedQuestion(question)}
                        >
                          {question}
                        </Button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    {messages.map((message, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`mb-4 flex ${
                          message.role === "user" ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg px-4 py-2 ${
                            message.role === "user"
                              ? "bg-softsell-600 text-white"
                              : "bg-muted"
                          }`}
                        >
                          {message.content}
                        </div>
                      </motion.div>
                    ))}
                    {isTyping && (
                      <div className="flex justify-start mb-4">
                        <div className="bg-muted rounded-lg px-4 py-2 flex items-center space-x-1">
                          <motion.div
                            className="h-2 w-2 bg-gray-400 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 1 }}
                          />
                          <motion.div
                            className="h-2 w-2 bg-gray-400 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                          />
                          <motion.div
                            className="h-2 w-2 bg-gray-400 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                          />
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </>
                )}
              </div>

              {/* Input area */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1"
                  />
                  <Button 
                    onClick={handleSendMessage} 
                    disabled={!input.trim()}
                    className="bg-softsell-600 hover:bg-softsell-700"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
