import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import { FaFileSignature } from "react-icons/fa";

function Enquries() {

    const [showinput, setShowInput] = useState<boolean>(false)
    const [showinput2, setShowInput2] = useState<boolean>(false)
    const [selectedId, setSelectedId] = useState<string>()

    const fetchEnduries = async () => {
        const { data } = await axios.get(import.meta.env.VITE_Enduries);
        return data.enquiries;
      };
        const {data, error, isLoading, refetch}= useQuery({
            queryKey:["Enquries"],
            queryFn: fetchEnduries
        })
    
        if (isLoading) {
            return <h1>Loading...</h1>
        }
        if (error) {
            return <h1>No Data</h1>
        }

        const ReadFnction = async(id: string)=>{
                
            try {
               await axios.patch(import.meta.env.VITE_Enduries+"/"+id,  { markAsRead: true })
               await refetch()
            } catch (error) {
                alert(error)
            }
            
        }
        const UnReadFnction = async(id: string)=>{
                
            try {
               await axios.patch(import.meta.env.VITE_Enduries+"/"+id,  { markAsRead: false })
               await refetch()
            } catch (error) {
                alert(error)
            }
            
        }

        const noteFunction = async (e: any, id: string) => {
            e.preventDefault();
            const note = e.target.note.value;
          
            try {
                const response = await axios.patch(`${import.meta.env.VITE_Enduries}/${id}`, {newNote: note});
          
              console.log("Response:", response.data); // Log response
              await refetch(); // Refresh data
            } catch (error) {
              console.error("Error adding note:", error);
            }
          };
        const statusFunction = async (e: any, id: string) => {
            e.preventDefault();
            const Stauts = e.target.status.value;
          
            try {
                const response = await axios.patch(`${import.meta.env.VITE_Enduries}/${id}`, {newStatus: Stauts});
          
              console.log("Response:", response.data); // Log response
              await refetch(); // Refresh data
            } catch (error) {
              console.error("Error adding note:", error);
            }
          };
            return (
                <ul className='p-[5px] w-[90%] mx-auto '>
                    {
                        data.map((list:any,)=> 
                        <li 
                        className={ list.markAsRead?'p-[10px] border border-black rounded-md mb-[5px] gird grid-cols-2 w-full':'p-[10px] border border-black rounded-md mb-[5px] gird grid-cols-2 w-full bg-gray-300 '}
                        key={list._id}>
                           subject: {list.subject}
                            <br />
                            Email: {list.email}
                            <br />
                            Message: {list.message}
                            <br />
                            <button onClick={()=>ReadFnction(list._id)} title='mark as read' className={ list.markAsRead?"hidden":'bg-black text-md p-[10px] rounded-md mt-[10px] text-white cursor-pointer flex items-center gap-1'}> <FaCheckCircle/>  Mark as Read</button>
                            <button onClick={()=>UnReadFnction(list._id)} title='mark as read' className={ list.markAsRead== false?"hidden":'bg-black text-md p-[10px] rounded-md mt-[10px] text-white cursor-pointer flex items-center gap-1'}><IoMdCloseCircle/>Mark as Unread</button>
{/* Note and Status section */}
                            <div className={`${showinput && selectedId == list._id?"block mt-[10px]": "hidden"}`}>
                                <form
                                onSubmit={(e)=> noteFunction(e, list._id)}
                                className='flex gap-1 flex-wrap'
                                action="">
                                <input 
                                className='text-xl p-[5px] border border-black rounded-md outline-none w-[70%]'  
                                type="text" 
                                name="note" 
                                placeholder='Note' id="" />
                                <input 
                                 className='bg-green-300 text-green-800 p-[5px] rounded-md text-xl'
                                 type="submit" value="Save" />
                                </form>
                                <div className='flex flex-row gap-1 w-full mt-[5px] flex-wrap'>
                                    {
                                        list?.notes.slice().reverse().map((note:any)=>(
                                            <h1 className='bg-yellow-300 text-yellow-700 p-[10px] rounded-lg w-fit'>
                                                <span>{note.note}</span>
                                                <br />
                                                <span>{note.timestamp}</span>
                                            </h1>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className={`${showinput2 && selectedId == list._id?"block mt-[10px]": "hidden"}`}>
                                <form
                                onSubmit={(e)=> statusFunction(e, list._id)}
                                className='flex gap-1 flex-wrap'
                                action="">
                                <input 
                                className='text-xl p-[5px] border border-black rounded-md outline-none w-[70%]'  
                                type="text" 
                                name="status" 
                                placeholder='Stauts' id="" />
                                <input 
                                 className='bg-green-300 text-green-800 p-[5px] rounded-md text-xl'
                                 type="submit" value="Save" />
                                </form>
                                <div className='flex flex-row gap-1 w-full mt-[5px] flex-wrap'>
                                    {
                                        list?.status.slice().reverse().map((note:any)=>(
                                            <h1 className='bg-yellow-300 text-yellow-700 p-[10px] rounded-lg w-fit'>
                                                <span>{note.status}</span>
                                                <br />
                                                <span>{note.timestamp}</span>
                                            </h1>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <button 
                                onClick={()=>{setShowInput(!showinput),  setSelectedId(list._id)}} 
                                className='bg-black text-md p-[10px] rounded-md mt-[10px] text-white cursor-pointer flex items-center gap-1'>
                                    <FaPen/>Note
                                </button>
                                <button 
                                onClick={()=>{setShowInput2(!showinput2),  setSelectedId(list._id)}}
                                className='bg-green-200 text-md p-[10px] rounded-md mt-[10px] text-green-500 cursor-pointer flex items-center gap-1'>
                                    <FaFileSignature/>Status
                                </button>
                            </div>
                        </li>
                    )
                    }
                </ul>
            )
        
}

export default Enquries