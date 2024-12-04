const soap = require('soap');

const url = 'http://localhost:8000/calculator?wsdl';  // URL del WSDL del servicio SOAP
const args = { num1: 5, num2: 11 };  // Parámetros para la solicitud SOAP

soap.createClient(url, function (err, client) {
  if (err) {
    console.error('Error creating client:', err);
    return;
  }

  client.add(args, function (err, result) {
    if (err) {
      console.error('Error invoking SOAP method:', err);
      return;
    }

    console.log('Result:', result);
  });
});
