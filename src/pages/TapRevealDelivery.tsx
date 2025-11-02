import { useState } from "react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const storyBeats = [
  { text: "You're lying in bed.", revealed: false },
  { text: "Trying to sleep.", revealed: false },
  { text: "But your brain won't shut up.", revealed: false },
  { text: "That email you need to send...", revealed: false },
  { text: "That project you didn't finish...", revealed: false },
  { text: "Why does your brain do this?", revealed: false },
  { text: "Meet the Zeigarnik Effect 🧠", revealed: false },
  { text: "Discovered by Bluma Zeigarnik at a café in the 1920s.", revealed: false },
  { text: "She noticed waiters had PERFECT memory...", revealed: false },
  { text: "...for orders they hadn't delivered yet.", revealed: false },
  { text: "But once delivered? Total blank.", revealed: false },
  { text: "Your brain gives VIP treatment to unfinished tasks.", revealed: false },
  { text: "Completed tasks get dumped like trash.", revealed: false },
  { text: "This is why unfinished business haunts you.", revealed: false },
  { text: "The fix? Pick ONE thing. Finish it.", revealed: false },
  { text: "Watch your brain finally shut up about it. 😌", revealed: false },
];

export default function TapRevealDelivery() {
  const [revealedCount, setRevealedCount] = useState(1);
  const navigate = useNavigate();
  const progress = (revealedCount / storyBeats.length) * 100;

  const handleTap = () => {
    if (revealedCount < storyBeats.length) {
      setRevealedCount(revealedCount + 1);
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
          <div 
            className="flex flex-col h-full bg-gradient-to-b from-primary to-primary/80 p-6 cursor-pointer"
            onClick={handleTap}
          >
            {/* Progress Indicator */}
            <div className="mb-4">
              <div className="h-1 bg-white/30">
                <div 
                  className="h-full bg-accent transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Story Content */}
            <div className="flex-1 flex flex-col justify-center items-center text-white space-y-6 px-4">
              {storyBeats.slice(0, revealedCount).map((beat, index) => (
                <p 
                  key={index}
                  className="text-xl font-bold text-center animate-in fade-in slide-in-from-bottom-4 duration-300"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    textShadow: "3px 3px 0px rgba(0,0,0,0.3)"
                  }}
                >
                  {beat.text}
                </p>
              ))}
            </div>

            {/* Tap Indicator */}
            {revealedCount < storyBeats.length && (
              <div className="text-center text-white/70 text-sm font-bold animate-pulse">
                TAP TO CONTINUE
              </div>
            )}

            {revealedCount === storyBeats.length && (
              <div className="text-center">
                <Button 
                  className="bg-accent text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-bold"
                  onClick={(e) => {
                    e.stopPropagation();
                    setRevealedCount(1);
                  }}
                >
                  Replay
                </Button>
              </div>
            )}
          </div>
        </PhoneFrame>

        {/* Explanation */}
        <div className="max-w-2xl mx-auto mt-12 bg-card border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
          <h3 className="text-2xl font-bold mb-4">Tap-to-Reveal Story Pattern</h3>
          <p className="mb-4">Like Instagram Stories, users tap anywhere to reveal the next beat. Content flows as a narrative with dramatic pacing.</p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="font-bold text-lg mb-2 text-primary">✅ Advantages</h4>
              <ul className="space-y-2 text-sm">
                <li>• Extremely engaging (like Stories)</li>
                <li>• Natural storytelling flow</li>
                <li>• User controls pacing</li>
                <li>• Minimal UI = maximum focus</li>
                <li>• Creates suspense and curiosity</li>
                <li>• Feels like entertainment, not education</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-destructive">❌ Disadvantages</h4>
              <ul className="space-y-2 text-sm">
                <li>• Requires excellent writing</li>
                <li>• Hard to reference specific points</li>
                <li>• Can't easily skip ahead</li>
                <li>• Not all concepts fit story format</li>
                <li>• May feel too casual for some topics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
