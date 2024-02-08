function processor(transmission){
    transmission = transmission.trim();
    if (transmission.indexOf("::") < 0){
        //Data is invalid
        return -1;
    }
    //let parts = transmission.slice(0, transmission.indexOf(":"));
    let parts = transmission.split("::");
    if (parts.length > 2){
        return -1;
    }
    let rawData = parts[1];
    if (isNaN(Number(parts[0]))){
        return -1;
    }
    if (rawData[0] !== "<"){
        rawData = -1;
    }
    if (rawData[rawData.length - 1] !== ">"){
        rawData = -1;
    }
    if (parts[1].slice(1, rawData.length - 2).includes("<")){
        rawData = -1;
    }
    if (parts[1].slice(1, rawData.length - 2).includes(">")){
        rawData = -1;
    }
    //rawData = rawData.slice(1, rawData.length - 1);
    // if(isNparts[1].slice(1, parts.length -1))
    for(let i = 1; i < rawData.length -1; i++){
        if (isNaN(Number(rawData[i]))){
            return -1;
        };
    }
    return {
        id: Number(parts[0]),
        rawData: rawData,
        transmission: transmission
    };
};
// string = "9701::<489584872710>";
// console.log(string.indexOf("::"));
// console.log(processor(string));
let result = processor("9701::<487297403495720912>");
console.log(typeof result.rawData);
module.exports = processor;