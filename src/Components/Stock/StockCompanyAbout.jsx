const StockCompanyAbout=({data})=>{
    return (
        <div className="border p-10 border-gray-400 rounded-xl flex flex-col gap-5">
            <h1 className="text-2xl font-bold">About Company</h1>
            <p>{data?.companyProfile?.companyDescription}</p>
        </div>
    );
}
export default StockCompanyAbout