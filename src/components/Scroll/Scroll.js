import React, {Component} from "react";
import BScroll from 'better-scroll';

import './Scroll.scss';

export default class Scroll extends Component {
  constructor(props) {
    super(props);
    this.scrollRef = React.createRef();
  }

  componentDidMount() {
    let {refreshDelay, onRef} = this.props;
    onRef && onRef(this);
    setTimeout(() => {
      this._initScroll();
    }, refreshDelay || 20)
  }

  _initScroll = () => {
    if (!this.scrollRef) {
      return
    }
    let {probeType, click, listenScroll, pullUp, pushDown, beforeScroll} = this.props;
    probeType = probeType || 1;
    click = click || true;
    this.scroll = new BScroll(this.scrollRef.current, {
      probeType,
      click
    });

    if (listenScroll) {
      this.scroll.on('scroll', pos => {
        typeof listenScroll === 'function' && listenScroll(pos);
      })
    }
    if (pullUp) {
      this.scroll.on('scrollEnd', () => {
        if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
          typeof pullUp === 'function' && pullUp();
        }
      })
    }
    if (pushDown) {
      this.scroll.on('scrollEnd', () => {
        if (this.scroll.y === 0) {
          typeof pushDown === 'function' && pushDown();
        }
      })
    }
    if (beforeScroll) {
      this.scroll.on('beforeScrollStart', () => {
        typeof beforeScroll === 'function' && beforeScroll();
      })
    }
  }

  enable = () => {
    this.scroll && this.scroll.enable()
  }

  disable = () => {
    this.scroll && this.scroll.disable()
  }

  refresh = () => {
    this.scroll && this.scroll.refresh()
  }

  scrollTo = (args) => {
    this.scroll && this.scroll.scrollTo.apply(this.scroll, args)
  }

  scrollToElement = (args) => {
    this.scroll && this.scroll.scrollToElement.apply(this.scroll, args)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let {prevData} = prevProps;
    let {data, refreshDelay} = this.props;
    data = data || [];
    prevData = prevData || [];
    if (data.length !== prevData.length) {
      setTimeout(() => {
        this.refresh()
      }, refreshDelay || 20)
    }
  }

  componentWillUnmount() {
    this.scroll && this.scroll.destroy();
  }

  render() {
    const {children} = this.props;
    return <div className='scroll' ref={this.scrollRef}>{children}</div>
  }
}
