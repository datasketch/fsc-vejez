export default function BannerEight() {
  return (
    <div className="absolute z-40 w-full bg-anti-flash-white pt-20">
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-5 mx-10 lg:mx-20">
        <div className="col-start-1 col-span-3 mt-11">
          <h3 className="text-3xl font-semibold">Explora los <span className="italic text-dark-slate-gray font-normal">datos</span></h3>
        </div>

        <div className="col-start-1 col-span-12 mt-8">
          <img src="/images/dashboard.svg" alt="dashboard" />
        </div>
      </div>
    </div>
  )
}