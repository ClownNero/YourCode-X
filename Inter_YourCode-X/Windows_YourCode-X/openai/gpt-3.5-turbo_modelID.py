import openai, os

openai.api_key = os.getenv("OPENAI_API_KEY")

# 학습 데이터 업로드 ModelID 얻기 위해 데이터 셋 열기 부분
# file_path = ".\Inter_YourCode-X\Windows_YourCode-X\openai\openai_dataset.jsonl"
# file_upload_response = openai.File.create(
#     file=open(file_path, "rb"),
#     purpose="fine-tune"
# )

# 업로드 File ID 확인
# file_id = file_upload_response["id"]
# print(file_id)

# Fine-tuning 작업 시작
file_id = "file-OCES4q1SzSssdI8lxw8isEC3"
fine_tuning_job_response = openai.FineTuningJob.create(training_file=file_id, model="gpt-3.5-turbo")