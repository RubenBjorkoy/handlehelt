import os from 'os';

class FetchSecrets {

    public static async fetchSecret(secret: string) {
        const env = require('../.env');
        fetch(env)
            .then((response) => response.text())
            .then((response) => {
                //parse env file
                console.log(response);
                const env = response.split(os.EOL);
                //find secret
                const secretLine = env.find((line: string) => line.includes(secret));
                //split secret line
                if(!secretLine) {return null};
                const secretArray = secretLine.split('=');
                console.log(secretArray);
                return secretArray[1];
            });
    }
}

export default FetchSecrets