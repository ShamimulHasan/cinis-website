"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { IconChat, IconClose, IconSend } from "./Icons";
import { faqCategories, allFaqs } from "@/lib/faqData";

const WELCOME_MESSAGE = "Hi! I'm the CINI'S FAQ assistant. Ask me a question, or pick a topic below to get started.";
const FALLBACK_MESSAGE = "I don't have an answer for that one. For anything specific, the fastest way to reach a real person is to call 1300 933 063 or use the contact form.";

function categorySuggestions() {
  return faqCategories.map((c) => ({ label: c.label, type: "category", id: c.id }));
}

// Very small keyword-overlap scorer — good enough for a fixed, curated FAQ
// set. No AI, no API calls, nothing that can be "wrong" in an LLM sense.
function matchFaq(rawInput) {
  const input = rawInput.toLowerCase().trim();
  if (!input) return null;

  let best = null;
  let bestScore = 0;

  for (const faq of allFaqs) {
    let score = 0;
    for (const keyword of faq.keywords) {
      if (input.includes(keyword)) score += keyword.split(" ").length;
    }
    if (input.includes(faq.question.toLowerCase())) score += 5;
    if (score > bestScore) {
      bestScore = score;
      best = faq;
    }
  }

  return bestScore > 0 ? best : null;
}

let messageId = 0;
function nextId() {
  messageId += 1;
  return messageId;
}

export default function FaqChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(() => [
    { id: nextId(), sender: "bot", text: WELCOME_MESSAGE, suggestions: categorySuggestions() },
  ]);
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  function pushBotMessage(text, suggestions) {
    setMessages((m) => [...m, { id: nextId(), sender: "bot", text, suggestions }]);
  }

  function pushUserMessage(text) {
    setMessages((m) => [...m, { id: nextId(), sender: "user", text }]);
  }

  function askQuestion(faqInput) {
    // The question object may come from a category listing (no `.category`
    // field) or from allFaqs / keyword search (has it) — look it up by id
    // so "more from this category" works regardless of the click's origin.
    const faq = allFaqs.find((f) => f.id === faqInput.id) || faqInput;
    pushUserMessage(faq.question);
    const category = faqCategories.find((c) => c.label === faq.category);
    const moreInCategory = category
      ? category.questions.filter((q) => q.id !== faq.id).slice(0, 3).map((q) => ({ label: q.question, type: "question", faq: q }))
      : [];
    setTimeout(() => {
      pushBotMessage(faq.answer, [
        ...moreInCategory,
        { label: "Back to topics", type: "reset" },
      ]);
    }, 250);
  }

  function openCategory(categoryId) {
    const category = faqCategories.find((c) => c.id === categoryId);
    if (!category) return;
    pushUserMessage(category.label);
    setTimeout(() => {
      pushBotMessage(
        `Here's what people usually ask about ${category.label.toLowerCase()}:`,
        category.questions.map((q) => ({ label: q.question, type: "question", faq: q }))
      );
    }, 250);
  }

  function resetToCategories() {
    pushBotMessage("What else can I help with?", categorySuggestions());
  }

  function handleSuggestionClick(suggestion) {
    if (suggestion.type === "category") openCategory(suggestion.id);
    else if (suggestion.type === "question") askQuestion(suggestion.faq);
    else if (suggestion.type === "reset") resetToCategories();
  }

  function handleSend(e) {
    e.preventDefault();
    const text = inputValue.trim();
    if (!text) return;
    pushUserMessage(text);
    setInputValue("");

    const match = matchFaq(text);
    setTimeout(() => {
      if (match) {
        pushBotMessage(match.answer, [{ label: "Back to topics", type: "reset" }]);
      } else {
        pushBotMessage(FALLBACK_MESSAGE, categorySuggestions());
      }
    }, 250);
  }

  const lastMessage = messages[messages.length - 1];

  return (
    <div className="faq-chat">
      {open && (
        <div className="faq-chat-panel" role="dialog" aria-label="Frequently asked questions">
          <div className="faq-chat-header">
            <span>CINI'S Assistant</span>
            <button
              className="faq-chat-close"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <IconClose />
            </button>
          </div>

          <div className="faq-chat-body" ref={scrollRef}>
            {messages.map((m) => (
              <div key={m.id} className={`faq-bubble-row ${m.sender}`}>
                <div className={`faq-bubble ${m.sender}`}>{m.text}</div>
              </div>
            ))}

            {lastMessage?.suggestions && lastMessage.suggestions.length > 0 && (
              <div className="faq-suggestions">
                {lastMessage.suggestions.map((s, i) => (
                  <button
                    key={i}
                    className="faq-suggestion-chip"
                    onClick={() => handleSuggestionClick(s)}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="faq-chat-footer">
            <p>
              Want to know more? <Link href="/contact" onClick={() => setOpen(false)}>Contact us</Link> or call{" "}
              <a href="tel:+1300933063">1300 933 063</a>.
            </p>
            <form className="faq-chat-input-row" onSubmit={handleSend}>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSend(e);
                  }
                }}
                placeholder="Type a question..."
                aria-label="Type a question"
              />
              <button type="submit" aria-label="Send">
                <IconSend />
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        className="faq-chat-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close FAQ chat" : "Open FAQ chat"}
      >
        {open ? <IconClose /> : <IconChat />}
      </button>
    </div>
  );
}
