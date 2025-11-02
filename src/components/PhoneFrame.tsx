import { ReactNode } from "react";

interface PhoneFrameProps {
  children: ReactNode;
}

export const PhoneFrame = ({ children }: PhoneFrameProps) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-muted p-4">
      <div className="relative">
        {/* Phone Frame */}
        <div className="w-[390px] h-[844px] bg-black rounded-[50px] p-3 shadow-2xl">
          {/* Inner Screen */}
          <div className="w-full h-full bg-background rounded-[40px] overflow-hidden flex flex-col">
            {/* Status Bar */}
            <div className="flex items-center justify-between px-6 pt-3 pb-2 text-xs font-medium">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-3 border-2 border-foreground rounded-sm relative">
                  <div className="absolute inset-0.5 bg-foreground rounded-[1px]" />
                </div>
              </div>
            </div>
            
            {/* App Content */}
            <div className="flex-1 overflow-hidden">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
