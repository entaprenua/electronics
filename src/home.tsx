import { clientOnly } from "@solidjs/start"
import { Suspense } from "solid-js"
import { ColorMode } from "~/components/ui/color-mode"
import { Header } from "~/components/Header"
import { Footer } from "~/components/Header"
import { CartProvider } from "~/components/ui/cart"
import { OrderProvider } from "~/components/ui/order"
import { ErrorBoundary, ErrorBoundaryMessage, ErrorBoundaryResetButton } from "~/components/ui/error-boundary"
import { Flex } from "~/components/ui/flex"
import { Text } from "~/components/ui/text"
import AlertTriangleIcon from "lucide-solid/icons/alert-triangle"
export default clientOnly(async () => ({ default: Home }), { lazy: true })

function Home(props) {
  return (
    <ColorMode>
      <ErrorBoundary
        fallback={
          <Flex class="min-h-screen w-full flex-col items-center justify-center gap-6 bg-background p-8">
            <div class="rounded-full bg-destructive/10 p-6">
              <AlertTriangleIcon class="h-12 w-12 text-destructive" />
            </div>
            <Flex class="flex-col items-center gap-2 text-center">
              <Text variant="h2" class="font-bold">Something went wrong</Text>
              <Text variant="body1" class="text-muted-foreground max-w-md">
                <ErrorBoundaryMessage />
              </Text>
            </Flex>
            <ErrorBoundaryResetButton class="px-8">
              Try Again
            </ErrorBoundaryResetButton>
          </Flex>
        }
      >
        <OrderProvider>
          <CartProvider>
            <Header />
            <Suspense fallback={
              <Flex class="min-h-[calc(100vh-5rem)] items-center justify-center">
                <div class="animate-pulse text-muted-foreground">Loading...</div>
              </Flex>
            }>
              {props.children}
            </Suspense>
            <Footer />
          </CartProvider>
        </OrderProvider>
      </ErrorBoundary>
    </ColorMode>
  )
}
