import React, { useState, useEffect } from "react";

import { getFinance }  from '../../assets/getLink';
import AddFinance from "components/AddFinance";
import {Img, Text } from "components";
import FinanceCard from "components/FinanceCard";
import LandingPageFooter from "components/LandingPageFooter";
import LandingPageHeader from "components/LandingPageHeader";
const FinancePage = ()=>{
    
    function Add(p){
        /* we add person.json */
        fetch('http://52.14.86.227:8082/addFinance',
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
            console.log("the new vehicle price has been added")
        })
    }
    
    
        const [finances, setIsFinances]= useState([]);
    
    
    
      const getAllFinances = async () => {
        
        const data = await getFinance();
    
        
          const financeList=[]
    for( const key in data){
          
          const financeProduct = {
            id:key,
            ...data[key]
          };
          financeList.push(financeProduct);
        }  
        setIsFinances(financeList);
    
    }
    
    
    useEffect(() => {
      getAllFinances();
     
    }, []);
    
    const homepagekey = 'https://dealership-us.s3.us-east-2.amazonaws.com/images/finance.png';
    
    
    
    return (
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
                    Fueling Your Financial Journey:
                      <br />
                      Driving Deals, Balancing Budgets, and Accelerating Success.
                    </>
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
       

<AddFinance onAdd={Add}></AddFinance>

<div className="flex flex-col items-start justify-start w-full">
              <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                {finances.map((props, index) => (
                  <React.Fragment key={`finances${index}`}>
                    <FinanceCard
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
export default FinancePage;