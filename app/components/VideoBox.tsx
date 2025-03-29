export default function VideoBox(props: any) {
    return (
        <div className="aspect-[4/3] flex items-center h-[600px] w-[800px] justify-center bg-simligray rounded-lg">
            <video 
                ref={props.video} 
                autoPlay 
                playsInline
                muted={false}
                className="h-full w-full object-contain"
            ></video>
            <audio 
                ref={props.audio} 
                autoPlay 
                controls={false}
                className="hidden"
            ></audio>
        </div>
    );
}