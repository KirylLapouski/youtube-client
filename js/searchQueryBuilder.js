import constants from './constants';

class SearchQueryBuilder {
  constructor() {
    this.queryString = '';
    this.setDomain(constants.YOUTUBE_API)
      .setParams()
      .setKey(constants.API_KEY)
      .setOtherStuff();
  }

  setDomain(domain) {
    this.queryString += domain;
    return this;
  }

  setKey(key) {
    this.queryString += `key=${key}`;
    return this;
  }

  setParams() {
    this.queryString += '?';
    return this;
  }

  setOtherStuff() {
    this.queryString += '&type=video&part=snippet&maxResults=15';
    return this;
  }

  setSearch(query) {
    this.queryString += `&q=${query}`;
    return this;
  }

  getResult() {
    return this.queryString;
  }
}
