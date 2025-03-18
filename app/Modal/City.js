class PopulationCount {
    constructor(year, value) {
      this.year = parseInt(year, 10) || 0;  // Ensure year is a number
      this.value = parseInt(value, 10) || 0; // Ensure value is a number
    }
  
    static fromJson(json) {
      return new PopulationCount(json.year, json.value);
    }
  }
  
  class CountryData {
    constructor(country, code, iso3, populationCounts = []) {
      this.country = country || "Unknown";
      this.code = code || "N/A";
      this.iso3 = iso3 || "N/A";
      this.populationCounts = populationCounts.map((item) => PopulationCount.fromJson(item));
    }
  
    static fromJson(json) {
      return new CountryData(
        json.country,
        json.code,
        json.iso3,
        json.populationCounts || [] // Handle null arrays
      );
    }
  }
  
  class CountryPopulationResponse {
    constructor(error, msg, data = []) {
      this.error = error ?? false;
      this.msg = msg || "";
      this.data = data.map((item) => CountryData.fromJson(item));
    }
  
    static fromJson(json) {
      return new CountryPopulationResponse(
        json.error,
        json.msg,
        json.data || [] // Handle missing 'data'
      );
    }
  }
  
  export { CountryPopulationResponse, CountryData, PopulationCount };
  