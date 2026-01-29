// import { useEffect, useState, useMemo } from "react";
// import { fetchQuestions } from "../services/questions.service";
// import { getRecommendations } from "../services/recommend.service";
// import { explainRecommendation } from "../services/explain.service";

// export default function useChatFlow() {
//     const [questions, setQuestions] = useState([]);
//     const [currentQuestionId, setCurrentQuestionId] = useState(null);
//     const [messages, setMessages] = useState([]);
//     const [answers, setAnswers] = useState({});
//     const [recommendations, setRecommendations] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [completed, setCompleted] = useState(false);
//     const [showExplainButton, setShowExplainButton] = useState(false);

//     /* ---------------------------------
//        FAST QUESTION LOOKUP
//     --------------------------------- */
//     const questionMap = useMemo(() => {
//         return Object.fromEntries(questions.map((q) => [q.id, q]));
//     }, [questions]);

//     useEffect(() => {
//         startChat();
//     }, []);

//     /* ---------------------------------
//        START / RESTART CHAT
//     --------------------------------- */
//     async function startChat() {
//         setLoading(true);

//         const data = await fetchQuestions();

//         setQuestions(data);
//         setAnswers({});
//         setRecommendations([]);
//         setCompleted(false);
//         setShowExplainButton(false);

//         const firstQuestion = data[0];

//         setCurrentQuestionId(firstQuestion.id);
//         setMessages([
//             {
//                 sender: "bot",
//                 text: "Hi 👋 I’ll help you find the perfect product for your sleep needs.",
//             },
//             {
//                 sender: "bot",
//                 text: firstQuestion.question,
//             },
//         ]);

//         setLoading(false);
//     }

//     const currentQuestion = currentQuestionId
//         ? questionMap[currentQuestionId]
//         : null;

//     /* ---------------------------------
//        HANDLE ANSWER
//     --------------------------------- */
//     async function answerQuestion(option) {
//         if (!currentQuestion) return;

//         const value = option.value ?? option;
//         const label = option.label ?? option;

//         const updatedAnswers = {
//             ...answers,
//             [currentQuestion.id]: value,
//         };
//         setAnswers(updatedAnswers);

//         setMessages((prev) => [
//             ...prev,
//             { sender: "user", text: label },
//         ]);

//         const nextStep = Object.entries(currentQuestion.rules || {})
//             .find(([ruleValue]) => String(ruleValue) === String(value))
//             ?.[1];

//         /* ---------------------------------
//            END FLOW → RECOMMENDATIONS
//         --------------------------------- */
//         if (!nextStep || nextStep === "SHOW_RESULTS") {
//             setCompleted(true);
//             setLoading(true);

//             setTimeout(() => {
//                 setMessages((prev) => [
//                     ...prev,
//                     {
//                         sender: "bot",
//                         text: "Thanks! I’m analyzing the best options for you 🛏️",
//                     },
//                 ]);
//             }, 300);

//             try {
//                 const result = await getRecommendations(updatedAnswers);

//                 setRecommendations(result.recommendations || []);
//                 setShowExplainButton(true);

//                 // 🔥 STORE FOR HERO SECTION
//                 sessionStorage.setItem(
//                   "recommendedProducts",
//                   JSON.stringify(result.recommendations || [])
//                 );

//                 setTimeout(() => {
//                     setMessages((prev) => [
//                         ...prev,
//                         {
//                             sender: "bot",
//                             text: "Here are my top recommendations for you 👇",
//                         },
//                     ]);
//                 }, 700);
//             } catch (error) {
//                 setMessages((prev) => [
//                     ...prev,
//                     {
//                         sender: "bot",
//                         text: "Sorry 😕 Something went wrong while finding recommendations.",
//                     },
//                 ]);
//             } finally {
//                 setLoading(false);
//             }

//             return;
//         }

//         /* ---------------------------------
//            NEXT QUESTION
//         --------------------------------- */
//         const nextQuestion = questionMap[nextStep];

//         if (!nextQuestion) {
//             console.error("❌ Invalid next question ID:", nextStep);
//             return;
//         }

//         setTimeout(() => {
//             setMessages((prev) => [
//                 ...prev,
//                 { sender: "bot", text: nextQuestion.question },
//             ]);
//             setCurrentQuestionId(nextStep);
//         }, 350);
//     }

//     /* ---------------------------------
//        🤖 EXPLAIN RECOMMENDATIONS
//     --------------------------------- */
//     async function explainWhy() {
//         setShowExplainButton(false);

//         setMessages((prev) => [
//             ...prev,
//             {
//                 sender: "bot",
//                 text: "Let me explain why these products were recommended 🤖",
//             },
//         ]);

//         // ✅ ALWAYS send PURE product objects (no score, no nesting)
//         const productsForExplain = recommendations.map((item) =>
//             item.product ? item.product : item
//         );

//         const payload = {
//             product: productsForExplain,
//             user_answers: answers,
//         };

//         console.log(
//             "EXPLAIN PAYLOAD (FINAL)",
//             JSON.stringify(payload, null, 2)
//         );

//         try {
//             const res = await explainRecommendation(payload);

//             setMessages((prev) => [
//                 ...prev,
//                 {
//                     sender: "bot",
//                     text: res.explanation,
//                 },
//             ]);
//         } catch (error) {
//             setMessages((prev) => [
//                 ...prev,
//                 {
//                     sender: "bot",
//                     text: "I couldn’t generate the explanation right now 😕",
//                 },
//             ]);
//         }
//     }

