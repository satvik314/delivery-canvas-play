import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Hand, GitBranch, HelpCircle, Scroll, RotateCw, Clock, List } from "lucide-react";

const deliveryMechanisms = [
  {
    id: "card-swipe",
    title: "Card Swipe",
    description: "Tap through cards like Tinder. One concept per screen.",
    icon: CreditCard,
    route: "/card-swipe",
    color: "bg-primary"
  },
  {
    id: "tap-reveal",
    title: "Tap-to-Reveal Story",
    description: "Like Instagram Stories. Tap to unveil the narrative.",
    icon: Hand,
    route: "/tap-reveal",
    color: "bg-accent"
  },
  {
    id: "choice-based",
    title: "Choose Your Path",
    description: "Interactive branches. Your choices shape the learning.",
    icon: GitBranch,
    route: "/choice-based",
    color: "bg-primary"
  },
  {
    id: "quiz-flow",
    title: "Interactive Quiz Flow",
    description: "Test yourself as you learn. Active engagement.",
    icon: HelpCircle,
    route: "/quiz-flow",
    color: "bg-accent"
  },
  {
    id: "scroll-story",
    title: "Scroll Story",
    description: "Continuous vertical scroll. Like TikTok for learning.",
    icon: Scroll,
    route: "/scroll-story",
    color: "bg-primary"
  },
  {
    id: "flip-cards",
    title: "Flip Cards",
    description: "Cards flip to reveal answers. Interactive flashcards.",
    icon: RotateCw,
    route: "/flip-cards",
    color: "bg-accent"
  },
  {
    id: "timeline",
    title: "Timeline Journey",
    description: "Historical progression. Tap to mark milestones.",
    icon: Clock,
    route: "/timeline",
    color: "bg-primary"
  },
  {
    id: "accordion",
    title: "Accordion Stack",
    description: "Expandable sections. Jump to what interests you.",
    icon: List,
    route: "/accordion",
    color: "bg-accent"
  }
];

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-foreground" style={{ textShadow: "4px 4px 0px rgba(0,0,0,0.1)" }}>
            Unrot Content Delivery
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Eight different mechanisms for delivering 5-minute learning experiences. Each designed to compete with social media for attention.
          </p>
        </div>

        {/* Delivery Mechanisms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-7xl mx-auto">
          {deliveryMechanisms.map((mechanism) => {
            const Icon = mechanism.icon;
            return (
              <Card
                key={mechanism.id}
                className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all cursor-pointer bg-card"
                onClick={() => navigate(mechanism.route)}
              >
                <CardHeader>
                  <div className={`w-16 h-16 ${mechanism.color} border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center mb-4`}>
                    <Icon className="h-8 w-8 text-foreground" />
                  </div>
                  <CardTitle className="text-2xl">{mechanism.title}</CardTitle>
                  <CardDescription className="text-base">
                    {mechanism.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    className="w-full bg-foreground text-background border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-bold"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(mechanism.route);
                    }}
                  >
                    Try This Pattern
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Detailed Comparison</h2>
          <div className="bg-card border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-4 border-black bg-accent">
                    <th className="p-4 text-left font-bold border-r-2 border-black">Pattern</th>
                    <th className="p-4 text-left font-bold border-r-2 border-black">Best For</th>
                    <th className="p-4 text-left font-bold border-r-2 border-black">Engagement Level</th>
                    <th className="p-4 text-left font-bold">Implementation Difficulty</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-bold border-r-2 border-black">Card Swipe</td>
                    <td className="p-4 border-r-2 border-black">Structured concepts with clear steps</td>
                    <td className="p-4 border-r-2 border-black">⭐⭐⭐</td>
                    <td className="p-4">Easy</td>
                  </tr>
                  <tr className="border-b-2 border-black bg-muted/30">
                    <td className="p-4 font-bold border-r-2 border-black">Tap-to-Reveal</td>
                    <td className="p-4 border-r-2 border-black">Story-driven, emotional concepts</td>
                    <td className="p-4 border-r-2 border-black">⭐⭐⭐⭐⭐</td>
                    <td className="p-4">Medium</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-bold border-r-2 border-black">Choice-Based</td>
                    <td className="p-4 border-r-2 border-black">Complex topics, multiple angles</td>
                    <td className="p-4 border-r-2 border-black">⭐⭐⭐⭐⭐</td>
                    <td className="p-4">Hard</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="p-4 font-bold border-r-2 border-black">Quiz Flow</td>
                    <td className="p-4 border-r-2 border-black">Factual learning, retention-focused</td>
                    <td className="p-4 border-r-2 border-black">⭐⭐⭐⭐</td>
                    <td className="p-4">Medium</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-bold border-r-2 border-black">Scroll Story</td>
                    <td className="p-4 border-r-2 border-black">Visual narratives, social media feel</td>
                    <td className="p-4 border-r-2 border-black">⭐⭐⭐⭐⭐</td>
                    <td className="p-4">Easy</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="p-4 font-bold border-r-2 border-black">Flip Cards</td>
                    <td className="p-4 border-r-2 border-black">Quick facts, flashcard-style</td>
                    <td className="p-4 border-r-2 border-black">⭐⭐⭐⭐</td>
                    <td className="p-4">Medium</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-4 font-bold border-r-2 border-black">Timeline</td>
                    <td className="p-4 border-r-2 border-black">Historical events, progression stories</td>
                    <td className="p-4 border-r-2 border-black">⭐⭐⭐</td>
                    <td className="p-4">Easy</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="p-4 font-bold border-r-2 border-black">Accordion</td>
                    <td className="p-4 border-r-2 border-black">Reference material, non-linear</td>
                    <td className="p-4 border-r-2 border-black">⭐⭐⭐</td>
                    <td className="p-4">Easy</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Insights */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-card border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6">
              <h3 className="text-xl font-bold mb-3">🎯 Winner for Engagement</h3>
              <p className="text-sm">
                <strong>Tap-to-Reveal</strong> and <strong>Choice-Based</strong> patterns feel most like social media. Users are active participants, not passive consumers.
              </p>
            </div>
            <div className="bg-card border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6">
              <h3 className="text-xl font-bold mb-3">⚡ Easiest to Scale</h3>
              <p className="text-sm">
                <strong>Card Swipe</strong> is simplest to create at scale. Template-based, works for all 480 concepts with minimal customization.
              </p>
            </div>
            <div className="bg-card border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6">
              <h3 className="text-xl font-bold mb-3">🧠 Best for Retention</h3>
              <p className="text-sm">
                <strong>Quiz Flow</strong> leverages testing effect. Active recall beats passive reading for long-term memory.
              </p>
            </div>
          </div>

          {/* Recommendation */}
          <div className="mt-12 bg-primary text-primary-foreground border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
            <h3 className="text-2xl font-bold mb-4">💡 Recommendation</h3>
            <p className="text-lg mb-4">
              <strong>Don't pick just one.</strong> Mix patterns based on content type:
            </p>
            <ul className="space-y-2">
              <li>• Stories & Psychology → <strong>Tap-to-Reveal</strong></li>
              <li>• Complex frameworks → <strong>Choice-Based</strong></li>
              <li>• Facts & Science → <strong>Quiz Flow</strong></li>
              <li>• Step-by-step guides → <strong>Card Swipe</strong></li>
            </ul>
            <p className="mt-4 text-lg">
              Variety keeps users engaged. All patterns share the same neobrutalism design language, so switching between them feels cohesive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
