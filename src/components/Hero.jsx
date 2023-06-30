import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt='sumz_logo' className='w-28 object-contain'/>

            <button 
            type="button"
            onClick={() => window.open("https://github.com/ayaneyokoya/ai-summarizer")}
            className='black_btn'
            >
                Gitub
            </button>
        </nav>

        <h1 className='head_text'>
            Summarize Articles with <br className='max-md:hidden' />
            <span className='orange_gradient'>OpenAI GPT-4</span>
        </h1>
        <h2 className='desc'>
            Running short on time? Need that article summarized for your next assignment? We introduce to you: Summize! An open-source article summarizer that transforms those long articles into quick, digestable synopses.
        </h2>
    </header>
  )
}

export default Hero