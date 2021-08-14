class KakaoService {
  constructor(key) {
    this.key = key;
  }

  // 첫 페이지 리스트 보여주는 api
  async showBookList() {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `KakaoAK ${this.key}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        `https://dapi.kakao.com/v3/search/book?query=여행&page=2&size=20&key=${this.key}`,
        requestOptions
      );
      const result_1 = await response.json();
      return result_1.documents;
    } catch (error) {
      return console.log("error", error);
    }
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
      `https://dapi.kakao.com/v3/search/book?query=${query}&page=3&size=20&key=${this.key}`,
      requestOptions
    );
    const result_1 = await response.json();
    return result_1.documents;
  }

  // 카카오 인가코드 받기
  kakaoGetCode() {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `KakaoAK ${this.key}`);
    myHeaders.append("Cookie", "_kadu=dYfFK9kj6OQ-0x3p_1628919829998");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `https://kauth.kakao.com/oauth/authorize?client_id$=${this.key}&redirect_uri=http://localhost:3000/oauth&response_type=code&key$=${this.key}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
}

export default KakaoService;
