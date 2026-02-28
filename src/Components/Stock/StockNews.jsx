const StockNews = ({data}) => {
    return (
        <div className="rounded-xl flex flex-col gap-5 p-10 border border-gray-400 h-[80vh] overflow-y-scroll">
            <h1 className="text-2xl font-bold">Recent News</h1>
            {data?.map((d,index)=>{
                const date=d?.date?.split("T")[0];
                return (<div key={index} className="rounded-lg bg-gray-100 p-5">
                <h1 className="font-bold">{d?.headline} ({date})</h1>
                <p>{d?.summary}</p>
            </div>);
            })}
        </div>
    );
}

export default StockNews;