import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import brand from '~/public/text/brand';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import AboutUs from '../../components/Numbers';
import Counter from '../../components/Counter';
import Feature from '../../components/Feature';
import PricingPlan from '../../components/PricingPlan';
import FooterWithDeco from '../../components/Footer/FooterWithDeco';
import PageNav from '../../components/PageNav';
import Gallery from '../../components/Gallery';
import Service from '../../components/Service';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
  },
  spaceBottom: {
    marginBottom: sectionMargin(theme.spacing()),
    [theme.breakpoints.down('sm')]: {
      marginBottom: sectionMargin(6),
    }
  },
  spaceBottomTesti: {
    [theme.breakpoints.up('md')]: {
      marginBottom: sectionMargin(theme.spacing()),
    }
  },
  spaceBottomShort: {
    marginBottom: sectionMargin(theme.spacing() / 2)
  },
  spaceTop: {
    marginTop: sectionMargin(theme.spacing()),
    [theme.breakpoints.down('sm')]: {
      marginTop: sectionMargin(6),
    }
  },
  spaceTopShort: {
    marginTop: sectionMargin(theme.spacing() / 2)
  },
  containerWrap: {
    marginTop: -40,
    '& > section': {
      position: 'relative'
    }
  }
}));

function Landing(props) {
  const classes = useStyles();
  const { onToggleDark, onToggleDir } = props;
  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.saas.name }
          &nbsp; - Home Page
        </title>
      </Head>
      <CssBaseline />
      <section id="home" />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <main className={classes.containerWrap}>
          <section id="home">
            <Banner />
          </section>
          <section id="about_us">
            <AboutUs />
          </section>
          <section>
            <Counter />
          </section>
          <section className={classes.spaceTop}>
            <Feature />
          </section>
          <section id="service" className={classes.spaceTop}>
            <Service />
          </section>
          <section id="our_work" className={clsx(classes.spaceTopShort, classes.spaceBottomShort)}>
            <Gallery />
          </section>
          <section id="pricing">
            <PricingPlan />
          </section>
        </main>
        <section id="footer">
          <FooterWithDeco toggleDir={onToggleDir} />
        </section>
        <Hidden mdDown>
          <PageNav />
        </Hidden>
      </div>
    </React.Fragment>
  );
}

Landing.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Landing;
