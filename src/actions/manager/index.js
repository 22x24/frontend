import toast from "react-hot-toast"
import axios from "axios"

const basedUrl=axios.create({
    baseURL:"http://localhost:3000/manager"
})
export const getUsers = async()=>{
    try{
        const res = await basedUrl.get("/users")
        console.log(res)
        return res.data
    }catch(e){
        toast.error("error with fetching the users");
    }
}

export const getMAxBandWidth = async()=>{
    try {
        const res = basedUrl.get("/getMaxBandWidth")
        return (await res).data
    } catch (error) {
        toast.error("error with fetching the")
    }
}

export const updateBandWidthLimit=async(userId,bandwidth)=>{
    try {
        const res = await basedUrl.put("/limitBandwidth",JSON.stringify({
            userId,
            bandwidth
        }),{
            headers:{
                "Content-Type":"application/json"
            }
        })
        return res.data
    } catch (error) {
        toast.error(error.response.data.message)
    }
}

export const getBandWidthHistory=async(userId)=>{
    try {
        const res = await basedUrl.post("/getBandWidthHistory",JSON.stringify({userId}),{
            headers:{
                "Content-Type":"application/json"
            }
        })
        console.log(res)
        return res.data
    } catch (error) {
        toast.error("error with fetching the bandwidth history")
    }
}