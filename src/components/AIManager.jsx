import { useEffect, useState } from "react";
import { products } from "../data/products";
import managerImage from "../assets/var-manager.png";

const tutorialSteps = [
  {
    title: "Welcome to VAR Store! ⚽",
    message:
      "Hey! I'm Vidwath, your VAR Store Manager. I'll give you a quick tour of the store.",
    target: null,
  },
  {
    title: "Home Base 🏠",
    message:
      "This is your Home. Whenever you want to start fresh or explore again, you can always come back here.",
    target: "tour-home",
  },
  {
    title: "Jerseys 👕",
    message:
      "Looking for your favourite club or player's jersey? Head here and explore our football jersey collection.",
    target: "tour-jerseys",
  },
  {
    title: "Boots 🥾",
    message:
      "Need something for the pitch? Explore our football boots and find the right pair for your game.",
    target: "tour-boots",
  },
  {
    title: "AI Picks 🤖",
    message:
      "Not sure what to choose? Visit AI Picks and get personalised football product recommendations.",
    target: "tour-ai-picks",
  },
  {
    title: "Your Cart 🛒",
    message:
      "Everything you choose stays here. Review your products before heading to checkout.",
    target: "tour-cart",
  },
  {
    title: "And That's Me! 👋",
    message:
      "Whenever you need help, tap my avatar in the bottom-right corner. You can chat with me and ask for product recommendations, jerseys, boots and more!",
    target: "tour-manager",
  },
  {
    title: "You're Ready! 🔥",
    message:
      "That's the VAR Store tour! Explore the store, find your favourites, and enjoy the game. See you around! ⚽",
    target: null,
  },
];

