import { AuthButtonServer } from '@/components/AuthButton-Server'

export default function Login () {
  return (
    <main className='grid place-content-center min-h-screen'>
      <h1 className='text-2xl font-bold text-white pb-4'>Inicia sesión en Xwitter</h1>
      <AuthButtonServer />
    </main>
  )
}
