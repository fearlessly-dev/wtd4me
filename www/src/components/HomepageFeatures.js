import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'I am ..',
    Svg: require('../../static/svg/landing-resume-light.svg').default,
    description: (
      <>
        Docs = Past skills, experience grouped into categories. Think Resume.
      </>
    ),
  },
  {
    title: 'I\'m Working On ..',
    Svg: require('../../static/svg/landing-timeline.svg').default,
    description: (
      <>
        Blog = Present activities as doing, leading, learning. Think Timeline.
      </>
    ),
  },
  {
    title: 'I\'m Proud Of ..',
    Svg: require('../../static/svg/landing-milestones.svg').default,
    description: (
      <>
        Pages = Dedicated topics with activity (volume) or achievement (milestone)
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
