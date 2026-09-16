// Rule-based FAQ content for the chat widget — no AI/API calls, so it's free
// to run and never wrong in a way an LLM could be. Edit questions/answers/
// keywords here; components/FaqChatWidget.js just renders whatever is here.

export const faqCategories = [
  {
    id: "about",
    label: "About Us",
    questions: [
      {
        id: "what-is-cinis",
        question: "What is CINI'S?",
        keywords: ["what is cini", "about cini", "who are you", "about your company", "what do you do"],
        answer: "We're a commercial and pharmaceutical cleaning company based in Melbourne. We've been doing this since 1995.",
      },
      {
        id: "how-long",
        question: "How long have you been in business?",
        keywords: ["how long", "years in business", "since when", "established", "experience"],
        answer: "Over 25 years now, since 1995.",
      },
      {
        id: "areas",
        question: "What areas do you service?",
        keywords: ["area", "location you service", "which suburbs", "where do you work", "service area"],
        answer: "We cover Melbourne and the surrounding areas.",
      },
      {
        id: "insured",
        question: "Are you insured?",
        keywords: ["insured", "insurance"],
        answer: "Yes, all our cleaning services are fully insured.",
      },
    ],
  },
  {
    id: "services",
    label: "Our Services",
    questions: [
      {
        id: "what-services",
        question: "What cleaning services do you offer?",
        keywords: ["what services", "list of services", "what do you clean", "services do you offer"],
        answer: "We offer five specialist services: Cleanroom/Sterile Cleaning, Laboratory Cleaning, Lab Preparation, Post Maintenance Cleaning, and Office Cleaning.",
      },
      {
        id: "cleanroom",
        question: "What is cleanroom/sterile cleaning?",
        keywords: ["cleanroom", "sterile cleaning", "sterile environment"],
        answer: "It's specialised cleaning for sterile environments where contamination just isn't an option. Our staff are trained in sterile-environment protocols and follow procedures that meet strict compliance standards, with documented cleaning so you're covered for audits.",
      },
      {
        id: "laboratory",
        question: "Do you clean laboratories?",
        keywords: ["laboratory", "lab cleaning", "clean a lab"],
        answer: "Yes. Our laboratory cleaning is tailored to lab surfaces and equipment, and we're careful around sensitive instruments. Available regularly or as a one-off.",
      },
      {
        id: "lab-prep",
        question: "What is lab preparation cleaning?",
        keywords: ["lab preparation", "lab prep", "prepare a lab", "lab setup"],
        answer: "That's getting a lab space fully cleaned and ready before it's put into use, benches, fittings, fixtures, all of it, timed around your project start date.",
      },
      {
        id: "post-maintenance",
        question: "Do you do post-maintenance cleaning?",
        keywords: ["post maintenance", "after maintenance", "after trade work", "post construction"],
        answer: "Yes. After trade or maintenance work, we clear out the dust, residue and debris, and we turn it around fast so your downtime stays short.",
      },
      {
        id: "office",
        question: "Do you offer office cleaning?",
        keywords: ["office cleaning", "clean an office", "workplace cleaning"],
        answer: "Yes, recurring office cleaning that covers kitchens, bathrooms, desks and common areas, scheduled around your working hours.",
      },
      {
        id: "which-service",
        question: "I'm not sure which service I need",
        keywords: ["not sure which", "which service", "help me choose", "what do i need"],
        answer: "Of course, just tell us about your space (or try the \"What kind of space are we talking about?\" tool on our homepage) and we'll point you to the right service.",
      },
    ],
  },
  {
    id: "booking",
    label: "Quotes & Booking",
    questions: [
      {
        id: "get-quote",
        question: "How do I get a quote?",
        keywords: ["get a quote", "quote", "how much", "pricing", "estimate"],
        answer: "Fill out the contact form on our website or just give us a call on 1300 933 063.",
      },
      {
        id: "cost",
        question: "How much does cleaning cost?",
        keywords: ["cost", "price", "how much does it cost", "rates", "fees"],
        answer: "It really depends on the size and type of job, so we can't give a flat rate here. Send us your details and we'll get you an accurate quote.",
      },
      {
        id: "one-off-recurring",
        question: "Can I book a one-off clean, or only ongoing/recurring?",
        keywords: ["one off", "one-time", "recurring", "ongoing", "single clean"],
        answer: "Both, we do one-off jobs and recurring cleaning depending on the service and what you need.",
      },
      {
        id: "how-book",
        question: "How do I book?",
        keywords: ["how do i book", "booking", "schedule a clean", "make a booking"],
        answer: "Reach out through the contact form or give us a call, and we'll sort out a time that works.",
      },
    ],
  },
  {
    id: "contact",
    label: "Contact & Hours",
    questions: [
      {
        id: "hours",
        question: "What are your business hours?",
        keywords: ["hours", "open", "when are you open", "business hours"],
        answer: "Monday to Friday, 9am to 4pm.",
      },
      {
        id: "contact",
        question: "How can I contact you?",
        keywords: ["contact", "phone number", "email address", "reach you"],
        answer: "Call us on 1300 933 063, email cinis@csocs.com.au, or use the contact form on our site.",
      },
      {
        id: "where",
        question: "Where are you located?",
        keywords: ["where are you located", "address", "location"],
        answer: "2/11 Silvretta Court, Clyde North, VIC 3978.",
      },
    ],
  },
  {
    id: "trust",
    label: "Trust & Quality",
    questions: [
      {
        id: "trained",
        question: "Is your staff trained?",
        keywords: ["trained", "qualified", "staff training", "experienced staff"],
        answer: "Yes, our team is trained specifically for the environments they work in, including sterile/cleanroom protocols and lab-specific handling.",
      },
      {
        id: "different",
        question: "What makes CINI'S different?",
        keywords: ["different", "why choose", "why you", "what makes you"],
        answer: "25+ years of experience, a client-focused approach, fully insured service, and staff who stick around long enough to actually know your space.",
      },
    ],
  },
];

// Flat list, used for free-text keyword matching.
export const allFaqs = faqCategories.flatMap((category) =>
  category.questions.map((q) => ({ ...q, category: category.label }))
);
