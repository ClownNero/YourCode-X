const express = require("express");
const axios = require("axios");
const app = express();

app.use("/analysis/result", async (req,res) => {
  const {url} = req.body;

  try {
    // 입력 받은 URL의 웹페이지 HTML 코드 가져오기
    const response = await axios.get(url);
    const html = response.data;

    // TODO: HTML 분석 로직 실행

    // 실제 구현에서는 이 부분에 분석 결과 데이터가 들어 갈 것입니다.
    res.json({ success: true }); // 임시 응답
  } catch (error) {
    console.error(error);
    res.status(500).json({error: "Error during fetching and analyzing webpage"});
  }
});

app.listen(3000, ()=> console.log("Server is running on port 3000"));