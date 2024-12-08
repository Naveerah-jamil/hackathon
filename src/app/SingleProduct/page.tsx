import Image from "next/image";

export default function SingleProduct() {
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between w-full h-auto">
                {/* Product Image */}
                <div className="w-full md:w-[675px] h-auto md:h-[607px] rounded-[10px] mb-8 md:mb-0 mt-[50px] md:ml-[290px]">
                    <Image
                        src="/assets/image1.png"
                        alt="Product Image"
                        width={675}
                        height={607}
                    />
                </div>

                {/* Product Info */}
                <div className="w-full md:w-[675px] pl-[50px]">
                    <div className="w-full md:w-[541px] mb-4 md:mb-0">
                        {/* Hiding "Library Stool Chair" on sm screens */}
                        <p className="font-Inter font-[700] text-[36px] md:text-[60px] leading-[44px] md:leading-[66px] text-[#272343] pt-[50px] ">
                            Library Stool Chair
                        </p>
                    </div>

                    <div className="mb-4 md:mb-8">
                        <button className="w-full md:w-[144px] h-[44px] bg-[#029FAE] rounded-[100px] text-white text-[20px] font-Inter font-[600]">
                            $20.00 USD
                        </button>
                    </div>

                    <hr className="border-t-2 border-[#000000] w-full mb-4" />

                    {/* Product Description */}
                    <div className="w-full md:w-[543px] mb-4">
                        <p className="font-[400] font-Inter text-[18px] md:text-[22px] leading-[33px] text-[#272343] opacity-70">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </p>
                    </div>

                    {/* Add to Cart Button */}
                    <div className="w-full md:w-[212px] rounded-[4px] bg-[#029FAE] p-4 mb-8">
                        <button className="w-full text-[20px] font-[600] font-Inter text-white">
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>

            {/* Featured Products Section */}
            <div className="w-full md:w-[1447px] border-[#000000] py-8 md:ml-[290px]">
                <div className="flex justify-between items-center mb-8 px-4 md:px-0">
                    <div className="font-Inter font-[700] text-[24px] md:text-[28px] text-[#000000]">
                        Featured Products
                    </div>
                    <div className="text-[#000000] cursor-pointer">
                        View All
                    </div>
                </div>

                {/* Product Cards */}
                <div className="flex flex-wrap justify-between gap-4 px-4 md:px-0">
                    {/* Product Cards - Adjust layout for smaller screens */}
                    {['', '', '', '', ''].map((_, index) => (
                        <div key={index} className="w-full md:w-[270px] h-auto rounded-[10px] mb-8">
                            <div className="w-full h-auto">
                                <Image 
                                    src="/assets/Image2.png"
                                    alt="Featured Product"
                                    width={270}
                                    height={306}
                                />
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <p className="font-Inter font-[400] text-[16px] text-[#272343]">
                                    Library Stool Chair
                                </p>
                                <p className="font-Inter font-[700] text-[14px] text-[#000000]">
                                    $99
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
