interface BlogCardProps {
    title :string,
    img : string,
    data:string
}
export default function BlogCard({title,img,data} : BlogCardProps){
    return (
        <div className="post rounded-md bg-white  box transition-all duration-200   border-opacity-0 shadow-lg flex flex-col">
            <img height={230} width={460}  className="bg-red-300 " src={img}/>
            <div className="px-10 py-3 ">
            <h2 className="text-2xl font-semibold bg-gray-300">{title}</h2>
            <p className="bg-gray-300">{data}</p>
            <button className="mt-10 px-2 py-1 rounded-md bg-black text-white">Read More</button>

            </div>


        </div>
    )
}