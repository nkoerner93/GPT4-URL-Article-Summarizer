import { logo } from "../src/assets";

const Hero = () => {
  return (
    <header className="w-full pt-4 text-center">
      <nav className="w-full flex justify-between items-center flex-row pb-16">
        <img src={logo} className="object-contain w-28" alt="sumz-logo"></img>
        <button
          type="button"
          onClick={() => {
            window.open("https://github.com/nkoerner93");
          }}
          className="bg-black text-white py-2 px-4 rounded-md font-bold hover:bg-gray-100 hover:text-black border-black"
        >
          Github Repository
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc m-auto pt-2">
        Simplify your reading with Summarize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
