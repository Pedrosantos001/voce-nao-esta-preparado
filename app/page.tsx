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
      <section className="px-6 py-24">

  <div className="mx-auto max-w-5xl text-center">

    <h2 className="mb-12 text-4xl font-bold md:text-5xl">
      A VERDADE QUE NINGUÉM TE FALA
    </h2>

    <div className="overflow-hidden rounded-3xl border border-[#D4AF37]/30 shadow-2xl">

      <div className="flex aspect-video items-center justify-center bg-[#151515] text-gray-400">

        VÍDEO SERÁ INSERIDO AQUI

      </div>

    </div>

  </div>

</section>
<section className="px-6 py-24">

  <div className="mx-auto max-w-4xl">

    <h2 className="mb-10 text-center text-4xl font-bold md:text-5xl">
      O VERDADEIRO PROBLEMA
    </h2>

    <div className="space-y-8 text-lg leading-relaxed text-gray-300 md:text-xl">

      <p>
        As pessoas dizem que querem sucesso.
        <br />
        Mas perseguem validação, status e objetivos vazios.
      </p>

      <p>
        Querem o resultado.
        <br />
        Mas não suportam o processo.
      </p>

      <p>
        Querem dinheiro.
        <br />
        Mas não querem responsabilidade.
      </p>

      <p>
        Querem crescer.
        <br />
        Mas continuam presas aos mesmos hábitos, pensamentos e atitudes.
      </p>

      <p className="border-l-4 border-[#D4AF37] pl-6 text-white">
        O sucesso verdadeiro exige uma transformação
        que a maioria das pessoas não está preparada para enfrentar.
      </p>

    </div>

  </div>

</section>
<section className="px-6 py-24">

  <div className="mx-auto max-w-6xl">

    <h2 className="mb-16 text-center text-4xl font-bold md:text-5xl">
      O QUE VOCÊ VAI DESENVOLVER
    </h2>

    <div className="grid gap-6 md:grid-cols-3">

      {[
        "Mentalidade",
        "Disciplina",
        "Clareza",
        "Controle emocional",
        "Visão estratégica",
        "Construção real",
      ].map((item) => (

        <div
          key={item}
          className="rounded-3xl border border-[#D4AF37]/20 bg-[#111111] p-8 transition hover:-translate-y-1 hover:border-[#D4AF37]"
        >

          <h3 className="text-2xl font-bold text-[#D4AF37]">
            {item}
          </h3>

          <p className="mt-4 text-gray-400">
            Desenvolvimento profundo para abandonar pensamentos comuns
            e construir uma mentalidade preparada para evolução real.
          </p>

        </div>

      ))}

    </div>

  </div>

</section>
<section className="px-6 py-24">

  <div className="mx-auto max-w-4xl rounded-[40px] border border-[#D4AF37]/30 bg-[#111111] p-10 text-center shadow-2xl md:p-16">

    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
      Curso Online
    </p>

    <h2 className="mb-6 text-4xl font-extrabold md:text-6xl">
      VOCÊ NÃO ESTÁ PREPARADO PARA O SUCESSO
    </h2>

    <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300">
      Um curso criado para confrontar sua visão atual sobre crescimento,
      disciplina e sucesso verdadeiro.
    </p>

    <div className="mb-10 text-5xl font-bold text-[#D4AF37]">
      R$ 97,00
    </div>

    <button className="rounded-2xl bg-[#D4AF37] px-10 py-5 text-lg font-bold tracking-wide text-black transition hover:scale-105">
      QUERO PROVAR QUE ESTOU PREPARADO
    </button>

  </div>

</section>
    </main>
  )
}