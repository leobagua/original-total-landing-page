import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from 'reusecore/src/elements/Box';
import Heading from 'reusecore/src/elements/Heading';
import Image from 'reusecore/src/elements/Image';
import Button from 'reusecore/src/elements/Button';
import Container from '../../../components/UI/Container';
import { BannerWrapper, EmailInputWrapper } from './banner.style';
import ManImage from '../../../assets/image/ride/man.png';

const BannerSection = ({
  row,
  contentArea,
  imageArea,
  greetingStyle,
  aboutStyle,
  greetingStyleTwo,
  button,
}) => {
  return (
    <BannerWrapper id="banner_section">
      <Container noGutter mobileGutter width="1200px" className="container">
        <Box {...row}>
          <Box {...contentArea} className="contentArea">
            <Heading
              content="Validamos a Originalidade dos seus produtos." {...greetingStyle} />
            <Heading content="Aproximamos a sua marca das pessoas através de uma experiência digital única." {...greetingStyleTwo} />
            <EmailInputWrapper>
              <Link href="#nuvem">
                <a>
                  <Button title="QUERO SABER MAIS" {...button} />
                </a>
              </Link>
            </EmailInputWrapper>
          </Box>
          <Box {...imageArea} className="image_area">
            <Image src={ManImage} className="man_image_area" alt="Man Image" />
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  row: PropTypes.object,
  contentArea: PropTypes.object,
  imageArea: PropTypes.object,
  greetingStyle: PropTypes.object,
  nameStyle: PropTypes.object,
  designationStyle: PropTypes.object,
  aboutStyle: PropTypes.object,
  roleStyle: PropTypes.object,
  roleWrapper: PropTypes.object,
  greetingStyleTwo: PropTypes.object,
  button: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'stretch',
  },
  contentArea: {
    width: ['100%', '100%', '50%', '50%'],
    p: [
      '90px 0 0px 0',
      '95px 0 0px 0',
      '150px 0 0px 0',
      '150px 0 0px 0',
      '210px 0 0px 0',
    ],
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  imageArea: {
    width: ['100%', '100%', '50%', '50%'],
    flexBox: true,
    alignItems: 'flex-end',
    position: 'relative',
  },
  greetingStyle: {
    as: 'h1',
    color: '#15172c',
    fontSize: ['32px', '44px', '46px', '50px', '52px'],
    fontWeight: '600',
    fontFamily: 'Poppins',
    lineHeight: ['32px', '44px', '46px', '50px', '52px'],
    mb: '20px',
    mt: '20px'
  },
  greetingStyleTwo: {
    as: 'h1',
    color: '#15172c',
    fontSize: ['22px', '28px', '32px', '32px', '34px'],
    fontWeight: '400',
    fontFamily: 'Poppins',
    lineHeight: ['26px', '44spx', '46px', '50px', '52px'],
    mb: '8px',
  },
  roleWrapper: {
    flexBox: true,
    mb: '28px',
  },
  roleStyle: {
    as: 'h4',
    fontSize: ['18px', '18px', '18px', '18px', '20px'],
    fontWeight: '500',
    color: '#fff',
    mb: '0',
    ml: '10px',
  },
  aboutStyle: {
    fontSize: ['15px', '15px', '15px', '16px', '16px'],
    fontFamily: 'Lato',
    fontWeight: '400',
    color: '#15172c',
    lineHeight: '1.5',
    mb: '30px',
    mt: '30px',
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '700',
    fontFamily: 'Lato',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
    minHeight: '55px',
    pt: '0px',
    pb: '0',
  },
};

export default BannerSection;
