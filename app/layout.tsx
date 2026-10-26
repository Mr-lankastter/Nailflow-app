import './globals.css'

export const metadata = {
  title: 'NailFlow',
  description: 'Agenda e gestão para Nail Designers',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR"><body>{children}</body></html>
}
