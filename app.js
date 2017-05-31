var ref = firebase.database().ref();
const crossfitData = [];
ref.on("value", function(snapshot) {

   const yourObject = snapshot.val();
  const crossfitData =  Object.keys(yourObject).map(function(key){ return yourObject[key] });
  console.log(crossfitData)

  crossfitData.map((a,b,c)=>{

    const data = Object.keys(a).map(x => a[x]);
    console.log(data[0])
  })
}, function (error) {
   console.log("Error: " + error.code);
});
