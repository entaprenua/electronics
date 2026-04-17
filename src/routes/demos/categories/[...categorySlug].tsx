import {
  Category,
  CategoryImage,
  CategoryName,
  CategorySlug,
  CategorySubcategories,
  CategoryListContent,
  CategoryListView,
} from "~/components/ui/category"
import {
  Product,
  ProductList,
  ProductListContent,
  ProductListView,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductComparePrice,
  ProductStockBadge,
  ProductAddToCartTrigger,
  ProductToggleWishlistTrigger,
} from "~/components/ui/product"
import { Grid } from "~/components/ui/grid"

function CategoryCard() {
  return (
    <Category href="categories" class="block bg-white rounded-lg border overflow-hidden hover:shadow-md transition-shadow">
      <CategoryImage class="w-full aspect-square object-cover" />
      <div class="p-4">
        <CategoryName class="font-medium text-center" />
      </div>
    </Category>
  )
}
function ProductCard() {
  return (
    <Product class="group bg-white rounded-lg border overflow-hidden hover:shadow-lg transition-all duration-200">
      <div class="relative overflow-hidden">
        <ProductImage class="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105" />
        <div class="absolute top-2 right-2">
          <ProductToggleWishlistTrigger class="p-2 bg-white/90 rounded-full hover:bg-white" />
        </div>
        <div class="absolute bottom-2 left-2">
          <ProductStockBadge class="text-xs" />
        </div>
      </div>
      <div class="p-4">
        <ProductName class="font-medium line-clamp-2 min-h-[2.5rem]" />
        <div class="flex items-baseline gap-2 mt-2">
          <ProductPrice class="text-lg font-bold text-primary" />
          <ProductComparePrice class="text-sm text-muted-foreground" />
        </div>
        <div class="mt-4">
          <ProductAddToCartTrigger class="w-full" />
        </div>
      </div>
    </Product>
  )
}

export default function CategoryPage() {
  return (
    <div class="min-h-screen bg-background">
      <div class="bg-white border-b">
        <div class="max-w-7xl mx-auto px-4 py-8">
          <Category>
            <div class="flex items-center gap-6">
              <CategoryImage class="w-24 h-24 rounded-lg object-cover" />
              <div>
                <CategoryName class="text-3xl font-bold" />
              </div>
            </div>
          </Category>
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-4 py-8">
        <Category>
          <CategorySubcategories>
            <CategoryListContent class="mb-8">
              <div class="mb-4">
                <h2 class="text-xl font-semibold">Subcategories</h2>
              </div>
              <Grid cols={4} gap={4}>
                <CategoryListView>
                  <CategoryCard />
                </CategoryListView>
              </Grid>
            </CategoryListContent>
          </CategorySubcategories>
          <ProductList>
            <ProductListContent class="mb-8">
              <div class="mb-4">
                <h2 class="text-xl font-semibold">Products</h2>
              </div>
              <Grid cols={4} gap={4}>
                <ProductListView>
                  <ProductCard />
                </ProductListView>
              </Grid>
            </ProductListContent>
          </ProductList>
        </Category>
      </div>
    </div>
  )
}
