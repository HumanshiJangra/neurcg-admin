"use client"
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { EditImgIcon } from '@/utils/svgIcons';
import previmg2 from "@/assets/images/previmg.png"
import CreditScore from '@/components/CreditScore';
import AvatarsCreated from '@/components/AvatarsCreated';
import Referral from '@/components/Referral';

const CreditScores =[
  {
    id: 1,
    text: "Animation Credit Left",
    value: 148,
  },
  {
      id: 2,
      text: "Audio Upload Credit Left",
      value: 48,
    },
    {
      id: 3,
      text: "Avatar Creation Credit Left",
      value: 18,
    },
  ] 

const ProfilePage = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const { id } = useParams(); 

 
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setImagePreview(result);
        // setFormData((prevData) => ({
        //   ...prevData,
        //   image: result,
        // }));
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const triggerFileInputClick = () => {
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  }

  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-4 hidden">Customer Profile: {id}</h1>
     
      {/* Add more profile information here */}
      <div className="bg-white rounded-[8px] p-5 md:px-[52px] md:py-[45px]"> 
          <div className="flex md:flex-row flex-col gap-y-4 justify-between md:items-center mb-10">
          <div className="custom relative min-w-[177px] h-[177px] ">
          <input
            className="absolute top-0 left-0 h-full w-full opacity-0 p-0 cursor-pointer"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {imagePreview ? (
            <div className="relative h-full">
              <Image
                src={imagePreview}
                alt="Preview"
                width={177}
                height={177}
                className="rounded-full h-full object-cover"
              />
              <button
                type="button"
                onClick={triggerFileInputClick}
                className="absolute bottom-[16px] right-1"
              >
                <EditImgIcon />
              </button>
            </div>
          ) : (
            <div className="grid place-items-center h-full w-full">
              <div>
                <Image
                  src={previmg2}
                  alt="upload"
                  width={177}
                  height={177}
                  className="rounded-full"
                />
                <p className="absolute bottom-[16px] right-1 pointer-events-none">
                  <EditImgIcon />
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="grid gap-[6px] w-full">
          {CreditScores.map((item)=>(
            <CreditScore 
            key={item.id}
            text={item.text}
            value={item.value}
            />
          ))}
        </div>
          </div>
          <div className='mt-[30px] '>
            <h1 className='text-[28px] text-[#3A2C23] font-semibold mb-[15px]'>Marisa Love</h1>
            <div className='main-wrap flex justify-between items-center mb-3'>
            <p className='title'>Email Address</p>
            <p className='values'>love.marisa@mail.com</p>
            </div>
            <div className='main-wrap flex justify-between items-center mb-3'>
            <p className='title'>Date Of Birth</p>
            <p className='values'>Aug 27, 2004</p>
            </div>
            <div className='main-wrap flex justify-between items-center mb-3'>
            <p className='title'>Phone Number</p>
            <p className='values'>+1 545 458 5236</p>
            </div>
            <div className='main-wrap flex justify-between items-center mb-3'>
            <p className='title'>Home Address</p>
            <p className='values'>1024, lorents road</p>
            </div>
            <div className='main-wrap flex justify-between items-center '>
            <p className='title'>City And State</p>
            <p className='values'>Arizona, US</p>
            </div>
          </div>
    </div>
    <div className='grid gap-5 md:grid-cols-2 my-[50px] '>
    <AvatarsCreated />
    <Referral />
    </div>
    </div>
  );
};

export default ProfilePage;
