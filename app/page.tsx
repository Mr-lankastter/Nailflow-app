'use client'

import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function signIn(event: React.FormEvent) {
    event.preventDefault()
    setLoading(true)
    setMessage('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setLoading(false)
    setMessage(error ? error.message : 'Login realizado. A dashboard será conectada na próxima etapa.')
  }

  return (
    <main className="page">
      <section className="hero">
        <div className="mark">✦</div>
        <p className="eyebrow">NAILFLOW</p>
        <h1>Tecnologia que acompanha o ritmo das Nails.</h1>
        <p className="intro">Entre na sua área de gestão para organizar reservas, clientes e horários.</p>
      </section>
      <form className="card" onSubmit={signIn}>
        <h2>Entrar na plataforma</h2>
        <label>E-mail<input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="voce@email.com" /></label>
        <label>Senha<input type="password" required value={password} onChange={e => setPassword(e.target.value)} placeholder="Sua senha" /></label>
        <button disabled={loading}>{loading ? 'Entrando...' : 'Entrar'}</button>
        {message && <p className="message">{message}</p>}
      </form>
      <p className="footer">Ambiente inicial de testes · NailFlow</p>
    </main>
  )
}
