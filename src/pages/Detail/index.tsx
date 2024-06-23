import ReactPlayer from "react-player";

export default function Detail() {
  return (
    <div>
      <div className="pt-[64px]">
        <ReactPlayer
          style={{
            margin: "auto",
            // height: "calc(100vh - 64px)"
          }}
          width="100%"
          height="calc(100vh - 100px)"
          controls
          url="https://d3q62pnjbn74l6.cloudfront.net/Goodfellas.mp4"
        />
      </div>
    </div>
  );
}