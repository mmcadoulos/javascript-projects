const processor = require('../processor.js')

describe("transmission processor", function() {
   //  TODO: put tests here
  test("should take a string and return an object", function(){
    let result = processor("9701::<489584872710>");
    expect(typeof result).toBe('object');
  });

  test("should return '-1' if string does NOT contain '::'", function(){
    let result = processor("9701<489584872710>");
    expect(result).toBe(-1);
  });

  test("should return id in object", () => {
    let result = processor("9701::<489584872710>");
    expect(result.id).not.toBeUndefined();
  });

  test("should convert id to number", () => {
    let result = processor("9701::<489584872710>");
    expect(result.id).toBe(9701);
  });

  test("should return rawData in object", () => {
    let result = processor("9701::<489584872710>");
    expect(result.rawData).not.toBeUndefined();
  });

  test("should return -1 for rawData if missing < at position 0", () => {
    let result = processor("9701::489584872710>")
    expect(result.rawData).toBe(-1);
  });

  test("should return -1 for rawData missing > at final position", () => {
    let result = processor ("9701::<489584872710");
    expect(result.rawData).toBe(-1);
  });

  test("should return -1 for rawData missing both < and > at ends", () => {
    let result = processor("9701::487297403495720912");
    expect(result.rawData).toBe(-1);
  });

  test("should return -1 for rawData if < is in midst of string", ()=>{
    let result = processor("9701::<487297403495<720912>");
    expect(result.rawData).toBe(-1);
  });

  test("should return -1 for rawData if > is in midst of string", ()=>{
    let result = processor("9701::<487297403495>720912>");
    expect(result.rawData).toBe(-1);
  });

  test("remove leading and trailing whitespace from transmission", ()=>{
    let result = processor("    9701::<487297403495720912>     ");
    expect(result.transmission).toBe("9701::<487297403495720912>");
  });

  test("should return -1 if id cannot be converted to a number", ()=>{
    let result = processor("97BBBB01::<487297403495720912>");
    expect(result).toBe(-1);
  });

  test("should return -1 if more than one '::' is found", ()=>{
    let result = processor("9701::<487297403495720912>::909090");
    expect(result).toBe(-1);
  });

  //Working but messes up the other tests which contradicts earlier instructions
  // test("rawData should NOT include <> as part of its value", ()=>{
  //   let result = processor("9701::<487297403495720912>");
  //   expect(result.rawData).toBe("487297403495720912");
  // });

  test("rawData should return -1 if a non-number is between <>", ()=>{
    let result = processor("9701::<4872974034b95720912>");
    expect(result).toBe(-1);
  })

  


 });