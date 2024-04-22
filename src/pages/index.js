'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteTitle } from "@/utils";
import transition from "@/utils/transitions";



function Home() {
  const [selectedItem] = useState(null);
  const itemMenu = [
    {
      name: "Works",
      url: "/works",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Contact",
    url: "/contact",
  },
  

];
  useEffect(() => {
    siteTitle("Home")
  }, []);
  return (
    <>
      <section>
        <div className="w-screen h-screen flex justify-end">
          <div className="mainContainer">
            <div className="section-1">
              <div className="flex items-end h-full pb-16 sm:pb-20 px-4">
               <div>
               <h1 className="font-semibold uppercase title">Carlos Duarte</h1>
                <div className="description mt-4">
                <p className="">
                  Product Designer / Webflow Developer / Framer Developer and Partner.
                </p>
                <p>
                Currently working full-time as a Senior Product Designer at Detail Technologies
                </p>
                </div>
               </div>
              </div>
            </div>
            <div className="section-2">
            <ul>
                {itemMenu.map((item, index) => (
                  <li key={index}>
                    <Link href={item.url}   className="item-menu uppercase ">
                      {item.name}
                  </Link>
                  </li>
                ))}
            </ul>
              
               
                
            </div>
          </div>
        </div>
        <style jsx>{`
        section{
          background-color: #ece7e1;
        }
        h1{
          font-size: 1.1rem;
          letter-spacing: 0.2rem;
        }
    .mainContainer{
      display: flex;
      gap: 1rem;
      padding: 0% 2% 0% 8%;
      margin: 0;
    }
    .section-1{
      width: 35%;
    }
    .section-2{
      width: 65%;
      display: flex;
      align-items: flex-end;
      padding: 0px 0px 40px 1rem;
    }
    @media (max-width: 768px) {
      .mainContainer{
        display: block;
      }
    }
    `}</style>
      </section>
    </>


  );
}

export default transition(Home);
