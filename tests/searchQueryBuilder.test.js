import SearchQueryBuilder from "../js/searchQueryBuilder";
import {assert, expect} from 'chai'

describe('search query builder',(done)=>{
  it('build query with no search paramentr ',(done)=>{
    let builder  = new SearchQueryBuilder()
    assert.equal( builder.getResult(), 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDViBM98KZSlgZpqpiEoPyz7FVQJ5VFPJk&type=video&part=snippet&maxResults=15')
    done()
  })

  it('build query with search paramentr',(done)=>{
    let builder  = new SearchQueryBuilder()
    assert.equal( builder.setSearch('js').getResult(), 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDViBM98KZSlgZpqpiEoPyz7FVQJ5VFPJk&type=video&part=snippet&maxResults=15&q=js')
    done()
  })

  it('can chain methods',(done)=>{
    let builder  = new SearchQueryBuilder()
    expect( builder.setDomain().setKey('key').setParams().setOtherStuff().setSearch('js').getResult.bind(builder)).not.to.throw(TypeError)
    done()
  })
})
