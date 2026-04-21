import { Text } from "~/components/ui/text"
import { Flex } from "~/components/ui/flex"

export default function AboutPage() {
  return (
    <div class="bg-slate-50 min-h-screen">
      <div class="container mx-auto px-4 py-12">
        <Flex class="flex-col items-center mb-12">
          <Text variant="h1" class="text-3xl font-bold">About ElectroHub</Text>
          <Text class="text-slate-500 mt-2">Your tech destination since 2020</Text>
        </Flex>
        
        <div class="max-w-3xl mx-auto space-y-8">
          <div class="bg-white rounded-lg p-8 border border-slate-200">
            <Text variant="h2" class="text-xl font-bold mb-4">Our Story</Text>
            <Text variant="body1" class="text-slate-600 leading-relaxed">
              ElectroHub was born from a simple idea: everyone deserves access to the latest tech. 
              Founded in 2020, we curate cutting-edge electronics that blend innovation with everyday life. 
              Each product in our collection is carefully selected to keep you connected and ahead of the curve.
            </Text>
          </div>
          
          <div class="bg-white rounded-lg p-8 border border-slate-200">
            <Text variant="h2" class="text-xl font-bold mb-4">Our Philosophy</Text>
            <Text variant="body1" class="text-slate-600 leading-relaxed">
              We believe technology should enhance life, not complicate it. 
              Our approach focuses on sourcing the latest gadgets from trusted brands, ensuring quality 
              and performance in every purchase.
            </Text>
          </div>
          
          <div class="bg-white rounded-lg p-8 border border-slate-200">
            <Text variant="h2" class="text-xl font-bold mb-6">Why Choose Us</Text>
            <Flex class="flex-col gap-4">
              <Flex class="items-start gap-3">
                <div class="w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span class="text-white text-xs">✓</span>
                </div>
                <Text variant="body1" class="text-slate-600">Authentic products with full warranty</Text>
              </Flex>
              <Flex class="items-start gap-3">
                <div class="w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span class="text-white text-xs">✓</span>
                </div>
                <Text variant="body1" class="text-slate-600">Free shipping on orders over $99</Text>
              </Flex>
              <Flex class="items-start gap-3">
                <div class="w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span class="text-white text-xs">✓</span>
                </div>
                <Text variant="body1" class="text-slate-600">Same-day dispatch on orders before 2pm</Text>
              </Flex>
              <Flex class="items-start gap-3">
                <div class="w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span class="text-white text-xs">✓</span>
                </div>
                <Text variant="body1" class="text-slate-600">30-day hassle-free returns</Text>
              </Flex>
            </Flex>
          </div>
          
          <div class="bg-white rounded-lg p-8 border border-slate-200">
            <Text variant="h2" class="text-xl font-bold mb-4">Get in Touch</Text>
            <Text variant="body1" class="text-slate-600 leading-relaxed">
              We'd love to help you find the perfect tech for your needs. 
              Reach out to us at hello@electrohub.com or call us at +1 (555) 123-4567.
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}