import { CategoryList, CategoryListEmptyView, CategoryListView, CategoryListContent, Category, CategoryName, CategoryImage } from "~/components/ui/category"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "~/components/ui/breadcrumb"
import { Grid } from "~/components/ui/grid"
import { Flex } from "~/components/ui/flex"
import { Text } from "~/components/ui/text"

export default function CategoriesPage() {
  return (
    <div class="bg-slate-50 min-h-screen">
      <div class="bg-white border-b">
        <div class="container mx-auto px-4 py-6">
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" class="text-slate-500">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/categories" class="text-slate-800 font-medium">Categories</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
      
      <div class="container mx-auto px-4 py-12">
        <Flex class="flex-col items-center mb-12">
          <Text variant="h1" class="text-3xl font-bold">Shop by Category</Text>
          <Text class="text-slate-500 mt-2">Find the perfect device for your needs</Text>
        </Flex>

        <CategoryList mode="root">
          <CategoryListEmptyView />
          <CategoryListContent>
            <Grid cols={2} colsSm={2} colsMd={3} colsLg={4}>
              <CategoryListView>
                <Category href="categories" class="group">
                  <div class="relative overflow-hidden rounded-lg aspect-[4/5]">
                    <CategoryImage class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                    <div class="absolute bottom-6 left-6 right-6">
                      <CategoryName class="text-white text-lg font-bold" />
                    </div>
                  </div>
                </Category>
              </CategoryListView>
            </Grid>
          </CategoryListContent>
        </CategoryList>
      </div>
    </div>
  )
}