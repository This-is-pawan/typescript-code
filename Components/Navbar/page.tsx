import Link from "next/link"

function Navbar(){
 return <nav className="max-w-3xl mx-auto flex gap-x-4 py-5">
  <Link href='/'>Home </Link>
  <Link href='/counter'>Counter</Link>
  <Link href='/tours'>Tours</Link>
  <Link href='/actions'>Actions</Link>
 </nav>
}
export default Navbar