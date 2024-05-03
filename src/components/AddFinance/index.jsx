import React,{ useRef } from "react";

import { Button,Input,Img} from "../../components";



const AddFinance = (props)=>{

  
    const idInput= useRef();
    const addonInput= useRef();
    const brandInput= useRef();
    const modelInput= useRef();
    const yearInput= useRef();
    const priceInput= useRef();



    function submitHandler(event){
      /* event and prevent Default just fot the system  */

      event.preventDefault();
      const enteredId= idInput.current.value
      const enteredAddon=addonInput.current.value
      const enteredBrand=brandInput.current.value
      const enteredModel=modelInput.current.value
      const enteredYear=yearInput.current.value
      const enteredPrice=priceInput.current.value
   
      
  

      /* we are writing the list in json  */

      const list={

          id:enteredId,
          addon:enteredAddon,
          brand:enteredBrand,
          model:enteredModel,
          year:enteredYear,
          price:enteredPrice,
          
         
      
         


      };
      /* we are going to execute the pass function and provid the json list  */
      props.onAdd(list);
  };

    


    return (
        <div className="bg-white-A700 flex flex-col items-start justify-start p-6 sm:px-5 rounded-[16px] w-full">
                  <div className="flex flex-col gap-[38px] items-center justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-4 items-center justify-center w-full">
            
                      <Button className="bg-gray-300 cursor-pointer flex-1 font-bold py-3 rounded-[10px] text-center text-gray-900 text-lg w-full">
                        Add the vehicle in the table below
                      </Button>
                      
                    </div>
                    


                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <div className="flex flex-col gap-5 items-start justify-start w-full">
                      <Input
                      id="id" ref={idInput}
                          name="textfieldlarge_One"
                          placeholder="Vehicle Id"
                          className="font-semibold p-0 placeholder:text-gray-600 text-gray-600 text-left text-lg w-full"
                          wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pb-3.5 pt-5 px-4 rounded-[10px] w-full"
                          
                        ></Input>
                        <Input
                        id="brand" ref={brandInput}
                          name="textfieldlarge"
                          placeholder="brand"
                          className="font-semibold p-0 placeholder:text-gray-600 text-gray-600 text-left text-lg w-full"
                          wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pb-3.5 pt-5 px-4 rounded-[10px] w-full"
                       
                        ></Input>
                         <Input
                         id="model" ref={modelInput}

                          name="textfieldlarge"
                          placeholder="Model"
                          className="font-semibold p-0 placeholder:text-gray-600 text-gray-600 text-left text-lg w-full"
                          wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pb-3.5 pt-5 px-4 rounded-[10px] w-full"
                       
                        ></Input>
                         

                    

                         <Input
                       id="year" ref={yearInput}

                          name="textfieldlarge"
                          placeholder="year"
                          className="font-semibold p-0 placeholder:text-gray-600 text-gray-600 text-left text-lg w-full"
                          wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pb-3.5 pt-5 px-4 rounded-[10px] w-full"
                       
                        ></Input>
                         
                       

                        <Input
                       id="price" ref={priceInput}

                          name="textfieldlarge_Two"
                          placeholder="Price"
                          className="font-semibold p-0 placeholder:text-gray-600 text-gray-600 text-left text-lg w-full"
                          wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pb-3.5 pt-5 px-4 rounded-[10px] w-full"
                          
                        ></Input>


                        <Input
                         id="addon" ref={addonInput}

                          name="textfieldlarge"
                          placeholder="addon"
                          className="font-semibold p-0 placeholder:text-gray-600 text-gray-600 text-left text-lg w-full"
                          wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pb-3.5 pt-5 px-4 rounded-[10px] w-full"
                       
                        ></Input>
                         
                      </div>
                    
             
                      <Button onClick={submitHandler} className="bg-gray-900 cursor-pointer font-bold py-[17px] rounded-[10px] text-center text-lg text-white-A700 w-full">
                        Add new Car
                      </Button>
                    </div>
                    
                  </div>
                </div>


    )


}
export default AddFinance;