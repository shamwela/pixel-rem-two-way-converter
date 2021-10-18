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
        <title>Pixel-rem Two-Way Converter</title>
        <meta
          name='description'
          content='Convert from pixel to rem or rem to pixel.'
        />
      </Head>

      <main className='max-w-3xl min-h-screen m-auto p-4 flex flex-col gap-y-4'>
        <h1>Pixel-rem Two-Way Converter</h1>

        <section className='flex flex-col gap-y-1'>
          <label htmlFor='pixel'>Pixel</label>
          <input
            value={pixel}
            onChange={(event) => handlePixel(event.currentTarget.value)}
            id='pixel'
            type='number'
            min='0'
          />
        </section>

        <section className='flex flex-col gap-y-1'>
          <label htmlFor='rem'>rem</label>
          <input
            value={rem}
            onChange={(event) => handleRem(event.currentTarget.value)}
            id='rem'
            type='number'
            min='0'
          />
        </section>

        <p>This is calculated based on a root font size of 16 pixels.</p>
      </main>
    </>
  )
}

export default Home
