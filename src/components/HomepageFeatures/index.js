import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Paved road approach',
    Svg: require('@site/static/img/paved_road.svg').default,
    description: (
      <>
       Our DevSecOps journey follows a paved road approach. The book can help you 
       and your team on implementing devops practices. Using the playbook is not a 
       requirement, but the book gives you the principles that we believe you should follow
       in order to build secure, quality sofware as effectively as possible in your context.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Events',
    Svg: require('@site/static/img/calendar.svg').default,
    description: (
      <>
        Want to learn more about DevSecOps? Or maybe you have an idea for 
        an event? Our goal is to have an active Community of Practice where 
        we share and learn from each other. See our <a href="#">events</a>.
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
