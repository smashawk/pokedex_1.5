import React from 'react';
import IndexPage from "./indexComponent";
import SearchPokemon from "./SearchPokemonComponent";
import TypeSearch from './typeSearchComponent';
// import SearchPartner from './SearchPartner';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

const AppComponent = (props) => {
    
  console.log('render')

      return(
        <BrowserRouter>
          <div className="App">
            <header>
              <nav>
                <Link to="/">TOP</Link>/
                <Link to="/search">図鑑ナンバー検索</Link>/
                <Link to="/typesearch">タイプ検索</Link>
              </nav>
            </header>
            <main>
              
            <h1>ポケモン図鑑</h1>
            <hr />
            <Switch>
              <Route exact path="/" component={IndexPage} />
              <Route path="/search"
                render={
                  () => <SearchPokemon
                    decidePokemon={props.decidePokemon}
                    number={props.number}
                    errorText={props.errorText}
                  />
                }
              />
              <Route path="/typesearch"
                render={
                  () => <TypeSearch
                    decideType={props.decideType}
                    subTypeArray={props.subTypeArray}
                  />
                }
              />
            </Switch>

              {/* <SearchType 
                decideType={e => this.decideType(e)}
                resetType={e => this.resetType(e)}
                normalArray={this.state.normalArray}
                typeArray={this.state.typeArray}
                detailData={this.state.detailData}
              /> */}

              {/* <SearchPartner 
                decidePartner={e => this.decidePartner(e)}
                normalArray={this.state.normalArray}
                resultNo={this.state.resultNo}
              /> */}

            </main>

          </div>
        </BrowserRouter>
      )
}



export default AppComponent;
