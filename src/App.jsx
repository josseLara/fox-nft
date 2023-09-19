import { Card, CardHeader, Image, CardBody } from '@nextui-org/react'
import Question from './components/Questions'
import Team from './components/Team'
import Footer from './components/Footer'
import NavbarFox from './components/NavbarFox'
import FoxsAvatars from './components/foxsAvatars'
import { foxsData } from './data/foxs'


function App() {


  return (
    <div className="h-[100vh] flex flex-col overflow-scroll overflow-x-hidden font-[Press Start 2P]">
      <NavbarFox />
      <main>

        <section className="h-[450px] relative flex flex-col justify-between text-white flex-col gap-10 h-fit b-10 items-center px-3 md:p-[15%] bg-[#040015] "> 
          <div className="flex flex-col gap-5 justify-center z-10 items-center mt-20 md:m-0">
            <h2 className='text-7xl absolute top-7 right-70 text-bold text-transparent text-center md:text-start ' style={{ WebkitTextStroke: "1px white" }}>FOX NFT</h2>
            <h1 className='text-5xl uppercase font-bold leading-[3.7rem] mt-10 '>Fox-Art-Prime</h1>
            <p className='text-small leading-[1.7rem]'>Fox-Art-Prime offers unique and verifiable pixelated NFTs on the blockchain, ensuring the authenticity and ownership of each piece of digital art. Discover unlimited creativity in the world of pixelated NFTs.</p>
          </div>
         <FoxsAvatars/>
          <video src="galaxy.webm" className='absolute left-0 z-0 h-full w-full top-0' autoPlay={true} muted={true} loop={true}></video>
        </section>

        <section className='w-full flex flex-col justify-center items-center gap-6 py-20 px-4 bg-[#04010a] z-20 lg:px-[12%]'>
          <h1 className='flex flex-col text-3xl text-white leading-[3rem]'>Are you ready for <span className='bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent'>The Pixel Fox Club</span></h1>
          <div className='grid grid-cols-[1fr] gap-4 mt-5 md:grid-cols-[1fr,2fr]'>
            <Image
              isBlurred
              src='/fox.svg'
              alt='imagen'
              width={400}
              className='w-[400px]'
            />
            <div className='flex flex-col gap-3 text-small text-slate-600 lg:justify-around'>
              <p>Join The Pixel Fox Club, a vibrant community of pixel art enthusiasts. Explore unique creations, connect with like-minded individuals, and unlock exciting opportunities. Unleash your artistic potential today!</p>
              <p>Join The Pixel Fox Club and embrace the pixel art revolution. Discover a vibrant community of artists and collectors celebrating the beauty of pixel art. Unleash your creativity in this extraordinary journey.</p>
            </div>
          </div>
        </section>


        <h2 className='px-3 text-white font-bold text-xl z-10 mb-3 pt-20 lg:px-[12%]'>Collection</h2>
        <section className='flex flex-col gap-3 px-3 pb-20 md:flex-row justify-center items-center lg:px-[12%]'>
          {
           foxsData.map( ( fox, index ) => {
              return <Card className="py-4 max-w-[300px] bg-black" key={index}>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-normal flex gap-2  text-gray-400"><Image width={10} src="/eth.svg" alt="ETH" /> {fox.precio}</p>
                  <h4 className="font-normal text-small mt-3 text-gray-400">{fox.nombre}</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={fox.img}
                    width={270}
                  />
                </CardBody>
              </Card>

            } )
          }

        </section>

        <section className='flex justify-center items-center flex-col gap-9' id='question'>
          <h2 className='text-center flex flex-col text-3xl text-white leading-[3rem]'>Frequently asked<span className='bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent'>questions</span></h2>
          <Question />
        </section>

        <section className='py-20' id='team'>
          <h2 className='text-center flex text-3xl text-white leading-[3rem] items-center justify-center'>OUR<span className='bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent'>TEAM</span></h2>
          <div className='flex gap-6 justify-center mt-10'>
            {
              [{ img: "/team/1.svg", name: "Ramiro" }, { img: "/team/2.svg", name: "David" }].map( ( person, index ) => {
                return <Team img={person.img} name={person.name} key={index} />
              } )
            }
          </div>
        </section>
      </main>
      <Footer />

    </div>
  )
}

export default App
