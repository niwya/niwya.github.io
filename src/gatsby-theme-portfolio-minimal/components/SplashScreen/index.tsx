import React from 'react';
import { Helmet } from 'react-helmet';
import { useGlobalState, ActionType } from 'gatsby-theme-portfolio-minimal/src/context';
import { Logo } from 'gatsby-theme-portfolio-minimal/src/components/Logo';
import { Animation } from 'gatsby-theme-portfolio-minimal/src/components/Animation';
import * as classes from './style.module.css';

export function SplashScreen(): React.ReactElement {
    const [shouldUnmount, setShouldUnmount] = React.useState<boolean>(false);
    const { dispatch } = useGlobalState();

    return (
        <Animation
            className={classes.SplashScreen}
            type={shouldUnmount === false ? 'fadeIn' : 'fadeOut'}
            duration={250}
            fillMode="forwards"
            onAnimationEnd={() => {
                if (shouldUnmount) dispatch({ type: ActionType.SetSplashScreenDone, value: true });
            }}
        >
            <Helmet bodyAttributes={{ class: 'fixed' }} />
            <div className={classes.LogoWrapper}>
                <Animation
                    className={classes.Backdrop}
                    type="reduceHeight"
                    delay={500}
                    fillMode="forwards"
                    onAnimationEnd={() => {
                        // Wait 500ms and start unmounting the splash screen
                        setTimeout(() => {
                            setShouldUnmount(true);
                        }, 200);
                    }}
                />
                <Logo fontSize="3rem" color="var(--background-color)" />
            </div>
        </Animation>
    );
}
