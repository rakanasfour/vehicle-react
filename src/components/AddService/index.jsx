import React,{ useRef } from "react";

import { Button,Input,Img} from "../../components";



const AddService = (props)=>{


    const idInput= useRef();
    const ownerInput = useRef();
    const brandInput= useRef();
    const modelInput= useRef();
    const typeInput= useRef();
    const costInput= useRef();
    const dateInput= useRef();

 

    function submitHandler(event){
      /* event and prevent Default just fot the system  */

      event.preventDefault();
      const enteredId= idInput.current.value
      const enteredOwner= ownerInput.current.value
      const enteredBrand=brandInput.current.value
      const enteredModel=modelInput.current.value
      const enteredType= typeInput.current.value
      const enteredCost=costInput.current.value
      const enteredDate= dateInput.current.value

      
  

      /* we are writing the list in json  */

      const list={

          id:enteredId,
          owner:enteredOwner,
          brand:enteredBrand,
          model:enteredModel,
          type:enteredType,
          cost:enteredCost,
          date:enteredDate,
      
         


      };
      /* we are going to execute the pass function and provid the json list  */
      props.onAdd(list);
  };

    


    return (
        <div className="bg-white-A700 flex flex-col items-start justify-start p-6 sm:px-5 rounded-[16px] w-full">
                  <div className="flex flex-col gap-[38px] items-center justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-4 items-center justify-center w-full">
            
                      <Button className="bg-gray-300 cursor-pointer flex-1 font-bold py-3 rounded-[10px] text-center text-gray-900 text-lg w-full">
                        add service
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
                        id="owner" ref={ownerInput}
                          name="textfieldlarge"
                          placeholder="Owner"
                          className="font-semibold p-0 placeholder:text-gray-600 text-gray-600 text-left text-lg w-full"
                          wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pb-3.5 pt-5 px-4 rounded-[10px] w-full"
                       
                        ></Input>
                        <Input
                        id="brand" ref={brandInput}
                          name="textfieldlarge"
                          placeholder="Brand"
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
                        
                        <select
                            id="type"
                            ref={typeInput}
                            name="textfieldlarge_One"
                            className="font-semibold p-0 placeholder:text-gray-600 text-gray-600 text-left text-lg w-full"
                            style={{ backgroundColor: "white", border: "1px solid #cbd5e0", borderRadius: "10px", padding: "10px" }}
                          >
                            <option >Select Service Type</option>
                            <option value="PREVENTIVE">PREVENTIVE</option>
                            <option value="CORRECTIVE">CORRECTIVE</option>
                          </select>

                         <Input
                       id="cost" ref={costInput}

                          name="textfieldlarge"
                          placeholder="Cost"
                          className="font-semibold p-0 placeholder:text-gray-600 text-gray-600 text-left text-lg w-full"
                          wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pb-3.5 pt-5 px-4 rounded-[10px] w-full"
                       
                        ></Input>
                         <Input
                        id="date" ref={dateInput}
                          name="textfieldlarge"
                          placeholder="Date"
                          className="font-semibold p-0 placeholder:text-gray-600 text-gray-600 text-left text-lg w-full"
                          wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pb-3.5 pt-5 px-4 rounded-[10px] w-full"
                       
                        ></Input>
                       

                        
                      </div>
                     
                      <Button onClick={submitHandler} className="bg-gray-900 cursor-pointer font-bold py-[17px] rounded-[10px] text-center text-lg text-white-A700 w-full">
                        Add the new service
                      </Button>


                      
                    </div>
                    

                  

                    
                    
                  </div>
                  
                </div>
                
                


    )


}
export default AddService;