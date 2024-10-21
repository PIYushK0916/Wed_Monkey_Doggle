import React from 'react'
import img1 from "../Homepage/image 11.png"
import img2 from "../Homepage/vector.png"
import img3 from "../Homepage/Group.png"
import img4 from "../Homepage/vector2.png"
import img5 from "../Homepage/vector3.png"
import img6 from "../Homepage/Line 58.png"
import img7 from "../Homepage/vector1.png"
import img8 from "./Imgs.png"


const VerifyForBuisness = () => {
  return (
    <div><div className="w-full object-cover font-montserrat  h-screen">
    <div className='navbar flex flex-col gap-5 rounded-b-full items-center w-full h-[7.1vw] bg-white bg-opacity-80'>
        <div className="upper relative pt-[1.5vw] w-full px-[5vw] flex justify-center items-center">
            <img className='w-[12vw] scale-[1.44]' src={img1} alt="" srcset="" />
            <div className="icon absolute right-[6vw] flex justify-center items-center gap-[2vw]">
                <button>
                    <img className='w-[1vw]' src={img2} alt="" srcset="" />
                </button>
                <img className='w-[.2vw]' src={img6} alt="" srcset="" />
                <button>
                    <img className='w-[1vw]' src={img3} alt="" srcset="" />
                </button>
                <button>
                    <img className='w-[1vw]' src={img4} alt="" srcset="" />
                </button>
                <button>
                    <img className='w-[1vw]' src={img5} alt="" srcset="" />
                </button>
                <button>
                    <img className='w-[1vw]' src={img7} alt="" srcset="" />
                </button>
            </div>
        </div>
        <div className="lower uppercase flex gap-[3vw] text-[#A15233] font-semibold text-base font-montserrat">
            <a href="">Home</a>
            <a href="">TEMpLATES</a>
            <a href="">how it works</a>
            <a href="">JOIN AS A VENDOR</a>
            <a href="">Contact us</a>
        </div>
    </div>
    <div className="w-full h-[42.1vw]" >
        <div className='w-full relative h-full bg-cover bg-center' style={{ backgroundImage: `url('./y2.jpg')` }}>
            <div className="absolute w-full h-full px-[4vw] py-[2vw]">
                <div className='w-full h-full rounded-3xl p-[4vw] gap-10 bg-[#FFFEFE] flex justify-center items-center'>
                    <div className="left w-[50%] h-full pl-[4vw]">
                        <h1 className='text-[#B16046] tracking-wider font-normal text-2xl'>The Ultimate Wedding Card Designer</h1>
                        <h1 className='text-[#343A40] tracking-tight mt-[2vw] text-5xl'>Create Your Dream <br /> Wedding Card in <br /> Minutes.</h1>
                        <div className='w-full h-[20vw] relative top-0 left-0'>
                            <img className='scale-[.7] absolute -mt-2' src={img8} alt="" srcset="" />
                        </div>
                    </div>
                    <div className="left  w-[50%] h-full bg-[#FFFAF2] rounded-3xl py-8 px-16">
                        <h1 className='text-[#A15233] text-2xl font-medium '>Verify your account</h1>
                        <h1 className='text-[#343A40] font-medium mt-3'>One time password has been sent to your email/phone number</h1>
                        <div className='w-full py-5 h-[25vw] flex flex-col justify-start items-start'>
                            <form className="py-6 rounded w-full ">
                                {/* Name Field */}
                                <div className="mb-4 gap-[2vw] flex">
                                    <input
                                        type="text"
                                        id="OTP"
                                        name="OTP"
                                        placeholder="Enter OTP"
                                        className="w-[20vw] h-[2vw] text-sm border border-gray-300 rounded p-2"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-[10vw] mt-5 bg-[#B16046] text-white rounded-full p-2 hover:bg-[#A15233] transition duration-200"
                                >
                                    Create account
                                </button>
                            </form>
                            <div className='flex text-sm gap-2'>
                            <h1 className='text-sm'>Already a member?</h1>
                            <button className='text-[#A15233]'>SIGNIN HERE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</div></div>
  )
}

export default VerifyForBuisness