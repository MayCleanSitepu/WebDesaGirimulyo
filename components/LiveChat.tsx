"use client";

import { useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function LiveChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages: Message[] = [
      ...messages,
      { role: "user" as const, content: input },
    ];

    setMessages(newMessages);
    setInput("");
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: newMessages }),
    });

    const data = await res.json();

    setMessages([
      ...newMessages,
      { role: "assistant" as const, content: data.reply },
    ]);

    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
    <button
      onClick={() => setOpen(!open)}
      className="fixed bottom-5 right-5 px-4 py-3 rounded-full bg-primary text-primary-foreground shadow-lg z-50 text-sm font-medium whitespace-nowrap hover:bg-primary/90 transition-colors"
    >
      Live Chat 💬
    </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-5 w-80 h-96 bg-card border rounded-xl shadow-xl flex flex-col z-50">
          <div className="p-3 border-b rounded-t-xl bg-primary text-primary-foreground font-semibold flex justify-between">
            Live Chat
            <button onClick={() => setOpen(false)} className="hover:opacity-70 transition-opacity">✕</button>
          </div>

          <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-2 rounded ${
                  m.role === "user"
                    ? "bg-primary/10 text-right border border-primary/20"
                    : "bg-muted"
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="text-muted-foreground">Sedang mengetik...</div>
            )}
          </div>

          <div className="p-2 border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border border-input rounded px-2 py-1 bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Ketik pesan..."
              onKeyDown={(e) =>
                e.key === "Enter" && sendMessage()
              }
            />
            <button
              onClick={sendMessage}
              className="bg-primary text-primary-foreground px-3 rounded hover:bg-primary/90 transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
