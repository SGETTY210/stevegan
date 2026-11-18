export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="mx-auto max-w-3xl px-6 py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} My Cooking Blog. Happy cooking!
      </div>
    </footer>
  );
}
