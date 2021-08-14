class KakaoService {
  constructor(key) {
    this.key = key;
  }

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
    // .then((result) =>
    //   result.documents.map((book) => ({ ...book, id: book.isbn }))
    // );

    // .catch((error) => console.log("error", error))
  }
}

export default KakaoService;
