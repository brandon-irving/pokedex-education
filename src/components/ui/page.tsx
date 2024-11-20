export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100 p-6 md:p-10 lg:p-12">
      <div className="mx-auto w-full max-w-7xl rounded-lg bg-white p-6 shadow-md md:p-8 lg:p-10">{children}</div>
    </div>
  )
}
