import { clientOnly } from "@solidjs/start"
import { Suspense } from "solid-js"
import { Title, Meta } from "@solidjs/meta"
import { Header } from "~/components/header"
import { Footer } from "~/components/footer"
import { Flex } from "~/components/ui/flex"
import { CartProvider } from "~/components/ui/cart"


/* FIXME: having issue with ssr in cart-context, so we rap around client only for now, solution under way */
export default clientOnly(async () => ({ default: RootLayout }), { lazy: true })

function RootLayout(props) {
  return (
    <>
      <Title>ElectroHub - Your Premium Tech Destination</Title>
      <Meta charset="utf-8" />
      <Meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta name="description" content="Discover the latest electronics, gadgets, and tech at ElectroHub. Shop smartphones, laptops, gaming gear, and more." />

      {/* Open Graph / Facebook */}
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://electrohub.com/" />
      <Meta property="og:title" content="ElectroHub - Your Premium Tech Destination" />
      <Meta property="og:description" content="Discover the latest electronics, gadgets, and tech at ElectroHub. Shop smartphones, laptops, gaming gear, and more." />
      <Meta property="og:image" content="/og-image.png" />

      {/* Twitter */}
      <Meta property="twitter:card" content="summary_large_image" />
      <Meta property="twitter:url" content="https://electrohub.com/" />
      <Meta property="twitter:title" content="ElectroHub - Your Premium Tech Destination" />
      <Meta property="twitter:description" content="Discover the latest electronics, gadgets, and tech at ElectroHub. Shop smartphones, laptops, gaming gear, and more." />
      <Meta property="twitter:image" content="/twitter-image.png" />
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
    </>
  )
}
