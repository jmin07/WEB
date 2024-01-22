//package com.myfarm.config.awsses;
//
//import lombok.Value;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//@Configuration
//public class AwsSesConfig {
//
//    @Value("${aws.ses.access.key}")
//    private String accessKey;
//
//    @Value("${aws.ses.secret-key}")
//    private String secretKey;
//
//    @Bean
//    public AmazonSimpleEmailService amazonSimpleEmailService() {
//        BasicAWSCredentials basicAWSCredentials = new BasicAWSCredentials(accessKey, secretKey);
//
//        return AmazonSimpleEmailServiceClientBuilder.standard()
//                .withCredentials(new AWSStaticCredentialsProvider(basicAWSCredentials))
//                .withRegion("us-east-1")
//                .build();
//    }
//}