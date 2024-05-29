export default function ResourceCard({ data }: any) {
    return (
        <div className="w-full rounded-xl shadow-lg flex gap-7 p-5 mb-5">
            <div className="w-1/4">
                <img src={data.image} className="" />
            </div>
            <div className="w-3/4">
                <h3>Informe</h3>
                <h5>{data.author}</h5>
                <p className="text-sm">{data.year}</p>
                <h4 className="text-xl leading-[22px] font-semibold mt-7">{data.title}</h4>
            </div>
        </div>
    )
}