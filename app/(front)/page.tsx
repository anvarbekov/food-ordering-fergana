/* eslint-disable @next/next/no-img-element */
import ProductItem from '@/components/products/ProductItem'
import VideoSlider from '@/components/videoslider/VideoSlider'
// import data from '@/lib/data'
import productService from '@/lib/services/productService'
import { convertDocToObj } from '@/lib/utils'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || 'Food Ordering',
  description:
    process.env.NEXT_PUBLIC_APP_DESC ||
    'Nextjs, Server components, Next auth, daisyui, zustand',
}

export default async function Home() {
  const featuredProducts = await productService.getFeatured()
  const latestProducts = await productService.getLatest()
  return (
    <>
        <div className='video__slider-box mt-5 relative z-10 rounded'>
          <VideoSlider />
          <div className='slider__info'>
            <div className='text__animtion-box'>
              <div className='text__animation'>
                <div className='anim__text'>Assalomu alaykum!</div>
                <div className='anim__text'>Tez va sifatli</div>
                <div className='anim__text'>Ovqatlar yetkazib beramiz!</div>
              </div>
            </div>
          </div>
        </div>
      <h2 className="text-2xl py-2">Eng songgi mahsulotlar</h2>
      <div className="flex__container mb-5">
        {latestProducts.map((product) => (
          <ProductItem key={product.slug} product={convertDocToObj(product)} />
        ))}
      </div>
    </>
  )
}
