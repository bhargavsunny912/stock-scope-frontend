const UseColorGenerator=()=>{

    const random1=Math.floor((Math.random()*100)+20).toFixed(0);
    const random2=Math.floor((Math.random()*100)+20).toFixed(0);
    const random3=Math.floor((Math.random()*100)+20).toFixed(0);

    return {random1:Number(random1),random2:Number(random2),random3:Number(random3)};
}
export default UseColorGenerator;