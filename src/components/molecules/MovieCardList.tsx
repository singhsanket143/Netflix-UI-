import { MovieTile } from "./MovieTile"

export const MovieCardList = () => {
    return (
        <div
            className="px-12 mt-4 space-y-8"
        >

            <div>
                <p
                    className="text-white text-xl font-semibold mb-4"
                >
                    Trending in India 
                </p>

                <div
                    className="grid grid-cols-4 gap-4"
                >

                    <MovieTile name="Avengers Infinity War" />
                    <MovieTile name="The Dark Knight" />
                    <MovieTile name="The Shawshank Redemption" />
                    <MovieTile name="Inception" />

                </div>
            </div>

        </div>
    )
}