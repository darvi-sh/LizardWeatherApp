function weatherIcon(iconCode) {
  let map = {
    'clear-day':            '\uf00d',
    'clear-night':          '\uf02e',
    'rain':                 '\uf019',
    'snow':                 '\uf01b',
    'sleet':                '\uf0b5',
    'wind':                 '\uf050',
    'fog':                  '\uf014',
    'cloudy':               '\uf013',
    'partly-cloudy-day':    '\uf002',
    'partly-cloudy-night':  '\uf031',
    'hail':                 '\uf015',
    'thunderstorm':         '\uf01e',
    'tornado':              '\uf056',
  };

  return map[iconCode] || '\uf07b';
}

function windIcon(iconCode) {
  return '\uf0b1';
}

export { weatherIcon, windIcon } 