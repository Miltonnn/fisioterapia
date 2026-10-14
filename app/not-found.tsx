import Link from "next/link";

export const metadata = {
  title: "404 - Página não encontrada",
};

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-white px-6">
      <div className="max-w-xl w-full text-center">
        <div className="w-16 h-[2px] bg-gray-200 mx-auto mb-8" />

        <span className="text-6xl md:text-7xl font-bold text-gray-900 tracking-tight">
          404
        </span>

        <h2 className="mt-6 text-2xl font-medium text-gray-800">
          Página não encontrada
        </h2>

        <p className="mt-4 text-base text-gray-500 leading-relaxed">
          A página que você tentou acessar não está disponível. Verifique o
          endereço ou retorne à página inicial.
        </p>

        <div className="mt-10">
          <Link
            href="/"
            title="Home"
            className="inline-flex items-center justify-center px-6 py-3
                       bg-gray-900 text-white text-sm font-medium
                       rounded-md
                       hover:bg-black transition-colors duration-200"
          >
            Ir para página inicial
          </Link>
        </div>
      </div>
    </div>
  );
}
