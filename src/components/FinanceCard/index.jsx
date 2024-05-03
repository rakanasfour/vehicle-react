import React from "react";

import { Button, Img, Text } from "components";


const FinanceCard = (props) => {
  return (
    <>
      <div className={props.className}>
  
        <div className="bg-gray-51 border border-red-101 border-solid flex flex-col items-start justify-start px-5 py-[30px] rounded-bl-[10px] rounded-br-[10px] w-full">
          <div className="flex flex-col gap-[27px] items-start justify-start w-full">
            <div className="flex flex-row gap-3 items-center justify-start w-full">
              <Img className="h-6 w-6" src="images/img_eye.svg" alt="eye" />
              <Text
                className="flex-1 text-base text-gray-900 w-auto"
                size="txtManropeSemiBold16"
              >
                {props?.id}
              </Text>
            </div>
            
  


                <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                <h1 className=" text-base text-blue-700">Brand</h1>

                  <Text
                    className="flex-1 text-base text-gray-700 w-auto"
                    size="txtManropeSemiBold16Gray700"
                  >
                    {props?.brand}
                  </Text>
                </div>

                <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                <h1 className=" text-base text-blue-700">Model</h1>

                  <Text
                    className="flex-1 text-base text-gray-700 w-auto"
                    size="txtManropeSemiBold16Gray700"
                  >
                    {props?.model}
                  </Text>
                </div>

                <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                <h1 className=" text-base text-blue-700">Year</h1>

                  <Text
                    className="flex-1 text-base text-gray-700 w-auto"
                    size="txtManropeSemiBold16Gray700"
                  >
                    {props?.year}
                  </Text>
                </div>

                <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                <h1 className=" text-base text-blue-700">Price</h1>

                  <Text
                    className="flex-1 text-base text-gray-700 w-auto"
                    size="txtManropeSemiBold16Gray700"
                  >
                    {props?.price}
                  </Text>
                </div>

                

                <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                <h1 className=" text-base text-blue-700">Add-on</h1>

                  <Text
                    className="flex-1 text-base text-gray-700 w-auto"
                    size="txtManropeSemiBold16Gray700"
                  >

                    {props?.addon}

                  </Text>

                </div>
                
           
              
            
            <div className="flex flex-row gap-[31px] items-center justify-start w-full">
              <Button className="bg-gray-900 cursor-pointer flex-1 font-manrope font-semibold py-[13px] rounded-[10px] text-base text-center text-white-A700 w-full">
                ViewDetails
              </Button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};export default FinanceCard;
