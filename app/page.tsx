export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">

      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#D4AF37]">
          Transformação • Disciplina • Evolução
        </p>

        <h1 className="max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl">
          VOCÊ NÃO ESTÁ{" "}
          <span className="text-[#D4AF37]">
            PREPARADO
          </span>

          <br />

          PARA O SUCESSO —
          <br />

          E EU VOU TE PROVAR.
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-gray-300 md:text-xl">
          O problema não é a falta de oportunidade.
          <br />
          O problema é que a maioria das pessoas ainda pensa como alguém comum.
        </p>

        <button className="mt-10 rounded-2xl bg-[#D4AF37] px-8 py-4 font-bold text-black transition hover:scale-105">
          ASSISTIR AGORA
        </button>

      </section>

    </main>
  )
}