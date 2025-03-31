
import { BookOpen } from "lucide-react";

interface ScriptureCardProps {
  verse: string;
  reference: string;
}

const ScriptureCard = ({ verse, reference }: ScriptureCardProps) => {
  return (
    <div className="p-6 sm:p-8 border border-faith-900/5 rounded-lg mb-8 bg-faith-100/50 fade-in">
      <div className="flex items-center gap-2 mb-4 text-faith-900/70">
        <BookOpen className="w-4 h-4" />
        <h3 className="font-serif text-lg">Daily Scripture</h3>
      </div>
      <p className="verse">{verse}</p>
      <p className="verse-ref">{reference}</p>
    </div>
  );
};

export default ScriptureCard;
