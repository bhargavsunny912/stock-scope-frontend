import IpoBody from "./IpoBody";
import IpoHead from "./IpoHead";
import UseFetchApi from "../../Custom Hooks/UseFetchApi";
import IpoSkeleton from "./IpoSkeleton";

const IpoContainer = () => {

  const {data,error,loading}=UseFetchApi(`${import.meta.env.VITE_API_URL}/api/ipo`);

    if(loading || error){
        return (
           <div className="mx-5 my-10">
            <IpoHead />
            <IpoSkeleton />
          </div>
        );
    }


  return (
    <div className="mx-5 my-10">
      <IpoHead />
      <IpoBody data={data} />
    </div>
  );
};

export default IpoContainer;
