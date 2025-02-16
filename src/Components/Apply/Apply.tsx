import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

function Apply() {

    const fetchApplications = async () => {
        const { data } = await axios.get(import.meta.env.VITE_APPLICATION);

       
        
        return data.applications;
      };
        const {data, error, isLoading, refetch}= useQuery({
            queryKey:["Application"],
            queryFn: fetchApplications
        })
    
        if (isLoading) {
            return <h1>Loading...</h1>
        }
        if (error) {
            return <h1>No Data</h1>
        }

            const ReadFnction = async(id: string)=>{
                
                try {
                   await axios.patch(import.meta.env.VITE_APPLICATION+"/"+id,  { markAsRead: true })
                   await refetch()
                } catch (error) {
                    alert(error)
                }
                
            }

            const UnReadFnction = async(id: string)=>{
                
                try {
                   await axios.patch(import.meta.env.VITE_APPLICATION+"/"+id,  { markAsRead: false })
                   await refetch()
                } catch (error) {
                    alert(error)
                }
                
            }

            return (
                <ul className='p-[5px] w-[90%] mx-auto '>
                    {
                        data.map((list:any)=> 
                        <li 
                        className={ list.markAsRead?'p-[10px] border border-black rounded-md mb-[5px] gird grid-cols-2 w-full':'p-[10px] border border-black rounded-md mb-[5px] gird grid-cols-2 w-full bg-gray-300 '}
                        key={list._id}>
                           Name: {list.name}
                            <br />
                            Email: {list.email}
                            <br />
                            Number: {list.phoneNumber}
                            <br />
                            Study Destination: {list.studyDestination}
                            <br />
                            Study Year: {list.studyYear}
                            <br />
                            Intake: {list.studyIntake}
                            <br />
                            <button onClick={()=>ReadFnction(list._id)} title='mark as read' className={ list.markAsRead?"hidden":'bg-black text-xl p-[10px] rounded-md mt-[10px] text-white cursor-pointer flex items-center gap-1'}> <FaCheckCircle/>  Mark as Read</button>
                            <button onClick={()=>UnReadFnction(list._id)} title='mark as read' className={ list.markAsRead== false?"hidden":'bg-black text-xl p-[10px] rounded-md mt-[10px] text-white cursor-pointer flex items-center gap-1'}><IoMdCloseCircle/>Mark as Unread</button>
                        </li>
                    )
                    }
                </ul>
            )
        }


export default Apply