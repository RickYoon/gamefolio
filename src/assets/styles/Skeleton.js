import React from "react";
import styled, { keyframes } from "styled-components";

const skeletonKeyframes = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const CardSkeleton = styled.div`
  width: 220px;
  height: 336px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid #f5f5f5;
`;

const ProductSkeleton = styled.div`
  display: inline-block;
  height: ${props => props.height || "14px"};
  width: ${props => props.width || "80%"};
  animation: ${skeletonKeyframes} 1300ms ease-in-out infinite;
  background-color: #eee;
  background-image: linear-gradient(
    90deg,
    #eee,
    #f5f5f5,
    #eee
  );
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: 4px;
  margin-bottom: 8px;
  margin-top: ${props => props.marginTop || "0"}
`;

const PictureSkeleton = styled(ProductSkeleton)`
  margin-bottom: 16px;
  width: 150px;
  height: 150px;
  margin: auto;
  max-height: 150px;
  max-width: 150px;
  display: block;
`;

export default () => (
    <ProductSkeleton width="60%" height="24px" marginTop="8px" />);
