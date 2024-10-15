## Installation

Instructions on how to set up the project locally.

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v14.x or later)
- **npm** or **yarn**

### Steps

1. Clone the repository:

```bash
git clone https://github.com/rayhankobir-dev/node-graphql.git
cd your-repo-name
```

2. Installation dependecies

```bash
npm install
//or
yarn install
```

3. Set up environment variables:

```bash
PORT=8000
JWT_SECRET=your_secret
```

4. Start the application

```bash
npm run dev
```

The application should now be running at http://localhost:8000.

## How to use

After starting the application, navigate to http://localhost:8000 to check server is properly working.
To execute GraphQL queries, go to http://localhost:8000/graphql. This endpoint will open Apollo Studio and you can execute your queries.

Authentication
The project uses token-based authentication with Bearer tokens. For all secured endpoints, you will need to pass the token
in the Authorization header as follows:

```
Authorization: Bearer <your_token>
```

In the Apollo Studio you will find a section where you can put your token as shown in the image. To generate token you should run the fllowing command

```
npm run generate-token
```

This command will geenrate new token in the terminal console. Copy the token and set in authorization header following below image.

<img width="1440" alt="image" src="https://github.com/user-attachments/assets/b1698380-ac7e-4f16-afb3-f456f6914b54">

Sample query to get all the data from

```graphql
query Query($nodeId: ID) {
  node(nodeId: $nodeId) {
    _id
    createdAt
    updatedAt
    name
    description
    root
    priority
    compositeId
    global
    colour
    parents {
      _id
      name
      description
    }
    trigger {
      _id
      name
      description
      resourceTemplate {
        _id
        name
        description
        integrationId
        key
      }
    }

    actions {
      _id
      name
      description
      resourceTemplate {
        _id
        name
        description
        integrationId
        key
      }
    }

    responses {
      _id
      name
      description
      createdAt
      updatedAt
      platforms {
        integrationId
        build
        localeGroups {
          localeGroupId
          variations {
            name
            responses
          }
        }
      }
    }
  }
}
```

Set the variable in the variables section as shown in the image

<img width="1440" alt="image" src="https://github.com/user-attachments/assets/47d0288b-c7fa-4247-96aa-abc112db6234">

Respone of the sample query

```json
{
  "data": {
    "node": {
      "_id": "6297172e70a0c165b989cd10",
      "createdAt": 1654069038783,
      "updatedAt": 1696991678725,
      "name": "User's Email",
      "description": "",
      "root": false,
      "priority": null,
      "compositeId": "L2ZrxYMqAW44L5tB",
      "global": false,
      "colour": null,
      "parents": [
        {
          "_id": "6297164810f52524ba1a9300",
          "name": "Sign up Webinar",
          "description": ""
        }
      ],
      "trigger": {
        "_id": "6297176c10f525b8a81a9304",
        "name": "Email Trigger",
        "description": "",
        "resourceTemplate": {
          "_id": "61e9ba20f9b58155162dbf52",
          "name": "Predefined Triggers",
          "description": null,
          "integrationId": "woztell-essential-pack",
          "key": "predefined-trigger"
        }
      },
      "actions": [
        {
          "_id": "6530933e6a1690d2f0c78a92",
          "name": "Send Email Action",
          "description": "",
          "resourceTemplate": {
            "_id": "62cfc19bf4573e1b32ca2295",
            "name": "Send Email",
            "description": null,
            "integrationId": "email",
            "key": null
          }
        }
      ],
      "responses": [
        {
          "_id": "6297189510f525833b1a9305",
          "name": "Get Email Response",
          "description": "",
          "createdAt": 1654069397386,
          "updatedAt": null,
          "platforms": [
            {
              "integrationId": "woztell-essential-pack",
              "build": 1,
              "localeGroups": [
                {
                  "localeGroupId": null,
                  "variations": [
                    {
                      "name": "Standard",
                      "responses": [
                        {
                          "type": "TEXT",
                          "text": "Thank you for signing up for our webinar!",
                          "id": "8Y4Qw8A8",
                          "transform": ""
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
```
