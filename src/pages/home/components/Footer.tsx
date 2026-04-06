export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-100 px-6 md:px-12 py-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 flex items-center justify-center bg-gray-900 rounded-md">
            <i className="ri-bar-chart-2-line text-white text-xs"></i>
          </div>
          <span className="text-sm text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
            Costos &copy; {new Date().getFullYear()}
          </span>
        </div>
        <p className="text-xs text-gray-400">
          Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
