import { Link } from "react-router-dom";

interface BlogCard {
    authorName: string;
    publishedDate: string;
    title: string;
    content: string;
    id:number
}

export const BlogCard = ({
    id,
    authorName,
    publishedDate,
    title,
    content
}: BlogCard) => {
    return <Link to={`/blog/${id}`}>
        <div className=" p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
            <div className="flex">
                <Avatar name={authorName} size={"small"} />
                <div className="font-extralight pl-2 text-sm flex justify-center flex-col">{authorName}</div>
                <div className="font-thin pl-2 text-slate-500 text-sm flex justify-center flex-col">{publishedDate}</div>
            </div>
            <div className="text-xl font-semibold">
                {title}
            </div>
            <div className="text-xl font-thin pt-1">
                {content.slice(0, 100) + "..."}
            </div>

            <div className="text-slate-400">
                {`${Math.ceil(content.length / 100)} minute(s)`}
            </div>

            {/* <div className="bg-slate-200 h-1 w-full">
        </div> */}
        </div>
    </Link>
}


export function Avatar({ name, size = "small" }: { name: string, size: "small" | "big" }) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gray-600 ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
        <span className={`${size === "small" ? "text-xs" : "text-md"} font-extralight text-gray-300 `}>{name[0]}
        </span>
    </div>
}