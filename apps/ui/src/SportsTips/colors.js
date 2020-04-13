function RGBToHex(r,g,b) {
    r = (r).toString(16);
   g = (g).toString(16);
   b = (b).toString(16);
 
   if (r.length === 1)
     r = "0" + r;
   if (g.length === 1)
     g = "0" + g;
   if (b.length === 1)
     b = "0" + b;
 
   return "#" + r + g + b;
 }

export function getColor(){
   return RGBToHex((Date.now()+212)%210,(Date.now()+175)%210,(Date.now()+55)%210);
}
setInterval(()=>{
  colors.primary=getColor();
},1000);
var colors={
    primary:getColor(),
    text:"#333",
    background: "#fff",
    border:"#ccc",
    good:"#009C00",
    bad:"#CA0D0D",
    pending:"#cc0"
}
export default colors;