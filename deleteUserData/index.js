'use strict'
const AWS = require('aws-sdk');

AWS.config.update({ region: "ap-south-1"});

exports.handler = async (event, context) => {
  const ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08"});
  const documentClient = new AWS.DynamoDB.DocumentClient({ region: "ap-south-1"});

  const params = {
    TableName: "Users",
    Key: {
      id: "2"
    }
  }

  try {
    const data = await documentClient.delete(params).promise();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
