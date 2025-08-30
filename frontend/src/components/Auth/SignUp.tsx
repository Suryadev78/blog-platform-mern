import axios from 'axios';
import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function SignUpPage() {
    const [firstname,setFirstName] = useState<string>("");
    const [lastname,setLastName] = useState<string>("");
    const [username,setusername] = useState<string>("")
    const [password,setPassword] = useState<string>("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:3000/auth", {
            firstName: firstname,
            lastName: lastname,
            userName: username,
            password: password
        });
        console.log(res.data);
    }


    return (
        <section className="flex min-h-screen bg-zinc-50 px-4 py-16 md:py-32 dark:bg-transparent">
            <form onSubmit={handleSubmit}
                action=""
                className="bg-white m-auto h-fit w-full max-w-sm rounded-lg border p-0.5 shadow-md">
                <div className="p-8 pb-6">
                    <div>
                        <Link
                            to="/"
                            aria-label="go home">
                            <div className="w-8 h-8 bg-slate-900 rounded"></div>
                        </Link>
                        <h1 className="mb-1 mt-4 text-xl font-semibold">Create a Account</h1>
                        <p className="text-sm">Welcome! Create an account to get started</p>
                    </div>

                    

                    <hr className="my-4 border-dashed" />

                    <div className="space-y-5">
                        <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-2">
                                <label
                                    htmlFor="firstname"
                                    className="block text-sm font-medium">
                                    Firstname
                                </label>
                                <input
                                    type="text"
                                    required
                                    name="firstname"
                                    id="firstname"
                                    onChange={(e)=>setFirstName(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="space-y-2">
                                <label
                                    htmlFor="lastname"
                                    className="block text-sm font-medium">
                                    Lastname
                                </label>
                                <input
                                    type="text"
                                    required
                                    name="lastname"
                                    onChange={(e)=>setLastName(e.target.value)}
                                    id="lastname"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium">
                                Username
                            </label>
                            <input
                                type="email"
                                required
                                name="email"
                                id="email"
                                onChange={(e)=>setusername(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="pwd"
                                className="text-sm font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                required
                                name="pwd"
                                onChange={(e)=>setPassword(e.target.value)}
                                id="pwd"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button 
                            type="submit"
                            className="w-full bg-slate-900 text-white py-2 px-4 rounded-md hover:bg-slate-950  focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Continue
                        </button>
                    </div>
                </div>

                <div className="bg-gray-50 rounded-lg border p-3">
                    <p className="text-gray-600 text-center text-sm">
                        Have an account ?
                        <button
                            type="button"
                            className="text-slate-800 hover:text-slate-950 px-2">
                                <Link to="/login">Login</Link>
                            
                        </button>
                    </p>
                </div>
            </form>
        </section>
    )
}
