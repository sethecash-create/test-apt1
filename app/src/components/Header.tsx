import Logo from './Logo';

export default function Header({ showSubtitle = false }: { showSubtitle?: boolean }) {
  return (
    <header className="border-b border-gray-200 bg-white px-6 py-3 flex items-center gap-4">
      <Logo showSubtitle={showSubtitle} />
      <span className="text-gray-400 text-lg font-light">|</span>
      <span className="text-gray-500 text-base">Login</span>
    </header>
  );
}
