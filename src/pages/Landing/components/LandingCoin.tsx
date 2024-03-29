// REACT IMPORTS
import React, { FC } from 'react'

// MUI IMPORTS
import {
  Grid, Container, Box, styled, BoxProps, useTheme
} from '@mui/material'

// PROJECT IMPORTS
import { Translation } from '@src/i18n'
import LandingInfo from '@pages/Landing/components/LandingInfo'
import LandingCoinSvg from '@assets/img/watchit_coin.svg'
import LandingCoinLight from '@assets/img/watchit_coin_light.svg'
import LandingBackgroundSquare from '@assets/img/square.png'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import LandingComingSoon from '@pages/Landing/components/LandingComingSoon'

// ===========================|| LANDING - COIN ||=========================== //

const LandingCoin: FC = (): JSX.Element => {
  const theme = useTheme()
  const isThemeLight = Object.is(theme.palette.mode, 'light')

  return (
    <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '50vh' }}>
      <Grid container spacing={3} justifyContent='center' alignItems='center'>
        <Grid item xs={12} sm={6} zIndex={10}>
          <AnimationOnScroll
            animateIn='animate__fadeIn' animateOut='animate__fadeOut'
            style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <LandingCoinImage>
              {
                isThemeLight ? <LandingCoinLight /> : <LandingCoinSvg />
              }
            </LandingCoinImage>
          </AnimationOnScroll>
        </Grid>
        <Grid item xs={12} sm={6} zIndex={10} display='flex' justifyContent='center' alignItems='center' sx={{ pt: { xs: '3rem !important', sm: '24px !important' } }}>
          <AnimationOnScroll
            animateIn='animate__bounceInRight' animateOut='animate__fadeOut'
            style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <LandingInfo
              title={
                <>
                  <span>Watchit Video Coin</span>
                  <LandingComingSoon />
                </>
              }
              subTitle={<Translation target='LANDING_COIN_SUBTITLE' />}
              sx={{ position: 'relative' }}
            />
          </AnimationOnScroll>
        </Grid>
      </Grid>
      <LandingCoinBackgroundSquare component='img' src={LandingBackgroundSquare} />
    </Container>
  )
}

export const LandingCoinImage = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  zIndex: 2,
  maxWidth: '30rem',
  svg: {
    width: '100%',
    height: 'auto'
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '19rem'
  }
}))

export const LandingCoinBackgroundSquare = styled(Box)<BoxProps & { src: string }>(({ theme }) => ({
  position: 'absolute',
  top: '-35%',
  right: '5%',
  width: '17%',
  opacity: Object.is(theme.palette.mode, 'light') ? 0.3 : 0.15,
  height: 'auto',
  filter: Object.is(theme.palette.mode, 'light')
    ? 'invert(23%) sepia(25%) saturate(1306%) hue-rotate(148deg) brightness(39%) contrast(67%)'
    : 'none',
  [theme.breakpoints.down('sm')]: {
    top: '-27%',
    right: '-5%',
    width: '23%'
  }
}))

export default LandingCoin
