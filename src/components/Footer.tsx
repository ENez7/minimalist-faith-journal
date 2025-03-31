
const Footer = () => {
  return (
    <footer className="py-10 border-t border-faith-900/5">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-faith-200">
          Faith Journal — A place for reflection and spiritual growth
        </p>
        <p className="text-xs text-faith-200 mt-2">
          &copy; {new Date().getFullYear()} Faith Journal
        </p>
      </div>
    </footer>
  );
};

export default Footer;
