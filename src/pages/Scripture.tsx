
import Layout from "../components/Layout";
import { BookOpen } from "lucide-react";

const Scripture = () => {
  // Sample data
  const scriptureEntries = [
    {
      date: "May 24, 2023",
      passage: "John 15:1-8",
      reflection: "Reflecting on the vine and branches metaphor, I'm reminded that abiding in Christ is not a passive state but an active connection. Our fruitfulness is directly tied to our ongoing relationship with Him."
    },
    {
      date: "May 22, 2023",
      passage: "Psalm 23",
      reflection: "The shepherd imagery speaks to God's tender care and protection. Today I was particularly struck by 'He leads me beside still waters.' There's an intentionality in how God guides us to places of peace and restoration."
    },
    {
      date: "May 19, 2023",
      passage: "Romans 8:28-39",
      reflection: "Nothing can separate us from God's love - not difficulty, persecution, or fear. This passage brings such comfort when facing uncertainty or challenges in daily life."
    }
  ];

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-serif font-normal text-faith-900 mb-4">Scripture Journal</h1>
          <p className="text-faith-900/70">Record insights from your daily Bible readings and reflections.</p>
        </div>

        {scriptureEntries.map((entry, index) => (
          <div key={index} className="mb-16 fade-in">
            <div className="entry-date">{entry.date}</div>
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-faith-900/70" />
              <h2 className="font-serif text-2xl">{entry.passage}</h2>
            </div>
            <div className="mt-4 text-faith-900/80 leading-relaxed">
              {entry.reflection}
            </div>
            <div className="separator my-8">·</div>
          </div>
        ))}

        <div className="text-center mb-16">
          <a href="/new-entry" className="inline-block px-6 py-3 border border-faith-900/10 rounded-md bg-faith-900 text-white text-sm hover:bg-faith-900/90 transition-colors">
            Add Scripture Reflection
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Scripture;
