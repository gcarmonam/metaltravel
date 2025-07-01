import "./globals.css";

export const metadata = {
  title: "Metal Travel",
  description: "Viajes épicos a festivales de música metal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* CDN de Font Awesome para íconos */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          //integrity="sha512-CwW7K+DcRPTPCs96HQcEjfRCgfQ2Vg7rJ4GK8fsE+kT8kGcTxqVnqPfG97ZsKNS+V9R6GghP0lT7FvMxOma84g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
