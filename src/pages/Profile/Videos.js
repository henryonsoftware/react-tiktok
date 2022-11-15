function Videos({ user, videos }) {
  function handleOnMouseOver(e) {
    e.target.play()
  }

  function handleOnMouseLeave(e) {
    e.target.pause()
  }

  return (
    <>
      {videos.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
          {videos.map((video, key) => (
            <div key={key}>
              <video
                className="rounded-lg overflow-hidden cursor-pointer"
                controls
                loop
                muted
                playsInline
                poster={video.thumb_url}
                onMouseOver={(e) => handleOnMouseOver(e)}
                onMouseLeave={(e) => handleOnMouseLeave(e)}
              >
                <source src={video.file_url} type="video/mp4" />
                Your browser does not support HTML video.
              </video>
              <p className="text-base w-full truncate my-2">{video.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center w-full my-10">
          <h3 className="text-2xl font-bold mb-2">Oops</h3>
          <p className="text-base text-black/50">{user.nickname} still not upload any video</p>
        </div>
      )}
    </>
  )
}

export default Videos
