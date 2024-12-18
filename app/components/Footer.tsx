import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white" id="footer">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">OkraExport</h3>
            <p className="text-sm">Your trusted partner in global okra distribution.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-green-200">Home</Link></li>
              <li><Link href="/about" className="hover:text-green-200">About Us</Link></li>
              <li><Link href="/products" className="hover:text-green-200">Our Products</Link></li>
              <li><Link href="/contact" className="hover:text-green-200">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <form className="flex space-x-2">
              <Input type="email" placeholder="Your email" className="bg-green-700 text-white placeholder-green-300 border-green-600" />
              <Button type="submit" variant="secondary">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-green-700 text-center">
          <p>&copy; 2023 OkraExport. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

