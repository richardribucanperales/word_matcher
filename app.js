console.log("loaded")

var ad = ["one", "two", 3, "four", "fice"];
var ee = ["one", "two", 3, "four", "fiee"];
var i;
var text = ""
for (i=0;i<=ad.lenght;i++){
  if (ad[i] !== ee[i]){
    console.log(ad[i] + " does not equal " + ee[i]);
   }else{
     console.log("the same");
   };
}
console.log(text)
