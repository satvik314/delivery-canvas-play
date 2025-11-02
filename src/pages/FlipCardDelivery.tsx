import { useState } from "react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";

const intelligences = [
  {
    type: "Linguistic",
    emoji: "📚",
    front: "Good with words?",
    back: "You have Linguistic Intelligence. You think in words, love reading, writing, and telling stories.",
    examples: "Writers, lawyers, teachers, journalists"
  },
  {
    type: "Logical-Mathematical",
    emoji: "🔢",
    front: "Love solving puzzles?",
    back: "You have Logical-Mathematical Intelligence. You excel at reasoning, patterns, and abstract thinking.",
    examples: "Scientists, programmers, accountants"
  },
  {
    type: "Musical",
    emoji: "🎵",
    front: "Always humming tunes?",
    back: "You have Musical Intelligence. You're sensitive to rhythm, pitch, and timbre. Music speaks to you.",
    examples: "Musicians, composers, sound engineers"
  },
  {
    type: "Bodily-Kinesthetic",
    emoji: "🏃",
    front: "Learn by doing?",
    back: "You have Bodily-Kinesthetic Intelligence. Your body is your tool for problem-solving and creation.",
    examples: "Athletes, dancers, surgeons, craftspeople"
  },
  {
    type: "Spatial",
    emoji: "🗺️",
    front: "Think in pictures?",
    back: "You have Spatial Intelligence. You visualize, create mental images, and navigate spaces effortlessly.",
    examples: "Architects, artists, pilots, designers"
  },
  {
    type: "Interpersonal",
    emoji: "🤝",
    front: "Read people easily?",
    back: "You have Interpersonal Intelligence. You understand others' emotions, motivations, and perspectives.",
    examples: "Teachers, therapists, salespeople, leaders"
  },
  {
    type: "Intrapersonal",
    emoji: "🪞",
    front: "Know yourself deeply?",
    back: "You have Intrapersonal Intelligence. You're self-aware, understand your feelings, and guide your behavior.",
    examples: "Philosophers, psychologists, writers"
  },
  {
    type: "Naturalist",
    emoji: "🌱",
    front: "Connected to nature?",
    back: "You have Naturalist Intelligence. You recognize patterns in nature and understand living systems.",
    examples: "Biologists, farmers, veterinarians, chefs"
  }
];

export default function FlipCardDelivery() {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();
  const card = intelligences[currentCard];
  const progress = ((currentCard + 1) / intelligences.length) * 100;

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    if (currentCard < intelligences.length - 1) {
      setIsFlipped(false);
      setTimeout(() => setCurrentCard(currentCard + 1), 300);
    }
  };

  const handlePrevious = () => {
    if (currentCard > 0) {
      setIsFlipped(false);
      setTimeout(() => setCurrentCard(currentCard - 1), 300);
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
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-2">Multiple Intelligences</h1>
              <div className="h-2 bg-muted border-2 border-black">
                <div 
                  className="h-full bg-accent transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-xs mt-2 font-bold">{currentCard + 1} of {intelligences.length}</p>
            </div>

            {/* Flip Card */}
            <div className="flex-1 flex items-center justify-center perspective-1000">
              <div 
                className="relative w-full h-[400px] cursor-pointer"
                onClick={handleFlip}
                style={{ perspective: "1000px" }}
              >
                <div 
                  className="relative w-full h-full transition-transform duration-500"
                  style={{ 
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
                  }}
                >
                  {/* Front */}
                  <div 
                    className="absolute w-full h-full bg-primary border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 flex flex-col items-center justify-center"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="text-8xl mb-6">{card.emoji}</div>
                    <h2 className="text-3xl font-bold text-center text-primary-foreground">{card.front}</h2>
                    <p className="text-sm mt-6 text-primary-foreground/80 flex items-center gap-2">
                      <RotateCcw className="h-4 w-4" />
                      Tap to flip
                    </p>
                  </div>

                  {/* Back */}
                  <div 
                    className="absolute w-full h-full bg-card border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 flex flex-col justify-center"
                    style={{ 
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)"
                    }}
                  >
                    <div className="text-6xl mb-4 text-center">{card.emoji}</div>
                    <h3 className="text-2xl font-bold mb-4 text-center">{card.type}</h3>
                    <p className="text-base mb-4 leading-relaxed">{card.back}</p>
                    <div className="bg-accent/30 border-2 border-black p-3 mt-4">
                      <p className="text-sm font-bold">Examples:</p>
                      <p className="text-sm">{card.examples}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-4 mt-6">
              <Button
                onClick={handlePrevious}
                disabled={currentCard === 0}
                className="flex-1 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all disabled:opacity-50"
                variant="outline"
              >
                Previous
              </Button>
              <Button
                onClick={handleNext}
                disabled={currentCard === intelligences.length - 1}
                className="flex-1 bg-primary border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all disabled:opacity-50"
              >
                Next
              </Button>
            </div>
          </div>
        </PhoneFrame>

        {/* Explanation */}
        <div className="max-w-2xl mx-auto mt-12 bg-card border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
          <h3 className="text-2xl font-bold mb-4">Flip Card Pattern</h3>
          <p className="mb-4">Cards flip to reveal information. Front teases with a question, back delivers the answer. Tactile and satisfying.</p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="font-bold text-lg mb-2 text-primary">✅ Advantages</h4>
              <ul className="space-y-2 text-sm">
                <li>• Highly interactive and satisfying</li>
                <li>• Natural for quiz/flashcard content</li>
                <li>• Encourages active recall</li>
                <li>• Clear front/back structure</li>
                <li>• Gamification potential (streak tracking)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-destructive">❌ Disadvantages</h4>
              <ul className="space-y-2 text-sm">
                <li>• Limited to simple Q&A format</li>
                <li>• Can't convey complex narratives</li>
                <li>• 3D transform not supported everywhere</li>
                <li>• Repetitive after many cards</li>
                <li>• Requires deliberate flipping action</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
