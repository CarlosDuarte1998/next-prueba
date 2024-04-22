'use client';
import Footer from "@/components/footer";
import transition from "@/utils/transitions";
function Works() {
  return (
    <>
    <Footer />
        <main>
     <p>Prueba</p>
    </main>

    <style jsx>{`
        p{
            color: red;
        }
        `}</style>
    </> 
  );
}

export default transition(Works);