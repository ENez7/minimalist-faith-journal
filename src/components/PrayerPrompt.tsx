
import { Heart } from "lucide-react";

interface PrayerPromptProps {
  prompt: string;
}

const PrayerPrompt = ({ prompt }: PrayerPromptProps) => {
  return (
    <div className="p-6 sm:p-8 border border-faith-900/5 rounded-lg mb-8 bg-faith-900/5 fade-in">
      <div className="flex items-center gap-2 mb-4 text-faith-900/70">
        <Heart className="w-4 h-4" />
        <h3 className="font-serif text-lg">Prayer Prompt</h3>
      </div>
      <p className="text-faith-900/80 italic">{prompt}</p>
    </div>
  );
};

export default PrayerPrompt;
