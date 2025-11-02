import { useState } from "react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Undo2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface StoryNode {
  id: string;
  content: string;
  detail?: string;
  choices?: { text: string; next: string; emoji?: string }[];
  isEnd?: boolean;
}

const storyTree: Record<string, StoryNode> = {
  start: {
    id: "start",
    content: "It's 2am. You should be asleep. But your brain won't shut up.",
    choices: [
      { text: "Why does this happen?", next: "why", emoji: "🤔" },
      { text: "Make it stop!", next: "fix", emoji: "😫" }
    ]
  },
  why: {
    id: "why",
    content: "The Zeigarnik Effect: Your brain gives VIP treatment to unfinished tasks.",
    detail: "Soviet psychologist Bluma Zeigarnik discovered this at a café.",
    choices: [
      { text: "Tell me more", next: "science", emoji: "🧠" },
      { text: "How do I use this?", next: "application", emoji: "💡" }
    ]
  },
  fix: {
    id: "fix",
    content: "Your brain won't rest until tasks are COMPLETE. That's the Zeigarnik Effect.",
    choices: [
      { text: "What's that?", next: "science", emoji: "❓" },
      { text: "Just give me the fix", next: "solution", emoji: "🎯" }
    ]
  },
  science: {
    id: "science",
    content: "Zeigarnik noticed waiters remembered orders perfectly BEFORE delivering them. After? Total blank.",
    detail: "Unfinished tasks = velcro in your memory. Completed tasks = straight to the trash.",
    choices: [
      { text: "That's wild! Why?", next: "deep", emoji: "🤯" },
      { text: "How do I fix it?", next: "solution", emoji: "🔧" }
    ]
  },
  deep: {
    id: "deep",
    content: "Your brain evolved to track incomplete goals. It's survival—forgetting to finish a shelter could kill you.",
    detail: "Modern problem: Your brain treats that unsent email like it's life or death.",
    choices: [
      { text: "Makes sense. Now what?", next: "application", emoji: "✅" }
    ]
  },
  application: {
    id: "application",
    content: "Use it FOR you: Break big tasks into chunks. Each completion = dopamine hit + mental freedom.",
    detail: "Against you: Close loops. That 'quick thing' you've been avoiding? It's using more mental energy than doing it.",
    choices: [
      { text: "Give me an action plan", next: "solution", emoji: "📋" }
    ]
  },
  solution: {
    id: "solution",
    content: "Right now: Pick ONE tiny unfinished thing. Finish it in the next 5 minutes.",
    detail: "Watch how much mental space it frees. Your brain will literally thank you by shutting up about it. 😌",
    isEnd: true
  }
};

export default function ChoiceBasedDelivery() {
  const [currentNode, setCurrentNode] = useState("start");
  const [history, setHistory] = useState<string[]>(["start"]);
  const navigate = useNavigate();
  
  const node = storyTree[currentNode];
  const progress = (history.length / 7) * 100;

  const handleChoice = (nextId: string) => {
    setCurrentNode(nextId);
    setHistory([...history, nextId]);
  };

  const handleBack = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      setHistory(newHistory);
      setCurrentNode(newHistory[newHistory.length - 1]);
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
            {/* Progress & Back */}
            <div className="mb-4 flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={handleBack}
                disabled={history.length <= 1}
                className="border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50"
              >
                <Undo2 className="h-4 w-4" />
              </Button>
              <div className="flex-1 h-2 bg-muted border-2 border-black">
                <div 
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="bg-card border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6">
                <p className="text-lg font-bold mb-4">{node.content}</p>
                {node.detail && (
                  <p className="text-sm text-muted-foreground border-l-4 border-black pl-4 mb-4">
                    {node.detail}
                  </p>
                )}
              </div>

              {/* Choices */}
              <div className="space-y-3 mt-6">
                {node.choices?.map((choice, index) => (
                  <Button
                    key={index}
                    onClick={() => handleChoice(choice.next)}
                    className="w-full bg-accent border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-black font-bold justify-start text-left h-auto py-4 px-4"
                  >
                    <span className="mr-2 text-xl">{choice.emoji}</span>
                    <span>{choice.text}</span>
                  </Button>
                ))}
                {node.isEnd && (
                  <Button
                    onClick={() => {
                      setCurrentNode("start");
                      setHistory(["start"]);
                    }}
                    className="w-full bg-primary border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-bold"
                  >
                    Start Over
                  </Button>
                )}
              </div>
            </div>
          </div>
        </PhoneFrame>

        {/* Explanation */}
        <div className="max-w-2xl mx-auto mt-12 bg-card border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
          <h3 className="text-2xl font-bold mb-4">Choice-Based Interactive Pattern</h3>
          <p className="mb-4">Users choose their path through the content based on curiosity. Each learner gets a personalized experience.</p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="font-bold text-lg mb-2 text-primary">✅ Advantages</h4>
              <ul className="space-y-2 text-sm">
                <li>• Extremely engaging (active participation)</li>
                <li>• Personalized learning paths</li>
                <li>• Curiosity-driven exploration</li>
                <li>• High replay value</li>
                <li>• Feels like a game</li>
                <li>• Users control their depth of learning</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-destructive">❌ Disadvantages</h4>
              <ul className="space-y-2 text-sm">
                <li>• Complex content structure to create</li>
                <li>• Time-consuming to write branches</li>
                <li>• Some users may miss key concepts</li>
                <li>• Hard to ensure all paths are equal quality</li>
                <li>• Requires careful balance of depth vs simplicity</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
