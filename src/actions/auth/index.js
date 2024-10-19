import toast from "react-hot-toast"
import axios from "axios"

const basedUrl = axios.create({
    baseURL:"http://localhost:3000/auth"
})
export const loginAdmin=async(data)=>{
    try{
        const res = await basedUrl.post("/loginAdmin",JSON.stringify({
            username : data.username,
            password: data.password
        }),{
            headers:{
                "Content-Type":"application/json"
            }
        })
        console.log(res)
        return {success:true,message:res.data.message}
    }catch(e){
        toast.error(e.response.data.message)
    }
}