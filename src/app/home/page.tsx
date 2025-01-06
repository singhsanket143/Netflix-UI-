"use client";

import { MainBoard } from "@/components/molecules/MainBoard";
import { MovieCardList } from "@/components/molecules/MovieCardList";
import { Navbar } from "@/components/molecules/Navbar";

export default function Home() {
    return (
        <>
            <Navbar />
            <MainBoard />

            <MovieCardList />
        </>
    )
}