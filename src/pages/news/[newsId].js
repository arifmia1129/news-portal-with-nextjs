import RootLayout from "@/components/Layouts/RootLayout";
import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";

const NewDetails = ({ news }) => {
  return (
    <div
      style={{
        marginTop: 40,
      }}
    >
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={12}>
          <div>
            <Image
              src={news?.image_url}
              width={500}
              height={400}
              responsive
              alt="news image"
              style={{ width: "100%" }}
            />
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div
            style={{
              height: 400,
              display: "flex",
              alignItems: "center",
            }}
          >
            <div>
              <h1 style={{ fontSize: 40 }}>{news?.title}</h1>
              <div
                className="line"
                style={{
                  height: "5px",
                  margin: "20px 0",
                  background: "#000",
                  width: "100%",
                }}
              ></div>

              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  color: "gray",
                  margin: "10px 0px",
                  fontSize: "12px",
                }}
              >
                <span>
                  <CalendarOutlined /> {news?.release_date}
                </span>
                <span>
                  <CommentOutlined /> {news?.comment_count} COMMENTS
                </span>
                <span>
                  <ProfileOutlined /> {news?.category}
                </span>
              </p>

              <p style={{ fontSize: "20px", marginTop: 20 }}>
                {news?.description}
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default NewDetails;

NewDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// export const getStaticPaths = async () => {
//   const res = await fetch("http://localhost:5000/news");
//   const allNews = await res.json();
//   console.log(allNews);

//   const paths = allNews?.map((news) => ({
//     params: { newsId: news.id.toString() },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/news/${params?.newsId}`);

  const data = await res.json();

  return {
    props: {
      news: data,
    },
  };
};
