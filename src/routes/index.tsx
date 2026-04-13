import { CategoryList, CategoryListView, CategorySubcategories, Category } from "~/components/ui/category"
import { CategoryName, CategoryDepth, CategorySlug } from "~/components/ui/category"

export default function HomePage() {
  return (
    <div class="min-h-screen p-8">
      <h1 class="text-3xl font-bold mb-6">Categories</h1>

      <CategoryList structure="tree">
        <div class="space-y-4">
          <CategoryListView>
            <Category class="border rounded-lg p-4">
              <div class="flex items-center gap-3">
                <CategoryDepth class="bg-muted w-6 h-6 rounded flex items-center justify-center text-xs font-medium" />
                <CategoryName class="font-medium" />
                <span class="text-muted-foreground text-xs ml-auto">
                  <CategorySlug />
                </span>
              </div>

              <CategorySubcategories>
                <div class="ml-8 mt-3 space-y-2">
                  <CategoryListView>
                    <Category class="border-l-2 border-muted pl-4 py-2">
                      <div class="flex items-center gap-3">
                        <CategoryDepth class="bg-muted w-5 h-5 rounded flex items-center justify-center text-xs font-medium" />
                        <CategoryName />
                      </div>

                      <CategorySubcategories>
                        <div class="ml-6 mt-2">
                          <CategoryListView>
                            <Category class="border-l-2 border-muted pl-4 py-2">
                              <div class="flex items-center gap-2">
                                <CategoryDepth class="bg-muted w-4 h-4 rounded flex items-center justify-center text-xs font-medium" />
                                <CategoryName />
                              </div>
                            </Category>
                          </CategoryListView>
                        </div>
                      </CategorySubcategories>
                    </Category>
                  </CategoryListView>
                </div>
              </CategorySubcategories>
            </Category>
          </CategoryListView>
        </div>
      </CategoryList>
    </div>
  )
}
