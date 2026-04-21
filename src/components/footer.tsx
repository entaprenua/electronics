import { A } from "@solidjs/router"
import { Grid } from "~/components/ui/grid"
import { Flex } from "~/components/ui/flex"

export function Footer() {
  return (
    <footer class="bg-slate-950 text-slate-400 py-16">
      <div class="container mx-auto px-4">
        <Grid cols={4} gap={10}>
          <div>
            <h3 class="text-white font-bold text-lg mb-5">Products</h3>
            <Flex class="flex-col gap-3">
              <A href="/categories" class="text-sm hover:text-cyan-400 transition-colors">All Categories</A>
              <A href="/products" class="text-sm hover:text-cyan-400 transition-colors">New Arrivals</A>
              <A href="/products" class="text-sm hover:text-cyan-400 transition-colors">Best Sellers</A>
              <A href="/products" class="text-sm hover:text-cyan-400 transition-colors">Deals</A>
            </Flex>
          </div>
          <div>
            <h3 class="text-white font-bold text-lg mb-5">Support</h3>
            <Flex class="flex-col gap-3">
              <A href="/contact" class="text-sm hover:text-cyan-400 transition-colors">Contact Us</A>
              <A href="/about" class="text-sm hover:text-cyan-400 transition-colors">About Us</A>
              <A href="/faq" class="text-sm hover:text-cyan-400 transition-colors">FAQ</A>
              <A href="/support" class="text-sm hover:text-cyan-400 transition-colors">Tech Support</A>
            </Flex>
          </div>
          <div>
            <h3 class="text-white font-bold text-lg mb-5">Legal</h3>
            <Flex class="flex-col gap-3">
              <A href="/privacy" class="text-sm hover:text-cyan-400 transition-colors">Privacy Policy</A>
              <A href="/terms" class="text-sm hover:text-cyan-400 transition-colors">Terms of Service</A>
              <A href="/warranty" class="text-sm hover:text-cyan-400 transition-colors">Warranty</A>
            </Flex>
          </div>
          <div>
            <h3 class="text-white font-bold text-lg mb-5">Follow Us</h3>
            <Flex class="flex-col gap-3">
              <A href="https://twitter.com" class="text-sm hover:text-cyan-400 transition-colors">Twitter</A>
              <A href="https://youtube.com" class="text-sm hover:text-cyan-400 transition-colors">YouTube</A>
              <A href="https://tiktok.com" class="text-sm hover:text-cyan-400 transition-colors">TikTok</A>
            </Flex>
          </div>
        </Grid>
        <div class="border-t border-slate-800 mt-12 pt-8 text-center">
          <p class="text-sm">© 2024 ElectroHub. Your Tech Destination.</p>
        </div>
      </div>
    </footer>
  )
}