'use strict';

module.exports.hello = async (event) => {
  shared();
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello from handler',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

function shared() {
  // common code here
}


module.exports.hellooo = async (event) => {
  shared();
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello from handler.hello2'
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
