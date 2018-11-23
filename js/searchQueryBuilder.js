// import constants from "./constants";
import _ from 'lodash'
class searchQueryBuilder {
  constructor(){
    this.queryString = '';
    this
    .setDomain( onstants.YOUTUBE_API)
    .setParams()
    .setKey(constants.API_KEY)
    .setOtherStuff()
  }

  setDomain(domain){
    this.queryString += domain
    return this
  }

  setKey(key){
    this.queryString += `key=${key}`
    return this
  }

  setParams(){
    this.queryString += `?`
    return this
  }
  
  setOtherStuff(){
    this.queryString += '&type=video&part=snippet&maxResults=15'
    return this
  }

  setQuery( query){
    this.queryString += `&q=${query}`
    return this
  }

  getResult(){
    return this.queryString
  }
}
export default searchQueryBuilder