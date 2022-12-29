{
  "StartAt": "Which database?",
  "States": {
    "Which database?": {
      "Type": "Choice",
      "Choices": [
        {
          "Variable": "$.databaseName",
          "StringMatches": "belle*",
          "Next": "Get belle secret"
        },
        {
          "Variable": "$.databaseName",
          "StringMatches": "jasmine*",
          "Next": "Get engines secret"
        },
        {
          "Variable": "$.databaseName",
          "StringMatches": "anna*",
          "Next": "Get anna secret"
        }
      ]
    },
    "Get belle secret": {
      "Type": "Task",
      "Next": "Parse belle secret value",
      "Parameters": {
        "SecretId": "qa2/belle-sql-secrets"
      },
      "Resource": "arn:aws:states:::aws-sdk:secretsmanager:getSecretValue",
      "ResultPath": "$.databaseSecret"
    },
    "Parse belle secret value": {
      "Type": "Pass",
      "Parameters": {
        "ParsedValue.$": "States.StringToJson($.databaseSecret.SecretString)"
      },
      "ResultPath": "$.databaseSecret",
      "Next": "Create new database username and password"
    },
    "Create new database username and password": {
      "Type": "Task",
      "Resource": "arn:aws:states:::lambda:invoke",
      "Parameters": {
        "Payload.$": "$",
        "FunctionName": "arn:aws:lambda:us-east-1:754664436462:function:qa2-Database-UserDatabaseCreatorPersonalUsernameGe-dgk0cAkQs0VW"
      },
      "Retry": [
        {
          "ErrorEquals": [
            "Lambda.ServiceException",
            "Lambda.AWSLambdaException",
            "Lambda.SdkClientException"
          ],
          "IntervalSeconds": 2,
          "MaxAttempts": 6,
          "BackoffRate": 2
        }
      ],
      "ResultPath": "$.newCreds",
      "Comment": "returns back {username,password}",
      "Next": "Create user on the database",
      "ResultSelector": {
        "username.$": "$.Payload.username",
        "password.$": "$.Payload.password",
        "otsUrl.$": "$.Payload.otsUrl"
      }
    },
    "Create user on the database": {
      "Type": "Task",
      "Resource": "arn:aws:states:::lambda:invoke",
      "Parameters": {
        "FunctionName": "arn:aws:lambda:us-east-1:754664436462:function:qa2-Database-Databaseadhocsingl2E02F587-yZxuEpPiDCUc",
        "Payload": {
          "script.$": "States.Format('CREATE ROLE {} LOGIN PASSWORD \\'{}\\'; GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public to {}; GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public to {}; GRANT {} to {};', $.newCreds.username, $.newCreds.password, $.newCreds.username, $.newCreds.username, $.databaseSecret.ParsedValue.SQL_USER,$.newCreds.username)",
          "databaseName.$": "$.databaseSecret.ParsedValue.SQL_DATABASE"
        }
      },
      "Retry": [
        {
          "ErrorEquals": [
            "Lambda.ServiceException",
            "Lambda.AWSLambdaException",
            "Lambda.SdkClientException"
          ],
          "IntervalSeconds": 2,
          "MaxAttempts": 6,
          "BackoffRate": 2
        }
      ],
      "ResultPath": "$.databaseResults",
      "Next": "Send credentials to user"
    },
    "Send credentials to user": {
      "Type": "Task",
      "Parameters": {
        "Destination": {
          "ToAddresses.$": "States.Array($.email)"
        },
        "Message": {
          "Body": {
            "Text": {
              "Data.$": "States.Format('New credentials were generated for you: \n\ndatabase: {}\nusername: {}\npassword: {} \nhost: {}', $.databaseSecret.ParsedValue.SQL_DATABASE, $.newCreds.username, $.newCreds.otsUrl, $.databaseSecret.ParsedValue.SQL_HOST)"
            }
          },
          "Subject": {
            "Data": "New database access credentials have been created for you!"
          }
        },
        "Source": "devops@momnt.com"
      },
      "Resource": "arn:aws:states:::aws-sdk:ses:sendEmail",
      "End": true
    },
    "Get engines secret": {
      "Type": "Task",
      "Parameters": {
        "SecretId": "qa2/engines-secrets"
      },
      "Resource": "arn:aws:states:::aws-sdk:secretsmanager:getSecretValue",
      "ResultPath": "$.databaseSecret",
      "Next": "Parse engines secret value"
    },
    "Parse engines secret value": {
      "Type": "Pass",
      "Parameters": {
        "ParsedValue.$": "States.StringToJson($.databaseSecret.SecretString)"
      },
      "ResultPath": "$.databaseSecret",
      "Next": "Create new database username and password for engines"
    },
    "Create new database username and password for engines": {
      "Type": "Task",
      "Resource": "arn:aws:states:::lambda:invoke",
      "Parameters": {
        "Payload.$": "$",
        "FunctionName": "arn:aws:lambda:us-east-1:754664436462:function:qa1-Database-UserDatabaseCreatorPersonalUsernameGe-dmIs8HXvJAYc"
      },
      "Retry": [
        {
          "ErrorEquals": [
            "Lambda.ServiceException",
            "Lambda.AWSLambdaException",
            "Lambda.SdkClientException"
          ],
          "IntervalSeconds": 2,
          "MaxAttempts": 6,
          "BackoffRate": 2
        }
      ],
      "ResultPath": "$.newCreds",
      "Comment": "returns back {username,password}",
      "ResultSelector": {
        "username.$": "$.Payload.username",
        "password.$": "$.Payload.password",
        "otsUrl.$": "$.Payload.otsUrl"
      },
      "Next": "Create user on jasmine"
    },
    "Create user on jasmine": {
      "Type": "Task",
      "Resource": "arn:aws:states:::lambda:invoke",
      "Parameters": {
        "FunctionName": "arn:aws:lambda:us-east-1:754664436462:function:qa2-Database-Databaseadhocsingl2E02F587-yZxuEpPiDCUc",
        "Payload": {
          "script.$": "States.Format('CREATE ROLE {} LOGIN PASSWORD \\'{}\\'; GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA engine_rules to {}; GRANT ALL PRIVILEGES ON SCHEMA engine_rules to {}; GRANT {} to {};', $.newCreds.username, $.newCreds.password, $.newCreds.username, $.newCreds.username, $.databaseSecret.ParsedValue.PGUSER, $.newCreds.username)",
          "databaseName.$": "$.databaseSecret.ParsedValue.PGDATABASE"
        }
      },
      "Retry": [
        {
          "ErrorEquals": [
            "Lambda.ServiceException",
            "Lambda.AWSLambdaException",
            "Lambda.SdkClientException"
          ],
          "IntervalSeconds": 2,
          "MaxAttempts": 6,
          "BackoffRate": 2
        }
      ],
      "ResultPath": "$.databaseResults",
      "Next": "Send credentials to jasmine user"
    },
    "Send credentials to jasmine user": {
      "Type": "Task",
      "Parameters": {
        "Destination": {
          "ToAddresses.$": "States.Array($.email)"
        },
        "Message": {
          "Body": {
            "Text": {
              "Data.$": "States.Format('New credentials were generated for you: \n\ndatabase: {}\nusername: {}\npassword: {} \nhost: {}', $.databaseSecret.ParsedValue.PGDATABASE, $.newCreds.username, $.newCreds.otsUrl, $.databaseSecret.ParsedValue.PGHOST)"
            }
          },
          "Subject": {
            "Data": "New database access credentials have been created for you!"
          }
        },
        "Source": "devops@momnt.com"
      },
      "Resource": "arn:aws:states:::aws-sdk:ses:sendEmail",
      "End": true
    },

    "Get anna secret": {
      "Type": "Task",
      "Next": "Parse anna secret value",
      "Parameters": {
        "SecretId": "qa2/anna-sql-secrets"
      },
      "Resource": "arn:aws:states:::aws-sdk:secretsmanager:getSecretValue",
      "ResultPath": "$.databaseSecret"
    },
    "Parse anna secret value": {
      "Type": "Pass",
      "Parameters": {
        "ParsedValue.$": "States.StringToJson($.databaseSecret.SecretString)"
      },
      "ResultPath": "$.databaseSecret",
      "Next": "Create new database username and password for anna"
    },
    "Create new database username and password for anna": {
      "Type": "Task",
      "Resource": "arn:aws:states:::lambda:invoke",
      "Parameters": {
        "Payload.$": "$",
        "FunctionName": "arn:aws:lambda:us-east-1:754664436462:function:qa2-Database-UserDatabaseCreatorPersonalUsernameGe-dgk0cAkQs0VW"
      },
      "Retry": [
        {
          "ErrorEquals": [
            "Lambda.ServiceException",
            "Lambda.AWSLambdaException",
            "Lambda.SdkClientException"
          ],
          "IntervalSeconds": 2,
          "MaxAttempts": 6,
          "BackoffRate": 2
        }
      ],
      "ResultPath": "$.newCreds",
      "Comment": "returns back {username,password}",
      "Next": "Create user on the anna database",
      "ResultSelector": {
        "username.$": "$.Payload.username",
        "password.$": "$.Payload.password",
        "otsUrl.$": "$.Payload.otsUrl"
      }
    },
    "Create user on the anna database": {
      "Type": "Task",
      "Resource": "arn:aws:states:::lambda:invoke",
      "Parameters": {
        "FunctionName": "arn:aws:lambda:us-east-1:754664436462:function:qa2-Database-Databaseadhocsingl2E02F587-yZxuEpPiDCUc",
        "Payload": {
          "script.$": "States.Format('CREATE ROLE {} LOGIN PASSWORD \\'{}\\'; GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public to {}; GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public to {}; GRANT {} to {};', $.newCreds.username, $.newCreds.password, $.newCreds.username, $.newCreds.username, $.databaseSecret.ParsedValue.PGUSER, $.newCreds.username)",
          "databaseName.$": "$.databaseSecret.ParsedValue.PGDATABASE"
        }
      },
      "Retry": [
        {
          "ErrorEquals": [
            "Lambda.ServiceException",
            "Lambda.AWSLambdaException",
            "Lambda.SdkClientException"
          ],
          "IntervalSeconds": 2,
          "MaxAttempts": 6,
          "BackoffRate": 2
        }
      ],
      "ResultPath": "$.databaseResults",
      "Next": "Send credentials to user for anna"
    },
    "Send credentials to user for anna": {
      "Type": "Task",
      "Parameters": {
        "Destination": {
          "ToAddresses.$": "States.Array($.email)"
        },
        "Message": {
          "Body": {
            "Text": {
              "Data.$": "States.Format('New credentials were generated for you: \n\ndatabase: {}\nusername: {}\npassword: {} \nhost: {}', $.databaseSecret.ParsedValue.PGDATABASE, $.newCreds.username, $.newCreds.otsUrl, $.databaseSecret.ParsedValue.PGHOST)"
            }
          },
          "Subject": {
            "Data": "New database access credentials have been created for you!"
          }
        },
        "Source": "devops@momnt.com"
      },
      "Resource": "arn:aws:states:::aws-sdk:ses:sendEmail",
      "End": true
    }
  },
  "Comment": "must provide:\nusername  (will be prefix)\ndatabaseName (jasmine or belle, don't have to have full name, but should be able to?)\nemail (the email address to send results to)"
}
