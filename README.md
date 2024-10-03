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
    actions {
      name
      description
      resourceTemplate {
        name
      }
    }
    trigger {
      name
      description
      resourceTemplate {
        name
      }
    }
    responses {
      name
      description
      platforms {
        build
        integrationId
        localeGroups {
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
      "actions": [
        {
          "name": "Send Email Action",
          "description": "",
          "resourceTemplate": {
            "name": "Send Email"
          }
        }
      ],
      "trigger": {
        "name": "Email Trigger",
        "description": "",
        "resourceTemplate": {
          "name": "Predefined Triggers"
        }
      },
      "responses": [
        {
          "name": "Get Email Response",
          "description": "",
          "platforms": [
            {
              "build": 1,
              "integrationId": "woztell-essential-pack",
              "localeGroups": [
                {
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



