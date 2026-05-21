'use client'
import Image from 'next/image'
import axios from 'axios'

export default function PagamentoPage() {

  async function handleCheckout(
    plan: string,
    amount: number
  ) {

    try {

      const response = await axios.post(
        '/api/create-payment',
        {
          plan,
          amount,
          name: 'Pedro Cliente',
          email: 'cliente@email.com',
        }
      )

      console.log(response.data)

      const paymentLink =
        response.data.links?.find(
          (link: any) => link.rel === 'PAY'
        )?.href

      if (paymentLink) {
        window.location.href = paymentLink
      }

    } catch (error) {

      console.log(error)

      alert('Erro ao gerar pagamento')

    }

  }
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white px-6 py-20">

      <div className="mx-auto max-w-5xl">

        <div className="text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
            Último passo
          </p>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight">

            VOCÊ ESTÁ PREPARADO
            <br />
            PARA MUDAR?

          </h1>

          <p className="mt-8 text-xl text-gray-400">

            Escolha como deseja entrar
            para a primeira turma.

          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {/* NORMAL */}
   <div className="rounded-[35px] border border-white/10 bg-[#111111] p-6 overflow-hidden">

  <div className="relative mb-6 overflow-hidden rounded-3xl">

    <Image
      src="/aluno.jpg"
      alt="Plano Aluno"
      width={600}
      height={600}
      className="w-full object-cover transition duration-500 hover:scale-105"
    />

  </div>

  <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
    Plano padrão
  </p>

  <h2 className="mt-4 text-4xl font-bold">
    ALUNO
  </h2>

  <div className="mt-8 text-5xl font-extrabold text-[#D4AF37]">
    R$ 39,99
  </div>

  <ul className="mt-10 space-y-4 text-gray-300">

    <li>✔ Acesso completo ao curso</li>
    <li>✔ Grupo de alunos</li>
    <li>✔ Atualizações futuras</li>
    <li>✔ Conteúdo exclusivo</li>

  </ul>

  <button
    onClick={() =>
      handleCheckout('ALUNO', 9700)
    }
    className="mt-12 w-full rounded-2xl bg-[#D4AF37] px-8 py-5 text-lg font-bold text-black transition hover:scale-105"
  >

    ENTRAR COMO ALUNO

  </button>

</div>

          {/* VIP */}
          <div className="rounded-[35px] border border-[#D4AF37]/30 bg-[#111111] p-6 overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.2)]">

  <div className="relative mb-6 overflow-hidden rounded-3xl">

    <Image
      src="/vip.jpg"
      alt="Plano DELITE VIP"
      width={600}
      height={600}
      className="w-full object-cover transition duration-500 hover:scale-105"
    />

  </div>

  <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
    Mais escolhido
  </p>

  <h2 className="mt-4 text-4xl font-bold text-[#D4AF37]">
    DELITE VIP
  </h2>

  <div className="mt-8 text-5xl font-extrabold text-[#D4AF37]">
    R$ 69,99
  </div>

  <ul className="mt-10 space-y-4 text-gray-300">

    <li>✔ Tudo do plano aluno</li>
    <li>✔ Grupo VIP diretamente com você</li>
    <li>✔ Acompanhamento próximo</li>
    <li>✔ Networking seleto</li>
    <li>✔ Suporte diferenciado</li>

  </ul>

  <button
    onClick={() =>
      handleCheckout('VIP', 19700)
    }
    className="mt-12 w-full rounded-2xl bg-[#D4AF37] px-8 py-5 text-lg font-bold text-black transition hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.8)]"
  >

    ENTRAR PARA O DELITE VIP

  </button>

</div>

        </div>

      </div>

    </div>
  )
}