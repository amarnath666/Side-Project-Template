import { FeatureSix } from "../landing/Bento";

export default function Features() {
  return (
    <div className="py-15 lg:py-24 sm:py-32">
      <div className="mx-auto max-w-2xl lg:max-w-[1336px] px-4 md:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4 text-center">Features</h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 text-center">
          Everything you need to build and showcase your product
        </p>

        <div className="mt-8 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {/* AI Automation */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-4 md:px-6 lg:px-8 pt-4 pb-3 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  AI Automation
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Leverage built-in AI features to automate repetitive tasks and boost
                  productivity right out of the box.
                </p>
              </div>
              <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm mt-4">
                <div className="size-full bg-gray-200 flex items-center justify-center rounded-md">
                  <span className="text-gray-500">Image Placeholder</span>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl" />
          </div>

          {/* Performance */}
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-4 md:px-6 lg:px-8 pt-4 pb-3 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Performance
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores
                  impedit.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center  max-lg:pt-10   mt-4">
                <div className="w-full  bg-gray-200 h-full flex items-center justify-center rounded-md">
                  <span className="text-gray-500">Image Placeholder</span>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl" />
          </div>

          {/* Security */}
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-4 md:px-6 lg:px-8 pt-4 pb-3 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Security
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse
                  semper morbi.
                </p>
              </div>
              <div className="@container flex flex-1 items-center  mt-4">
                <div className="h-full w-full bg-gray-200 flex items-center justify-center rounded-md">
                  <span className="text-gray-500">Image Placeholder</span>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
          </div>

          {/* Powerful Analytics */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-4 md:px-6 lg:px-8 pt-4 pb-3 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Powerful Analytics
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Gain insights with intuitive analytics dashboards designed to help you
                  track performance and make smarter decisions.
                </p>
                </div>
                <div className="pt-6 h-full">
                  <div className="w-full h-full  bg-gray-200 flex items-center justify-center rounded-md">
                    <span className="text-gray-500">Image Placeholder</span>
                  </div>
                </div>
            
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
}