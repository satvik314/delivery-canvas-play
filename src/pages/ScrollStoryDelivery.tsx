import { PhoneFrame } from "@/components/PhoneFrame";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ScrollStoryDelivery() {
  const navigate = useNavigate();

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
          <div className="h-full overflow-y-auto bg-background">
            {/* Hero Section */}
            <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-primary/20 to-accent/20">
              <div className="text-7xl mb-6">🧠</div>
              <h1 className="text-4xl font-bold text-center mb-4">Multiple Intelligences</h1>
              <p className="text-center text-lg text-muted-foreground">You're not "just smart" or "not smart"</p>
              <div className="mt-8 animate-bounce">
                <p className="text-sm">Scroll to explore ↓</p>
              </div>
            </div>

            {/* Story Section */}
            <div className="min-h-screen flex items-center justify-center p-6 bg-card border-y-4 border-black">
              <div>
                <div className="text-6xl mb-6 text-center">👨‍🏫</div>
                <h2 className="text-3xl font-bold mb-4">Howard Gardner's Discovery</h2>
                <p className="text-lg leading-relaxed">
                  In 1983, psychologist Howard Gardner challenged everything we thought we knew about intelligence.
                </p>
                <div className="mt-6 p-4 bg-accent/30 border-2 border-black">
                  <p className="font-bold text-center">"There isn't just ONE type of smart"</p>
                </div>
              </div>
            </div>

            {/* The 8 Intelligences */}
            <div className="min-h-screen p-6 bg-background">
              <h2 className="text-3xl font-bold mb-8 text-center">The 8 Types of Intelligence</h2>
              
              <div className="space-y-4">
                {[
                  { emoji: "📚", title: "Linguistic", desc: "Words & language" },
                  { emoji: "🔢", title: "Logical-Mathematical", desc: "Numbers & reasoning" },
                  { emoji: "🎵", title: "Musical", desc: "Rhythm & melody" },
                  { emoji: "🏃", title: "Bodily-Kinesthetic", desc: "Physical movement" },
                  { emoji: "🗺️", title: "Spatial", desc: "Visual thinking" },
                  { emoji: "🤝", title: "Interpersonal", desc: "Understanding others" },
                  { emoji: "🪞", title: "Intrapersonal", desc: "Understanding yourself" },
                  { emoji: "🌱", title: "Naturalist", desc: "Nature & environment" }
                ].map((intel, idx) => (
                  <div key={idx} className="bg-card border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-4">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{intel.emoji}</div>
                      <div>
                        <h3 className="font-bold text-xl">{intel.title}</h3>
                        <p className="text-muted-foreground">{intel.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Real World Impact */}
            <div className="min-h-screen flex items-center justify-center p-6 bg-primary/10 border-y-4 border-black">
              <div>
                <div className="text-6xl mb-6 text-center">💡</div>
                <h2 className="text-3xl font-bold mb-4">Why This Matters</h2>
                <div className="space-y-4 text-lg">
                  <div className="bg-card border-2 border-black p-4">
                    <p><strong>Schools were wrong.</strong> Testing only 2-3 types of intelligence (linguistic & logical).</p>
                  </div>
                  <div className="bg-card border-2 border-black p-4">
                    <p><strong>You're brilliant somewhere.</strong> Maybe not on paper, but in ways that matter.</p>
                  </div>
                  <div className="bg-card border-2 border-black p-4">
                    <p><strong>Stop comparing.</strong> Your musical genius isn't less than someone's math skills.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Section */}
            <div className="min-h-screen flex items-center justify-center p-6 bg-accent/20">
              <div className="text-center">
                <div className="text-6xl mb-6">✨</div>
                <h2 className="text-3xl font-bold mb-4">Your Turn</h2>
                <p className="text-lg mb-6">Which intelligences are YOUR superpowers?</p>
                <div className="bg-card border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
                  <p className="text-sm text-muted-foreground mb-4">Reflect on the 8 types. Which ones feel natural to you?</p>
                  <p className="font-bold">That's where you shine. Double down on those. 🌟</p>
                </div>
              </div>
            </div>
          </div>
        </PhoneFrame>

        {/* Explanation */}
        <div className="max-w-2xl mx-auto mt-12 bg-card border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
          <h3 className="text-2xl font-bold mb-4">Scroll Story Pattern</h3>
          <p className="mb-4">Continuous vertical scroll with full-screen sections. Each section reveals as you scroll, creating a narrative flow.</p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="font-bold text-lg mb-2 text-primary">✅ Advantages</h4>
              <ul className="space-y-2 text-sm">
                <li>• Feels like social media feeds (TikTok, Instagram)</li>
                <li>• Natural, intuitive scrolling</li>
                <li>• Great for visual storytelling</li>
                <li>• Users control pacing completely</li>
                <li>• Can mix text, images, animations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-destructive">❌ Disadvantages</h4>
              <ul className="space-y-2 text-sm">
                <li>• Harder to track progress</li>
                <li>• Can feel overwhelming if too long</li>
                <li>• No clear "next" button</li>
                <li>• Users might scroll too fast</li>
                <li>• Content must work at any speed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
