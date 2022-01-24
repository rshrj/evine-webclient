import { Container, Paper, Typography, useMediaQuery } from '@mui/material';
import { Box, useTheme } from '@mui/system';

import about1 from '../../assets/images/holistic-real-estate-deals.png';
import about2 from '../../assets/images/consultancy-services.png';
import about3 from '../../assets/images/trusted-realtor.png';
import about4 from '../../assets/images/architecture-about-4.jpg';

import Footer from '../../components/Footer';

const AboutCard = ({ title, text, picture }) => {
  const theme = useTheme();
  const isPhone = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: { xs: 'center', sm: 'space-between' },
        alignItems: 'center',
        px: 3,
        py: 3,
        my: 4,
        '&:nth-of-type(2n)': {
          flexDirection: { xs: 'column', sm: 'row-reverse' },
          borderLeft: `none`,
          borderRight: `0px solid ${theme.palette.primary.main}`,
          '&:hover': {
            transform: 'scale(1.01)',
            borderRightWidth: '5px',
            cursor: 'pointer'
          }
        },
        boxShadow: '0px 0px 38px -20px rgba(0,0,0,0.40)',
        transition: '0.3s ease',
        borderLeft: `0px solid ${theme.palette.primary.main}`,
        '&:hover': {
          transform: 'scale(1.01)',
          borderLeftWidth: '5px',
          cursor: 'pointer'
        }
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 450,
          marginBottom: { xs: 3, sm: 0 }
        }}>
        <Typography
          variant='h5'
          color='primary.main'
          fontWeight='bold'
          sx={{ marginBottom: 2 }}>
          {title}
        </Typography>
        <Typography>{text}</Typography>
      </Box>
      <Box>
        <img
          src={picture}
          style={{
            width: isPhone ? '100%' : 500,
            height: isPhone ? 'auto' : 333
          }}
          alt='abc'
        />
      </Box>
    </Paper>
  );
};

const AboutPage = () => {
  return (
    <>
      <Container maxWidth='lg'>
        <Box sx={{ pt: 4 }}>
          <Typography
            variant='h3'
            color='primary.main'
            align='center'
            sx={{ marginBottom: 3 }}>
            Trustworthy and Inventive Developers
          </Typography>
          <Typography
            variant='body1'
            color='text.secondary'
            align='center'
            sx={{ px: { xs: 0, sm: 15 } }}>
            Founded in 1994, Madhoor Group is a leading construction company
            with its registered office in Mumbai, Maharashtra.
          </Typography>
        </Box>

        <Box
          sx={{
            py: 5
          }}>
          <AboutCard
            title='Vision: Brilliant Construction'
            text={`Madhoor Group is a pioneer in the construction field, having changed the face of the city of Nashik. We have executed over 150 projects including prestigious projects such as hospitals, college buildings, housing colonies and other commercial buildings for the government as well as non-government organizations.`}
            picture={about1}
          />
          <AboutCard
            title='Consultation Services'
            text='We work with you closely from the time you contact us to the time you move in and help you with all the paperwork, real estate jargon and financing options. You can bid goodbye to your real estate woes with us.'
            picture={about2}
          />
          <AboutCard
            title='Stellar Team'
            text='We are ably guided by our directors and have many specialized units which function in harmony to develop landmark projects. With the restoration work of the 250-year-old
            Kalaram Temple at Panchvati, Nashik, the company has added yet another dimension to their field of expertise.'
            picture={about3}
          />
          <AboutCard
            title='Revolutionary Team'
            text='Daring to think ahead of the times and the unfaltering dedication and honesty of the entire team has changed the image of Nashik from a small temple town to the city of dreams.'
            picture={about4}
          />
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default AboutPage;
