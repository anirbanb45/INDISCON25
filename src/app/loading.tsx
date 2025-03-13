import Image from "next/image"
export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="mb-8 animate-float">
        <Image
          src="https://res.cloudinary.com/dk6m1qejk/image/upload/v1739141907/IEEE/mdglklfynkw029ds5qkd.svg"
          alt="Conference Logo"
          width={300}
          height={100}
          className="animate-pulse"
        />
      </div>
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 animate-fade-in">
        Loading Indiscon 2025
      </h2>
      <div className="w-64 h-2 bg-gray-200 rounded-full mb-4 overflow-hidden">
        <div className="h-full bg-blue-500 rounded-full animate-loading-bar"></div>
      </div>
      <div className="mt-8 flex space-x-4">
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
      </div>
    </div>
  )
}

