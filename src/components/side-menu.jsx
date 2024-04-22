import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";




export default function SideMenu() {
    const router = useRouter();

    const date = new Date();
    const year = date.getFullYear();


    useEffect(() => {
    }, [year]);

    return(<>
    <div className="h-screen w-40 border-r-1 border-black border-opacity-10 main-menu flex flex-col justify-between">
    <div className="item-reverse">
    {router.pathname === "/" && (
          <ul className="uppercase grid gap-3 item-socials">
            <li className="text-reverse z-20">
              <a href="#">li</a>
            </li>
            <li className="text-reverse z-10">
              <a href="#">tw</a>
            </li>
            <li className="text-reverse">
              <a href="#">GH</a>
            </li>
            <li className="mt-10 flex justify-center items-center">
              <div className="line"></div>
            </li>
          </ul>
        )}
        {router.pathname !== "/" && (
          <ul className="uppercase grid gap-3 item-socials">
            <li className="text-reverse z-20">
              <Link href="/">Home</Link>
            </li>
          </ul>
        )}
    </div>
    <div className="item-reverse">
    <p className="flex justify-end text-reverse">
    ©/{year} 
    </p>
    </div>
    </div>

    <style jsx>{`
    .line{
        width: 0.1px;
        height: 100px;
        background-color: black;
    }
        .main-menu{
            position: fixed;
            left: 0;
            bottom: 0;
            width: 6%;
            padding: 5% 10px 60px 10px;
            font-family: 'Montserrat-italic';
        }
        li.text-reverse:hover{
            text-decoration: line-through;
        }
        .text-reverse{
            letter-spacing: 4px;
            transform: rotate(-90deg);
            padding: 10px 0;
        }
        .item-socials{
            
        }
            `}</style>
    </>)
}