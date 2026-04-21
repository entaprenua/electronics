import { A } from "@solidjs/router"
import { Title, Meta } from "@solidjs/meta"
import { Button } from "~/components/ui/button"
import { Flex } from "~/components/ui/flex"
import { Text } from "~/components/ui/text"

export default function NotFoundPage() {
  return (
    <>
      <Title>404 - Page Not Found</Title>
      <Meta name="description" content="The page you're looking for doesn't exist" />
      
      <div class="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <Flex class="flex-col items-center text-center max-w-md">
          <div class="size-24 rounded-full bg-slate-800 flex items-center justify-center mb-6">
            <svg class="w-12 h-12 text-cyan-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </div>
          
          <Text class="text-5xl font-bold text-cyan-500 mb-2">404</Text>
          
          <Text variant="h2" class="text-xl font-light mb-4 text-white">
            Page Not Found
          </Text>
          
          <Text class="text-slate-400 mb-8">
            This page seems to be missing from our collection. Let's get you back home.
          </Text>
          
          <Flex class="gap-4">
            <A href="/">
              <Button class="bg-cyan-600 hover:bg-cyan-500 text-white gap-2">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Back Home
              </Button>
            </A>
          </Flex>
        </Flex>
      </div>
    </>
  )
}