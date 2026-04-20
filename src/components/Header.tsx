import { A } from "@solidjs/router"
import { Navbar, NavbarBrand, NavbarContent, NavbarEnd, NavbarLink } from "~/components/ui/navbar"
import { Grid } from "~/components/ui/grid"
import { Flex } from "~/components/ui/flex"
import { CartCount } from "~/components/ui/cart"
import { Button } from "~/components/ui/button"

export function Header() {
  return (
    <Navbar position="sticky" variant="default">
      <NavbarBrand>
        <A href="/" class="flex items-center gap-2">
          <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
          <span class="text-xl font-bold">TechStore</span>
        </A>
      </NavbarBrand>

      <NavbarContent>
        <Flex class="gap-6">
          <NavbarLink href="/categories">Categories</NavbarLink>
          <NavbarLink href="/products">Products</NavbarLink>
        </Flex>
      </NavbarContent>
      <NavbarEnd>
        <Flex class="gap-4">
          {/*
          <CartMini>
            <CartMiniDrawer side="bottom">
              <DrawerTrigger as={Button} variant="ghost" class="relative">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                <CartCount class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center" />
              </DrawerTrigger>
              <DrawerContent class="h-60">
                <DrawerHeader>
                  <DrawerTitle>Your Cart</DrawerTitle>
                </DrawerHeader>
                <CartItems>
                  <CartSummary>
                    <CartCheckoutTrigger href="/checkout" />
                  </CartSummary>
                </CartItems>
              </DrawerContent>
            </CartMiniDrawer>
          </CartMini>
          */}
          <NavbarLink href="/cart" class="relative">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <CartCount class="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full min-w-[1.25rem] h-5 flex items-center justify-center px-1" />
          </NavbarLink>
          <NavbarLink href="/wishlist">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </NavbarLink>
        </Flex>
      </NavbarEnd>
    </Navbar >
  )
}

export function Footer() {
  return (
    <footer class="bg-gray-900 text-gray-300 py-12">
      <div class="container mx-auto px-4">
        <Grid cols={4} gap={8}>
          <div>
            <h3 class="text-white font-semibold mb-4">Shop</h3>
            <Flex class="flex-col gap-2">
              <A href="/categories" class="hover:text-white transition-colors">All Categories</A>
              <A href="/products" class="hover:text-white transition-colors">All Products</A>
            </Flex>
          </div>
          <div>
            <h3 class="text-white font-semibold mb-4">Support</h3>
            <Flex class="flex-col gap-2">
              <A href="/contact" class="hover:text-white transition-colors">Contact Us</A>
              <A href="/faq" class="hover:text-white transition-colors">FAQ</A>
            </Flex>
          </div>
          <div>
            <h3 class="text-white font-semibold mb-4">About</h3>
            <Flex class="flex-col gap-2">
              <A href="/about" class="hover:text-white transition-colors">About Us</A>
              <A href="/privacy" class="hover:text-white transition-colors">Privacy Policy</A>
            </Flex>
          </div>
          <div>
            <h3 class="text-white font-semibold mb-4">Connect</h3>
            <Flex class="flex-col gap-2">
              <A href="https://twitter.com" class="hover:text-white transition-colors">Twitter</A>
              <A href="https://facebook.com" class="hover:text-white transition-colors">Facebook</A>
            </Flex>
          </div>
        </Grid>
        <div class="border-t border-gray-800 mt-8 pt-8 text-center">
          <p class="text-sm">2024 TechStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
