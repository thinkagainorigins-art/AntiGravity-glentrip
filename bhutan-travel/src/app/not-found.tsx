import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="font-heading text-8xl md:text-9xl font-bold text-primary/20 mb-4">404</h1>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Journey Interrupted</h2>
        <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10">
          The path you are looking for seems to have been lost in the mist of the Himalayas. Let us guide you back.
        </p>
        <Link href="/">
          <Button size="lg" className="rounded-full px-8 h-14 text-lg shadow-lg">
            Return to Basecamp
          </Button>
        </Link>
      </div>
    </div>
  )
}
