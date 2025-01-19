import { expect } from "chai";
import Calculator from "../src/calculator";


describe("Test suite for Calculator class",()=>{
    it("test add method",()=>{
        //arrange
        const calc = new Calculator()
        //act
        const result = calc.add(1,2)
        //assert
        expect(result).to.equal(3)
    })
    

})