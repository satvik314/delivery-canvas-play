import { PhoneFrame } from "@/components/PhoneFrame";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const sections = [
  {
    id: "intro",
    emoji: "🧠",
    title: "What are Multiple Intelligences?",
    content: "Howard Gardner's theory that intelligence isn't one thing—it's eight different ways your brain can excel. You're not 'smart' or 'not smart.' You're smart in different ways."
  },
  {
    id: "linguistic",
    emoji: "📚",
    title: "1. Linguistic Intelligence",
    content: "You think in words. Love reading, writing, storytelling, wordplay. You remember written information easily and express yourself clearly through language.",
    examples: ["Authors", "Poets", "Journalists", "Lawyers"]
  },
  {
    id: "logical",
    emoji: "🔢",
    title: "2. Logical-Mathematical",
    content: "You see patterns everywhere. Abstract reasoning comes naturally. You love solving problems, categorizing, and finding logical connections between ideas.",
    examples: ["Scientists", "Engineers", "Programmers", "Mathematicians"]
  },
  {
    id: "musical",
    emoji: "🎵",
    title: "3. Musical Intelligence",
    content: "Rhythm, pitch, timbre—you notice them all. Music isn't just sound to you; it's a language. You might hum, tap, or think in melodies.",
    examples: ["Musicians", "Composers", "Sound Engineers", "DJs"]
  },
  {
    id: "kinesthetic",
    emoji: "🏃",
    title: "4. Bodily-Kinesthetic",
    content: "Your body is your tool. You learn by doing, not reading. Physical coordination, timing, and hands-on creation are where you shine.",
    examples: ["Athletes", "Dancers", "Surgeons", "Craftspeople"]
  },
  {
    id: "spatial",
    emoji: "🗺️",
    title: "5. Spatial Intelligence",
    content: "You think in images and spaces. Mental rotation? Easy. You navigate without maps and visualize complex 3D structures in your mind.",
    examples: ["Architects", "Pilots", "Artists", "Interior Designers"]
  },
  {
    id: "interpersonal",
    emoji: "🤝",
    title: "6. Interpersonal Intelligence",
    content: "You read people like books. Emotions, motivations, unspoken tensions—you pick up on all of it. You naturally understand what others need.",
    examples: ["Therapists", "Teachers", "Salespeople", "Leaders"]
  },
  {
    id: "intrapersonal",
    emoji: "🪞",
    title: "7. Intrapersonal Intelligence",
    content: "You know yourself deeply. Self-awareness is your superpower. You understand your own feelings, motivations, and can guide your behavior accordingly.",
    examples: ["Philosophers", "Psychologists", "Counselors", "Writers"]
  },
  {
    id: "naturalist",
    emoji: "🌱",
    title: "8. Naturalist Intelligence",
    content: "You recognize patterns in nature. Plants, animals, weather systems—you understand living things and their ecosystems intuitively.",
    examples: ["Biologists", "Farmers", "Veterinarians", "Environmental Scientists"]
  },
  {
    id: "why",
    emoji: "💡",
    title: "Why This Changes Everything",
    content: "Schools tested 2-3 intelligences (mostly linguistic and logical). That's it. If you excelled in other ways, you were labeled 'not academic.' This theory proves: You're not lacking intelligence. You just excel differently."
  }
];

export default function AccordionDelivery() {
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
          <div className="h-full overflow-y-auto bg-background p-6">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">Multiple Intelligences</h1>
              <p className="text-sm text-muted-foreground">Tap each section to expand and learn</p>
            </div>

            {/* Accordion */}
            <Accordion type="single" collapsible className="space-y-3">
              {sections.map((section) => (
                <AccordionItem 
                  key={section.id} 
                  value={section.id}
                  className="border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-card overflow-hidden"
                >
                  <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-accent/20 transition-colors">
                    <div className="flex items-center gap-3 text-left">
                      <span className="text-3xl">{section.emoji}</span>
                      <span className="font-bold">{section.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 border-t-2 border-black">
                    <p className="text-sm leading-relaxed mt-2">{section.content}</p>
                    {section.examples && (
                      <div className="mt-4 bg-accent/20 border-2 border-black p-3">
                        <p className="font-bold text-xs mb-2">Career Examples:</p>
                        <div className="flex flex-wrap gap-2">
                          {section.examples.map((ex, i) => (
                            <span key={i} className="text-xs bg-background border border-black px-2 py-1">
                              {ex}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Final CTA */}
            <div className="mt-8 bg-primary text-primary-foreground border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
              <h3 className="font-bold text-lg mb-2">Your Turn 🎯</h3>
              <p className="text-sm">Which intelligences resonate with you? That's where you should focus your energy.</p>
            </div>
          </div>
        </PhoneFrame>

        {/* Explanation */}
        <div className="max-w-2xl mx-auto mt-12 bg-card border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
          <h3 className="text-2xl font-bold mb-4">Accordion Stack Pattern</h3>
          <p className="mb-4">Collapsible sections that expand on tap. Users can jump to any section, skip content, or dive deep where they're curious.</p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="font-bold text-lg mb-2 text-primary">✅ Advantages</h4>
              <ul className="space-y-2 text-sm">
                <li>• Non-linear exploration (skip ahead)</li>
                <li>• Overview of all topics at once</li>
                <li>• Great for reference material</li>
                <li>• Compact information architecture</li>
                <li>• Users control what they see</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-destructive">❌ Disadvantages</h4>
              <ul className="space-y-2 text-sm">
                <li>• Less engaging than story formats</li>
                <li>• Can feel like a FAQ page</li>
                <li>• No narrative flow</li>
                <li>• Users might skip important sections</li>
                <li>• Requires clear, scannable titles</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
