const resultKeys = [0, 1, 2, 3, 4, 5];

function getCountryData(country: number, results: any) {
  const countryData = resultKeys.reduce(
    (acc, next) => {
      if (results[next][country] || results[next][country] === 0) {
        const matchupKeys = Object.keys(results[next]);
        const oppositionCountryKey = matchupKeys.find(
          (key) => key !== String(country)
        );
        const countryGoals = results[next][country];
        const oppositionGoals = results[next][+oppositionCountryKey!];

        acc.GF = acc.GF + countryGoals;
        acc.GA = acc.GA + oppositionGoals;
        acc.MP++;

        if (countryGoals > oppositionGoals) {
          acc.W += 1;
          acc.Pts += 3;
        }
        if (countryGoals === oppositionGoals) {
          acc.D += 1;
          acc.Pts += 1;
        }
        if (countryGoals < oppositionGoals) {
          acc.L += 1;
        }
      }

      return acc;
    },
    { GF: 0, GA: 0, Pts: 0, W: 0, D: 0, L: 0, MP: 0 }
  );

  return countryData;
}

export default getCountryData;
