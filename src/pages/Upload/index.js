import { useState } from 'react'
import Switch from 'react-ios-switch'
import Button from '~/components/Button'
import Footer from '~/layouts/components/Footer'

function Upload() {
  const [copyrightSwitch, setCopyrightSwitch] = useState(false)
  const [caption, setCaption] = useState('')

  function handleCopyrightSwitch() {
    copyrightSwitch ? setCopyrightSwitch(false) : setCopyrightSwitch(true)
  }

  function handleSelectFile() {
    document.getElementById('uploadFile').click()
  }

  return (
    <>
      <div className="bg-white lg:bg-black/5 py-4">
        <div className="w-full sm:w-3/5 mx-auto lg:rounded-lg bg-white">
          <div className="py-4 lg:py-6 px-8 lg:px-14">
            <h4 className="text-xl lg:text-2xl font-bold">Upload video</h4>
            <h5 className="text-base lg:text-lg font-light text-black/40">Post a video to your account</h5>
            <div className="mt-6 lg:mt-10">
              <div className="flex flex-col lg:flex-row items-start">
                <div
                  className="w-full lg:w-1/3 my-6 lg:mr-6 rounded-md border-2 border-dashed border-primary lg:border-black/20 lg:hover:border-primary transition duration-200 cursor-pointer"
                  style={{ minHeight: '458px' }}
                  onClick={handleSelectFile}
                >
                  <div className="flex flex-col justify-center p-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="my-4 mx-auto"
                      width="40"
                      height="29"
                      viewBox="0 0 40 29"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21.5001 29H30.5C35.7467 29 40 24.7467 40 19.5C40 14.7115 36.4571 10.7504 31.8497 10.0951C30.937 4.37297 25.9792 0 20 0C13.3726 0 8 5.37258 8 12L8.00001 12.0145C3.53831 12.2733 0 15.9734 0 20.5C0 25.1944 3.80558 29 8.5 29H18.5001V17.1213L15.9143 19.7071C15.7191 19.9024 15.4025 19.9024 15.2072 19.7071L13.793 18.2929C13.5977 18.0976 13.5977 17.781 13.793 17.5858L18.9395 12.4393C19.5252 11.8536 20.475 11.8536 21.0608 12.4393L26.2072 17.5858C26.4025 17.781 26.4025 18.0976 26.2072 18.2929L24.793 19.7071C24.5977 19.9024 24.2812 19.9024 24.0859 19.7071L21.5001 17.1213V29Z"
                        fill="#161823"
                        fillOpacity="0.34"
                      />
                    </svg>
                    <p className="text-lg font-semibold text-center mb-2">Select video to upload</p>
                    <p className="text-black/60 mb-6 text-center">Or drag and drop a file</p>
                    <p className="text-black/40 mb-2 text-center">MP4 or WebM</p>
                    <p className="text-black/40 mb-2 text-center">720x1280 resolution or higher</p>
                    <p className="text-black/40 mb-2 text-center">Up to 10 minutes</p>
                    <p className="text-black/40 mb-2 text-center">Less than 2 GB</p>
                    <button
                      className="bg-primary hover:bg-primary-dark text-white text-center text-semibold text-base rounded py-2 px-4 my-4 transition duration-200"
                      style={{ minWidth: '150px' }}
                    >
                      Select file
                    </button>
                    <input id="uploadFile" type="file" accept="video/*" className="invisible" />
                  </div>
                </div>
                <div className="w-full lg:w-2/3">
                  <div className="relative flex flex-col mb-6">
                    <label className="text-base font-semibold mb-1" htmlFor="caption">
                      Caption
                    </label>
                    <input
                      type="text"
                      name="caption"
                      id="caption"
                      className="w-full h-11 border border-solid border-black/20 rounded px-4"
                      style={{ fontSize: '15px' }}
                      value={caption}
                      onChange={(e) => {
                        if (e.target.value.length > 150) {
                          setCaption(e.target.value.slice(0, 150))
                          alert('Maximum 150 characters')
                        } else {
                          setCaption(e.target.value)
                        }
                      }}
                    />
                    <span className="absolute top-0 right-0 text-sm text-black/40">{caption.length} / 150</span>
                  </div>
                  <div className="relative flex flex-col mb-6">
                    <label className="text-base font-semibold mb-1">Cover</label>
                    <div className="w-full h-40 border border-solid border-black/20 px-4" />
                  </div>
                  <div className="relative flex flex-col mb-6">
                    <label className="text-base font-semibold mb-1" htmlFor="privacy">
                      Who can watch this video
                    </label>
                    <select
                      name="privacy"
                      id="privacy"
                      className="w-full lg:w-1/2 bg-white 2 border border-solid border-black/20 rounded h-10 px-2 text-base outline-none"
                    >
                      <option value="public">Public</option>
                      <option value="friends">Friends</option>
                      <option value="private">Private</option>
                    </select>
                  </div>
                  <div className="relative flex flex-col mb-6">
                    <label className="text-base font-semibold mb-1" htmlFor="allow">
                      Allow users to:
                    </label>
                    <div className="flex">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          name="allow"
                          id="comment"
                          value="2"
                          className="border border-solid border-gray-300 rounded-sm w-4 h-4 focus:outline-none cursor-pointer transition duration-200"
                        />
                        <label className="ml-2 mr-6 text-base" htmlFor="comment">
                          Comment
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          name="allow"
                          id="duet"
                          value="2"
                          className="border border-solid border-gray-300 rounded-sm w-4 h-4 focus:outline-none cursor-pointer transition duration-200"
                        />
                        <label className="ml-2 mr-6 text-base" htmlFor="duet">
                          Duet
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          name="allow"
                          id="stitch"
                          value="2"
                          className="border border-solid border-gray-300 rounded-sm w-4 h-4 focus:outline-none cursor-pointer transition duration-200"
                        />
                        <label className="ml-2 mr-6 text-base" htmlFor="stitch">
                          Stitch
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-center mb-2">
                      <label className="text-base font-semibold mr-4" htmlFor="privacy">
                        Run a copyright check
                      </label>
                      <Switch
                        checked={copyrightSwitch}
                        style={{ transform: 'scale(0.8)' }}
                        onChange={handleCopyrightSwitch}
                      />
                    </div>
                    <p className="text-xs text-black/60">
                      We'll check your video for potential copyright infringements on used sounds. If infringements are
                      found, you can edit the video before posting.{' '}
                      <a href="#" className="text-black hover:underline">
                        Learn more
                      </a>
                    </p>
                  </div>
                  <div className="mb-6 grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
                    <Button classes="h-12 mb-4 border border-solid border-black/20 hover:bg-black/5 transition duration-200 rounded px-6 text-base font-semibold">
                      Discard
                    </Button>
                    <Button classes="h-12 border border-solid border-black/20 transition duration-200 rounded px-6 text-base font-semibold ">
                      Post
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Upload
