import React from 'react';
import marked from 'marked';

export default class MarkdownElement extends React.Component {
  constructor(props) {
    super(props);

    marked.setOptions({
      gfm: true,
      tables: true,
      breaks: true,
      pedantic: true,
      sanitize: true,
      smartLists: true,
      smartypants: true
    });
  }
  render() {
    const { text, cssClass } = this.props,
      html = marked(text || '');

    return (<div className = {cssClass}>
      <div dangerouslySetInnerHTML={{__html: html}} />
    </div>);
  }
}

MarkdownElement.propTypes = {
  text: React.PropTypes.string.isRequired,
  cssClass: React.PropTypes.string
};

MarkdownElement.defaultProps = {
  text: ''
};