import { useState } from "react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const timelineSteps = [
  {
    year: "1904",
    title: "The IQ Test",
    content: "Alfred Binet creates the first IQ test. Society now has ONE measure of intelligence.",
    icon: "📊"
  },
  {
    year: "1920s-1970s",
    title: "IQ Becomes Everything",
    content: "Schools, jobs, society judges people by a single number. 'Smart' or 'not smart.'",
    icon: "🏫"
  },
  {
    year: "1983",
    title: "Howard Gardner's Breakthrough",
    content: "Gardner publishes 'Frames of Mind' proposing 7 types of intelligence (later 8).",
    icon: "💡"
  },
  {
    year: "1983",
    title: "The 8 Intelligences",
    content: "Linguistic, Logical-Mathematical, Musical, Bodily-Kinesthetic, Spatial, Interpersonal, Intrapersonal, Naturalist.",
    icon: "🧠"
  },
  {
    year: "1990s",
    title: "Education Shifts",
    content: "Schools begin recognizing different learning styles. Not everyone learns the same way.",
    icon: "🎨"
  },
  {
    year: "Today",
    title: "Your Multiple Strengths",
    content: "You're not 'smart' in one way. You're smart in YOUR ways. That's the revolution.",
    icon: "✨"
  }
];

export default function TimelineDelivery() {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const navigate = useNavigate();

  const handleStepClick = (index: number) => {
    if (!completedSteps.includes(index)) {
      setCompletedSteps([...completedSteps, index]);
    }
  };

  const progress = (completedSteps.length / timelineSteps.length) * 100;

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
            <div className="mb-6 sticky top-0 bg-background/95 backdrop-blur pb-4 z-10 border-b-2 border-black">
              <h1 className="text-2xl font-bold mb-2">Multiple Intelligences Timeline</h1>
              <div className="h-2 bg-muted border-2 border-black">
                <div 
                  className="h-full bg-accent transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-xs mt-2 font-bold">{completedSteps.length} of {timelineSteps.length} completed</p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-black"></div>

              {/* Steps */}
              <div className="space-y-8">
                {timelineSteps.map((step, index) => {
                  const isCompleted = completedSteps.includes(index);
                  return (
                    <div 
                      key={index} 
                      className="relative pl-20 cursor-pointer"
                      onClick={() => handleStepClick(index)}
                    >
                      {/* Timeline Dot */}
                      <div 
                        className={`absolute left-4 w-10 h-10 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center transition-all ${
                          isCompleted ? 'bg-accent' : 'bg-card'
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="h-5 w-5" />
                        ) : (
                          <span className="text-xl">{step.icon}</span>
                        )}
                      </div>

                      {/* Content Card */}
                      <div 
                        className={`bg-card border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-4 transition-all ${
                          isCompleted ? 'opacity-100' : 'opacity-60 hover:opacity-80'
                        }`}
                      >
                        <div className="text-xs font-bold text-primary mb-1">{step.year}</div>
                        <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                        <p className="text-sm leading-relaxed">{step.content}</p>
                        {!isCompleted && (
                          <p className="text-xs text-muted-foreground mt-2">Tap to mark as read</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Completion Message */}
              {completedSteps.length === timelineSteps.length && (
                <div className="mt-8 bg-primary text-primary-foreground border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 text-center">
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-xl font-bold mb-2">You've completed the timeline!</h3>
                  <p className="text-sm">Now you understand how we discovered multiple intelligences.</p>
                </div>
              )}
            </div>
          </div>
        </PhoneFrame>

        {/* Explanation */}
        <div className="max-w-2xl mx-auto mt-12 bg-card border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
          <h3 className="text-2xl font-bold mb-4">Timeline Pattern</h3>
          <p className="mb-4">Vertical timeline showing historical progression. Users tap each step to mark as completed, creating a sense of achievement.</p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="font-bold text-lg mb-2 text-primary">✅ Advantages</h4>
              <ul className="space-y-2 text-sm">
                <li>• Perfect for historical narratives</li>
                <li>• Clear sense of progression</li>
                <li>• Visual completion tracking</li>
                <li>• Natural chronological flow</li>
                <li>• Great for cause-and-effect stories</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-destructive">❌ Disadvantages</h4>
              <ul className="space-y-2 text-sm">
                <li>• Only works for time-based content</li>
                <li>• Can feel linear and rigid</li>
                <li>• Requires vertical scrolling</li>
                <li>• Less interactive than other patterns</li>
                <li>• Tap-to-complete can feel gimmicky</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
