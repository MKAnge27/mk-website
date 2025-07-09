import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <>
        <main className="px-5 md:mt-[10%]">
          <h1 className="md:text-right font-semibold text-2xl text-white">Michel Kanga</h1>
          <p className="md:text-right mt-2 text-white">I like to build things -- mostly software.</p>
          <p className="md:text-right text-white">
            previously at <Link href="https://ciandt.com" className="underline">CI&T</Link>
          </p>
          <details className="md:text-right my-5 text-white">
            <summary>Things im into</summary>
            <ul>
              <li className="ml-6">tech</li>
              <li className="ml-6">cloud & api</li>
              <li className="ml-6">f1</li>
              <li className="ml-6">football</li>
              <li className="ml-6">going to the gym</li>
              <li className="ml-6">anime and memes</li>
            </ul>
          </details>
        </main>
        <div className="-z-10 absolute right-0 w-screen h-screen md:bg-gradient-to-tr from-transparent to-95% to-black/70"></div>
        <Image
            fill
            className="object-left md:object-center object-cover -z-20 grayscale-50 saturate-150"
            src="/background.jpeg"
            alt="man leaning against wall"
        />
      </>
  );
}