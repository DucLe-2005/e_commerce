import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const  About = () => {
  return (
    <div> 
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Forever is a fashion destination for those who value style, quality, and sophistication. We offer a curated selection of clothing and accessories designed for modern individuals who appreciate elegance and durability. Whether you're looking for timeless staples or statement pieces, our collections bring together the latest trends with premium craftsmanship.</p>
          <p>At Forever, we believe fashion is an investment in self-expression. Our pieces are crafted with care, ensuring both style and longevity. With a seamless shopping experience, fast shipping, and dedicated customer support, we make it easy for you to find outfits that elevate your wardrobe and confidence.</p>
          <b className='text-gray-900'>Our Mission</b>
          <p>Forever is committed to providing high-quality, stylish fashion that empowers confidence and self-expression. We focus on craftsmanship, durability, and timeless design, ensuring every piece enhances your wardrobe for years to come</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Forever ensures premium quality with durable materials and strict quality checks, so you can shop confidently, knowing your fashion investments will last.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Forever offers a seamless shopping experience with an easy-to-navigate website, fast shipping, and responsive customer support, making fashion effortlessly accessible.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our dedicated support team is always ready to assist you, ensuring a smooth and satisfying shopping experience. Your satisfaction is our priority.</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About