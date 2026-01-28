export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-12 py-8 no-print">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Recipe Blog. All rights reserved.</p>
      </div>
    </footer>
  );
}
