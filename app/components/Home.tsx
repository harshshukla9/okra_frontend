import Image from 'next/image'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import farmokra  from "@/app/images/farmokra.jpg"
import okra  from "@/app/images/okra.jpg"
import plantokra  from "@/app/images/plantokra.jpg"



export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8 " id="products">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to OkraExport</h1>
      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Our Premium Okra</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Fresh Okra</CardTitle>
              <CardDescription>High-quality, freshly harvested okra ready for export.</CardDescription>
            </CardHeader>
            <CardContent>
              <Image src={farmokra}alt="Fresh Okra" width={300} height={200} className="w-full h-48 object-cover mb-4 rounded" />
            </CardContent>
            <CardFooter>
              <Button>Learn More</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Dried Okra</CardTitle>
              <CardDescription>Long-lasting dried okra, perfect for soups and stews.</CardDescription>
            </CardHeader>
            <CardContent>
              <Image src={okra} alt="Dried Okra" width={300} height={200} className="w-full h-48 object-cover mb-4 rounded" />
            </CardContent>
            <CardFooter>
              <Button>Learn More</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Okra Powder</CardTitle>
              <CardDescription>Versatile okra powder for various culinary applications.</CardDescription>
            </CardHeader>
            <CardContent>
              <Image src={plantokra} alt="Okra Powder" width={300} height={200} className="w-full h-48 object-cover mb-4 rounded" />
            </CardContent>
            <CardFooter>
              <Button>Learn More</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Quality Assurance</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We ensure that only the highest quality okra is selected for export.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Global Reach</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our efficient logistics network allows us to export worldwide.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Sustainable Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We are committed to environmentally friendly farming methods.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Customer Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our dedicated team provides excellent support throughout the process.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

