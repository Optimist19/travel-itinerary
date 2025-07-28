"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect } from "react";

function HomeComp() {
  const route = useRouter();

  useEffect(() => {
    route.push("/plan-a-trip");
  }, []);

  return (
    <div>
      {/* <main>
			<div style={{
				backgroundImage: "url(/svg/sky.svg)",
				backgroundSize: "cover",
				height: "30vh",
				width: "100%"
			}} className='relative'>
				<div className='cursor-pointer'>
					<Image src="/svg/arrow.svg" alt="sky" width={50} height={20} className='absolute top-[4vh] left-[1.5vw]' />
				</div>
			</div>
		</main> */}
    </div>
  );
}

export default HomeComp;
