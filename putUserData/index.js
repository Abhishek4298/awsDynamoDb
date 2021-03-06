'use strict'
const AWS = require('aws-sdk');

AWS.config.update({ region: "ap-south-1"});

exports.handler = async (event, context) => {
  const ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08"});
  const documentClient = new AWS.DynamoDB.DocumentClient({ region: "ap-south-1"});

  const params = {
    TableName: "Users",
    Item: {
      id: "2",
      firstName: "karan",
      lastName: "patel"
    }
  }

  try {
    const data = await documentClient.put(params).promise();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}