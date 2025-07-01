"use client";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-cover bg-center text-white relative px-6 pt-6 flex flex-col justify-center items-center"
      style={{ backgroundImage: "url('/metal-texture.png')" }}
    >
      {/* Logo arriba izquierda */}
      <div className="absolute top-4 left-4">
        <img
          src="/logo-metaltravel.png"
          alt="Metal Travel Logo"
          className="w-20 h-20 object-contain"
        />
      </div>

      {/* Mensaje central */}
      <div className="bg-black/80 p-10 rounded-xl shadow-xl max-w-xl text-center mt-24">
        <h1 className="text-4xl font-bold text-metal-orange mb-4 font-metal">
          Estamos afinando los riffs...
        </h1>

        <p className="text-lg text-gray-300 mb-6">
          Nuestro sitio está en construcción. Muy pronto conocerás los tours más brutales
          a los festivales más épicos del planeta.
        </p>

        <a
          href="mailto:contacto@metaltravel.cl"
          className="inline-block bg-metal-orange text-white px-6 py-2 rounded font-semibold hover:bg-orange-500 transition"
        >
          Contáctanos
        </a>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-400 text-sm">
        <p className="mb-2">Síguenos en redes sociales</p>
        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="https://instagram.com/metaltravelCL"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-metal-orange"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://tiktok.com/@metaltravelCL"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-metal-orange"
          >
            <i className="fab fa-tiktok"></i>
          </a>
        </div>
        <p className="mt-4 text-xs">© 2025 Metal Travel. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
