const countries = require('world-countries');

exports.reqCountries = async (req, res) => {
   let request = req.body.country.toLowerCase();
   var countryArr = [];
   const result = countries.reduce((acc, value) => {
      let name = value.name.common.toLowerCase();
      console.log(name);
      if(value.name.common === request ){
      }
      acc = countryArr;
      return acc;
   }, []);
   console.log(result);
   res.json(result);
}