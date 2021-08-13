// import axios from "axios";

// class Kakao {
//   constructor(key) {
//     this.key = key;
//     this.myHeaders = new Headers();
//     this.myHeaders.append(
//       "Authorization",
//       "KakaoAK f1ecec569093bda2f73f5de912bd4656"
//     );
//   }

//   booksList() {
//     const myHeaders = new Headers();
//     myHeaders.append(
//       "Authorization",
//       "KakaoAK f1ecec569093bda2f73f5de912bd4656"
//     );

//     const requestOptions = {
//       method: "GET",
//       headers: myHeaders,
//       redirect: "follow",
//     };

//     fetch(
//       "https://dapi.kakao.com/v3/search/book?query=여행&page=2&size=20&key=f1ecec569093bda2f73f5de912bd4656",
//       requestOptions
//     )
//       .then((response) => response.json())
//       .then((result) => result.documents)
//       .catch((error) => console.log("error", error));
//   }

//   search(query) {
//     const myHeaders = new Headers();
//     myHeaders.append(
//       "Authorization",
//       "KakaoAK f1ecec569093bda2f73f5de912bd4656"
//     );

//     const requestOptions = {
//       method: "GET",
//       headers: myHeaders,
//       redirect: "follow",
//     };

//     fetch(
//       `https://dapi.kakao.com/v3/search/book?query=${query}&page=3&size=20&key=f1ecec569093bda2f73f5de912bd4656`,
//       requestOptions
//     )
//       .then((response) => response.json())
//       .then((result) => setBooks(result.documents))
//       // .then((result) => console.log(result.documents))
//       .catch((error) => console.log("error", error));
//   }
// }

// export default Kakao;
