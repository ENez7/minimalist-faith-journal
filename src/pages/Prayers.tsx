
import Layout from "../components/Layout";
import { Heart } from "lucide-react";

const Prayers = () => {
  // Sample data
  const prayerEntries = [
    {
      date: "May 25, 2023",
      title: "For Strength and Guidance",
      content: "Lord, I'm facing some difficult decisions at work. I ask for Your wisdom and discernment as I navigate these choices. Help me to honor You in all that I do and to trust Your leading even when the path isn't clear.",
      answered: false
    },
    {
      date: "May 20, 2023",
      title: "For Amy's Health",
      content: "Father, please be with Amy as she undergoes treatment. Bring healing to her body and peace to her mind. Surround her with supportive community and give her doctors wisdom.",
      answered: false
    },
    {
      date: "May 17, 2023",
      title: "For Our Community",
      content: "God, I lift up our neighborhood to You. There's been division and tension lately. Would You bring reconciliation and understanding? Help us to be agents of Your peace and love in practical ways.",
      answered: true,
      answeredNote: "Witnessed a beautiful moment of reconciliation at the community meeting last night. Two neighbors who had been in conflict for months took steps toward healing."
    }
  ];

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-serif font-normal text-faith-900 mb-4">Prayer Journal</h1>
          <p className="text-faith-900/70">Record your prayers, requests, and answered prayers.</p>
        </div>

        {prayerEntries.map((entry, index) => (
          <div key={index} className="mb-16 fade-in">
            <div className="entry-date">{entry.date}</div>
            <div className="flex items-center gap-2 mb-2">
              <Heart className={`w-4 h-4 ${entry.answered ? 'text-red-500' : 'text-faith-900/70'}`} />
              <h2 className="font-serif text-2xl">{entry.title}</h2>
              {entry.answered && (
                <span className="text-xs px-2 py-0.5 bg-green-50 text-green-800 rounded-full">
                  Answered
                </span>
              )}
            </div>
            <div className="mt-4 text-faith-900/80 leading-relaxed">
              {entry.content}
            </div>
            {entry.answered && entry.answeredNote && (
              <div className="mt-4 p-4 bg-faith-100/50 rounded-md border-l-2 border-green-300">
                <p className="text-sm text-faith-900/80 italic">
                  <span className="font-medium">Update:</span> {entry.answeredNote}
                </p>
              </div>
            )}
            <div className="separator my-8">·</div>
          </div>
        ))}

        <div className="text-center mb-16">
          <a href="/new-entry" className="inline-block px-6 py-3 border border-faith-900/10 rounded-md bg-faith-900 text-white text-sm hover:bg-faith-900/90 transition-colors">
            Add Prayer Request
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Prayers;
