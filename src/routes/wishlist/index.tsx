import { WishlistRoot, WishlistItems, WishlistItemsView, WishlistItemsEmpty } from "~/components/ui/wishlist"
import { Product, ProductImage, ProductName, ProductPrice, ProductAddToCartTrigger, ProductRemoveFromWishlistTrigger } from "~/components/ui/product"
import { Button } from "~/components/ui/button"
import { Grid } from "~/components/ui/grid"
import { Flex } from "~/components/ui/flex"
import { Text } from "~/components/ui/text"

export default function WishlistPage() {
  return (
    <WishlistRoot>
      <div class="bg-stone-50 min-h-screen">
        <div class="container mx-auto px-4 py-12">
          <Flex class="flex-col items-center mb-12">
            <Text variant="h1" class="text-3xl font-serif font-light">My Wishlist</Text>
            <Text class="text-stone-500 mt-2">Your saved pieces</Text>
          </Flex>
          
          <WishlistItems>
            <Grid cols={2} colsSm={2} colsMd={3} colsLg={4} gap={6}>
              <WishlistItemsView>
                <Product class="group bg-white rounded-sm overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div class="relative overflow-hidden bg-stone-100">
                    <ProductImage class="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div class="absolute top-3 right-3">
                      <ProductRemoveFromWishlistTrigger class="p-2 bg-white rounded-full shadow-md hover:bg-stone-50" />
                    </div>
                  </div>
                  <div class="p-4">
                    <ProductName class="font-medium text-stone-800 line-clamp-2" />
                    <ProductPrice class="font-serif mt-2 text-stone-900" />
                    <ProductAddToCartTrigger class="w-full mt-4 bg-stone-800 hover:bg-stone-700 text-white text-sm py-2 rounded-sm" />
                  </div>
                </Product>
              </WishlistItemsView>
            </Grid>
            <WishlistItemsEmpty>
              <div class="text-center py-16">
                <div class="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg class="w-10 h-10 text-stone-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <h2 class="text-xl font-serif font-light mb-3">Your wishlist is empty</h2>
                <p class="text-stone-500 mb-6">Save furniture you love for later</p>
                <Button href="/products" class="bg-stone-800 hover:bg-stone-700 text-white px-8">
                  Browse Collection
                </Button>
              </div>
            </WishlistItemsEmpty>
          </WishlistItems>
        </div>
      </div>
    </WishlistRoot>
  )
}