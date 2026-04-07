pipeline {
    agent any

    environment {
        AWS_REGION = 'us-east-1'
        ECR_REPO = '187135693313.dkr.ecr.us-east-2.amazonaws.com/finalproject'
        IMAGE_TAG = "latest"
        CLUSTER_NAME = 'your-ecs-cluster'
        SERVICE_NAME = 'your-ecs-service'
        TASK_FAMILY = 'EC_FinalProject-task'
    }

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test -- --watchAll=false'
            }
        }

        stage('Build My Docker Image') {
            steps {
                withCredentials([[
                    $class: 'AmazonWebServicesCredentialsBinding',
                    credentialsId: 'aws-credentials'
                ]]) {
                    sh '''
                        aws ecr get-login-password --region $AWS_REGION | \
                        docker login --username AWS --password-stdin $ECR_REPO

                        docker build -t $ECR_REPO:$IMAGE_TAG .
                        docker push $ECR_REPO:$IMAGE_TAG
                    '''
                }
            }
        }

        stage('Deploy to AWS') {
            steps {
                withCredentials([[
                    $class: 'AmazonWebServicesCredentialsBinding',
                    credentialsId: 'aws-credentials'
                ]]) {
                    sh '''
                        aws ecs register-task-definition \
                            --cli-input-json file://task-definition.json \
                            --region $AWS_REGION

                        aws ecs update-service \
                            --cluster $CLUSTER_NAME \
                            --service $SERVICE_NAME \
                            --task-definition $TASK_FAMILY \
                            --region $AWS_REGION
                    '''
                }
            }
        }
    }
}