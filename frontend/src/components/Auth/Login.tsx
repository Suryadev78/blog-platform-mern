import { Link } from 'react-router-dom'
export default function LoginPage() {
    return (
        <section className="flex min-h-screen bg-zinc-50 px-4 py-16 md:py-32 dark:bg-transparent">
            <form
                className="bg-white m-auto h-fit w-full max-w-sm rounded-lg border p-0.5 shadow-md">
                <div className="p-8 pb-6">
                    <div>
                        <Link
                            to="/"
                            aria-label="go home">
                            <div className="w-8 h-8 bg-slate-900 rounded"></div>
                        </Link>
                        <h1 className="mb-1 mt-4 text-xl font-semibold">Login In to Blog</h1>
                        <p className="text-sm">Welcome back! Login in to continue</p>
                    </div>

                    <hr className="my-4 border-dashed" />

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                name="email"
                                id="email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="space-y-0.5">
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="pwd"
                                    className="text-sm font-medium">
                                    Password
                                </label>
                                
                            </div>
                            <input
                                type="password"
                                required
                                name="pwd"
                                id="pwd"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button 
                            type="submit"
                            className="w-full bg-slate-900 text-white py-2 px-4 rounded-md hover:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Login
                        </button>
                    </div>
                </div>

                <div className="bg-gray-50 rounded-lg border p-3">
                    <p className="text-gray-600 text-center text-sm">
                        Don't have an account ?
                        <button
                            type="button"
                            className="text-blue-600 hover:text-blue-800 px-2">
                                <Link to="/signup">Create an account</Link>
                            
                        </button>
                    </p>
                </div>
            </form>
        </section>
    )
}
