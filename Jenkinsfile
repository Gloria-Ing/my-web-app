pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'gloriaingabire123/my-web-app'  // Your Docker Hub repo
        DOCKER_CREDENTIALS_ID = 'docker-hub-credentials'  // Jenkins credentials ID
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("${DOCKER_IMAGE}:latest")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', DOCKER_CREDENTIALS_ID) {
                        dockerImage.push('latest')
                    }
                }
            }
        }

        stage('Deploy to Local Docker Host') {
            steps {
                sh '''
                    # Remove existing container if it exists
                    docker rm -f my-web-app || true

                    # Run new container
                    docker run -d --name my-web-app -p 8080:80 ${DOCKER_IMAGE}:latest
                '''
            }
        }

        // Optional: For remote Docker host deployment via SSH
        /*
        stage('Deploy to Remote Docker Host') {
            steps {
                sshagent(['remote-host-ssh-key']) {
                    sh '''
                        ssh user@remote-host "docker pull ${DOCKER_IMAGE}:latest"
                        ssh user@remote-host "docker rm -f my-web-app || true"
                        ssh user@remote-host "docker run -d --name my-web-app -p 8080:80 ${DOCKER_IMAGE}:latest"
                    '''
                }
            }
        }
        */
    }
}



