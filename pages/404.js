import Link from "next/link";

function Custom404() {
  return (
    <div>
      <div
        class="
    flex
    items-center
    justify-center
    w-screen
    h-screen
    bg-gradient-to-b
    from-neutral-800
    to-neutral-700
  "
      >
        <div class="px-40 py-20 bg-neutral-100  rounded-md shadow-2xl">
          <div class="flex flex-col items-center">
            <h1 class="font-bold text-red-500 text-9xl">404</h1>

            <h6 class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span class="text-red-500">Oops!</span> Page not found
            </h6>

            <p class="mb-8 text-center text-gray-500 md:text-lg">
              The page you’re looking for doesn’t exist.
            </p>

            <Link
              aria-label="Home Page"
              href="/"
              class="px-6 py-2 text-sm font-semibold text-neutral-900 bg-neutral-200 duration-300 hover:bg-neutral-300 drop-shadow-md rounded"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Custom404;
