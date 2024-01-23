import React from "react";
import { fetchGraphQL, gql } from "../lib/fetchHelper";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
import BigHeaderTextCenter from "../components/BigHeaderTextCenter";
import BookNowForm from "../components/BookNowForm";
// import { getBookNowData } from "../apis/booknow";

export default function PageBookNow({ result }) {
  // console.log("BookNow", result)

  return (
    <React.Fragment>
      <Header />
      <BigHeaderTextCenter
        html={
          result.big_header !== undefined ? result.big_header.content : ""
        }
        background={result?.big_header?.photo?.data?.attributes?.url}
      />
      <BookNowForm />
      <Footer />
      <ScrollTop />
    </React.Fragment>
  );
}


// export async function getStaticProps() {
//   const result = await getBookNowData();
//   return { props: { result } }
// }

export async function getStaticProps() {
  const data = await fetchGraphQL(
    gql`
    query {
      bookNow {
        data {
          attributes {
            big_header {
              id
              content
              photo {
                data {
                  attributes {
                    url
                    alternativeText
                    width
                    height
                    placeholder
                  }
                }
              }
            }
          }
        }
      }
    }
    `
  );
  return {
    props: {
      result: data.bookNow.data.attributes,
    },
    revalidate: 60,
  };
}
