export default function Footer({ showSiteMap = false }: { showSiteMap?: boolean }) {
  return (
    <footer className="bg-gray-100 mt-auto py-5 px-4 text-center text-xs text-gray-500">
      <div className="flex justify-center gap-8 mb-2">
        <a href="#" className="hover:underline uppercase tracking-wide">About Us</a>
        <a href="#" className="hover:underline uppercase tracking-wide">Terms of Use</a>
        <a href="#" className="hover:underline uppercase tracking-wide">Privacy Policy</a>
      </div>
      <p>Copyright &copy; 2017 Consumer Funding Solutions. All Rights Reserved.</p>
      {showSiteMap && (
        <div className="mt-1">
          <a href="#" className="hover:underline uppercase tracking-wide">Site Map</a>
        </div>
      )}
    </footer>
  );
}
