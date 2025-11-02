import { useState } from "react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const lessonSteps = [
  {
    type: "hook",
    title: "The Zeigarnik Effect",
    content: "Ever wonder why unfinished business haunts you?",
    emoji: "🧠"
  },
  {
    type: "story",
    title: "A Discovery at a Café",
    content: "Soviet psychologist Bluma Zeigarnik noticed something strange...",
    detail: "Waiters remembered orders PERFECTLY before delivering them. But after? Total blank."
  },
  {
    type: "concept",
    title: "Your Brain's VIP System",
    content: "Unfinished tasks get VIP treatment in your memory.",
    detail: "Completed tasks? Straight to the mental trash bin."
  },
  {
    type: "example",
    title: "Why You Can't Stop Thinking...",
    content: "About that unfinished project. That unsent text. That half-done argument.",
    detail: "Your brain literally won't let you forget until it's DONE."
  },
  {
    type: "action",
    title: "Try This Right Now",
    content: "Pick ONE tiny thing you've been putting off.",
    detail: "Finish it. Watch how much mental space it frees up. Your brain will literally thank you."
  }
];

export default function CardSwipeDelivery() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const step = lessonSteps[currentStep];
  const progress = ((currentStep + 1) / lessonSteps.length) * 100;

  const handleNext = () => {
    if (currentStep < lessonSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

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
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="h-2 bg-muted border-2 border-black">
                <div 
                  className="h-full bg-accent transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-xs mt-2 font-bold">{currentStep + 1} of {lessonSteps.length}</p>
            </div>

            {/* Card Content */}
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full">
                <div className="bg-card border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 text-center min-h-[400px] flex flex-col justify-center">
                  <div className="text-6xl mb-6">{step.emoji}</div>
                  <h2 className="text-2xl font-bold mb-4">{step.title}</h2>
                  <p className="text-lg mb-4">{step.content}</p>
                  {step.detail && (
                    <p className="text-base text-muted-foreground border-t-2 border-black pt-4 mt-4">
                      {step.detail}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-6">
              <Button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="flex-1 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all disabled:opacity-50"
                variant="outline"
              >
                Previous
              </Button>
              <Button
                onClick={handleNext}
                disabled={currentStep === lessonSteps.length - 1}
                className="flex-1 bg-primary border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all disabled:opacity-50"
              >
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </PhoneFrame>

        {/* Explanation */}
        <div className="max-w-2xl mx-auto mt-12 bg-card border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
          <h3 className="text-2xl font-bold mb-4">Card Swipe Pattern</h3>
          <p className="mb-4">Users tap through cards, one concept at a time. Each card is self-contained with a clear visual hierarchy.</p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="font-bold text-lg mb-2 text-primary">✅ Advantages</h4>
              <ul className="space-y-2 text-sm">
                <li>• Familiar pattern (like Tinder, Instagram Stories)</li>
                <li>• Clear progress indication</li>
                <li>• Forces focus on one idea at a time</li>
                <li>• Easy to implement "save for later"</li>
                <li>• Natural pacing control</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-destructive">❌ Disadvantages</h4>
              <ul className="space-y-2 text-sm">
                <li>• Can feel repetitive over time</li>
                <li>• Less engaging than interactive patterns</li>
                <li>• Requires precise content chunking</li>
                <li>• Limited context between cards</li>
                <li>• May feel too "educational"</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
