import Image from "next/image";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="loginpage-full-screen flex min-h-screen -mt-13 overflow-y-hidden">
      <section className="main hidden w-1/2 items-center justify-center bg-brand p-10 lg:flex xl:w-2/5">
        <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={274}
            height={82}
            className="loginpage-logo-img h-auto"
            // pr
            
          />

          <div className="space-y-5 text-white">
            <h1 className="h1">Effortless file management <span className="text-blue"> made simple.</span></h1>
            <p className="body-1">
              Where your documents meet their perfect home.
            </p>
          </div>

          <Image 
            src="/assets/images/files.png"
            alt="Files"
            width={220}
            height={220}
            className="loginpage-files-img transition-all hover:rotate-2 hover:scale-105"
          />
        </div>
      </section>
      
      <section className=" flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        <div className="loginpage-mobile mb-16 lg:hidden">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={304}
            height={102}
            className="loginpage-mobiel-logo h-auto  flex bg-center ml-4 rounded-full w-[200px] lg:w-[250px]"
          />
        </div>

        {children}
      </section>

    </div>
  );
};

export default Layout;
