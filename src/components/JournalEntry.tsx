
interface JournalEntryProps {
  title: string;
  date: string;
  content: string;
  isFeatured?: boolean;
}

const JournalEntry = ({ title, date, content, isFeatured = false }: JournalEntryProps) => {
  return (
    <article className={`mb-16 fade-in ${isFeatured ? 'border-b border-faith-900/5 pb-10' : ''}`}>
      <div className="entry-date">{date}</div>
      <h2 className={`${isFeatured ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'} font-serif font-normal mb-4`}>{title}</h2>
      <div className={`${isFeatured ? 'text-lg' : 'text-base'} text-faith-900/80 leading-relaxed`}>
        {content}
      </div>
      {isFeatured && (
        <div className="mt-6">
          <a href="#" className="inline-block text-sm text-faith-900 border-b border-faith-900 pb-0.5 hover:text-faith-200 hover:border-faith-200 transition-colors">
            Continue Reading
          </a>
        </div>
      )}
    </article>
  );
};

export default JournalEntry;
