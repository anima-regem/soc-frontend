
const Sign_Up = () => {
  return (
    <div className="p-12  h-full">
      <div className=" flex items-center">
        <div className="w-1/2 h-full  flex flex-col items-center justify-center gap-2">
        
        <a href={`https://github.com/login/oauth/authorize/?client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_GITHUB_REDIRECT}`}>
          <button className="font-bold text-2xl text-white bg-black py-4 px-6 rounded-full hover:scale-105 transition-all ease-in-out flex items-center gap-5">
            Register with Github
            <img src="/github.svg" alt="" />
          </button>
          </a>
        </div>
        <div className="h-[600px] w-[2px] bg-black/60" />
        <div className="w-1/2 h-[80%]">
          <div className="flex flex-col gap-8 [&>p]:text-xl pl-16 pt-10">
            <h1 className="text-6xl font-bold underline" >Guidelines</h1>
            <p>
              Event will be happening from the {import.meta.env.VITE_START_DATE} to {import.meta.env.VITE_END_DATE} 2025
            </p>
            <p>
              The event is only <b>open</b> to the students at <b>{import.meta.env.VITE_COLLEGE_NAME}</b>
            </p>
            <h3 className="text-3xl font-bold">Contributions will be evaluated based on:</h3>
            <p>
              <b>Code Quality:</b> Well-structured, maintainable, and optimized code
              will only be considered.
            </p>

            <p>
              <b>Documentation:</b> Enhancing the clarity, structure, and accessibility
              of documentation will be acknowledged.
            </p>
            <p>
              <b>Spam And Cheating:</b> Simply updating the README.md and only using
              ChatGPT will not be considered and <b>if flagged more than two times</b>
              the user will be removed
            </p>
            <div className="pt-10  flex items-center gap-5">
            <p className="underline font-semibold text-2xl">Get all details here</p>
            
            {/* Dont worry this is a known property */}
            {/* eslint-disable-next-line react/no-unknown-property */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign_Up;
