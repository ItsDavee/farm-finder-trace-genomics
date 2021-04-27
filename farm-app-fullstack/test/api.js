var expect  = require("chai").expect;
var request = require("request");

describe("Farm Finder API", function() {

    describe("Get all farms", function() {

        let url = "http://localhost:8000/farm";

        it("Returns 200 Status Code", function() {
            request(url, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
            });
        });

        it("Response contains six farms", function() {
            request(url, function(error, response, body) {
                let json_body = JSON.parse(body)
                expect(Object.keys(json_body).length).to.equal(6);
            });
        });
    });

    describe("Find farm by name", function() {

        let url = "http://localhost:8000/farm/search/name/";
        let searchTerm = "star";

        it("Returns 200 Status Code", function() {
            request(url + searchTerm, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
            });
        });

        it(`Response contains two farms with ${searchTerm} in name`, function() {
            request(url + searchTerm, function(error, response, body) {
                let json_body = JSON.parse(body)
                // this is constant dataset so we know there are 2
                expect(Object.keys(json_body).length).to.equal(2);

                // still validate that name does contain search term
                Object.entries(json_body).forEach((farm) => {
                    let [key, value] = farm;
                    let needle = searchTerm.toLowerCase();
                    let haystack = value.name.toLowerCase();
                    expect(haystack.includes(needle)).to.equal(true);
                })
            });
        });
    });

    describe("Find farm by minimum revenue", function() {

        let url = "http://localhost:8000/farm/search/revenue/";
        let revenue = "150000"
        it("Returns 200 Status Code", function() {
            request(url + revenue, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
            });
        });

        it(`Response contains one farm with revenue >= ${revenue}`, function() {
            request(url + revenue, function(error, response, body) {
                let json_body = JSON.parse(body)
                expect(Object.keys(json_body).length).to.equal(1);

                // still validate that revenue is >= requested min revenue
                Object.entries(json_body).forEach((farm) => {
                    let [key, value] = farm;
                    let farmRevenue = value.revenue
                    expect(farmRevenue >= revenue).to.equal(true);
                })
            });
        });
    });
});