import { Skeleton, Typography } from "@mui/material";
import React, { Component, FunctionComponent } from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from "reactstrap";
import styled from "styled-components";

interface JobCardInterface {
  jobTitle: string;
  isLoading: boolean;
  company: string;
  logoUrl: string;
  date?: Date;
}

const CardStyled = styled(Card)`
  position: relative;
  box-shadow: rgb(0 0 0 / 25%) 4px 4px 25px;
  border-radius: 10px;
  width: 13rem;
  height: 20rem;
  margin: 5px;
  overflow: hidden;
  cursor: pointer;
`;
const CardImgWrapper = styled.div`
  width: 13rem;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CardImgStyled = styled(CardImg)`
  max-width: 13rem;
  max-height: 10rem;
  fit: contain;
`;

const CardBodyStyled = styled(CardBody)`
  padding: 10px;
`;

const CardTitleStyled = styled(CardTitle)`
  font-weight: bold;
  font-size: 20px;
  max-width: 100%;
  white-space: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const CardTextStyled = styled(CardText)`
  max-height: 100px;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ButtonStyled = styled(Button)`
  position: absolute;
  bottom: 15px;
  background-color: #3b41c5;
  border: none;
  padding: 12px 14px;
  color: white;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
`;

export const JobSkeletonCard: FunctionComponent = () => (
  <CardStyled>
    <CardImgWrapper>
      <Skeleton variant="rectangular" animation="wave" width="100%" height="100%" />
    </CardImgWrapper>
    <CardBodyStyled>
      <Skeleton variant="text" animation="wave" width="100%" height="50px" />
      <Skeleton variant="text" animation="wave" width="100%" height="20px" />
      <Skeleton variant="text" animation="wave" width="100%" height="20px" />
      <Skeleton style={{marginTop: '12px',borderRadius: '5px'}} variant="rectangular" animation="wave" width="50%" height="30px" />
    </CardBodyStyled>
  </CardStyled>
);

const JobCard: FunctionComponent<JobCardInterface> = ({
  jobTitle,
  company,
  logoUrl,
  date,
}: JobCardInterface) => (
  <CardStyled>
    <CardImgWrapper>
      <CardImgStyled variant="top" src={logoUrl} />
    </CardImgWrapper>
    <CardBodyStyled>
      <CardTitleStyled>{jobTitle}</CardTitleStyled>
      <CardTextStyled>{company}</CardTextStyled>
      <ButtonStyled>Apply Now</ButtonStyled>
    </CardBodyStyled>
  </CardStyled>
);

export default JobCard;
