
import Layout from "../components/Layout";
import JournalEntry from "../components/JournalEntry";
import ScriptureCard from "../components/ScriptureCard";
import PrayerPrompt from "../components/PrayerPrompt";
import { Book, Heart, MessageSquare } from "lucide-react";

const Index = () => {
  // Sample data
  const featuredEntry = {
    title: "Finding Peace in the Stillness",
    date: "May 25, 2023",
    content: "In a world filled with noise and constant distraction, there is a sacred power in embracing stillness. When we quiet ourselves before God, we create space to hear His voice. I've been reflecting on Psalm 46:10 lately: 'Be still, and know that I am God.' This simple instruction has profound implications for our spiritual lives. Stillness isn't just the absence of noise—it's the presence of an attentive heart..."
  };

  const recentEntries = [
    {
      title: "Grace for the Journey",
      date: "May 18, 2023",
      content: "Today I was reminded that God's grace is sufficient for each step of the journey. When the path seems unclear or the challenges overwhelming, His presence remains constant. There's a beautiful freedom in surrendering our need for control and embracing His guidance."
    },
    {
      title: "Reflections on Community",
      date: "May 10, 2023",
      content: "The body of Christ is not just a theological concept but a living reality. I've been meditating on how we are called to bear one another's burdens and walk alongside each other through valleys and mountaintops alike. True community requires vulnerability, commitment, and grace."
    }
  ];

  const dailyVerse = {
    verse: "For I know the plans I have for you, declares the LORD, plans for welfare and not for evil, to give you a future and a hope.",
    reference: "Jeremiah 29:11"
  };

  const prayerPrompt = {
    prompt: "Take a moment to pray for those in your life who are facing uncertainty or transition. Ask for God's peace and clarity to surround them today."
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-serif font-normal text-faith-900 mb-6">Journal</h2>
          <JournalEntry 
            title={featuredEntry.title} 
            date={featuredEntry.date} 
            content={featuredEntry.content} 
            isFeatured={true} 
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-4 h-4 text-faith-900/70" />
              <h3 className="font-serif text-xl text-faith-900">Recent Entries</h3>
            </div>
            {recentEntries.map((entry, index) => (
              <JournalEntry
                key={index}
                title={entry.title}
                date={entry.date}
                content={entry.content}
              />
            ))}
          </div>
          <div>
            <ScriptureCard verse={dailyVerse.verse} reference={dailyVerse.reference} />
            <PrayerPrompt prompt={prayerPrompt.prompt} />
          </div>
        </div>

        <div className="separator">✝</div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-6 border border-faith-900/5 rounded-lg bg-faith-100/50 fade-in">
            <div className="flex items-center gap-2 mb-4">
              <Book className="w-4 h-4 text-faith-900/70" />
              <h3 className="font-serif text-xl">Scripture Journal</h3>
            </div>
            <p className="text-faith-900/80 mb-4">
              Record insights from your daily scripture reading and track your spiritual growth over time.
            </p>
            <a href="/scripture" className="inline-block text-sm text-faith-900 border-b border-faith-900 pb-0.5 hover:text-faith-200 hover:border-faith-200 transition-colors">
              Open Scripture Journal
            </a>
          </div>
          <div className="p-6 border border-faith-900/5 rounded-lg bg-faith-100/50 fade-in">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-4 h-4 text-faith-900/70" />
              <h3 className="font-serif text-xl">Prayer Journal</h3>
            </div>
            <p className="text-faith-900/80 mb-4">
              Keep a record of prayer requests, answered prayers, and personal reflections on your prayer life.
            </p>
            <a href="/prayers" className="inline-block text-sm text-faith-900 border-b border-faith-900 pb-0.5 hover:text-faith-200 hover:border-faith-200 transition-colors">
              Open Prayer Journal
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
