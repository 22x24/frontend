import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { loginAdmin } from '../../actions/auth'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
export default function Component() {
  const [username, setUsername] = useState('admin')
  const [password, setPassword] = useState('admin')
  const navigate = useNavigate()
  const [isLoading,setIsLoading] = useState(false)
  const handleLogin = async (e)=>{
    e.preventDefault()
    setIsLoading(true)
    setTimeout(async()=>{
      // login logic here
      const res = await loginAdmin({username,password})
      if(typeof res == "object" && res.success){
        navigate("/dashboard")
        toast.success(res.message)
      } 
      setIsLoading(false)
    }, 1000) // simulate async call
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-xl">
        <h1 className="text-2xl font-semibold text-center text-white">Network Manager</h1>
        <h2 className="text-xl text-center text-gray-300">Sign in</h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-400">User:</label>
            <Input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-400">Password:</label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <span className='text-green-600 text-xs'>Note : use admin for both username and password</span>
          <Button 
            type="submit" 
            disabled={isLoading}
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            {isLoading ? "..." : "login"}
          </Button>
        </form>
      </div>
    </div>
  )
}