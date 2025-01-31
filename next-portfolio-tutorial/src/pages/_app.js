import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import Footer from "@/components/Footer";
// import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-monst",
});

export default function App({ Component, pageProps }) {
  // const router = useRouter();
  const pathname = usePathname();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
      >
        <Navbar />
        <AnimatePresence mode="wait">
          {/* <Component key={router.asPath} {...pageProps} /> */}
          <Component key={pathname} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
