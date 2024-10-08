import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useTranslation } from 'next-i18next';
import routeLink from '~/public/text/link';
import useStyles from './header-style';
import navMenu from './menu';

function MobileMenu(props) {
  const classes = useStyles();
  const { toggleDrawer, open } = props;
  const { t } = useTranslation('common');

  const SideList = () => (
    <div
      className={classes.mobileNav}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <div className={clsx(classes.menu, open && classes.menuOpen)}>
        <List component="nav">
          {navMenu.map((item, index) => (
            <ListItem
              button
              component="a"
              href={`#${item}`}
              key={index.toString()}
              style={{ animationDuration: index * 0.15 + 's' }}
            >
              <ListItemText primary={t('saas-landing.header_' + item)} className={classes.menuList} />
            </ListItem>
          ))}
          <ListItem
            button
            component="a"
            href={routeLink.saas.contact}
            style={{ animationDuration: navMenu.length * 0.15 + 's' }}
          >
            <ListItemText primary={t('saas-landing.header_contact')} className={classes.menuList} />
          </ListItem>
          <Divider className={classes.dividerSidebar} />
          {['login', 'register'].map((item, index) => (
            <ListItem
              button
              component="a"
              href={routeLink.saas[item]}
              key={index.toString()}
              style={{ animationDuration: navMenu.length * 0.15 + 's' }}
            >
              <ListItemText primary={t('saas-landing.header_' + item)} className={classes.menuList} />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );

  return (
    <SwipeableDrawer
      open={open}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
      classes={{
        paper: classes.paperNav
      }}
    >
      <SideList />
    </SwipeableDrawer>
  );
}

MobileMenu.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default MobileMenu;
