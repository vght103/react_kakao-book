import axios from "axios";

class KakaoService {
  constructor(key) {
    this.key = key;
    this.pageNum = 3;
  }

  // 검색시 api
  async search(query) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `KakaoAK ${this.key}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(
      `https://dapi.kakao.com/v3/search/book?query=${query}&page=${this.pageNum}&size=20`,
      requestOptions
    );
    const result_1 = await response.json();
    return result_1.documents;
  }

  //
  //

  // 다음페이지
}

export default KakaoService;
