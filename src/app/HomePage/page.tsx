import { LuShoppingCart } from "react-icons/lu";
import React from 'react';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="w-[1920px] h-auto gap-0 rounded-[0px_0px_48px_48px] bg-white">

      {/* Hero Section */}
      <section className="container mx-auto flex flex-col lg:flex-row items-center mt-8 gap-8 bg-[#F0F2F3]">
        <div className="flex-1 text-center lg:text-left">
          <h2 className="w-[557px] h-[198px] font-Inter text-[60px] font-bold leading-[66px] text-left">
            Best Furniture Collection For Your Interior.
          </h2>
          <p className="text-gray-600 mt-4">
            Explore our exclusive range of furniture crafted for comfort and style.
          </p>
          <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition">
            Shop Now
          </button>
        </div>
        <div className="flex">
          <div className="w-[434px] h-[584px]">
            <Image
              src="/assets/Product Image.png"
              alt="Furniture"
              width={434}
              height={584}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="container mx-auto mt-16">
        <h3 className="text-center text-xl font-semibold text-gray-700 mb-8">Our Trusted Brands</h3>
        <div className="flex justify-between items-center flex-wrap gap-4">
          {["zapier", "pipedrive", "cib_bank", "burnt_toast", "moz"].map((brand) => (
            <div
              key={brand}
              className="flex items-center justify-center w-32 h-16 bg-gray-200 rounded-lg shadow-sm hover:shadow-md"
            >
              <Image
                src={`/${brand}.png`}
                alt={brand}
                className="max-h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto mt-16 bg-[white]">
        <h3 className="text-center text-xl font-semibold text-gray-700 mb-8">Featured Products</h3>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Product 1 */}
          <div className="w-[312px] h-[377px] relative">
            <div className="rounded-[6px]">
              <Image
                src="/assets/image5.png"
                alt="loading"
                width={312}
                height={312}
              />
              <div className="absolute w-[49px] h-[26px] top-[20px] left-[20px] pt-[6px] pr-[10px] pb-[6px] pl-[10px] gap-[10px] rounded-tl-[4px] bg-[#01AD5A]">
                <p className="w-[29px] h-[29px] font-Inter font-medium text-[13px] leading-[14.3px] text-[#FFFFFF] mb-[500px]">
                  New
                </p>
              </div>
            </div>
            <div className="w-[256px] h-[51px] mt-[10px]">
              <p className="font-Inter font-[16px] leading-[20.8px] text-[#007580]">Library Stool Chair</p>
              <p className="font-Inter text-[16px] leading-[20.8px]">$20</p>
            </div>
            <div className="absolute w-[44px] h-[44px] bg-[#029FAE] text-[#FAFAFA] rounded-[6px] top-[250px] right-[-20px] mt-[70px] mr-[20px]">
              <LuShoppingCart className="w-[22px] h-[22px] mt-[10px] ml-[10px]" />
            </div>
          </div>

          {/* Product 2 */}
          <div className="w-[312px] h-[377px] relative">
            <div className="rounded-[6px]">
              <Image
                src="/assets/image6.png"
                alt="loading"
                width={312}
                height={312}
              />
              <div className="absolute w-[54px] h-[29px] top-[20px] left-[20px] pt-[2px] pr-[10px] pb-[6px] pl-[10px] gap-[10px] rounded-tl-[4px] bg-[#F5813F]">
                <p className="w-[34px] h-[14px] font-Inter font-medium text-[13px] leading-[14.3px] text-[#FFFFFF] mb-[500px]">
                  Sales
                </p>
              </div>
            </div>
            <div className="w-[256px] h-[51px] mt-[10px]">
              <p className="font-Inter font-[16px] leading-[20.8px] text-[#007580]">Library Stool Chair</p>
              <p className="font-Inter text-[16px] leading-[20.8px]">$20</p>
            </div>
            <div className="absolute w-[44px] h-[44px] bg-[#F0F2F3] text-black rounded-[6px] top-[250px] right-[-20px] mt-[70px] mr-[20px]">
              <LuShoppingCart className="w-[22px] h-[22px] mt-[10px] ml-[10px]" />
            </div>
          </div>

          {/* Product 3 */}
          <div className="w-[312px] h-[377px] relative">
            <div className="rounded-[6px]">
              <Image
                src="/assets/image7.png"
                alt="loading"
                width={312}
                height={312}
              />
            </div>
            <div className="w-[256px] h-[51px] mt-[10px]">
              <p className="font-Inter font-[16px] leading-[20.8px] text-[#007580]">Library Stool Chair</p>
              <p className="font-Inter text-[16px] leading-[20.8px]">$20</p>
            </div>
            <div className="absolute w-[44px] h-[44px] bg-[#F0F2F3] text-black rounded-[6px] top-[250px] right-[-20px] mt-[70px] mr-[20px]">
              <LuShoppingCart className="w-[22px] h-[22px] mt-[10px] ml-[10px]" />
            </div>
          </div>

          {/* Product 4 */}
          <div className="w-[312px] h-[377px] relative">
            <div className="rounded-[6px]">
              <Image
                src="/assets/image8.png"
                alt="loading"
                width={312}
                height={312}
              />
            </div>
            <div className="w-[256px] h-[51px] mt-[10px]">
              <p className="font-Inter font-[16px] leading-[20.8px] text-[#007580]">Library Stool Chair</p>
              <p className="font-Inter text-[16px] leading-[20.8px]">$20</p>
            </div>
            <div className="absolute w-[44px] h-[44px] bg-[#F0F2F3] text-black rounded-[6px] top-[250px] right-[-20px] mt-[70px] mr-[20px]">
              <LuShoppingCart className="w-[22px] h-[22px] mt-[10px] ml-[10px]" />
            </div>
          </div>
        </div>
      </section>
      {/*Top catogories */}
      <div className="flex flex-wrap justify-center gap-8 pt-[30px]">
          {/* Product 1 */}
          <div className="w-[424px] h-[424px] relative">
            <div className="rounded-[6px]">
              <Image
                src="/assets/image5.png"
                alt="loading"
                width={424}
                height={424}
              />
              <div className="absolute w-[49px] h-[26px] top-[20px] left-[20px] pt-[6px] pr-[10px] pb-[6px] pl-[10px] gap-[10px] rounded-tl-[4px] bg-[#01AD5A]">
                <p className="w-[29px] h-[29px] font-Inter font-medium text-[13px] leading-[14.3px] text-[#FFFFFF] mb-[500px]">
                  New
                </p>
              </div>
            </div>
            <div className="w-[256px] h-[51px] mt-[10px]">
              <p className="font-Inter font-[16px] leading-[20.8px] text-[#007580]">Library Stool Chair</p>
              <p className="font-Inter text-[16px] leading-[20.8px]">$20</p>
            </div>
            <div className="absolute w-[44px] h-[44px] bg-[#029FAE] text-[#FAFAFA] rounded-[6px] top-[250px] right-[-20px] mt-[70px] mr-[20px]">
              <LuShoppingCart className="w-[22px] h-[22px] mt-[10px] ml-[10px]" />
            </div>
          </div>

          {/* Product 2 */}
          <div className="w-[424px] h-[424px] relative">
            <div className="rounded-[6px]">
              <Image
                src="/assets/image6.png"
                alt="loading"
                width={424}
                height={424}
              />
              <div className="absolute w-[54px] h-[29px] top-[20px] left-[20px] pt-[2px] pr-[10px] pb-[6px] pl-[10px] gap-[10px] rounded-tl-[4px] bg-[#F5813F]">
                <p className="w-[34px] h-[14px] font-Inter font-medium text-[13px] leading-[14.3px] text-[#FFFFFF] mb-[500px]">
                  Sales
                </p>
              </div>
            </div>
            <div className="w-[256px] h-[51px] mt-[10px]">
              <p className="font-Inter font-[16px] leading-[20.8px] text-[#007580]">Library Stool Chair</p>
              <p className="font-Inter text-[16px] leading-[20.8px]">$20</p>
            </div>
            <div className="absolute w-[44px] h-[44px] bg-[#F0F2F3] text-black rounded-[6px] top-[250px] right-[-20px] mt-[70px] mr-[20px]">
              <LuShoppingCart className="w-[22px] h-[22px] mt-[10px] ml-[10px]" />
            </div>
          </div>

          {/* Product 3 */}
          <div className="w-[424px] h-[424px] relative">
            <div className="rounded-[6px]">
              <Image
                src="/assets/image7.png"
                alt="loading"
                width={424}
                height={424}
              />
            </div>
            <div className="w-[256px] h-[51px] mt-[10px]">
              <p className="font-Inter font-[16px] leading-[20.8px] text-[#007580]">Library Stool Chair</p>
              <p className="font-Inter text-[16px] leading-[20.8px]">$20</p>
            </div>
            <div className="absolute w-[44px] h-[44px] bg-[#F0F2F3] text-black rounded-[6px] top-[250px] right-[-20px] mt-[70px] mr-[20px]">
              <LuShoppingCart className="w-[22px] h-[22px] mt-[10px] ml-[10px]" />
            </div>
          </div>
          </div>
          {/**2nd div */}
          <div className="w-full h-auto flex flex-wrap justify-center items-center gap-8 mt-16">
  {/* Left Section with Larger Image */}
  <div className="w-[648px] h-[648px]">
    <Image
      src="/assets/Image3.png"
      alt="Main Feature Image"
      width={648}
      height={648}
      className="w-full h-auto rounded-lg"
    />
  </div>

  <div className="w-full h-auto flex justify-center items-center gap-8 mt-16">
  {/* Large Image on the Left */}
  <div className="w-[312px] h-[312px] flex">
    <Image
      src="/assets/Image3.png"
      alt="Main Feature Image"
      width={312}
      height={312}
      className="w-full h-auto rounded-lg mb-[1000px]"
    />
    <Image
      src="/assets/Image3.png"
      alt="Main Feature Image"
      width={312}
      height={312}
      className="w-full h-auto rounded-lg"
    />
    <Image
      src="/assets/Image3.png"
      alt="Main Feature Image"
      width={312}
      height={312}
      className="w-full h-auto rounded-lg"
    />
    <Image
      src="/assets/Image3.png"
      alt="Main Feature Image"
      width={312}
      height={312}
      className="w-full h-auto rounded-lg"
    />
  </div>

 
</div>
</div>


        {/* Products Section */}
        <div className="flex justify-between pl-[300px] pr-[300px] gap-[20px] mt-[40px]">
          {/* Product 1 */}
          <div className="w-[312px] h-[377px] relative">
            
            <div className="rounded-[6px]">
              <Image
                src="/assets/image.png"
                alt="loading"
                width={312}
                height={312}
              />
              <div className="absolute w-[49px] h-[26px] top-[20px] left-[20px] pt-[6px] pr-[10px] pb-[6px] pl-[10px] gap-[10px] rounded-tl-[4px] bg-[#01AD5A] ">
                <p className="w-[29px] h-[29px] font-Inter font-medium text-[13px] leading-[14.3px] text-[#FFFFFF] mb-[500px]">
                    New
                </p>
            </div>
            </div>
            
            <div className="w-[256px] h-[51px] mt-[10px]">
              <p className="font-Inter font-[16px] leading-[20.8px] text-[#007580]">
                Library Stool Chair
              </p>
              
              <p className="font-Inter text-[16px] leading-[20.8px]">$20</p>
            </div>
            
            <div className="absolute w-[44px] h-[44px] bg-[#029FAE] text-[#FAFAFA] rounded-[6px] top-[250px] right-[-20px] mt-[70px] mr-[20px]">
              <LuShoppingCart className="w-[22px] h-[22px] mt-[10px] ml-[10px]" />
            </div>
          </div>
          

          {/* Product 2 */}
          <div className="w-[312px] h-[377px] relative">
            <div className=" w-[312px] h-[312px] [rounded-[6px]">
              <Image
                src="/assets/image10.png"
                alt="loading"
                width={312}
                height={312}
              />
              <div className="absolute w-[54px] h-[29px] top-[20px] left-[20px] pt-[2px] pr-[10px] pb-[6px] pl-[10px] gap-[10px] rounded-tl-[4px] bg-[#F5813F] ">
                <p className="w-[34px] h-[14px] font-Inter font-medium text-[13px] leading-[14.3px] text-[#FFFFFF] mb-[500px]">
                    sales
                </p>
            </div>
            </div>
            <div className="w-[256px] h-[51px] mt-[10px]">
              <p className="font-Inter font-[16px] leading-[20.8px] text-[#007580]">
                Library Stool Chair
              </p>
              <p className="font-Inter text-[16px] leading-[20.8px]">$20</p>
            </div>
            <div className="absolute w-[44px] h-[44px] bg-[#F0F2F3] text-black rounded-[6px] top-[250px] right-[-20px] mt-[70px] mr-[20px]">
              <LuShoppingCart className="w-[22px] h-[22px] mt-[10px] ml-[10px]" />
            </div>
          </div>

          {/* Product 3 */}
          <div className="w-[312px] h-[377px] relative">
            <div className="rounded-[6px]">
              <Image
                src="/assets/image3.png"
                alt="loading"
                width={312}
                height={312}
              />
            </div>
            <div className="w-[256px] h-[51px] mt-[10px]">
              <p className="font-Inter font-[16px] leading-[20.8px] text-[#007580]">
                Library Stool Chair
              </p>
              <p className="font-Inter text-[16px] leading-[20.8px]">$20</p>
            </div>
            <div className="absolute w-[44px] h-[44px] bg-[#F0F2F3] text-black rounded-[6px] top-[250px] right-[-20px] mt-[70px] mr-[20px]">
              <LuShoppingCart className="w-[22px] h-[22px] mt-[10px] ml-[10px]" />
            </div>
          </div>

          {/* Product 4 */}
          <div className="w-[312px] h-[377px] relative">
            <div className="rounded-[6px]">
              <Image
                src="/assets/image4.png"
                alt="loading"
                width={312}
                height={312}
              />
            </div>
            <div className="w-[256px] h-[51px] mt-[10px]">
              <p className="font-Inter font-[16px] leading-[20.8px] text-[#007580]">
                Library Stool Chair
              </p>
              <p className="font-Inter text-[16px] leading-[20.8px]">$20</p>
            </div>
            <div className="absolute w-[44px] h-[44px] bg-[#F0F2F3] text-black rounded-[6px] top-[250px] right-[-20px] mt-[70px] mr-[20px]">
              <LuShoppingCart className="w-[22px] h-[22px] mt-[10px] ml-[10px]" />
            </div>
          </div>
        </div>
        {/* 2nd div */}
        
        {/* Products Section */}
        <div className="flex justify-between pl-[300px] pr-[300px] gap-[20px] mt-[40px] bg-white">
          {/* Product 1 */}
          <div className="w-[312px] h-[377px] relative">
            <div className="rounded-[6px]">
              <Image
                src="/assets/image5.png"
                alt="loading"
                width={312}
                height={312}
              />
              <div className="absolute w-[49px] h-[26px] top-[20px] left-[20px] pt-[6px] pr-[10px] pb-[6px] pl-[10px] gap-[10px] rounded-tl-[4px] bg-[#01AD5A] ">
                <p className="w-[29px] h-[29px] font-Inter font-medium text-[13px] leading-[14.3px] text-[#FFFFFF] mb-[500px]">
                    New
                </p>
            </div>
            </div>
            <div className="w-[256px] h-[51px] mt-[10px]">
              <p className="font-Inter font-[16px] leading-[20.8px] text-[#007580]">
                Library Stool Chair
              </p>
              <p className="font-Inter text-[16px] leading-[20.8px]">$20</p>
            </div>
            <div className="absolute w-[44px] h-[44px] bg-[#029FAE] text-[#FAFAFA] rounded-[6px] top-[250px] right-[-20px] mt-[70px] mr-[20px]">
              <LuShoppingCart className="w-[22px] h-[22px] mt-[10px] ml-[10px]" />
            </div>
          </div>

          {/* Product 2 */}
          <div className="w-[312px] h-[377px] relative">
            <div className="rounded-[6px]">
              <Image
                src="/assets/image6.png"
                alt="loading"
                width={312}
                height={312}
              />
               <div className="absolute w-[54px] h-[29px] top-[20px] left-[20px] pt-[2px] pr-[10px] pb-[6px] pl-[10px] gap-[10px] rounded-tl-[4px] bg-[#F5813F] ">
                <p className="w-[34px] h-[14px] font-Inter font-medium text-[13px] leading-[14.3px] text-[#FFFFFF] mb-[500px]">
                    sales
                </p>
            </div>
            </div>
            <div className="w-[256px] h-[51px] mt-[10px]">
              <p className="font-Inter font-[16px] leading-[20.8px] text-[#007580]">
                Library Stool Chair
              </p>
              <p className="font-Inter text-[16px] leading-[20.8px]">$20</p>
            </div>
            <div className="absolute w-[44px] h-[44px] bg-[#F0F2F3] text-black rounded-[6px] top-[250px] right-[-20px] mt-[70px] mr-[20px]">
              <LuShoppingCart className="w-[22px] h-[22px] mt-[10px] ml-[10px]" />
            </div>
          </div>

          {/* Product 3 */}
          <div className="w-[312px] h-[377px] relative">
            <div className="rounded-[6px]">
              <Image
                src="/assets/image7.png"
                alt="loading"
                width={312}
                height={312}
              />
            </div>
            <div className="w-[256px] h-[51px] mt-[10px]">
              <p className="font-Inter font-[16px] leading-[20.8px] text-[#007580]">
                Library Stool Chair
              </p>
              <p className="font-Inter text-[16px] leading-[20.8px]">$20</p>
            </div>
            <div className="absolute w-[44px] h-[44px] bg-[#F0F2F3] text-black rounded-[6px] top-[250px] right-[-20px] mt-[70px] mr-[20px]">
              <LuShoppingCart className="w-[22px] h-[22px] mt-[10px] ml-[10px]" />
            </div>
          </div>

          {/* Product 4 */}
          <div className="w-[312px] h-[377px] relative">
            <div className="rounded-[6px]">
              <Image
                src="/assets/image8.png"
                alt="loading"
                width={312}
                height={312}
              />
            </div>
            <div className="w-[256px] h-[51px] mt-[10px]">
              <p className="font-Inter font-[16px] leading-[20.8px] text-[#007580]">
                Library Stool Chair
              </p>
              <p className="font-Inter text-[16px] leading-[20.8px]">$20</p>
            </div>
            <div className="absolute w-[44px] h-[44px] bg-[#F0F2F3] text-black rounded-[6px] top-[250px] right-[-20px] mt-[70px] mr-[20px]">
              <LuShoppingCart className="w-[22px] h-[22px] mt-[10px] ml-[10px]" />
            </div>
          </div>
        </div>

     </div>    

  );
};

export default Home;
