pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                bat 'docker build -t my-web-app:latest .'
            }
        }

        stage('Login to Docker Hub') {
            steps {
                bat 'docker login -u gloriaingabire123 -p YOUR_PASSWORD'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                bat 'docker tag my-web-app:latest gloriaingabire123/my-web-app:latest'
                bat 'docker push gloriaingabire123/my-web-app:latest'
            }
        }

        stage('Deploy to Local Docker Host') {
            steps {
                bat 'docker run -d -p 3000:3000 gloriaingabire123/my-web-app:latest'
            }
        }
    }
}




