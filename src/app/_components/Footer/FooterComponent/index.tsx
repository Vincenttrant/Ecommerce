'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Footer, Media } from '../../../../payload/payload-types'
import { noHeaderFooterUrls } from '../../../constants'
import { Button } from '../../Button'
import { Gutter } from '../../Gutter'
import { CMSLink } from '../../Link'

import classes from './index.module.scss'

const FooterComponent = ({ footer }: { footer: Footer }) => {
  let pathname = usePathname()

  const navItems = footer?.navItems || []
  const navItems2 = footer?.navItems2 || []

  return (
    // Hides footer on pages that don't need it (noHeaderFooterUrls)
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>
      <div className={classes.footer}>
        <Gutter>
          <div className={classes.wrap}>
            <div className={classes.footerLinks}>
              <Link href="/">
                <Image
                  src="/logo-black.png"
                  alt="logo"
                  width={100}
                  height={40}
                  className={classes.logo}
                />
              </Link>
              <div className={classes.links}>
                <ul>
                  {navItems.map(({ link }, i) => {
                    return (
                      <li className={classes.link}>
                        <CMSLink key={i} {...link} appearance="none" />
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div className={classes.socialLinks}>
              {navItems2.map(socialItem => {
                const icon = socialItem?.link?.icon as Media

                return (
                  <Button
                    key={socialItem.link.label}
                    el="link"
                    href={socialItem.link.url}
                    newTab={true}
                    className={classes.socialLink}
                  >
                    <Image
                      src={icon?.url}
                      alt={socialItem.link.label}
                      width={24}
                      height={24}
                      className={classes.socialIcon}
                    />
                  </Button>
                )
              })}
            </div>
          </div>
        </Gutter>
      </div>
    </footer>
  )
}

export default FooterComponent
