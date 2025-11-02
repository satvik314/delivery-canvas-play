import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CardSwipeDelivery from "./pages/CardSwipeDelivery";
import TapRevealDelivery from "./pages/TapRevealDelivery";
import ChoiceBasedDelivery from "./pages/ChoiceBasedDelivery";
import QuizFlowDelivery from "./pages/QuizFlowDelivery";
import ScrollStoryDelivery from "./pages/ScrollStoryDelivery";
import FlipCardDelivery from "./pages/FlipCardDelivery";
import TimelineDelivery from "./pages/TimelineDelivery";
import AccordionDelivery from "./pages/AccordionDelivery";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/card-swipe" element={<CardSwipeDelivery />} />
          <Route path="/tap-reveal" element={<TapRevealDelivery />} />
          <Route path="/choice-based" element={<ChoiceBasedDelivery />} />
          <Route path="/quiz-flow" element={<QuizFlowDelivery />} />
          <Route path="/scroll-story" element={<ScrollStoryDelivery />} />
          <Route path="/flip-cards" element={<FlipCardDelivery />} />
          <Route path="/timeline" element={<TimelineDelivery />} />
          <Route path="/accordion" element={<AccordionDelivery />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
