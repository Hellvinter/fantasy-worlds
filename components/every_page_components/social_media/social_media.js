import React from "react";
import styled from "styled-components";

const socialLinks = [
  {
    img: "https://img.icons8.com/color/36/000000/github--v1.png",
    link: "https://github.com/Hellvinter",
    alt: "GitHub account"
  },
  {
    img: "https://img.icons8.com/color/36/000000/twitter.png",
    link: "https://twitter.com/Hellvinter",
    alt: "Twitter account"
  },
  {
    img: "https://img.icons8.com/ios-glyphs/36/000000/medium-monogram.png",
    link: "https://medium.com/@Hellwinter",
    alt: "Medium account"
  }
];

function SocialMedia() {
  return socialLinks.map(item => (
    <StyledItem key={item.index}>
      <a href={item.link}>
        <img src={item.img} alt={item.alt} />
      </a>
    </StyledItem>
  ));
}

const StyledItem = styled.li`
  margin-right: 2rem;
`;

export default SocialMedia;