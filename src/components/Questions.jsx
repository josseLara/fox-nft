import React from "react";

import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Question() {

  return (
    <div className="px-20 w-full flex mt-2">
      <Accordion defaultExpandedKeys={["2"]}>
        <AccordionItem key="1"
          subtitle="Press to expand" title="What is a Fox Pixel NFT and how does it contribute to the community on an ongoing basis?" className="text-slate-600 leading-[2rem]">
          A Fox Pixel NFT is a non-fungible token (NFT) that represents sole ownership of a piece of digital art created by artist Fox Pixel. We are constantly working on providing new events, characters and improvements to enrich the community of NFT collectors and offer unique experiences to our NFT owners. These efforts help strengthen the community and keep it active.
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          subtitle={
            <span>
              Press to expand
            </span>
          }
          title="What rights do I have as the owner of a Fox Pixel NFT?"
          className="text-slate-600 leading-[2rem]"
        >

          As the owner of a Fox Pixel NFT, you have exclusive digital ownership of that particular artwork, allowing you to display it in virtual galleries, resell it on secondary NFT markets, and in some cases earn royalties when it is resold. However, please note that you do not acquire copyright in the work itself, only the unique and verifiable digital property. Be sure to review the specific details of each NFT and its rights before purchasing.
        </AccordionItem>
        <AccordionItem key="3"
          aria-label="How can I purchase a Fox Pixel NFT?"
          subtitle="Press to expand" title="How can I purchase a Fox Pixel NFT?" className="text-slate-600 leading-[2rem]">
          To acquire a Fox Pixel NFT, you generally must participate in an auction on an NFT platform, such as OpenSea or Rarible, where the artist has put their work up for sale. You must have a supported cryptocurrency wallet and Ethereum or another accepted cryptocurrency to bid in the auction. Once you win the auction, the NFT is transferred to your digital wallet.
        </AccordionItem>
      </Accordion>
    </div>
  );
}
