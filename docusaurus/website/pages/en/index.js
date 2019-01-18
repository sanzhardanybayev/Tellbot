/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')

const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock

const siteConfig = require(`${process.cwd()}/siteConfig.js`)


function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`
}


class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper" >
        <a className="button" href={this.props.href} target={this.props.target} >
          {this.props.children}
        </a >
      </div >
    )
  }
}

Button.defaultProps = {
  target: '_self'
}

const SplashContainer = props => (
  <div className="homeContainer" >
    <div className="homeSplashFade" >
      <div className="wrapper homeWrapper" >{props.children}</div >
    </div >
  </div >
)

const ProjectTitle = () => (
  <React.Fragment >
    <h2 style={{ fontSize: '5em', margin: 0, padding: 0 }} >
      <img id="robot" src={"https://image.flaticon.com/icons/svg/1129/1129398.svg"} style={{width: '150px'}}/>
    </h2 >
    <h2 className="projectTitle" >
      {siteConfig.title}
    </h2 >
    <p style={{fontSize: '1.5em'}}>{siteConfig.tagline}</p>
  </React.Fragment >
)

const PromoSection = props => (
  <div className="section promoSection" >
    <div className="promoRow" >
      <div className="pluginRowBlock" >{props.children}</div >
    </div >
  </div >
)

class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || ''
    return (
      <SplashContainer >
        <div className="inner" >
          <ProjectTitle />
          <PromoSection >
            <Button href={docUrl('doc1.html', language)} >Documentation </Button >
          </PromoSection >
        </div >
      </SplashContainer >
    )
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background} >
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container >
)

class Index extends React.Component {
  render() {
    const language = this.props.language || ''

    return (
      <div >
        <HomeSplash language={language} />
      </div >
    )
  }
}

module.exports = Index
