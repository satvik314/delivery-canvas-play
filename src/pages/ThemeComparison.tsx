import { useState } from "react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Moon, Sunset, Coffee } from "lucide-react";

const themes = {
  warm: {
    name: "Warm Night",
    description: "Warm browns and ambers - cozy evening reading",
    colors: {
      background: "25 15% 12%", // Deep warm brown
      foreground: "35 20% 88%", // Warm off-white
      primary: "280 60% 65%", // Softer purple
      secondary: "35 70% 60%", // Warm amber
      accent: "25 65% 50%", // Burnt orange
      border: "35 40% 70%", // Light amber borders
      card: "25 18% 16%",
    }
  },
  cool: {
    name: "Cool Night",
    description: "Deep blues and purples - calm midnight reading",
    colors: {
      background: "220 20% 12%", // Deep blue-gray
      foreground: "220 15% 88%", // Cool off-white
      primary: "265 70% 68%", // Lavender purple
      secondary: "195 70% 60%", // Soft cyan
      accent: "280 60% 65%", // Purple accent
      border: "220 30% 65%", // Light blue borders
      card: "220 22% 16%",
    }
  },
  forest: {
    name: "Forest Night",
    description: "Deep greens and teals - natural evening vibe",
    colors: {
      background: "160 20% 12%", // Deep forest green
      foreground: "160 15% 88%", // Cool off-white
      primary: "170 60% 55%", // Teal
      secondary: "85 50% 60%", // Soft lime
      accent: "45 80% 65%", // Warm yellow
      border: "160 40% 65%", // Light teal borders
      card: "160 22% 16%",
    }
  },
  sunset: {
    name: "Sunset Mode",
    description: "Deep oranges and purples - golden hour feel",
    colors: {
      background: "280 15% 14%", // Deep purple-gray
      foreground: "30 20% 88%", // Warm off-white
      primary: "15 75% 60%", // Coral orange
      secondary: "280 50% 65%", // Soft purple
      accent: "45 85% 65%", // Golden yellow
      border: "30 50% 70%", // Peachy borders
      card: "280 18% 18%",
    }
  }
};

type ThemeKey = keyof typeof themes;

export default function ThemeComparison() {
  const [activeTheme, setActiveTheme] = useState<ThemeKey>("warm");
  const theme = themes[activeTheme];

  const applyTheme = (themeColors: typeof theme.colors) => {
    return {
      '--background': themeColors.background,
      '--foreground': themeColors.foreground,
      '--primary': themeColors.primary,
      '--secondary': themeColors.secondary,
      '--accent': themeColors.accent,
      '--border': themeColors.border,
      '--card': themeColors.card,
      '--card-foreground': themeColors.foreground,
    } as React.CSSProperties;
  };

  return (
    <div className="min-h-screen bg-muted p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Night-Friendly Neobrutalism Themes</h1>
          <p className="text-muted-foreground text-lg mb-6">
            Choose a theme that's easier on your eyes while keeping the bold aesthetic
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {(Object.keys(themes) as ThemeKey[]).map((key) => (
              <Button
                key={key}
                onClick={() => setActiveTheme(key)}
                variant={activeTheme === key ? "default" : "outline"}
                size="lg"
                className="min-w-[160px]"
              >
                {key === "warm" && <Coffee className="mr-2 h-5 w-5" />}
                {key === "cool" && <Moon className="mr-2 h-5 w-5" />}
                {key === "forest" && <Brain className="mr-2 h-5 w-5" />}
                {key === "sunset" && <Sunset className="mr-2 h-5 w-5" />}
                {themes[key].name}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Live Preview */}
          <div>
            <h2 className="text-2xl font-bold mb-4">{theme.name}</h2>
            <p className="text-muted-foreground mb-6">{theme.description}</p>
            
            <div style={applyTheme(theme.colors)}>
              <PhoneFrame>
                <div className="p-6 space-y-6 h-full overflow-auto">
                  <div className="space-y-2">
                    <div className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-md border-2 border-border font-bold text-sm">
                      PSYCHOLOGY
                    </div>
                    <h1 className="text-3xl font-black leading-tight">
                      Theory of Multiple Intelligences
                    </h1>
                  </div>

                  <Card className="p-4 border-4 border-border shadow-[4px_4px_0px_0px_hsl(var(--border))]">
                    <p className="text-sm leading-relaxed">
                      Howard Gardner proposed that intelligence isn't a single entity, 
                      but rather a collection of distinct types of intelligences.
                    </p>
                  </Card>

                  <div className="space-y-3">
                    <div className="bg-primary text-primary-foreground p-4 rounded-lg border-3 border-border font-bold">
                      🎵 Musical Intelligence
                    </div>
                    <div className="bg-accent text-foreground p-4 rounded-lg border-3 border-border font-bold">
                      🏃 Bodily-Kinesthetic
                    </div>
                    <div className="bg-card text-card-foreground p-4 rounded-lg border-3 border-border font-bold">
                      🗣️ Linguistic Intelligence
                    </div>
                  </div>

                  <Button className="w-full border-4 border-border shadow-[4px_4px_0px_0px_hsl(var(--border))] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all font-black text-lg h-14">
                    CONTINUE LEARNING
                  </Button>
                </div>
              </PhoneFrame>
            </div>
          </div>

          {/* Color Palette */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Color Palette</h3>
              <div className="space-y-3">
                {Object.entries(theme.colors).map(([name, value]) => (
                  <div key={name} className="flex items-center gap-4">
                    <div
                      className="w-20 h-12 rounded-lg border-4 border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))]"
                      style={{ backgroundColor: `hsl(${value})` }}
                    />
                    <div className="flex-1">
                      <div className="font-bold capitalize">{name.replace('-', ' ')}</div>
                      <div className="text-sm text-muted-foreground font-mono">
                        hsl({value})
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Why This Works for Night Reading</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Darker backgrounds reduce eye strain in low light</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Softer, desaturated colors maintain neobrutalism while being gentler</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Bold borders keep the distinctive aesthetic</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Warmer tones reduce blue light exposure before sleep</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        <Card className="mt-8 p-6 bg-primary/10 border-4 border-primary">
          <h3 className="text-xl font-bold mb-2">💡 Implementation Note</h3>
          <p className="text-sm">
            Once you choose your preferred theme, I can update the dark mode in your 
            index.css file, or create a custom night mode toggle that users can switch on.
            You can also have both a regular dark mode and a special "night reading mode"!
          </p>
        </Card>
      </div>
    </div>
  );
}
