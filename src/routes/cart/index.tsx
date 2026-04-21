import { CartItems, CartItemsView, CartItemCheckbox, CartEmpty, CartSummary, CartClearTrigger, CartCheckoutTrigger, CartSubtotal, CartSelectedSubtotal } from "~/components/ui/cart"
import { Product, ProductImage, ProductName, ProductPrice, ProductQuantityActions, ProductRemoveFromCartTrigger } from "~/components/ui/product"
import { Button } from "~/components/ui/button"
import { Flex } from "~/components/ui/flex"
import { Text } from "~/components/ui/text"
import { Link } from "~/components/ui/link"

export default function CartPage() {
  return (
    <div class="bg-slate-50 min-h-screen">
      <div class="container mx-auto px-4 py-12 max-w-6xl">
        <Text variant="h1" class="text-2xl font-bold mb-8">Your Cart</Text>
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2">
            <CartItems>
              <CartItemsView>
                <div class="space-y-4">
                  <div class="bg-white rounded-lg p-6 border border-slate-200">
                    <Flex gap={4} align="start" class="flex-wrap">
                      <div class="flex items-start shrink-0">
                        <CartItemCheckbox />
                      </div>
                      <Product class="flex gap-4 flex-1 min-w-0">
                        <ProductImage class="w-24 h-24 object-cover rounded-lg flex-shrink-0" />
                        <div class="flex flex-col gap-2 min-w-0 flex-1">
                          <ProductName class="font-medium text-slate-800 truncate" />
                          <ProductPrice class="text-cyan-600" />
                          <div class="flex items-center gap-4 mt-2">
                            <ProductQuantityActions class="w-auto shrink-0 border border-slate-300 rounded" />
                            <ProductRemoveFromCartTrigger class="text-slate-400 hover:text-red-500 text-sm shrink-0" />
                          </div>
                        </div>
                      </Product>
                    </Flex>
                  </div>
                </div>
              </CartItemsView>
              
              <CartEmpty>
                <div class="bg-white rounded-lg p-16 text-center border border-slate-200">
                  <div class="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg class="w-10 h-10 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                      <circle cx="9" cy="21" r="1" />
                      <circle cx="20" cy="21" r="1" />
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                  </div>
                  <h2 class="text-xl font-bold mb-3">Your cart is empty</h2>
                  <p class="text-slate-500 mb-6">Start adding tech to your cart</p>
                  <Button as={Link} href="/products" class="bg-blue-600 hover:bg-blue-700 text-white px-8">
                    Browse Collection
                  </Button>
                </div>
              </CartEmpty>
            </CartItems>
          </div>

          <div class="lg:col-span-1">
            <div class="bg-white rounded-lg p-6 sticky top-4 border border-slate-200">
              <Text variant="h2" class="text-lg font-bold mb-6">Order Summary</Text>
              
              <div class="space-y-4 mb-6">
                <Flex justify="between">
                  <Text class="text-slate-500">Subtotal</Text>
                  <CartSubtotal />
                </Flex>
                <Flex justify="between">
                  <Text class="text-slate-500">Shipping</Text>
                  <Text class="text-slate-500 text-sm">Calculated at checkout</Text>
                </Flex>
                <div class="border-t pt-4">
                  <Flex justify="between">
                    <Text class="font-medium">Total</Text>
                    <CartSelectedSubtotal />
                  </Flex>
                </div>
              </div>

              <CartSummary>
                <CartCheckoutTrigger href="/checkout" class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg" />
                <CartClearTrigger variant="outline" class="w-full mt-3 border-slate-300 text-slate-600 hover:bg-slate-50" />
              </CartSummary>

              <CartEmpty>
                <Button as={Link} href="/products" variant="outline" class="w-full border-slate-300 text-slate-600 hover:bg-slate-50">
                  Continue Shopping
                </Button>
              </CartEmpty>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}