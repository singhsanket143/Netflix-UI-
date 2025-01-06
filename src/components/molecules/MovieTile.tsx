import { BsFillPlayFill } from "react-icons/bs";

interface MovieTileProps {
    name: string;
}

export const MovieTile: React.FC<MovieTileProps> = ({
    name
}) => {
    return (
        <div
            className="bg-zinc-900 bg-opacity-10 p-4 rounded-md"
        >
            <img 

                className="w-full cursor-pointer object-cover transition shadow-xl hover:opacity-80 delay-300 h-[10vw]"
            
                src="https://cdn.marvel.com/content/1x/avengersinfinitywar_lob_mas_hlf_01_2.jpg"
            />

            <div
                className="flex flex-row items-center mt-2"
            >
                <div
                    className="cursor-pointer font-semibold w-10 h-10 rounded-full bg-white hover:bg-neutral-300 flex justify-center items-center"
                >
                    <BsFillPlayFill className="text-2xl" />
                </div>

            </div>
        </div>
    )
}