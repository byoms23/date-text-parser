// Imports
const moment = require('moment')

const parser = require('..')


// Default values
const current_year = moment().year()


// Specs
describe("Date Text Parser", () => {
    
    describe("For Absolute Dates", () => {
        it("should parse full dates", () => {
            const info = parser.parse("13-12-2012")
            expect(info.start.date()).toBe(13)
            expect(info.start.month()).toBe(11)
            expect(info.start.year()).toBe(2012)
        })

        it("should parse short dates", () => {
            const info = parser.parse("18/06")
            expect(info.start.date()).toBe(18)
            expect(info.start.month()).toBe(5)
            expect(info.start.year()).toBe(current_year)
        })

        it("should parse short dates strings", () => {
            const info = parser.parse("1 de julio de 2018")
            expect(info.start.date()).toBe(1)
            expect(info.start.month()).toBe(6)
            expect(info.start.year()).toBe(2018)
        })

        it("should parse short dates strings", () => {
            const info = parser.parse("1 de marzo")
            expect(info.start.date()).toBe(1)
            expect(info.start.month()).toBe(2)
            expect(info.start.year()).toBe(current_year)
        })
        
    })
    
    describe("For Relative Dates", () => {
        it("should parse today string", () => {
            const info = parser.parse("hoy")
            expect(info.start.date()).toBe(moment().date())
            expect(info.start.month()).toBe(moment().month())
            expect(info.start.year()).toBe(current_year)
        })

        it("should parse tomorrow string", () => {
            const info = parser.parse("mañana")
            const tomorrow = moment().add(1, "day");
            
            expect(info.start.date()).toBe(tomorrow.date())
            expect(info.start.month()).toBe(tomorrow.month())
            expect(info.start.year()).toBe(tomorrow.year())
        })

        it("should parse upcoming days", () => {
            const info = parser.parse("proximo lunes")
            const next = moment().add(1, "week").startOf("week")

            expect(info.start.day()).toBe(1)
            expect(info.start.day()).toBe(next.day())
            expect(info.start.month()).toBe(next.month())
            expect(info.start.year()).toBe(next.year())
        })
    })

    describe("For Unknows String", () => {
        it("should not throw exception", () => {
            expect(parser.parse, "una casa").not.toThrow(null)
        })

        it("should return null", () => {
            const info = parser.parse("una casa")
            expect(info).toBe(null)
        })

        it("should not parse ambiguous references", () => {
            const info = parser.parse("la proxima semana")
            expect(info).toBe(null)
        })

        it("should not parse ambiguous months references", () => {
            const info = parser.parse("el mes que viene")
            expect(info).toBe(null)
        })
    })

})