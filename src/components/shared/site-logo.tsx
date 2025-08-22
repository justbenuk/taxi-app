import Image from "next/image";
import Link from "next/link";

export default function SiteLogo() {
  return (
    <Link href='/' className="flex flex-row gap-2 items-center">
      <Image src={'/assets/taxi.png'} alt="taxi logo" height={40} width={40} />
      <h1 className="text-2xl font-semibold">Taxi <span className="text-yellow-500 dark:text-yellow-300">App</span></h1>
    </Link>
  )
}

