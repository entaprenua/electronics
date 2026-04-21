import { A } from "@solidjs/router"
import { Navbar, NavbarBrand, NavbarContent, NavbarEnd, NavbarLink } from "~/components/ui/navbar"
import { Flex } from "~/components/ui/flex"
import { CartCount } from "~/components/ui/cart"

export function Header() {
  return (
    <Navbar position="sticky" variant="default" class="bg-slate-900 border-b border-slate-800">
      <NavbarBrand>
        <A href="/" class="flex items-center gap-3">
          <div class="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </div>
          <span class="text-xl font-bold tracking-tight text-white">ElectroHub</span>
        </A>
      </NavbarBrand>

      <NavbarContent>
        <Flex class="gap-8 ml-8">
          <NavbarLink href="/categories" class="text-sm text-slate-300 hover:text-cyan-400">Categories</NavbarLink>
          <NavbarLink href="/products" class="text-sm text-slate-300 hover:text-cyan-400">Products</NavbarLink>
          <NavbarLink href="/about" class="text-sm text-slate-300 hover:text-cyan-400">About</NavbarLink>
          <NavbarLink href="/contact" class="text-sm text-slate-300 hover:text-cyan-400">Contact</NavbarLink>
        </Flex>
      </NavbarContent>
      <NavbarEnd>
        <Flex class="gap-4">
          <NavbarLink href="/cart" class="relative p-2 text-slate-300 hover:text-cyan-400">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <CartCount class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-cyan-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center" />
          </NavbarLink>
        </Flex>
      </NavbarEnd>
    </Navbar>
  )
}