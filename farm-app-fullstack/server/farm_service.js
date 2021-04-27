const fs = require('fs');

class FarmService {

    constructor(data_file_path){
        // Load up json farm data
        const data = fs.readFileSync(data_file_path);
        this.farms = JSON.parse(data);

    }

    getAllFarms() {
        return this.farms;
    }

    searchByName(name) {
        let results = [];
        Object.entries(this.farms).forEach((farm) => {
            let [key, value] = farm;
            let searchTerm = name.toLowerCase();
            let searchableName = value.name.toLowerCase();

            if (searchableName.includes(searchTerm)) {
                results.push(value);
            }
        })
        return results;
    }

    searchByMinimumRevenue(revenue) {
        let results = [];
        Object.entries(this.farms).forEach((farm) => {
            let [key, value] = farm;
            let farmRevenue = value.revenue

            if (farmRevenue >= revenue) {
                results.push(value);
            }
        })
        return results;
    }
}

module.exports = FarmService;