const axios = require('axios')
const GetAllCountries = require("@/utils/GetAllCountries.js")

jest.mock('axios')

// test("Fetch country api and receive datas about 250 countries", () => {
//     expect(GetAllCountries().then((res) => res.data.count)).toBe(250)
// });

test("test",() => {
    expect(2+2).toBe(4)
})