import { Button } from "~/components/ui/button"
import { Text } from "~/components/ui/text"
import { Flex } from "~/components/ui/flex"

export default function ContactPage() {
  return (
    <div class="bg-stone-50 min-h-screen">
      <div class="container mx-auto px-4 py-12">
        <Flex class="flex-col items-center mb-12">
          <Text variant="h1" class="text-3xl font-serif font-light">Contact Us</Text>
          <Text class="text-stone-500 mt-2">We'd love to hear from you</Text>
        </Flex>

        <Flex class="justify-center">
          <div class="w-full max-w-xl">
            <div class="bg-white rounded-sm p-8 space-y-6">
              <div>
                <Text variant="body2" class="block text-sm font-medium mb-2 text-stone-600">Name</Text>
                <input 
                  type="text" 
                  placeholder="Your name" 
                  class="flex h-11 w-full items-center justify-center rounded-sm border border-stone-200 bg-transparent px-3 py-2 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-800 focus:ring-offset-2" 
                />
              </div>

              <div>
                <Text variant="body2" class="block text-sm font-medium mb-2 text-stone-600">Email</Text>
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  class="flex h-11 w-full items-center justify-center rounded-sm border border-stone-200 bg-transparent px-3 py-2 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-800 focus:ring-offset-2" 
                />
              </div>

              <div>
                <Text variant="body2" class="block text-sm font-medium mb-2 text-stone-600">Subject</Text>
                <input 
                  type="text" 
                  placeholder="How can we help?" 
                  class="flex h-11 w-full items-center justify-center rounded-sm border border-stone-200 bg-transparent px-3 py-2 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-800 focus:ring-offset-2" 
                />
              </div>

              <div>
                <Text variant="body2" class="block text-sm font-medium mb-2 text-stone-600">Message</Text>
                <textarea 
                  class="flex min-h-[140px] w-full rounded-sm border border-stone-200 bg-transparent px-3 py-2 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-800 focus:ring-offset-2 resize-y" 
                  placeholder="Your message..." 
                />
              </div>

              <Button class="w-full bg-stone-800 hover:bg-stone-700 text-white py-3 rounded-sm">
                Send Message
              </Button>
            </div>

            <div class="mt-10 text-center">
              <Text variant="body2" class="text-stone-500">Or reach us directly at:</Text>
              <Text variant="body2" class="mt-2 text-stone-700">hello@homenest.com</Text>
              <Text variant="body2" class="text-stone-700">+1 (555) 123-4567</Text>
              
              <div class="mt-8 pt-8 border-t border-stone-200">
                <Text variant="body2" class="text-stone-500 mb-4">Visit our showroom</Text>
                <Text variant="body2" class="text-stone-700">123 Furniture Lane</Text>
                <Text variant="body2" class="text-stone-700">New York, NY 10001</Text>
                <Text variant="body2" class="text-stone-500 mt-2">Mon-Fri: 10am - 7pm</Text>
                <Text variant="body2" class="text-stone-500">Sat-Sun: 11am - 6pm</Text>
              </div>
            </div>
          </div>
        </Flex>
      </div>
    </div>
  )
}