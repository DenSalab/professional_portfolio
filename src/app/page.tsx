import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>My Portfolio</h1>

      <Link href={'/about'}>About</Link>
    </div>
  )
}
