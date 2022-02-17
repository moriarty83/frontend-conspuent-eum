import React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GetAppIcon from '@mui/icons-material/GetApp';

function Footer(props){

  return(
      <>
        <BottomNavigation showLabels>
          <BottomNavigationAction label="About us" icon={<InfoOutlinedIcon />} />
          <BottomNavigationAction label="Contact us" icon={<MailOutlineIcon />} />
          <BottomNavigationAction label="Get the App" icon={<GetAppIcon />} />
        </BottomNavigation>
      </>
  )
}

export default Footer;