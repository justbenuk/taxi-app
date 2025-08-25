import Image from "next/image";
import Link from "next/link";

export default function SiteLogo() {
  return (
    <Link href="/">
      <h1 className="text-2xl font-semibold flex flex-row items-center">
        T{""}
        <span>
          <Image src={"/assets/taxi.png"} alt="taxi logo" height={30} width={30} className="mx-1" />
        </span>
        {""}
        xi <span className="text-yellow-500 dark:text-yellow-300"> App</span>
      </h1>
    </Link>
  );
}
