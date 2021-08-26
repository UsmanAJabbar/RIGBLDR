import React from 'react';

import './section.css';

/*
 * Section - Returns a <section> tag with the container appended
 * @props:
 *   @sectionID (String): custom sectionID
 *   @sectionCLasses (Array): custom classes to append to the section tag
 *   @containerId (String): custom ID to apply to the div.Container
 *   @containerClasses: (Array): custom classes to append to the container div
 *   @overrides (Obj): contains an obj with the key `section` and `container` with CSS to override
 */
class Section extends React.Component {
  render () {
    const {
      sectionId = '',
      sectionClasses = [],
      containerId = '',
      containerClasses = [],
      overrides = {},
      children
    } = this.props;

    return (
      <section className={'section' + sectionClasses.join(' ')} id={sectionId} style={overrides.section}>
        <div className={'container' + containerClasses.join(' ')} id={containerId} style={overrides.container}>
          { children }
        </div>
      </section>
    )
  }

}

export default Section;
