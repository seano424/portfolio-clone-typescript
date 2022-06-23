export default function Hero() {
  return (
    <section
      className="bg-cover bg-center min-h-[800px] pt-10"
      style={{
        backgroundImage: `url('https://cdn.onjuno.com/crypto-landing/landing-page-hero-1%402x.png')`,
      }}
    >
      <div className="flex flex-col gap-5 text-center lg:text-left w-11/12 md:w-9/12 lg:w-6/12 mx-auto lg:mr-0 lg:ml-24">
        <h1 className="text-6xl lg:text-8xl font-black px-20 lg:px-0 lg:w-80">
          Some Awesome Website!
        </h1>
        <p className="text-lg text-gray-300 font-light lg:text-3xl lg:max-w-2xl px-10 lg:px-0">
          Some nice tagline I am woohoo oh yea! Keep it going if ya want yea!
        </p>
        <div className="flex space-x-4 max-w-2xl text-xl font-light">
          <div className="hidden lg:flex items-center relative flex-1">
            <span className="absolute left-5 text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
            <input
              className="button bg-white py-6 pl-20 text-black placeholder:text-black w-full text-xl font-light focus:ring-0 outline-none"
              type="text"
              placeholder="Enter Email Address"
            />
          </div>
          <button className="button py-5 w-full lg:w-auto">
            Create Account
          </button>
        </div>
      </div>
    </section>
  )
}
