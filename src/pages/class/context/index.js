import React, { Component } from 'react'
import SearchContext from './searchContext'
import Search from './search'
// import Lists from './lists'
import { getLists } from '@/services/search'
import Consumer from './consumer'
import LazyLoad from '@/components/LazyLoad'
export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      lists: [],
    }
  }

  handleDispatch = async action => {
    switch (action.type) {
      case 'TEXT':
        return this.setState({
          text: action.payload,
        })
        break
      case 'LISTS':
        const res = await getLists(action.payload)
        return this.setState({
          lists: res.lists,
        })
        break
      default:
        break
    }
  }

  render() {
    // const houses = {
    //   info: {},
    // }
    return (
      <div>
        {/* {houses.info2.id} */}
        {/* {houses?.info2?.id} */}
        {/* 这个技术可以代替ErrorBoundary */}
        {/* 可选链技术 ,vscode可以安装个插件JavaScript and TypeScript Nightly，同时需要本机安装typescript3.7以上的版本*/}
        {/* 安装他们是为了避免vscode编译时报错 */}
        <SearchContext.Provider
          value={{
            state: this.state,
            dispatch: this.handleDispatch,
          }}>
          <Search />
          {/* <Lists /> */}
          <LazyLoad component={import('./lists')} />
          <Consumer />
        </SearchContext.Provider>
      </div>
    )
  }
}
