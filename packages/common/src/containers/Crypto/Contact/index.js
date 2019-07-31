import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import FeatureBlock from '../../../components/FeatureBlock';
import Input from 'reusecore/src/elements/Input';
import Container from '../../../components/UI/Container';

import ContactFromWrapper, { SectionMainWrapper } from './contact.style';

const ContactSection = ({
  sectionWrapper,
  row,
  contactForm,
  secTitleWrapper,
  secHeading,
  secText,
  button,
  note,
  title,
  description,
  colornote,
}) => {
  return (
    <SectionMainWrapper>
      <Box {...sectionWrapper}>
        <Container className="containerClass">
          <Box {...secTitleWrapper}>
            <FeatureBlock
              title={<Heading {...title} />}
              description={<Text {...description} />}
            />
          </Box>
          <Box {...row}>
            <Box {...contactForm}>
              <ContactFromWrapper>
                <Input
                  inputType="text"
                  placeholder="Informe seu Nome"
                  iconPosition="right"
                  isMaterial={false}
                  className="email_input"
                />
              </ContactFromWrapper>
              <ContactFromWrapper>
                <Input
                  inputType="textarea"
                  placeholder="Digite a sua mensagem"
                  iconPosition="right"
                  isMaterial={false}
                  className="email_input"
                />
              </ContactFromWrapper>
              <ContactFromWrapper>
                <Input
                  inputType="email"
                  placeholder="Informe seu Email"
                  iconPosition="right"
                  isMaterial={false}
                  className="email_input"
                />
                <Button {...button} title="ENVIAR" />
              </ContactFromWrapper>
              <Box className="contactdes">
                <Text
                  as="span"
                  {...note}
                  content="Faça parte da nossa comunidade. "
                />
                <Link href="#">
                  <a className="">Curta a OT no Facebook. </a>
                </Link>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </SectionMainWrapper>
  );
};

ContactSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  row: PropTypes.object,
  contactForm: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  button: PropTypes.object,
  note: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  colornote: PropTypes.object,
};

ContactSection.defaultProps = {
  sectionWrapper: {
    id: 'contact_section',
    as: 'section',
    pt: ['8px', '80px', '80px', '80px'],
    pb: ['0', '80px', '80px', '80px', '80px'],
  },
  secTitleWrapper: {
    mb: ['40px', '40px', '40px'],
    p: ['0 15px', 0, 0, 0, 0],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: `${2}`,
    letterSpacing: '0.15em',
    fontWeight: `${6}`,
    color: 'primary',
    mb: `${3}`,
  },
  secHeading: {
    textAlign: 'center',
    fontSize: [`${6}`, `${8}`],
    fontWeight: '400',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: `${0}`,
  },
  row: {
    flexBox: true,
    justifyContent: 'center',
  },
  contactForm: {
    width: [1, 1, 1, 1 / 2],
  },
  button: {
    type: 'button',
    fontSize: `${2}`,
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
    height: `${4}`,
  },
  note: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '28px',
    mb: ['25px', '25px', '30px', '30px', '45px'],
    textAlign: ['center', 'center'],
  },
  colornote: {
    fontSize: '16px',
    fontWeight: '500',
    color: 'rgb(106, 82, 253)',
    lineHeight: '28px',
    mb: ['25px', '25px', '30px', '30px', '45px'],
    textAlign: ['center', 'center'],
  },
  title: {
    content: 'Entre em contato com a Original Total',
    fontSize: ['20px', '26px', '30px', '36px', '40px'],
    lineHeight: ['30px', '32px', '40px', '50px', '55px'],
    fontWeight: '700',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '20px',
    textAlign: ['center', 'center'],
  },

  description: {
    content: 'Envie seu contato através do formulário abaixo ou mande um e-mail para seja@originaltotal.com',
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '28px',
    mb: ['25px', '25px', '30px', '30px', '45px'],
    textAlign: ['center', 'center'],
  },
};

export default ContactSection;
