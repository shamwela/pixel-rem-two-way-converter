import { useState } from 'react'
import Head from 'next/head'

const Home = () => {
  const [pixel, setPixel] = useState(10)
  const [rem, setRem] = useState(0.625)

  const handlePixel = (pixel: string) => {
    setPixel(Number(pixel))
    setRem(Number(pixel) / 16)
  }

  const handleRem = (rem: string) => {
    setRem(Number(rem))
    setPixel(Number(rem) * 16)
  }

  return (
    <>
      <Head>
        <title>Pixel-rem Two-way Converter</title>
        <meta
          name='description'
          content='Convert from pixel to rem or rem to pixel.'
        />
      </Head>

      <main className='flex min-h-screen'>
        <div className='flex flex-col w-full max-w-3xl p-4 m-auto gap-y-4'>
          <section className='flex flex-col gap-y-1'>
            <label htmlFor='pixel' className='ml-5'>
              Pixel
            </label>
            <input
              value={pixel}
              onChange={(event) => handlePixel(event.currentTarget.value)}
              id='pixel'
              type='number'
              min='0'
            />
          </section>

          <section className='flex flex-col gap-y-1'>
            <label htmlFor='rem' className='ml-5'>
              rem
            </label>
            <input
              value={rem}
              onChange={(event) => handleRem(event.currentTarget.value)}
              id='rem'
              type='number'
              min='0'
            />
          </section>

          <p>
            This is calculated using 16px because most browsers' default font
            size is 16px.
          </p>
        </div>
      </main>
    </>
  )
}

export default Home