function AIManager({ restartTutorial }) {
  // ==========================================
  // TUTORIAL STATE
  // ==========================================

  const [showTutorial, setShowTutorial] = useState(() => {
    return (
      localStorage.getItem("var-tutorial-completed") !== "true"
    );
  });

  const [step, setStep] = useState(0);
  const [targetRect, setTargetRect] = useState(null);

  // ==========================================
  // CHAT STATE
  // ==========================================

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [userMessage, setUserMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text:
        "Hey! I'm Vidwath, your VAR Store Manager ⚽ Ask me anything about jerseys, boots, prices, or recommendations!",
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);

  const suggestedQuestions = [
    "Suggest me a Messi jersey 🐐",
    "Best boots under ₹10000",
    "What is the cheapest jersey?",
  ];

  // ==========================================
  // MOBILE MENU HELPER
  // ==========================================

  function setMobileTourMenu(open) {
    window.dispatchEvent(
      new CustomEvent("var-mobile-tour-menu", {
        detail: {
          open,
        },
      })
    );
  }

  // ==========================================
  // RESTART TUTORIAL
  // ==========================================

  useEffect(() => {
    if (!restartTutorial) {
      return;
    }

    const timer = setTimeout(() => {
      localStorage.removeItem("var-tutorial-completed");

      setStep(0);
      setIsChatOpen(false);
      setShowTutorial(true);

      setMobileTourMenu(false);
    }, 0);

    return () => clearTimeout(timer);
  }, [restartTutorial]);

  // ==========================================
  // SPOTLIGHT POSITION
  // ==========================================

  useEffect(() => {
    if (!showTutorial) {
      return;
    }

    const targetId = tutorialSteps[step].target;

    // ------------------------------------------
    // NO TARGET
    // ------------------------------------------

    if (!targetId) {
      setMobileTourMenu(false);
      return;
    }

    const isMobile = window.innerWidth < 768;

    // ------------------------------------------
    // MOBILE TARGET MAPPING
    // ------------------------------------------

    const mobileTargetMap = {
      "tour-home": "mobile-tour-home",
      "tour-jerseys": "mobile-tour-jerseys",
      "tour-boots": "mobile-tour-boots",
      "tour-ai-picks": "mobile-tour-ai-picks",
    };

    const actualTargetId =
      isMobile && mobileTargetMap[targetId]
        ? mobileTargetMap[targetId]
        : targetId;

    // ------------------------------------------
    // OPEN MOBILE MENU
    // ------------------------------------------

    if (
      isMobile &&
      mobileTargetMap[targetId]
    ) {
      setMobileTourMenu(true);
    } else {
      setMobileTourMenu(false);
    }

    // ------------------------------------------
    // FIND TARGET
    // ------------------------------------------

    let cleanup = null;

    const timer = setTimeout(() => {
      const target =
        document.getElementById(actualTargetId);

      if (!target) {
        console.log(
          `Tutorial target not found: ${actualTargetId}`
        );

        return;
      }

      const updateTargetPosition = () => {
        const rect =
          target.getBoundingClientRect();

        setTargetRect({
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
        });
      };

      // Initial position
      updateTargetPosition();

      // Scroll target into view
      target.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });

      // Update after smooth scroll
      const scrollTimer = setTimeout(() => {
        updateTargetPosition();
      }, 400);

      const handleResize = () => {
        updateTargetPosition();
      };

      const handleScroll = () => {
        updateTargetPosition();
      };

      window.addEventListener(
        "resize",
        handleResize
      );

      window.addEventListener(
        "scroll",
        handleScroll,
        true
      );

      cleanup = () => {
        clearTimeout(scrollTimer);

        window.removeEventListener(
          "resize",
          handleResize
        );

        window.removeEventListener(
          "scroll",
          handleScroll,
          true
        );
      };
    }, isMobile ? 200 : 50);

    return () => {
      clearTimeout(timer);

      if (cleanup) {
        cleanup();
      }
    };
  }, [step, showTutorial]);

  // ==========================================
  // FINISH TUTORIAL
  // ==========================================

  function finishTutorial() {
    localStorage.setItem(
      "var-tutorial-completed",
      "true"
    );

    setMobileTourMenu(false);
    setShowTutorial(false);
  }

  // ==========================================
  // NEXT STEP
  // ==========================================

  function handleNext() {
    if (step < tutorialSteps.length - 1) {
      setStep(
        (previousStep) =>
          previousStep + 1
      );
    } else {
      finishTutorial();
    }
  }

  // ==========================================
  // SKIP TUTORIAL
  // ==========================================

  function handleSkipTutorial() {
    finishTutorial();
  }

  // ==========================================
  // AI CHAT
  // ==========================================

  async function handleSendMessage(
    customMessage = null
  ) {
    const messageToSend =
      customMessage ||
      userMessage.trim();

    if (!messageToSend || isLoading) {
      return;
    }

    setMessages(
      (previousMessages) => [
        ...previousMessages,
        {
          role: "user",
          text: messageToSend,
        },
      ]
    );

    setUserMessage("");
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://var-store.onrender.com/api/manager",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            message: messageToSend,
            products,
          }),
        }
      );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
            "Something went wrong."
        );
      }

      setMessages(
        (previousMessages) => [
          ...previousMessages,
          {
            role: "assistant",
            text: data.reply,
          },
        ]
      );
    } catch (error) {
      console.error(
        "Chat Error:",
        error
      );

      setMessages(
        (previousMessages) => [
          ...previousMessages,
          {
            role: "assistant",
            text:
              "Sorry, I couldn't connect right now. Please try again! 😅",
          },
        ]
      );
    } finally {
      setIsLoading(false);
    }
  }

  // ==========================================
  // ENTER KEY
  // ==========================================

  function handleKeyDown(event) {
    if (
      event.key === "Enter" &&
      !event.shiftKey
    ) {
      event.preventDefault();

      handleSendMessage();
    }
  }

  const currentTargetId =
    tutorialSteps[step].target;

  // ==========================================
  // UI
  // ==========================================

  return (
    <>
      {/* ========================================
          TUTORIAL
      ======================================== */}

      {showTutorial && (
        <div className="fixed inset-0 z-[100]">

          {/* ======================================
              DARK SCREEN + SPOTLIGHT
          ====================================== */}

          {currentTargetId &&
          targetRect ? (
            <div
              className="fixed rounded-xl border-2 border-emerald-400 transition-all duration-500"
              style={{
                top:
                  targetRect.top - 8,
                left:
                  targetRect.left - 8,
                width:
                  targetRect.width + 16,
                height:
                  targetRect.height + 16,

                boxShadow:
                  "0 0 0 9999px rgba(0,0,0,0.78), 0 0 18px rgba(52,211,153,0.9), 0 0 40px rgba(52,211,153,0.5)",
              }}
            />
          ) : (
            <div className="fixed inset-0 bg-black/80" />
          )}

          {/* ======================================
              DIALOGUE BOX
          ====================================== */}

          <div className="pointer-events-auto absolute bottom-6 left-1/2 z-[110] flex w-[min(960px,calc(100vw-3rem))] -translate-x-1/2 overflow-hidden rounded-3xl border border-emerald-400/50 bg-slate-950/95 shadow-2xl shadow-black/70 backdrop-blur-xl">

            {/* ==================================
                DESKTOP MANAGER IMAGE
            ================================== */}

            <div className="hidden w-72 shrink-0 border-r border-emerald-400/20 bg-slate-900 md:block">

              <img
                src={managerImage}
                alt="Vidwath - VAR Store Manager"
                className="h-full w-full object-cover object-top"
              />

            </div>

            {/* ==================================
                DIALOGUE CONTENT
            ================================== */}

            <div className="flex min-h-[280px] flex-1 flex-col p-6 md:p-8">

              {/* ==================================
                  MOBILE MANAGER
              ================================== */}

              <div className="mb-4 flex items-center gap-3 md:hidden">

                <img
                  src={managerImage}
                  alt="Vidwath - VAR Store Manager"
                  className="h-14 w-14 rounded-full border-2 border-emerald-400 object-cover object-top shadow-lg shadow-emerald-500/20"
                />

                <div>
                  <p className="font-black text-white">
                    Vidwath
                  </p>

                  <p className="text-xs font-semibold text-emerald-400">
                    VAR Store Manager
                  </p>
                </div>

              </div>

              {/* NAME TAG */}

              <div className="inline-flex w-fit rounded-lg bg-emerald-400 px-5 py-2 font-black tracking-wider text-slate-950">
                VIDWATH
              </div>

              {/* ROLE */}

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.3em] text-emerald-400">
                VAR Store Manager
              </p>

              {/* TITLE */}

              <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
                {tutorialSteps[step].title}
              </h2>

              {/* MESSAGE */}

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
                {tutorialSteps[step].message}
              </p>

              {/* BUTTONS */}

              <div className="mt-auto flex items-end justify-between gap-4 pt-6">

                <button
                  onClick={
                    handleSkipTutorial
                  }
                  className="text-sm font-medium text-slate-500 transition hover:text-white"
                >
                  Skip Tour
                </button>

                <div className="flex items-center gap-5">

                  <span className="text-sm text-slate-500">
                    {step + 1} /{" "}
                    {tutorialSteps.length}
                  </span>

                  <button
                    onClick={handleNext}
                    className="rounded-xl bg-emerald-400 px-6 py-3 font-bold text-slate-950 transition hover:scale-105 hover:bg-emerald-300"
                  >
                    {step ===
                    tutorialSteps.length - 1
                      ? "Start Shopping ⚽"
                      : "Continue ▼"}
                  </button>

                </div>

              </div>

            </div>

          </div>
        </div>
      )}

      {/* ========================================
          FLOATING VAR MANAGER
      ======================================== */}

      <button
        id="tour-manager"
        onClick={() => {
          if (!showTutorial) {
            setIsChatOpen(true);
          }
        }}
        className="fixed bottom-6 right-6 z-[90] h-16 w-16 overflow-hidden rounded-full border-2 border-emerald-400 bg-slate-950 shadow-2xl shadow-emerald-500/30 transition hover:scale-110"
        title="Talk to VAR Manager"
      >

        <img
          src={managerImage}
          alt="Open VAR Manager"
          className="h-full w-full object-cover object-top"
        />

      </button>

      {/* ========================================
          AI CHAT
      ======================================== */}

      {!showTutorial &&
        isChatOpen && (
          <div className="fixed bottom-24 right-6 z-[100] flex h-[500px] w-[380px] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-3xl border border-emerald-400/20 bg-slate-900 shadow-2xl shadow-black/50">

            {/* HEADER */}

            <div className="flex items-center justify-between border-b border-white/10 bg-slate-800 p-4">

              <div className="flex items-center gap-3">

                <img
                  src={managerImage}
                  alt="VAR Manager"
                  className="h-11 w-11 rounded-full border border-emerald-400/50 object-cover object-top"
                />

                <div>

                  <h2 className="font-bold text-white">
                    Vidwath
                  </h2>

                  <p className="text-xs text-emerald-400">
                    VAR Manager • Online
                  </p>

                </div>

              </div>

              <button
                onClick={() =>
                  setIsChatOpen(false)
                }
                className="text-xl text-slate-400 transition hover:text-white"
              >
                ✕
              </button>

            </div>

            {/* MESSAGES */}

            <div className="flex-1 space-y-4 overflow-y-auto p-4">

              {messages.map(
                (message, index) => (
                  <div
                    key={index}
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                      message.role === "user"
                        ? "ml-auto bg-emerald-400 text-slate-950"
                        : "bg-slate-800 text-white"
                    }`}
                  >
                    {message.text}
                  </div>
                )
              )}

              {isLoading && (
                <div className="flex items-center gap-2">

                  <img
                    src={managerImage}
                    alt=""
                    className="h-8 w-8 rounded-full object-cover object-top"
                  />

                  <div className="rounded-2xl bg-slate-800 px-4 py-3 text-sm text-slate-400">
                    Vidwath is thinking...
                  </div>

                </div>
              )}

            </div>

            {/* SUGGESTED QUESTIONS */}

            <div className="px-4 pb-3">

              <div className="flex flex-wrap gap-2">

                {suggestedQuestions.map(
                  (question) => (
                    <button
                      key={question}
                      onClick={() =>
                        handleSendMessage(
                          question
                        )
                      }
                      disabled={isLoading}
                      className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-2 text-xs text-emerald-300 transition hover:bg-emerald-400/20 disabled:opacity-50"
                    >
                      {question}
                    </button>
                  )
                )}

              </div>

            </div>

            {/* INPUT */}

            <div className="border-t border-white/10 p-4">

              <div className="flex gap-2">

                <input
                  value={userMessage}
                  onChange={(event) =>
                    setUserMessage(
                      event.target.value
                    )
                  }
                  onKeyDown={handleKeyDown}
                  placeholder="Ask Vidwath..."
                  className="flex-1 rounded-xl bg-slate-800 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-emerald-400/50"
                />

                <button
                  onClick={() =>
                    handleSendMessage()
                  }
                  disabled={isLoading}
                  className="rounded-xl bg-emerald-400 px-4 font-bold text-slate-950 transition hover:bg-emerald-300 disabled:opacity-50"
                >
                  ➤
                </button>

              </div>

            </div>

          </div>
        )}
    </>
  );
}

export default AIManager;