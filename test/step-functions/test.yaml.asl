StartAt: Check Stock Price
States:
  Check Stock Price:
    Type: Task
    Resource: >-
      arn:aws:lambda:us-east-1:843153345658:function:StepFunctionsSample-HelloLam-CheckStockPriceLambda-9Ql8L0vFGNyX
    Next: Generate Buy/Sell recommendation
  Generate Buy/Sell recommendation:
    Type: Task
    Resource: >-
      arn:aws:lambda:us-east-1:843153345658:function:StepFunctionsSample-Hello-GenerateBuySellRecommend-RV43mVlWrlRp
    ResultPath: $.recommended_type
    Next: Request Human Approval
  Request Human Approval:
    Type: Task
    Resource: arn:aws:states:::sqs:sendMessage.waitForTaskToken
    Parameters:
      QueueUrl: >-
        https://sqs.us-east-1.amazonaws.com/843153345658/StepFunctionsSample-HelloLambda1cfd9e64-a1b-RequestHumanApprovalSqs-1ctyDMjtCfTL
      MessageBody:
        Input.$: $
        TaskToken.$: $$.Task.Token
    ResultPath: null
    Next: Buy or Sell?
  Buy or Sell?:
    Type: Choice
    Choices:
      - Variable: $.recommended_type
        StringEquals: buy
        Next: Buy Stock
      - Variable: $.recommended_type
        StringEquals: sell
        Next: Sell Stock
  Buy Stock:
    Type: Task
    Resource: >-
      arn:aws:lambda:us-east-1:843153345658:function:StepFunctionsSample-HelloLambda1cfd-BuyStockLambda-ggejR4EeAftC
    Next: Report Result
  Sell Stock:
    Type: Task
    Resource: >-
      arn:aws:lambda:us-east-1:843153345658:function:StepFunctionsSample-HelloLambda1cf-SellStockLambda-HY85TtYKY9xk
    Next: Report Result
  Report Result:
    Type: Task
    Resource: arn:aws:states:::sns:publish
    Parameters:
      TopicArn: >-
        arn:aws:sns:us-east-1:843153345658:StepFunctionsSample-HelloLambda1cfd9e64-a1bb-45f1-b2b0-7e258d8ba55f-ReportResultSnsTopic-GABSbYyOACQR
      Message:
        Input.$: $
    End: true
