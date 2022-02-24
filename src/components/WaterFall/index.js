import React, { Component } from 'react'
import withRouter from 'umi/withRouter'
import Loading from '../Loading'
import ReactDOM from 'react-dom'
import AutoResponsive from "autoresponsive-react"
import styles from './index.css'

class WaterFall extends Component {

    state = {
        timer: null,
        containerWidth: document.body.clientWidth > 1024 ? document.body.clientWidth - 42 : document.body.clientWidth - 24,
    }

    componentDidMount() {
        window.addEventListener('load', () => {
            // console.log(ReactDOM.findDOMNode(this.refs.container).clientWidth, document.body.clientWidth)
            if(document.body.clientWidth > 1024){
                self.setState({
                    ...this.state,
                    containerWidth: document.body.clientWidth - 42
                });
            }
            else if(document.body.clientWidth <= 1024){
                self.setState({
                    ...this.state,
                    containerWidth: document.body.clientWidth - 24
                });
            }
            // this.setState({
            //     ...this.state,
            //     containerWidth: (ReactDOM.findDOMNode(this.refs.container) && ReactDOM.findDOMNode(this.refs.container).clientWidth || document.body.clientWidth - 44)
            // });

        }, false);

        // 防抖 改变窗口的大小
        let self = this;
        window.addEventListener('resize', function () {
            if (self.state.timer) {
                clearTimeout(self.state.timer);
                self.setState({
                    ...this.state,
                    timer: null
                })
            }
            self.setState({
                timer: setTimeout(function () {
                    // console.log(document.body.clientWidth);
                    if(document.body.clientWidth > 1024){
                        self.setState({
                            ...this.state,
                            containerWidth: document.body.clientWidth - 42
                        });
                    }
                    else if(document.body.clientWidth <= 1024){
                        self.setState({
                            ...this.state,
                            containerWidth: document.body.clientWidth - 24
                        });
                    }
                }, 200)
            })
        })
    }

    componentWillUnmount(){
        window.removeEventListener('load', null);
        window.removeEventListener('resize', null);
    }

    handleChange = (newPage) => {
        console.log(33);
        this.setState({
            current: newPage
        })
    }

    handleClick = (item) => {
        // console.log(item);
        this.props.history.push(`/details/${item.s_no}`);
    }

    getAutoResponsiveProps = () => {
        return {
            itemMargin: 0,
            containerWidth: this.state.containerWidth,
            itemClassName: 'item',
            gridWidth: 1,
            transitionDuration: '0.5'
        };
    }

    render() {
        let list = this.props.list;
        // console.log(list)
        // console.log(this.props.isLoading);

        if (this.props.isLoading) {
            return (
                <div className={styles.loading}>
                    <Loading border="4px solid rgb(56, 54, 53)" borderBottom="4px solid rgb(137, 137, 137)" show={this.props.isLoading} />
                </div>
            )
        }
        else {
            return (
                <div className={styles.waterFall}>
                    <AutoResponsive ref="container" {...this.getAutoResponsiveProps()}>
                        {
                            list && list.map(item => {
                                let style = {};
                                if (this.state.containerWidth <= 768) {
                                    style = {
                                        width: this.state.containerWidth,
                                        height: item.poster_size[1] * (this.state.containerWidth / item.poster_size[0]) || 100
                                    }
                                }
                                else {
                                    if (item.size === 'small') {
                                        style = {
                                            width: Math.round((this.state.containerWidth + 2) / 4) - 1,
                                            height: item.poster_size[1] / 4 * (this.state.containerWidth / item.poster_size[0]) || 100
                                        }
                                    }
                                    else if (item.size === 'middle') {
                                        style = {
                                            width: Math.ceil((this.state.containerWidth + 1) / 2) - 2,
                                            height: item.poster_size[1] / 2 * (this.state.containerWidth / item.poster_size[0]) || 100
                                        }
                                    }
                                    else if (item.size === 'venti') {
                                        style = {
                                            width: this.state.containerWidth - 3,
                                            height: item.poster_size[1] * (this.state.containerWidth / item.poster_size[0]) || 100
                                        }
                                    }
                                }

                                return (
                                    <div key={item.id} style={style} className={styles.item} onClick={() => { this.handleClick(item) }} >
                                        <div className={styles.wrapper}>
                                        <span className={styles.title}>
                                            {item.title}
                                        </span>
                                        <span className={styles.tag}>
                                            {item.tag}
                                        </span>
                                            <img className={styles.poster} src={item.poster.url} alt={item.title} />
                                            {/* <img className={styles.poster} src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587385591540&di=178c828fad84bae9ad618f8d45fbd7e0&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201111%2F21%2F205700txzuacubbcy91u99.jpg" alt={item.title} /> */}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </AutoResponsive>
                </div>
            )
        }

    }
}

export default withRouter(WaterFall);



// const tagList = [["新闻 News", "新闻"], ["报道 Press", "报道"], ["家具 Furniture", "家具"], ["家居 Household", "家居"], ["灯具 Lighting", "灯具"], ["室内 Interior Design", "室内"], ["定制 Custom", "定制"]];