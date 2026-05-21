'use client'

import { useEffect, useState } from 'react'

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-8 w-8 text-[#D4AF37]"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
)

const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-8 w-8 text-[#D4AF37]"
  >
    <path d="M19 8.3a7.48 7.48 0 0 1-4.4-1.4v6.4a5 5 0 1 1-5-5h.3v2.7h-.3a2.3 2.3 0 1 0 2.3 2.3V2h2.7a4.8 4.8 0 0 0 4.4 4.4z" />
  </svg>
)

const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-8 w-8 text-[#D4AF37]"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
)

export default function LandingPage() {

  const launchDate = new Date('2026-08-08T18:30:00').getTime()

  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  })

  useEffect(() => {

    const interval = setInterval(() => {

      const now = new Date().getTime()

      const distance = launchDate - now

      if (distance <= 0) {

        clearInterval(interval)

        setTimeLeft({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00',
        })

        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )

      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      )

      const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
      )

      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      })

    }, 1000)

    return () => clearInterval(interval)

  }, [launchDate])

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0B0B0B] text-white font-sans scroll-smooth">

      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-md">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <h1 className="animate-pulse text-lg font-bold tracking-[0.2em] text-[#D4AF37]">
            PREPARADO?
          </h1>

          <nav className="hidden gap-8 text-sm font-medium md:flex">

            <a
              href="#"
              className="transition hover:text-[#D4AF37]"
            >
              Início
            </a>

            <a
              href="#manifesto"
              className="transition hover:text-[#D4AF37]"
            >
              Manifesto
            </a>

            <a
              href="#curso"
              className="transition hover:text-[#D4AF37]"
            >
              Curso
            </a>

            <a
              href="#redes"
              className="transition hover:text-[#D4AF37]"
            >
              Redes
            </a>

          </nav>

        </div>

      </header>

      {/* HERO */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">

        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#111111] to-[#0B0B0B] opacity-95" />

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/pedro.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl animate-pulse" />

        <div className="relative z-10 max-w-5xl">

          <p className="mb-4 animate-pulse text-sm uppercase tracking-[0.4em] text-[#D4AF37]">
            PRIMEIRA TURMA • 08 DE AGOSTO • 18:30
          </p>

          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-gray-400">
            A maioria das pessoas nunca descobrirá
            do que realmente é capaz.
          </p>

          <h1 className="mb-8 text-5xl font-extrabold leading-tight md:text-7xl">

            VOCÊ NÃO ESTÁ{' '}

            <span className="animate-pulse text-[#D4AF37]">
              PREPARADO
            </span>

            <br />

            PARA O SUCESSO —
            <br />

            E EU VOU TE PROVAR.

          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300 md:text-xl">

            O problema não é a falta de oportunidade.

            <br />

            O problema é que a maioria das pessoas
            ainda pensa como alguém comum.

          </p>

          <div className="flex items-center justify-center">

            <a
              href="#video"
              className="rounded-2xl bg-[#D4AF37] px-8 py-4 text-sm font-bold tracking-wider text-black transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.8)]"
            >
              COMEÇAR AGORA
            </a>

          </div>

        </div>

      </section>

      {/* COUNTDOWN */}
      <section className="border-y border-white/10 bg-black/40 px-6 py-14 backdrop-blur-sm">

        <div className="mx-auto max-w-5xl text-center">

          <p className="mb-4 animate-pulse text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
            PRIMEIRA TURMA
          </p>

          <h2 className="mb-10 text-3xl font-bold md:text-5xl">
            LIBERAÇÃO EM:
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-6">

            {[
              { label: 'Dias', value: timeLeft.days },
              { label: 'Horas', value: timeLeft.hours },
              { label: 'Minutos', value: timeLeft.minutes },
              { label: 'Segundos', value: timeLeft.seconds },
            ].map((item) => (

              <div
                key={item.label}
                className="rounded-2xl border border-[#D4AF37]/40 bg-[#111111]/90 px-8 py-6 shadow-[0_0_30px_rgba(212,175,55,0.15)]"
              >

                <h3 className="animate-pulse text-5xl font-bold text-[#D4AF37]">
                  {item.value}
                </h3>

                <p className="mt-2 text-sm uppercase tracking-wider text-gray-400">
                  {item.label}
                </p>

              </div>

            ))}

          </div>

          <p className="mt-8 text-gray-400">
            Número limitado de participantes para acompanhamento.
          </p>

        </div>

      </section>

      {/* VIDEO */}
      <section id="video" className="px-6 py-24">

        <div className="mx-auto max-w-5xl text-center">

          <h2 className="mb-12 text-4xl font-bold md:text-5xl">
            A VERDADE QUE NINGUÉM TE FALA
          </h2>

          <div className="mb-8">

            <a
              href="#curso"
              className="rounded-2xl bg-[#D4AF37] px-8 py-4 text-sm font-bold tracking-wider text-black transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.8)]"
            >
              ESTOU PRONTO
            </a>

          </div>

          <div className="overflow-hidden rounded-3xl border border-[#D4AF37]/30 shadow-2xl">

            <div className="flex aspect-video items-center justify-center bg-[#151515] text-gray-400">
              SEU VÍDEO SERÁ INSERIDO AQUI
            </div>

          </div>

        </div>

      </section>

      {/* COURSE */}
      <section id="curso" className="relative px-6 py-24">

        <div className="relative z-10 mx-auto max-w-4xl rounded-[40px] border border-[#D4AF37]/30 bg-[#111111]/90 p-10 text-center shadow-2xl backdrop-blur-sm md:p-16">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
            Curso Online
          </p>

          <h2 className="mb-6 text-4xl font-extrabold md:text-6xl">
            VOCÊ NÃO ESTÁ PREPARADO PARA O SUCESSO
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300">

            Um curso criado para confrontar sua visão atual
            sobre crescimento, disciplina e sucesso verdadeiro.

          </p>

          <div className="mb-6 text-5xl font-bold text-[#D4AF37]">
            R$ 39,99
          </div>

          <p className="mb-10 text-gray-400">
            Ou escolha fazer parte da elite com acompanhamento direto.
          </p>

          <a
  href="/pagamento"
  className="inline-block rounded-2xl bg-[#D4AF37] px-10 py-5 text-lg font-bold tracking-wide text-black transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.8)]"
>

  QUERO PROVAR QUE ESTOU PREPARADO

</a>
        </div>

      </section>

      {/* FOOTER */}
      <footer id="redes" className="border-t border-white/10 px-6 py-16">

        <div className="mx-auto max-w-6xl">

          <div className="mb-14 text-center">

            <h3 className="text-3xl font-bold text-[#D4AF37] md:text-4xl">
              ENTRE PARA O AMBIENTE
            </h3>

            <p className="mt-4 text-lg text-gray-400">
              Acompanhe conteúdos, reflexões e atualizações
              sobre a primeira turma.
            </p>

            <p className="mt-2 animate-pulse text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
              Clique em uma rede para acessar
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {/* INSTAGRAM */}
            <a
              href="https://instagram.com/pedrosd_oficial"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[30px] border border-[#D4AF37]/20 bg-[#111111]/80 p-8 transition hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-[0_0_40px_rgba(212,175,55,0.25)]"
            >

              <div className="mb-6 flex items-center justify-between">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10 transition group-hover:scale-110">

                  <InstagramIcon />

                </div>

                <span className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                  Instagram
                </span>

              </div>

              <h4 className="mb-3 text-2xl font-bold text-white">
                @pedrosd_oficial
              </h4>

              <p className="text-gray-400">
                Conteúdo diário sobre mentalidade,
                disciplina e transformação.
              </p>

            </a>

            {/* TIKTOK */}
            <a
              href="https://tiktok.com/@pedrosd_oficial"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[30px] border border-[#D4AF37]/20 bg-[#111111]/80 p-8 transition hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-[0_0_40px_rgba(212,175,55,0.25)]"
            >

              <div className="mb-6 flex items-center justify-between">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10 transition group-hover:scale-110">

                  <TikTokIcon />

                </div>

                <span className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                  TikTok
                </span>

              </div>

              <h4 className="mb-3 text-2xl font-bold text-white">
                @pedrosd_oficial
              </h4>

              <p className="text-gray-400">
                Vídeos curtos, reflexões fortes
                e conteúdos impactantes.
              </p>

            </a>

            {/* FACEBOOK */}
            <a
              href="https://facebook.com/pedrodossantosrosa"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[30px] border border-[#D4AF37]/20 bg-[#111111]/80 p-8 transition hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-[0_0_40px_rgba(212,175,55,0.25)]"
            >

              <div className="mb-6 flex items-center justify-between">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10 transition group-hover:scale-110">

                  <GlobeIcon />

                </div>

                <span className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                  Facebook
                </span>

              </div>

              <h4 className="mb-3 text-2xl font-bold text-white">
                Pedro dos Santos Rosa
              </h4>

              <p className="text-gray-400">
                Atualizações, conteúdos e conexão
                com a comunidade.
              </p>

            </a>

          </div>

          <div className="mt-16 border-t border-white/10 pt-8 text-center">

            <p className="text-sm text-gray-500">
              © 2026 • VOCÊ NÃO ESTÁ PREPARADO PARA O SUCESSO
            </p>

          </div>

        </div>

      </footer>

    </div>
  )
}