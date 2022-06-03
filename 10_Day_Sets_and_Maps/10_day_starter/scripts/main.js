console.log(countries)
alert('Open the console and check if the countries has been loaded')

const allLanguages = new Set();


for(const country of countries) {
    country.languages.forEach(language => {
        allLanguages.add(language);
    });
}

console.log(allLanguages.size)

const numSpeakingLang = new Map();

function mostSpokenLanugages(countries, topX) {
    const res = new Map();
    for(const country of countries) {
        for(const language of country.languages) {
            if(res.has(language)) {
                res.set(language, res.get(language)+1);
            }
            else {
                res.set(language, 1);
            }
        }
    }
    const sortedMap = new Map([...res.entries()].sort((a, b) => b[1]-a[1]));
    
    const finalMap = new Map();
    let i = 0;
    for(const language of sortedMap) {
        finalMap.set(language, sortedMap.get(language));
        i++;
        if(i >=topX) {
            break;
        }
    }
    return finalMap;
}

console.log(mostSpokenLanugages(countries, 3));