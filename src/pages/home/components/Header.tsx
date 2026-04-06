export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100 px-6 md:px-12 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center bg-gray-900 rounded-lg">
            <i className="ri-bar-chart-2-line text-white text-base"></i>
          </div>
          <span className="text-gray-900 font-semibold text-lg tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
            Costos
          </span>
        </div>

      </div>
    </header>
  );
}