//     return {
//         loading,
//         messages,
//         currentQuestion: !completed ? currentQuestion : null,
//         answerQuestion,
//         recommendations,
//         explainWhy,
//         showExplainButton,
//         restartChat: startChat,
//         isComplete: completed,
//     };
// }

import { useEffect, useState, useMemo } from "react";
import { fetchQuestions } from "../services/questions.service";
import { getRecommendations } from "../services/recommend.service";
import { explainRecommendation } from "../services/explain.service";
import { useChat } from "../contexts/ChatContext";

export default function useChatFlow() {
    const { setRecommendations: setGlobalRecommendations } = useChat();

    const [questions, setQuestions] = useState([]);
    const [currentQuestionId, setCurrentQuestionId] = useState(null);
    const [messages, setMessages] = useState([]);
    const [answers, setAnswers] = useState({});
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [completed, setCompleted] = useState(false);
    const [showExplainButton, setShowExplainButton] = useState(false);

    /* ---------------------------------
       FAST QUESTION LOOKUP
    --------------------------------- */
    const questionMap = useMemo(() => {
        return Object.fromEntries(questions.map((q) => [q.id, q]));
    }, [questions]);

    useEffect(() => {
        startChat();
    }, []);

    /* ---------------------------------
       START / RESTART CHAT
    --------------------------------- */
    async function startChat() {
        setLoading(true);

        const data = await fetchQuestions();

        setQuestions(data);
        setAnswers({});
        setRecommendations([]);
        setGlobalRecommendations([]); // 🔥 reset global
        setCompleted(false);
        setShowExplainButton(false);

        const firstQuestion = data[0];

        setCurrentQuestionId(firstQuestion.id);
        setMessages([
            {
                sender: "bot",
                text: "Hi 👋 I’ll help you find the perfect product for your sleep needs.",
            },
            {
                sender: "bot",
                text: firstQuestion.question,
            },
        ]);

        setLoading(false);
    }

    const currentQuestion = currentQuestionId
        ? questionMap[currentQuestionId]
        : null;

    /* ---------------------------------
       HANDLE ANSWER
    --------------------------------- */
    async function answerQuestion(option) {
        if (!currentQuestion) return;

        const value = option.value ?? option;
        const label = option.label ?? option;

        const updatedAnswers = {
            ...answers,
            [currentQuestion.id]: value,
        };
        setAnswers(updatedAnswers);

        setMessages((prev) => [
            ...prev,
            { sender: "user", text: label },
        ]);

        const nextStep = Object.entries(currentQuestion.rules || {})
            .find(([ruleValue]) => String(ruleValue) === String(value))
            ?.[1];

        /* ---------------------------------
           END FLOW → RECOMMENDATIONS
        --------------------------------- */
        if (!nextStep || nextStep === "SHOW_RESULTS") {
            setCompleted(true);
            setLoading(true);

            setTimeout(() => {
                setMessages((prev) => [
                    ...prev,
                    {
                        sender: "bot",
                        text: "Thanks! I’m analyzing the best options for you 🛏️",
                    },
                ]);
            }, 300);

            try {
                const result = await getRecommendations(updatedAnswers);
                const recs = result.recommendations || [];

                setRecommendations(recs);
                setGlobalRecommendations(recs); // 🔥 LIVE UPDATE
                setShowExplainButton(true);

                // optional persistence
                sessionStorage.setItem(
                    "recommendedProducts",
                    JSON.stringify(recs)
                );

                setTimeout(() => {
                    setMessages((prev) => [
                        ...prev,
                        {
                            sender: "bot",
                            text: "Here are my top recommendations for you 👇",
                        },
                    ]);
                }, 700);
            } catch (error) {
                setMessages((prev) => [
                    ...prev,
                    {
                        sender: "bot",
                        text: "Sorry 😕 Something went wrong while finding recommendations.",
                    },
                ]);
            } finally {
                setLoading(false);
            }

            return;
        }

        /* ---------------------------------
           NEXT QUESTION
        --------------------------------- */
        const nextQuestion = questionMap[nextStep];

        if (!nextQuestion) {
            console.error("❌ Invalid next question ID:", nextStep);
            return;
        }

        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: nextQuestion.question },
            ]);
            setCurrentQuestionId(nextStep);
        }, 350);
    }

    /* ---------------------------------
       🤖 EXPLAIN RECOMMENDATIONS
    --------------------------------- */
    async function explainWhy() {
        setShowExplainButton(false);

        setMessages((prev) => [
            ...prev,
            {
                sender: "bot",
                text: "Let me explain why these products were recommended 🤖",
            },
        ]);

        const productsForExplain = recommendations.map((item) =>
            item.product ? item.product : item
        );

        const payload = {
            product: productsForExplain,
            user_answers: answers,
        };

        try {
            const res = await explainRecommendation(payload);

            setMessages((prev) => [
                ...prev,
                {
                    sender: "bot",
                    text: res.explanation,
                },
            ]);
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                {
                    sender: "bot",
                    text: "I couldn’t generate the explanation right now 😕",
                },
            ]);
        }
    }

    return {
        loading,
        messages,
        currentQuestion: !completed ? currentQuestion : null,
        answerQuestion,
        recommendations,
        explainWhy,
        showExplainButton,
        restartChat: startChat,
        isComplete: completed,
    };
}
