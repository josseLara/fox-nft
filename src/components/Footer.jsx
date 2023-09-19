import { Image } from "@nextui-org/react";


function Footer() {
     return (
          <footer className="bg-black py-5 flex items-center justify-between flex-col gap-5">
               <a href="https://opensea.io/Fox-Art-Prime" target="_blank">
                    <Image
                         isBlurred
                         src="/footer.svg"
                         alt="FOXART"
                         className="rounded-full"
                         width={60}
                    />
               </a>
               <a href="https://twitter.com/it_wizards8302" target="_blank">
                    <Image
                         src="/redes/twitter.svg"
                         alt=""
                         width={35}
                         height={35}
                         className="object-cover p-2 hover:scale-105 cursor-pointer"
                         style={{ border: "1px solid white" }}
                    />
               </a>
               <p className="text-[.6rem] ">All rights reserved. © 2023 Fox NFT.</p>
          </footer>
     );
}

export default Footer;