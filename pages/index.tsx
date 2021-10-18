import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pixel-rem Two-Way Converter</title>
        <meta
          name='description'
          content='Convert from pixel to rem or rem to pixel.'
        />
      </Head>

      <main>
        <h1>Pixel-rem Two-Way Converter</h1>

        <label htmlFor='pixel'>Pixel</label>
        <input id='pixel' type='number' />

        <label htmlFor='rem'>rem</label>
        <input id='rem' type='number' />
      </main>
    </>
  )
}
