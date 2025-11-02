import { useState } from "react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface FlowStep {
  type: "intro" | "question" | "reveal" | "action";
  content: string;
  detail?: string;
  question?: string;
  options?: string[];
  correctIndex?: number;
  explanation?: string;
}

const flowSteps: FlowStep[] = [
  {
    type: "intro",
    content: "🧠 The Zeigarnik Effect",
    detail: "Ever notice how unfinished tasks haunt your mind, but completed ones vanish?"
  },
  {
    type: "question",
    content: "Quick Test:",
    question: "A waiter takes your order. When will they remember it BEST?",
    options: [
      "Before delivering it",
      "While delivering it",
      "After delivering it"
    ],
    correctIndex: 0,
    explanation: "Waiters remember orders perfectly BEFORE delivering. After? Total blank."
  },
  {
    type: "reveal",
    content: "That's the Zeigarnik Effect!",
    detail: "Your brain gives VIP treatment to incomplete tasks. Once complete, they're dumped like trash."
  },
  {
    type: "question",
    content: "Think about YOUR life:",
    question: "Which thought loop won't leave you alone?",
    options: [
      "That email you need to send",
      "That project you didn't finish",
      "That conversation you left hanging"
    ],
    correctIndex: -1,
    explanation: "All of these! Your brain won't shut up about ANY unfinished business."
  },
  {
    type: "reveal",
    content: "Why does your brain do this?",
    detail: "Evolution. Forgetting to finish a shelter or hunt could kill you. Your brain treats that unsent email like it's life or death."
  },
  {
    type: "action",
    content: "Your Turn: Right Now",
    detail: "Pick ONE tiny thing you've been putting off. Finish it in the next 5 minutes. Watch how much mental space it frees. 😌"
  }
];

export default function QuizFlowDelivery() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const navigate = useNavigate();
  
  const step = flowSteps[currentStep];
  const progress = ((currentStep + 1) / flowSteps.length) * 100;

  const handleNext = () => {
    if (currentStep < flowSteps.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    }
  };

  const handleOptionSelect = (index: number) => {
    setSelectedOption(index);
    setShowExplanation(true);
  };

  const isCorrect = selectedOption === step.correctIndex;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Comparison
        </Button>

        <PhoneFrame>
          <div className="flex flex-col h-full bg-background p-6">
            {/* Progress */}
            <div className="mb-6">
              <div className="h-2 bg-muted border-2 border-black">
                <div 
                  className="h-full bg-accent transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">{step.content}</h2>
                
                {step.detail && (
                  <p className="text-base">{step.detail}</p>
                )}

                {step.type === "question" && (
                  <>
                    <p className="text-lg font-bold mt-6 mb-4">{step.question}</p>
                    <div className="space-y-3">
                      {step.options?.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleOptionSelect(index)}
                          disabled={showExplanation}
                          className={`w-full p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-left font-medium disabled:pointer-events-none ${
                            selectedOption === index
                              ? step.correctIndex === -1 || isCorrect
                                ? "bg-primary text-primary-foreground"
                                : index === step.correctIndex
                                ? "bg-green-500 text-white"
                                : "bg-red-500 text-white"
                              : "bg-card hover:bg-accent"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{option}</span>
                            {showExplanation && selectedOption === index && (
                              <span>
                                {step.correctIndex === -1 || isCorrect ? (
                                  <Check className="h-5 w-5" />
                                ) : (
                                  <X className="h-5 w-5" />
                                )}
                              </span>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>

                    {showExplanation && step.explanation && (
                      <div className="mt-4 p-4 bg-accent border-2 border-black">
                        <p className="font-medium">{step.explanation}</p>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* Next Button */}
            {(step.type !== "question" || showExplanation) && (
              <Button
                onClick={handleNext}
                disabled={currentStep === flowSteps.length - 1}
                className="w-full mt-6 bg-primary border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-bold disabled:opacity-50"
              >
                {currentStep === flowSteps.length - 1 ? "Complete" : "Continue"}
              </Button>
            )}
          </div>
        </PhoneFrame>

        {/* Explanation */}
        <div className="max-w-2xl mx-auto mt-12 bg-card border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
          <h3 className="text-2xl font-bold mb-4">Interactive Quiz Flow Pattern</h3>
          <p className="mb-4">Mix of teaching and testing. Users actively engage with questions that make them think, then get immediate feedback.</p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="font-bold text-lg mb-2 text-primary">✅ Advantages</h4>
              <ul className="space-y-2 text-sm">
                <li>• Active learning (testing effect)</li>
                <li>• Immediate feedback loop</li>
                <li>• Checks understanding as you go</li>
                <li>• More engaging than pure reading</li>
                <li>• Gamification feels natural</li>
                <li>• Better retention through retrieval practice</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-destructive">❌ Disadvantages</h4>
              <ul className="space-y-2 text-sm">
                <li>• Can feel like a test (anxiety)</li>
                <li>• Breaks narrative flow</li>
                <li>• Some concepts don't quiz well</li>
                <li>• Getting answers "wrong" may discourage</li>
                <li>• Requires careful question design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
