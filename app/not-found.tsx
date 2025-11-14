import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { fontWrapper } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 Page not found",
  description: "The Page you are looking for doesn't exist",
};

const notFound = () => {
  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col">
        <section className="wrapper py-28 my-auto flex items-center justify-center flex-col  gap-4">
          <h1 className={fontWrapper("h2")}>404: Page not Found</h1>
          <p className="body mb-2">
            The page you are looking for can&apos;t be found
          </p>
          <Link
            href={"/"}
            className="underline text-sky-600 hover:opacity-80 duration-200 transition-all"
          >
            Back to home
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default notFound;
