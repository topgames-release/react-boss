import React, {Component} from "react";

import './Filter.scss';

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectors: [],
      showMore: false
    }
  }

  componentDidMount() {
    const {defaultValue, items} = this.props;
    if (defaultValue && items) {
      const selectors = defaultValue.filter(selector => items.includes(selector));
      this.setState({
        selectors
      })
    }
  }

  clickLabel = (item) => {
    let {selectors} = this.state;
    const {type, singleSelector, selectLabels} = this.props;
    if (item !== '不限') {
      if (selectors.includes(item)) {
        selectors = selectors.filter(selector => selector !== item);
      } else {
        singleSelector ? selectors = [item] : selectors.push(item);
      }
      selectLabels && selectLabels(type, selectors);
      this.setState({
        selectors
      })
    }
  }

  renderLabelStyle = (item) => {
    const {selectors} = this.state;
    if (selectors && selectors.length === 0 && item === '不限') return 'active';
    if (selectors && selectors.includes(item)) return 'active';
    return '';
  }

  toggleMoreLabels = () => {
    const {showMore} = this.state;
    this.setState({
      showMore: !showMore,
    });
  }

  render() {
    const {title, singleSelector, items} = this.props;
    const {selectors, showMore} = this.state;
    return (<div className='filter'>
      <div className='filter-header'>
        <div className='left-container'>
          <div className='title'>{title}</div>
          {singleSelector && <div className='single-selector'>(单选)</div>}
        </div>
        <div className='right-container'>
          {selectors && selectors.length > 0 && <span className='nums'>{selectors.length}</span>}
          {items && items.length > 9 && <span className='action' onClick={this.toggleMoreLabels}>{showMore ? <i className="icon-thumb_up" /> : <i className="icon-thumb_down" /> }</span>}
        </div>
      </div>
      <div className='filter-labels'>
        {items && items.slice(0, 9).map(item => {
          const labelStyles = this.renderLabelStyle(item);
          return (
            <span
              className={labelStyles}
              onClick={() => this.clickLabel(item)}>
              {item}
            </span>
          )
        })}
        {showMore && items && items.slice(9, items.length).map(item => {
          const labelStyles = this.renderLabelStyle(item);
          return (
            <span
              className={labelStyles}
              onClick={() => this.clickLabel(item)}>
              {item}
            </span>
          )
        })}
      </div>
    </div>)
  }
}
