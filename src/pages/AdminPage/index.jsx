import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { getCar }  from '../../assets/getLink';

import {  Img,  Text } from "components";
import LandingPageCard from "components/LandingPageCard";
import LandingPageFooter from "components/LandingPageFooter";
import LandingPageHeader from "components/LandingPageHeader";
import AddVehicle from "components/AddVehicle";
const AdminPage = () => {
  

  function Add(p){
    /* we add person.json */
    fetch("http://3.134.76.112:8081/api/addVehicle",
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
        console.log("The vehicle has been added")
    })
}
const adminpagekey = 'https://dealership-us.s3.us-east-2.amazonaws.com/images/towerofcars.jpg';


  return (
    <>
      <div className="bg-white-A700 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-start justify-start w-full">
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
                    Gear up for success this May! 🚀🔥 
                      <br />
                      Let's drive sales and conquer the month of profit together! 💼
                    </>
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[610px] md:max-w-full text-gray-700 text-xl"
                    size="txtManropeRegular20"
                  >
                    💪 #SellMoreVehicles #MonthOfSuccess 💰🚗 
                  </Text>
                </div>
                
              </div>
          
              
            
            </div>
          </div>
        </div>

        <AddVehicle onAdd={Add}></AddVehicle>

        <LandingPageFooter className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default AdminPage;
