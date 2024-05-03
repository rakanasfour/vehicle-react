
import React, { useState, useEffect } from "react";
import { getService }  from '../../assets/getLink';

import LandingPageHeader from "components/LandingPageHeader";
import LandingPageFooter from "components/LandingPageFooter";
import AddService from "components/AddService";
import ServiceCard from "components/ServiceCard";
import {Img, Text } from "components";

const ServiecDepartment=()=>{


  function Add(p){
    /* we add person.json */
    fetch('http://18.222.239.15:8083/api/addService',
    /* we are describing the method is because we are posting */
    {
        method:"POST",
        body:JSON.stringify(p),
        /* this is extra some website required this */
        headers:{
            "Content-Type": "application/json"
        }
    }
    ).then (()=>{
         /*If we clicked save it will take use to this page */
        console.log("The service has been added")
    })
}


    const [services, setIsServices]= useState([]);



  const getAllServices = async () => {
    
    const data = await getService();

    
      const serviceList=[]
for( const key in data){
      
      const serviceProduct = {
        id:key,
        ...data[key]
      };
      serviceList.push(serviceProduct);
    }  
    setIsServices(serviceList);

}


useEffect(() => {
  getAllServices();
 
}, []);

const homepagekey = 'https://dealership-us.s3.us-east-2.amazonaws.com/images/key.jpg';



return(
    <div>
<LandingPageHeader className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />

  <div className="bg-yellow-50 flex flex-col font-manrope items-start justify-start md:pl-10 sm:pl-5 pl-[120px] py-[50px] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start w-full">
              <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="leading-[140.00%] sm:text-4xl md:text-[42px] text-[46px] text-gray-900 tracking-[-0.92px]"
                    size="txtManropeExtraBold46"
                  >
                    <>
                    Keep Your Wheels Rolling Smoothly: 
                      <br />
                      Trust Our Service Department's Expert Hands
                    </>
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[610px] md:max-w-full text-gray-700 text-xl"
                    size="txtManropeRegular20"
                  >
                    "Empowering Your Journey, One Service at a Time! ⚙️🔧 #DriveMaintenance #AutoCarePros #SmoothRidesAhead" 🚗💨
                  </Text>
                </div>
                
              </div>
              <div>
                

              
                
              </div>
              
              <div className="flex md:flex-1 flex-col items-center justify-start w-[47%] md:w-full">
                <Img
                  className="h-[503px] md:h-auto object-cover w-full"
                  src= {homepagekey}
                  alt="image"
                />
              
              </div>
            </div>
          </div>
       
<AddService onAdd={Add}></AddService>


<div className="flex flex-col items-start justify-start w-full">
              <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                {services.map((props, index) => (
                  <React.Fragment key={`services${index}`}>
                    <ServiceCard
                      className="flex flex-1 flex-col h-full items-start justify-start w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>

<LandingPageFooter className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
    </div>
)

};
export default ServiecDepartment;