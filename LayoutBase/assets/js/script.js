const hostName = 'https://covidanalytics-grupo5.test/';

// Pais por fecha
async function consultaPaisDia() {
  return await apiCall('GET', hostName + '/api/entries', null);
};

async function consultasuma() {
  return await apiCall('GET', hostName + '/api/entries');
};

const apiCall = async (method, url) => {
  let config = {
    method: method,
    url: url,
  }

  const response = await axios(config);

  return response.data;
}

// Exportación de las funciones

export {
  consultaPaisDia,
  consultasuma,
}