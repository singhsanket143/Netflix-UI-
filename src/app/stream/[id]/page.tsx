"use client";
import { useParams } from "next/navigation"
import { useEffect, useRef } from "react";
import HLS from "hls.js";

export default function Page() {
    const params = useParams<{id: string}>();

    const videoId = params.id;

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if(videoId && HLS.isSupported()) {
            const streamObject = new HLS();
            streamObject.loadSource(`http://localhost:3000/output/${videoId}/master.m3u8`); // This is the path to the HLS stream
            streamObject.attachMedia(videoRef.current!); // Attach the stream to the video element
        }
    }, [videoId]);

    return (
        <div
            className="h-[100vh] bg-gray-100 flex flex-col ii:items-center justify-center"
        >
            <div
                className="w-full bg-transparent"
            >
                <video 
                    controls 
                    width={'100%'}
                    ref={videoRef}
                />

            </div>

        </div>
    )
}