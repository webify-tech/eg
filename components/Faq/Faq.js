import React, { useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import ParallaxMedium from '../Parallax/Medium';
import illustration from '~/public/images/saas/faq.png';
import Title from '../Title';
import useStyles from './faq-style';

const faqData = [
  {
    q: 'Pellentesque ac bibendum tortor?',
    a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
  },
  {
    q: 'In mi nulla, fringilla vestibulum?',
    a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
  },
  {
    q: 'Quisque lacinia purus ut libero?',
    a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
  },
  {
    q: 'Quisque ut metus sit amet augue?',
    a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
  },
  {
    q: 'Pellentesque ac bibendum tortor?',
    a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
  },
];

function Faq() {
  const classes = useStyles();
  const text = useText();
  const [expanded, setExpanded] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { t } = useTranslation('common');
  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid container spacing={6}>
          <Grid item md={6}>
            <Title align={isMobile ? 'center' : 'left'}>
              <strong>
                FAQ
              </strong>
            </Title>
            <Typography className={clsx(classes.text, text.subtitle2)} align={isMobile ? 'center' : 'left'} component="p">
              {t('saas-landing.faq_subtitle')}
            </Typography>
            <Hidden smDown>
              <div className={classes.illustration}>
                <ParallaxMedium />
                <img src={illustration} alt="illustration" />
              </div>
            </Hidden>
          </Grid>
          <Grid item md={6}>
            <div className={classes.accordion}>
              {faqData.map((item, index) => (
                <div className={classes.item} key={index.toString()}>
                  <Accordion
                    classes={{
                      root: classes.paper
                    }}
                    expanded={expanded === index}
                    onChange={handleChange(index)}
                  >
                    <AccordionSummary
                      classes={{
                        content: classes.content,
                        expanded: classes.expanded,
                      }}
                    >
                      <Typography className={classes.heading}>{item.q}</Typography>
                      <ExpandMoreIcon className={classes.icon} />
                    </AccordionSummary>
                    <AccordionDetails
                      classes={{
                        root: classes.detail,
                      }}
                    >
                      <Typography>
                        {item.a}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Faq;
