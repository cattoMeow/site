import React from "react";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import RichText from "../../components/RichText";

const HeroSlice = ({ slice }) => (
  <section className="section">
    <div className="container">
      {/* <pre>{JSON.stringify(slice, null, 2)}</pre> */}
      <RichText field={slice.primary.title} className="text-3xl" />
      <RichText field={slice.primary.description} className="text-bold" />
      <PrismicNextImage field={slice.primary.image} />

      <div>
        {slice?.items?.map((item, i) => (
          <PrismicLink field={item.cta_link}>My Link</PrismicLink>
        ))}
      </div>
    </div>
  </section>

  // <section>
  //   <span className="title">
  //     {
  //       slice.primary.title ?
  //       <PrismicRichText field={slice.primary.title}/>
  //       : <h2>Template slice, update me!</h2>
  //     }
  //   </span>
  //   {
  //     slice.primary.description ?
  //     <PrismicRichText field={slice.primary.description}/>
  //     : <p>start by editing this slice from inside Slice Machine!</p>
  //   }
  //   <style jsx>{`
  //       section {
  //         max-width: 600px;
  //         margin: 4em auto;
  //         text-align: center;
  //       }
  //       .title {
  //         color: #8592e0;
  //       }
  //   `}</style>
  // </section>
);

export default HeroSlice;
