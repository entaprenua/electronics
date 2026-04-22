import { HeroRoot, HeroItems, HeroItemsView, HeroItem, HeroBackground, HeroContent, HeroTitle, HeroSubtitle, HeroDescription, HeroCtaPrimary } from "~/components/ui/hero"
import { CategoryList, CategoryListEmptyView, CategoryListView, Category, CategoryImage, CategoryName } from "~/components/ui/category"
import { RecommendationsRoot, RecommendationsItems, RecommendationsItemsView, RecommendationsContent } from "~/components/ui/recommendations"
import { Product, ProductImage, ProductName, ProductPrice, ProductStockBadge, ProductAddToCartTrigger, ProductToggleWishlistTrigger } from "~/components/ui/product"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "~/components/ui/carousel"
import { Grid } from "~/components/ui/grid"
import { Flex } from "~/components/ui/flex"
import { Text } from "~/components/ui/text"

function HeroSection() {
  return (
    <HeroRoot class="w-full">
      <Carousel autoplay>
        <CarouselContent>
          <HeroItems>
            <HeroItemsView>
              <CarouselItem class="w-full">
                <HeroItem aspectRatio="21/9" maxHeight={500}>
                  <HeroBackground />
                  <HeroContent contentPosition="center">
                    <HeroSubtitle />
                    <HeroTitle />
                    <HeroDescription />
                    <Flex class="gap-3 mt-6">
                      <HeroCtaPrimary />
                    </Flex>
                  </HeroContent>
                </HeroItem>
              </CarouselItem>
            </HeroItemsView>
          </HeroItems>
        </CarouselContent>
        <CarouselNext class="right-4" />
        <CarouselPrevious class="left-4" />
      </Carousel>
    </HeroRoot>
  )
}

function CategorySection() {
  return (
    <section class="py-16 bg-slate-50">
      <div class="container mx-auto px-4">
        <Text variant="h2" class="text-2xl font-bold text-center mb-2">Shop by Category</Text>
        <Text class="text-slate-500 text-center mb-10">Find the perfect device for your needs</Text>

        <CategoryList mode="root">
          <CategoryListEmptyView />
          <Grid cols={2} colsSm={2} colsMd={4} colsLg={4}>
            <CategoryListView>
              <Category href="categories" class="group">
                <div class="relative overflow-hidden rounded-lg aspect-square">
                  <CategoryImage class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <div class="absolute bottom-4 left-4 right-4">
                    <CategoryName class="text-white font-bold" />
                  </div>
                </div>
              </Category>
            </CategoryListView>
          </Grid>
        </CategoryList>
      </div>
    </section>
  )
}

function ProductCard() {
  return (
    <Product href="/products" class="group bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-200">
      <div class="relative overflow-hidden bg-slate-100">
        <ProductImage class="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105" />
        <div class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <ProductToggleWishlistTrigger class="p-2 bg-white rounded-full shadow-md hover:text-cyan-600" />
        </div>
        <div class="absolute bottom-3 left-3">
          <ProductStockBadge class="text-xs bg-cyan-500 text-white" />
        </div>
      </div>
      <div class="p-4">
        <ProductName class="font-medium text-slate-800 line-clamp-2 min-h-[2.5rem]" />
        <div class="flex items-baseline gap-2 mt-3">
          <ProductPrice class="text-lg font-bold text-cyan-600" />
        </div>
        <div class="mt-4">
          <ProductAddToCartTrigger class="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded" />
        </div>
      </div>
    </Product>
  )
}

function FeaturedSection() {
  return (
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <Flex class="flex-col items-center mb-12">
          <Text variant="h2" class="text-2xl font-bold">New Arrivals</Text>
          <Text class="text-slate-500 mt-2">Latest tech drops</Text>
        </Flex>

        <RecommendationsRoot type="newest" limit={8}>
          <RecommendationsItems>
            <RecommendationsContent>
              <Grid cols={2} colsSm={2} colsMd={3} colsLg={4}>
                <RecommendationsItemsView>
                  <ProductCard />
                </RecommendationsItemsView>
              </Grid>
            </RecommendationsContent>
          </RecommendationsItems>
        </RecommendationsRoot>
      </div>
    </section>
  )
}

function BestsellersSection() {
  return (
    <section class="py-16 bg-slate-50">
      <div class="container mx-auto px-4">
        <Flex class="flex-col items-center mb-12">
          <Text variant="h2" class="text-2xl font-bold">Best Sellers</Text>
          <Text class="text-slate-500 mt-2">Most popular picks</Text>
        </Flex>

        <RecommendationsRoot type="popular" limit={8}>
          <RecommendationsItems>
            <RecommendationsContent>
              <Grid cols={2} colsSm={2} colsMd={3} colsLg={4}>
                <RecommendationsItemsView>
                  <ProductCard />
                </RecommendationsItemsView>
              </Grid>
            </RecommendationsContent>
          </RecommendationsItems>
        </RecommendationsRoot>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <FeaturedSection />
      <BestsellersSection />
    </>
  )
}
