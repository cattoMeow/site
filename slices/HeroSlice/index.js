import React from "react";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import RichText from "../../components/RichText";
import CustomLink from "../../components/CustomLink";

const HeroSlice = ({ slice }) => (
  <section className="section">
    <div className="container">
      {/* <pre>{JSON.stringify(slice, null, 2)}</pre> */}
      <RichText field={slice.primary.title} className="text-3xl font-bold" />
      <RichText field={slice.primary.description} className="text-gray-400" />
      <PrismicNextImage field={slice.primary.image} />

      <div>
        {slice?.items?.map((item, i) => (
          <CustomLink
            link={item.cta_link}
            text={item.cta_text}
            key={i}
            className="mt-4 inline-flex rounded-full"
          />
        ))}
      </div>
    </div>
    <style jsx>{`
      section {
        max-width: 600px;
        margin: 4em auto;
        text-align: center;
      }
      .title {
        color: #8592e0;
      }
    `}</style>
  </section>

  // <section>
  //   <span className="title">
  //     {slice.primary.title ? (
  //       <PrismicRichText field={slice.primary.title} />
  //     ) : (
  //       <h2>Template slice, update me!</h2>
  //     )}
  //   </span>
  //   {slice.primary.description ? (
  //     <PrismicRichText field={slice.primary.description} />
  //   ) : (
  //     <p>start by editing this slice from inside Slice Machine!</p>
  //   )}
  //   <style jsx>{`
  //     section {
  //       max-width: 600px;
  //       margin: 4em auto;
  //       text-align: center;
  //     }
  //     .title {
  //       color: #8592e0;
  //     }
  //   `}</style>
  // </section>
);

export default HeroSlice;
