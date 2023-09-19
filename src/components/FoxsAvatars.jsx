import React from "react";

import {Avatar, AvatarGroup} from "@nextui-org/react";

export default function FoxsAvatars() {
  return (
    <AvatarGroup
      isBordered
      max={3}
      total={30}
      className="z-20"
      renderCount={(count) => (
        <p className="text-small text-foreground font-medium ml-2 text-white" >+30 others</p>
      )}
    >
      <Avatar src="https://i.seadn.io/gcs/files/565c18f243fd3569c9fda641aee86450.png?auto=format&dpr=1&w=1000" />
      <Avatar src="https://i.seadn.io/gcs/files/a69615f80d4252af33906295769a6819.png?auto=format&dpr=1&w=1000" />
      <Avatar src="https://i.seadn.io/gcs/files/fee85cec4172f9b09cf0eb6d82dee44d.png?auto=format&dpr=1&w=384" />
      <Avatar src="https://i.seadn.io/gcs/files/8f7257a5372b16628456f29d293d753f.png?auto=format&dpr=1&w=384" />
      <Avatar src="https://i.seadn.io/gcs/files/977b1bd7a63af7bda4c735c07199c555.png?auto=format&dpr=1&w=384" />
      <Avatar src="https://i.seadn.io/gcs/files/199acc3c6a8a3c3b8d52b1be4099bf93.png?auto=format&dpr=1&w=384" />
    </AvatarGroup>
  );
}
